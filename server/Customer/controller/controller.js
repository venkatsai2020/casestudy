let customer_schema_model=require('../db_cust/customer_db.js');
let axios=require('axios');


error_handling=(err)=>{
    error={ 
        address:"",
        city:"",
        zipcode:"",
        country:"",
        carmodel:"",
        carname:"",
        name:"",
        mobile:""
    };
    if(err.message.includes('customer validation failed')){
        Object.values(err.errors).forEach(({properties})=>{
            console.log(properties);
            if(properties.path=="addresses.address")
            error.address=properties.message;
            else if(properties.path=="addresses.city")
             error.city=properties.message;
            else if(properties.path=="addresses.country")
            error.country=properties.message;
            else if(properties.path=="car.carModel")
            error.carmodel=properties.message;
            else if(properties.path=="car.carName")
            error.carname=properties.message;
            else if(properties.path=="addresses.zipcode")
            error.zipcode=properties.message;
            else
            error[properties.path] = properties.message;
    });
        }

    return error;
}

module.exports.get_customers=async (req,res)=>{
    let data=await customer_schema_model.find({});
    res.send(data);
};

module.exports.post_customer=async (req,res)=>{
    console.log(req.body);
    try{
    let data=await customer_schema_model.create(req.body);
    res.status(200).send(data);
    }
    catch(err)
    {
        let error=error_handling(err);
        console.log(error);
        res.status(400).send(error);
    }
};

module.exports.get_customer_id= async (req,res)=>{
    console.log(req.params.id);
    let data=await customer_schema_model.find({login_ref_id:req.params.id});
    //let data=await customer_schema_model.find({_id:req.params.id});
    console.log('----------------');
    console.log(data);
    res.send(data);
};

module.exports.put_login_id=async (req,res)=>{
    console.log(req.params.id);
}


//module.exports.delete_customer=

//module.exports.put_customer=
