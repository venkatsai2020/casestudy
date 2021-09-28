let mongoose=require('mongoose');
let schema=mongoose.Schema;
let plan_mangement_schema=schema({
    position:{
        type:Number,
        default:0
    },
    name:{
        type:String,
        required:[true,'plan name is required']
        },
    cost:{
        type:Number,
        required:[true,'cost is required']
    },
    status:{
        type:String,
        required:[true,'status is required']
    }
});

let plan_mangement_model=mongoose.model('planmanagement',plan_mangement_schema);

module.exports=plan_mangement_model;
