let admin_db_model=require('../admin_db/admin_db.js');
let car_mangement_model=require('../admin_db/admin_carmangement.js');
let axios=require('axios');
let addon_mangement_model=require('../admin_db/admin_addonmanagment.js');
let plan_mangement_model=require('../admin_db/admin_planmanagemet.js');


error_handeler=(err)=>{
    let error={};
    if(err.message.includes('carmanagement validation failed'))
    {
        Object.values(err.errors).forEach(({properties})=>{
            error[properties.path] = properties.message;  
        })
    };
    if(err.message.includes('addonmanagement validation failed'))
    {
        Object.values(err.errors).forEach(({properties})=>{
            error[properties.path] = properties.message;  
        })
    };

    if(err.message.includes('planmanagement validation failed'))
    {
        Object.values(err.errors).forEach(({properties})=>{
            error[properties.path] = properties.message;  
        })
    };

    return error;
}


module.exports.get_admin=async (req,res)=>{
    let data=await admin_db_model.find({});
    res.send(data);
};


module.exports.post_admin=(req,res)=>{
    res.send('in admin post');
};

module.exports.post_carmangement=async(req,res)=>{
    try{
        console.log(req.body);
        let data=await car_mangement_model.create(req.body);
        res.status(200).send(data);
    }
    catch(err)
    {
        console.log(err);
        let error=error_handeler(err);
        res.status(400).send(error);
    }
}

module.exports.get_carmangement=async(req,res)=>{
   let data=await car_mangement_model.find();
   res.send(data);
}

module.exports.delete_carmangement=async(req,res)=>{
    let data=await car_mangement_model.findByIdAndRemove(req.params.id);
    res.send(data);
}

module.exports.put_carmangement=async(req,res)=>{
    console.log(req.body);
    let data=await car_mangement_model.findOneAndUpdate({_id:req.body.id},{
        carname:req.body.carname,
        carmodel:req.body.carmodel,
        status:req.body.status,
        position:req.body.position
    },{new:true});
    res.send(data);
}

module.exports.get_addonmangement=async (req,res)=>{
    let data=await addon_mangement_model.find();
    res.send(data);
}

module.exports.post_addonmangement=async (req,res)=>{
    try{
        console.log(req.body);
        let data=await addon_mangement_model.create(req.body);
        res.status(200).send(data);
    }
    catch(err)
    {
        console.log(err);
        let error=error_handeler(err);
        res.status(400).send(error);
    }
}

module.exports.delete_addonmangement=async (req,res)=>{
    let data=await addon_mangement_model.findByIdAndRemove(req.params.id);
    res.send(data);
}

module.exports.put_addonmangement=async (req,res)=>{
    console.log(req.body);
    let data=await addon_mangement_model.findOneAndUpdate({_id:req.body.id},{
        name:req.body.name,
        cost:req.body.cost,
        status:req.body.status,
        position:req.body.position
    },{new:true});
    res.send(data);
}

module.exports.get_planmangement=async (req,res)=>{
    let data=await plan_mangement_model.find();
    res.send(data);
}

module.exports.post_planmangement=async (req,res)=>{
    try{
        console.log(req.body);
        let data=await plan_mangement_model.create(req.body);
        res.status(200).send(data);
    }
    catch(err)
    {
        console.log(err);
        let error=error_handeler(err);
        res.status(400).send(error);
    }
}

module.exports.delete_planmangement=async (req,res)=>{
    let data=await plan_mangement_model.findByIdAndRemove(req.params.id);
    res.send(data);
}

module.exports.put_planmangement=async (req,res)=>{
    console.log(req.body);
    let data=await plan_mangement_model.findOneAndUpdate({_id:req.body.id},{
        name:req.body.name,
        cost:req.body.cost,
        status:req.body.status,
        position:req.body.position
    },{new:true});
    res.send(data);
}

module.exports.get_planmangement_active=async (req,res)=>{
    let data=await plan_mangement_model.find({status:'active'});
    res.send(data);
}

module.exports.get_addonmangement_active=async (req,res)=>{
    let data=await addon_mangement_model.find({status:'active'});
    res.send(data);
}

module.exports.get_planmangement_id=async (req,res)=>{
    let data=await plan_mangement_model.find({_id:req.params.id});
    res.send(data);
}

module.exports.get_addonmangement_id=async (req,res)=>{
    let data=await addon_mangement_model.find({_id:req.params.id});
    res.send(data);
}
module.exports.get_carmangement_active=async(req,res)=>{
    let data=await car_mangement_model.find({status:'active'});
    res.send(data);
}

module.exports.get_carmangement_id=async(req,res)=>{
    let data=await car_mangement_model.find({_id:req.params.id});
    res.send(data);
}