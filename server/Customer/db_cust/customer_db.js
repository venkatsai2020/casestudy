let mongoose=require('mongoose');
let {isMobilePhone}=require('validator');
let schema=mongoose.Schema;

let customer_schema=schema({
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
    car:{
        carName:{
            type:String,
            required:[true,"Enter a car name"],
            lowercase:true
        },
        carModel:{
            type:String,
            required:[true,"Enter the model of the car"]
        }
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
        type:String
    }
});

customer_schema_model=mongoose.model('customer',customer_schema);

module.exports=customer_schema_model;