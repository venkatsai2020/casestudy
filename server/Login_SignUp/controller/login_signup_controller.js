let login_signup_coll=require('../db/login_signup_db.js');
let mongoose=require('mongoose');
let axios=require('axios');
let jwt=require('jsonwebtoken');

//error_handlig function......
let error_handling=function(err){
    let error={
        email:"",
        password:""
    };
    //console.log(err.message.,err.code);

    //email validataion......
    if(err.message.includes('login_signup validation failed')){
        Object.values(err.errors).forEach(data=>{
            let property=data.properties;
            error[property.path]=property.message;
        });
    };

    //error for duplicate email.......
    if(err.code===11000){
        error.email="Email already exists";
    }
    return error;
}

//creation jwt token.......
let maxAge=3*24*60*60;
let createtoken=(id)=>{
return jwt.sign({id},'car_wash',{ expiresIn:maxAge}); //create jwt with object type id , with secreate code car_wash ......
}

module.exports.get_signup= async function(req,res){
    //display all the login_signup details
    //res.render('sign'); ...give the login page
};

module.exports.post_signup= async function(req,res){
    //creating data-base for Login_signup...
    try{
    let log_data= await login_signup_coll.create({
        email:req.body.email,
        password:req.body.password
    });
    //creating data-base for customer
   /*let cust_data=await axios({
        method:'post',
        url:'http://localhost:4000/customer',
        data:{
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            ref_id:mongoose.Types.ObjectId(log_data._id)
        }
    });*/
    res.send('registered in data base');
    }
    catch(err){
        let error=error_handling(err);
        res.send(error);
    }
};

module.exports.get_login=async function(req,res){
 //res.render('login'); go to login page in views....
};

module.exports.post_login=async function(req,res){
//validate given passwod and email with login_data base....

//create the jwt token...
/*let token=createtoken(//given the Id for the validte login);
res.cookie('jwt',token,{http:true, maxAge: maxAge*1000})*/
};

module.exports.get_logout=async function(req,res){

}
