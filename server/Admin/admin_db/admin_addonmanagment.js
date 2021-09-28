let mongoose=require('mongoose');
let schema=mongoose.Schema;
let addon_mangement_schema=schema({
    position:{
        type:Number,
        default:0
    },
    name:{
        type:String,
        required:[true,'service name is required']
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

let addon_mangement_model=mongoose.model('addonmanagement',addon_mangement_schema);

module.exports=addon_mangement_model;
