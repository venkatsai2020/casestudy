let worker_model=require('../db/worker_module.js');


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
    if(err.message.includes('profile validation failed')){
        Object.values(err.errors).forEach(({properties})=>{
            console.log(properties);
            if(properties.path=="addresses.address")
            error.address=properties.message;
            else if(properties.path=="addresses.city")
             error.city=properties.message;
            else if(properties.path=="addresses.country")
            error.country=properties.message;
            else if(properties.path=="addresses.zipcode")
            error.zipcode=properties.message;
            else
            error[properties.path] = properties.message;
    });
        }

    return error;
}

module.exports.get_worker_profile= async (req,res) =>{
    let data=await worker_model.find();
    console.log(data);
    if(data)
    {
    res.status(200).send(data);
    }
    else
    {
        res.status(404).send(data);
    }
}

module.exports.post_worker_profile= async (req,res) =>{
    try{
    let data=await worker_model.create(req.body);
    console.log(data);
    res.status(200).send(data);
    }
    catch(err){
        console.log(err);
        let error=error_handling(err);
        res.status(404).send(error);
    }
}

module.exports.put_worker_profile= async (req,res) =>{
    res.send('in worker put request');
}

module.exports.get_worker_id= async (req,res)=>{
    try{
    let data=await worker_model.find({login_ref_id:req.params.id});
    console.log(data);
    if(data)
    res.status(200).send(data);
    else
    res.status(404).send(data);
    }
    catch(err){
        res.status(404).send('error--');
    }
}
