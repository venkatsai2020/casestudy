let order_model=require('../db/order_module.js');
let accceped_order_module=require('../db/accepted_orders.js');
let completed_order_model=require('../db/completed_order.js');
let inprocess_order_model=require('../db/processes_order.js');
let scheduledorder_model=require('../db/scheduled_orders.js');
let cancled_order_model=require('../db/cancled_orders.js');
let paid_order_model=require('../db/paid_orders');
let axios=require('axios');
let mongoose=require('mongoose');


    error_handling=(err)=>{
        error={ 
        };
        if(err.message.includes('order validation failed'))
    {
        Object.values(err.errors).forEach(({properties})=>{
            error[properties.path] = properties.message;  
        })
    };

    if(err.message.includes('scheduledorders validation failed'))
    {
        Object.values(err.errors).forEach(({properties})=>{
            error[properties.path] = properties.message;  
        })
    };

    return error;
    }


module.exports.get_orders= async function(req,res){
    let data=await order_model.find({log_ref_id:req.params.id});
    console.log(data);
    res.send(data);
};

module.exports.post_order= async function(req,res){
    console.log(req.body);
    try{
    let data=await order_model.create(req.body);
    console.log(data);
    res.status(200).send(data);
    }
    catch(err){
        let error=error_handling(err);
        res.status(400).send(error);
    }
};

module.exports.post_restore_order=async function(req,res){
    let data_1={
      //  car:req.body.car,
        //phone:req.body.phone,
        package:req.body.package,
        addons:req.body.addons,
        date:req.body.date,
        washer:req.body.washer,
        instruction:req.body.instruction,
        schedule:req.body.schedule,
        position:req.body.position,
        log_ref_id:req.body.log_ref_id,
        washer_ref_id:req.body.washer_ref_id,
        status:"Not accepted",
        custmobile:req.body.custmobile,
        cost:req.body.cost,
        custaddress:req.body.custaddress,
        custcarname:req.body.custcarname,
        custname:req.body.custname
    };
    let data=await order_model.create(data_1);
    console.log(data_1);
    res.send(data_1);
}


module.exports.delete_order=async (req,res)=>{
    let data=await order_model.findOneAndRemove({_id :req.params.id});
    res.send(data);
};

module.exports.post_accepted_order=async (req,res)=>{
    let data_1={
       // car:req.body.car,
        //phone:req.body.phone,
        position:req.body.position,
        status:"Accepted",
        package:req.body.package,
        addons:req.body.addons,
        date:req.body.date,
        washer:req.body.washer,
        instruction:req.body.instruction,
        schedule:req.body.schedule,
        log_ref_id:req.body.log_ref_id,
        washer_ref_id:req.body.washer_ref_id,
        order_ref_id:req.body._id,
        custmobile:req.body.custmobile,
        cost:req.body.cost,
        custaddress:req.body.custaddress,
        custcarname:req.body.custcarname,
        custname:req.body.custname
    }
    let data=await accceped_order_module.create(data_1);
    console.log(data);
    res.send(data);
};

module.exports.get_accepted_order=async (req,res)=>{
    let data=await accceped_order_module.find({log_ref_id: req.params.id});
    if(data)
    res.status(200).send(data);
    else
    res.send(404).send(data);
};

module.exports.delete_accepted_order=async (req,res)=>{
    let data=await accceped_order_module.findOneAndRemove({_id:req.params.id});
    console.log(data);
    res.send(data);
};

module.exports.get_inprocess_orders=async (req,res)=>{
    let data=await inprocess_order_model.find({log_ref_id :req.params.id});
    res.send(data);
};

module.exports.post_inprocess_orders=async (req,res)=>{
    let data_1={
      //  car:req.body.car,
        //phone:req.body.phone,
        package:req.body.package,
        addons:req.body.addons,
        date:req.body.date,
        washer:req.body.washer,
        instruction:req.body.instruction,
        schedule:req.body.schedule,
        position:req.body.position,
        status:"In-process",
        log_ref_id:req.body.log_ref_id,
        washer_ref_id:req.body.washer_ref_id,
        order_ref_id:req.body.order_ref_id,
        accepted_order_ref_id:req.body._id,
        custmobile:req.body.custmobile,
        cost:req.body.cost,
        custaddress:req.body.custaddress,
        custcarname:req.body.custcarname,
        custname:req.body.custname
    }
    let data=await inprocess_order_model.create(data_1);
    console.log(data);
    res.send(data);
};

module.exports.delete_inprocess_orders=async (req,res)=>{
    let data=await inprocess_order_model.findOneAndRemove({_id:req.params.id});
    res.send(data);
};

module.exports.get_completed_orders=async (req,res)=>{
    let data=await completed_order_model.find({log_ref_id :req.params.id});
    res.send(data);
};

module.exports.post_completed_orders=async (req,res)=>{
    let data_1={
       // car:req.body.car,
        //phone:req.body.phone,
        position:req.body.position,
        status:"completed",
        package:req.body.package,
        addons:req.body.addons,
        date:req.body.date,
        washer:req.body.washer,
        instruction:req.body.instruction,
        schedule:req.body.schedule,
        order_ref_id:req.body.order_ref_id,
        accepted_order_ref_id:req.body.accepted_order_ref_id,
        log_ref_id:req.body.log_ref_id,
        washer_ref_id:req.body.washer_ref_id,
        process_ref_id:req.body._id,
        custmobile:req.body.custmobile,
        cost:req.body.cost,
        custaddress:req.body.custaddress,
        custcarname:req.body.custcarname,
        custname:req.body.custname,
    }
    let data=await completed_order_model.create(data_1);
    console.log(data);
    res.send(data);
};

