let mongoose=require('mongoose');
let schema=mongoose.Schema;
let accepted_order_schema=schema({
    paymentid:{
        type:String,
        default:''
    },
    custname:{
        type:String
    },
    custmobile:{
        type:Number
    },
    paymentstatus:{
        type:String,
        default:'not paid'
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
    },
    package:{
        type: String,
    },
    addons:{
        type: String,
    },
    date:{
        type:Date,
    },
    washer:{
        type:String,
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
    },
    order_ref_id:{
        type:String,
    }
});

let accepted_order_model=mongoose.model('acceptedorders',accepted_order_schema);

module.exports=accepted_order_model;