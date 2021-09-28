let mongooose=require('mongoose');
let schema=mongooose.Schema;
let {isMobilePhone}=require('validator');

let worker_schema=schema({
    name:{
        type:String,
        lowercase:true,
        required:[true,"Please enter a name"]
    },
    mobile:{
        type:String,
        required:[true,"Please enter mobile number"],
        validate:[isMobilePhone,'en-IN',"Enter a valid mobile number"]
    },
    addresses:{
        country:{
            type:String,
            lowercase: true,
            required :[true,"Please enter the country name"]
        },
        city:{
            type:String,
            lowercase: true,
            required :[true,"Please enter the city name"]
        },
        address:{
            type:String,
            lowercase: true,
            required :[true,"Please enter the address"]
        },
        zipcode:{
            type: Number,
            required: [true, "Please enter a zipcode"]
        }
    },
    login_ref_id:{
        type:String,
        required:true,
    }
});

worker_model=mongooose.model('profile',worker_schema);

module.exports=worker_model;