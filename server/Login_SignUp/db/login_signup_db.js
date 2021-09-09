let mongoose=require('mongoose');
let {isEmail}=require('validator');
let bcrypt=require('bcrypt');
let schema=mongoose.Schema;
let login_signup=schema({
    email:{
        type: String,
        required: [true,'Email is required'],
        unique: true,
        lowercase: true,
        validate:[isEmail,"invalid Email"]
    },
    password:{
        type:String,
        required: [true,'password is required'],
        minlength: [6,'minimum length 6 is required']
    }
});
//hashing the password before storing into the data base through hooks...
login_signup.pre('save',async function(next){
    let salt=await bcrypt.genSalt(); //creating the salt...
    this.password= await bcrypt.hash(this.password,salt);//creating the hashed password....
    next();
});

let login_signup_model=mongoose.model('login_signup',login_signup);
module.exports=login_signup_model;