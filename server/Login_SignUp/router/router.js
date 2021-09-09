let express=require('express');
let login_signup_controller=require('../controller/login_signup_controller.js');
let router=express.Router();


router.get('/signup',login_signup_controller.get_signup);

router.post('/signup',login_signup_controller.post_signup);

router.get('/login',login_signup_controller.get_login);

router.post('/login',login_signup_controller.post_login);

router.get('/logout',login_signup_controller.get_logout);

module.exports=router;