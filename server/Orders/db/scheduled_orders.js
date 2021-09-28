let mongoose=require('mongoose');

let schema=mongoose.Schema;

let scheduledorder_schema=schema({
    paymentid:{
        type:String,
        default:''
    },
    paymentstatus:{
        type:String,
        default:'not paid'
    },
    custname:{
        type:String
    },
    custmobile:{
        type:Number
    },
    cost:{
        type:Number
    },
    custaddress:{
        type:String
    },
    custcarname:{
        type:String
    },
    position:{
        type:Number,
        default:0,
    },
    status:{
        type:String,
        default:"Not Accepted"
    },
    package:{
        type: String,
        required:[true,'package is required']
    },
    addons:{
        type: String,
        required:[true,'addons is required']
    },
    date:{
        type:Date,
        required:[true,'data is required']
    },
    washer:{
        type:String,
        required:[true,'washer is required']
    },
    instruction:{
        type:String
    },
    schedule:{
        type:String,
        required:true
    },
    washer_ref_id:{
        type:String,
    },
    log_ref_id:{
        type:String,
    }
});

let scheduledorder_model=mongoose.model('scheduledorders',scheduledorder_schema);

module.exports=scheduledorder_model;