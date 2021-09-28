let mongoose=require('mongoose');
let schema=mongoose.Schema;
let inprocess_order_schema=schema({
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
    },
    accepted_order_ref_id:{
        type:String
    }
});

let inprocess_order_model=mongoose.model('inprocessOrders',inprocess_order_schema);

module.exports=inprocess_order_model;