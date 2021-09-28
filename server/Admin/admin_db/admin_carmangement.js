let mongoose=require('mongoose');
let schema=mongoose.Schema;
let car_mangement_schema=schema({
    position:{
        type:Number,
        default:0
    },
    carname:{
        type:String,
        required:[true,'car name is required']
        },
    carmodel:{
        type:String,
        required:[true,'car mode is required']
    },
    status:{
        type:String,
        required:[true,'status is required']
    }
});

let car_mangement_model=mongoose.model('carmanagement',car_mangement_schema);

module.exports=car_mangement_model;