module.exports.get_scheduled_orders=async (req,res)=>{
    let data=await scheduledorder_model.find({log_ref_id: req.params.id});
    res.send(data);
};

module.exports.post_scheduled_orders=async (req,res)=>{
    console.log(req.body);
    try{
    let data=await scheduledorder_model.create(req.body);
    console.log(data);
    res.status(200).send(data);
    }
    catch(err){
        console.log(err);
        let error=error_handling(err);
        res.status(400).send(error);
    }
};

module.exports.delete_scheduled_orders=async (req,res)=>{
    let data=await scheduledorder_model.findOneAndRemove({_id:req.params.id});
    res.send(data);
};

module.exports.get_cancled_orders=async (req,res)=>{
    let data=await cancled_order_model.find({log_ref_id: req.params.id});
    res.send(data);
};

module.exports.post_cancled_orders=async (req,res)=>{
    let data_1={
        //car:req.body.car,
        //phone:req.body.phone,
        position:req.body.position,
        status:"Cancled",
        package:req.body.package,
        addons:req.body.addons,
        date:req.body.date,
        washer:req.body.washer,
        instruction:req.body.instruction,
        schedule:req.body.schedule,
        order_ref_id:req.body._id,
        log_ref_id:req.body.log_ref_id,
        washer_ref_id:req.body.washer_ref_id,
        //
        custmobile:req.body.custmobile,
        cost:req.body.cost,
        custaddress:req.body.custaddress,
        custcarname:req.body.custcarname,
        custname:req.body.custname,
    };
    let data=await cancled_order_model.create(data_1);
    console.log(data);
    res.send(data);
};

module.exports.delete_cancled_orders=async (req,res)=>{
    let data=await cancled_order_model.findOneAndRemove({_id:req.params.id});
    res.send(data);
};


module.exports.put_orders=async (req,res)=>{
    let data=await order_model.findByIdAndUpdate({_id:req.body.order_id},{
        custmobile:req.body.custmobile,
        cost:req.body.cost,
        custaddress:req.body.custaddress,
        custcarname:req.body.custcarname,
        custname:req.body.custname,
        position:req.body.position,
        status:req.body.status,
        package:req.body.package,
        addons:req.body.addons,
        date:req.body.data,
        washer:req.body.washer,
        instruction:req.body.instruction,
        schedule:req.body.schedule,
        washer_ref_id:req.body.washer_ref_id,
        log_ref_id:req.body.log_ref_id,
    },{new:true});
    res.send(data);
}

module.exports.put_scheduled_orders=async (req,res)=>{
    let data=await scheduledorder_model.findByIdAndUpdate({_id:req.body.order_id},{
        custmobile:req.body.custmobile,
        cost:req.body.cost,
        custaddress:req.body.custaddress,
        custcarname:req.body.custcarname,
        position:req.body.position,
        status:req.body.status,
        package:req.body.package,
        addons:req.body.addons,
        date:req.body.data,
        washer:req.body.washer,
        instruction:req.body.instruction,
        schedule:req.body.schedule,
        washer_ref_id:req.body.washer_ref_id,
        log_ref_id:req.body.log_ref_id,
        custname:req.body.custname,
    },{new:true});
    res.send(data);
}
module.exports.get_paid_orders=async(req,res)=>{
    let data= await paid_order_model.find({log_ref_id: req.params.id})
    console.log(data);
    res.send(data);
}



module.exports.delete_unpaid_orders=async (req,res)=>{
   let data= await completed_order_model.findByIdAndRemove({_id:req.params.id});
    console.log(data);
    res.send(data);
}

module.exports.post_paid_orders=async (req,res)=>{
    let data=await paid_order_model.create(req.body);
    res.send(data);
}

module.exports.put_updatepayment_id=async (req,res)=>{
    let data=await completed_order_model.findByIdAndUpdate({_id:req.body._id},{
        paymentid:req.body.paymentid,
        paymentstatus:'paid'
    },{
        new:true  });
    console.log(data);
    res.send(data);
}

///////////////////////////////////////////////////////////////////........

module.exports.get_washer_orders=async (req,res)=>{
    console.log(req.params.id);
    let data=await order_model.find({washer_ref_id:req.params.id});
    console.log(data);
    res.send(data);
}

module.exports.get_washer_accepted_order=async (req,res)=>{
    let data=await accceped_order_module.find({washer_ref_id: req.params.id});
    res.send(data);
}

module.exports.get_washer_inprocess_orders=async (req,res)=>{
    console.log('----------------');
    console.log(req.params.id);
    let data=await inprocess_order_model.find({washer_ref_id :req.params.id});
    res.send(data);
}

module.exports.get_washer_completed_orders=async (req,res)=>{
    let data=await completed_order_model.find({washer_ref_id :req.params.id});
    res.send(data);
}

module.exports.get_washer_scheduled_orders=async (req,res)=>{
    let data=await scheduledorder_model.find({washer_ref_id:req.params.id});
    res.send(data);
}

module.exports.get_washer_cancled_orders=async (req,res)=>{
    let data=await cancled_order_model.find({washer_ref_id: req.params.id});
    res.send(data);
}