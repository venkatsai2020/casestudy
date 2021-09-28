let mongoose=require('mongoose');
let {isEmail}=require('validator');
let bcrypt=require('bcrypt');
let schema=mongoose.Schema;
let login_signup_worker_schema=schema({
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
login_signup_worker_schema.pre('save',async function(next){
    let salt=await bcrypt.genSalt(); //creating the salt...
    this.password= await bcrypt.hash(this.password,salt);//creating the hashed password....
    next();
});

//method to login user
login_signup_worker_schema.statics.login=async function(email,password)
{
    let user=await this.findOne({email:email});
    console.log(user);
    if(user)
    {
       let auth=await bcrypt.compare(password,user.password);
       if(auth){
           console.log(auth);
           return user;
       }
       throw Error('incorrect password');
    }
    throw Error('incorrect email');

}

let login_signup_worker_model=mongoose.model('login_signup_worker',login_signup_worker_schema);
module.exports=login_signup_worker_model;