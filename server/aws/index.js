const aws=require('aws-sdk');
aws.config.update({
    region:'us-east-2'
});

const dynamodb=new aws.DynamoDB.DocumentClient();
const dynamodbTableName='washer-inventory';
const healthpath='/health';
const washerpath='/washer';

exports.handler=async function(event){
    console.log('Request event: ',event);
    let response;
    switch(true){
        case event.httpMethod === 'GET' && event.path === healthpath:
            response=buildResponse(200);
            break;
        case event.httpMethod === 'GET' && event.path === washerpath:
            response= await getWashers();
            break;
        case event.httpMethod ==='POST' && event.path ===washerpath:
            response=await saveWasher(JSON.parse(event.body));
            break;
        case event.httpMethod ==='DELETE' && event.path ===washerpath:
            response=await deleteWasher(JSON.parse(event.body).washerid);
            break;
        default:
            response=buildResponse(404, '404 not found');
    }
    return response;
}

function buildResponse(statusCode, body){
    return {
        statusCode: statusCode,
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(body)
    }
}

async function getWashers(){
    const params={
        TableName: dynamodbTableName
    }
    const allProducts=await scanDynamoRecods(params,[]);
    const body ={
        washers: allProducts
    }
    return buildResponse(200,body);
}

async function scanDynamoRecods(scanparams, itemArray){
    try{
        const dynamoData=await dynamodb.scan(scanparams).promise();
        itemArray=itemArray.concat(dynamoData.Items);
        if(dynamoData.LastEvaluateKey){
            scanparams.ExclusiveStartkey=dynamoData.LastEvaluateKey;
            return await scanDynamoRecods(scanparams,itemArray);
        }
        return itemArray;
    }catch(error){
        console.log('do your constome error handling',error);
    }
}

async function saveWasher(requestBody){
    const params={
        TableName:dynamodbTableName,
        Item: requestBody
    }
    return await dynamodb.put(params).promise().then(()=>{
        const body={
            Operation:'SAVE',
            Message: 'SUCCESS',
            Item: requestBody
        }
        return buildResponse(200,body);
    },(error)=>{
        console.log('do your constome error handling',error);
    })
}

async function deleteWasher(washer){
    const params={
        TableName:dynamodbTableName,
        Key:{
            'washerid':washerid
        },
        ReturnValues:'ALL_OLD'
    }
    return await dynamodb.delete(params).promise().then((response)=>{
        const body={
            Operation:'DELETE',
            Message:'SUCCESS',
            Item:response
        }
        return buildResponse(200,body)
    },(error)=>{
        console.log('do your constome error handling',error);
    })
}
