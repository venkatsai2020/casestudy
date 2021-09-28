let login_signup_coll=require('../db/login_signup_db.js');
let login_signup_admin_model=require('../db/login_signup_admin');
let login_signup_worker_model=require('../db/login_signup_washer');
let mongoose=require('mongoose');
let axios=require('axios');
let jwt=require('jsonwebtoken');
let atob=require('atob');

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
        });};
    if(err.message.includes('login_signup_worker validation failed')){
            Object.values(err.errors).forEach(data=>{
                let property=data.properties;
                error[property.path]=property.message;
         });};

         if(err.message.includes('login_signup_admin validation failed')){
            Object.values(err.errors).forEach(data=>{
                let property=data.properties;
                error[property.path]=property.message;
         });};

    //error for duplicate email.......
    if(err.code===11000){
        error.email="Email already exists";
    }

    if(err.message==="incorrect email"){
        error.email="This email is not registered";
    }

    if(err.message==="incorrect password"){
        error.password="Incorrect password"
    }
    
    return error;
};

//creation jwt token.......
let maxAge=3*24*60*60;
let createtoken=(id)=>{
return jwt.sign({id},'car_wash',{ expiresIn:maxAge}); //create jwt with object type id , with secreate code car_wash ......
}

module.exports.get_signup= async function(req,res){
    let data=await login_signup_coll.find();
    res.send(data);
};

module.exports.post_signup= async function(req,res){
    //creating data-base for Login_signup...
   console.log(req.body);
    try{
    let log_data= await login_signup_coll.create({
        email:req.body.email,
        password:req.body.password
    });
    res.status(200).send(log_data);
    }
    catch(err){
        let error=error_handling(err);
        res.status(400).send(error);
    }
};

module.exports.get_login_customer=async function(req,res){
 //res.render('login'); go to login page in views....
};

module.exports.post_login_customer=async function(req,res){
    let email=req.body.email;
    let password=req.body.password;
    console.log(email);
    console.log(password);
    let cust_id;
    try{
        let data= await login_signup_coll.login(email,password);
        console.log(data._id);
       /* let cust_ref_id=await axios({
            method:'get',
            url:"http://localhost:5000/customer/"+data._id
        })
        console.log('------------');
        cust_ref_id.data.forEach(aa =>{
            cust_id=aa._id;
        });*/
      // console.log(JSON.parse(atob(token.split('.')[1])).id);..... to access id in jwt token
      //console.log(cust_id);
      let token=createtoken(data._id);
    // res.cookie('jwt',token,{http:true, maxAge: maxAge*1000});
    console.log("-------");
    res.status(200).send({token});
    }
    catch(err){
        let error=error_handling(err);
        res.status(400).json(error);
    }

//create the jwt token...
/*let token=createtoken(//given the Id for the validte login);
res.cookie('jwt',token,{http:true, maxAge: maxAge*1000})*/
};

module.exports.get_logout_cust=async function(req,res){

}


module.exports.post_login_admin=async function(req,res){

    let email=req.body.email;
    let password=req.body.password;
    console.log(email);
    console.log(password);
    let cust_id;
    try{
        let data= await login_signup_admin_model.login(email,password);
        console.log(data._id);
      // console.log(JSON.parse(atob(token.split('.')[1])).id);..... to access id in jwt token
      let token=createtoken(data._id);
    console.log("-------");
    res.status(200).send({token});
    }
    catch(err){
        let error=error_handling(err);
        res.status(400).json(error);
    }

}

module.exports.post_login_washer=async function(req,res){
    
    let email=req.body.email;
    let password=req.body.password;
    console.log(email);
    console.log(password);
    let cust_id;
    try{
        let data= await login_signup_worker_model.login(email,password);
        console.log(data._id);
      // console.log(JSON.parse(atob(token.split('.')[1])).id);..... to access id in jwt token
      let token=createtoken(data._id);
    console.log("-------");
    res.status(200).send({token});
    }
    catch(err){
        let error=error_handling(err);
        res.status(400).send(error);
    }
}

module.exports.post_signup_worker= async(req,res)=>{
    try{
        let log_data= await login_signup_worker_model.create({
            email:req.body.email,
            password:req.body.password
        });
        console.log(log_data);
        res.status(200).send(log_data);
        }
        catch(err){
            console.log(err);
            let error=error_handling(err);
            res.status(400).send(error)
        }
}

module.exports.post_signup_admin=async(req,res)=>{
    try{
        let data=await login_signup_admin_model.create(req.body);
        res.status(200).send(data);
    }
    catch(err){
        console.log(err);
        let error=error_handling(err);
        res.status(400).send(error);
    }
}