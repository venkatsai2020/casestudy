let express=require('express');
let login_signup_controller=require('../controller/login_signup_controller.js');
let router=express.Router();


router.get('/signup',login_signup_controller.get_signup);

router.post('/signup',login_signup_controller.post_signup);

router.post('/signup/worker',login_signup_controller.post_signup_worker);

router.get('/login/customer',login_signup_controller.get_login_customer);

router.post('/login/customer',login_signup_controller.post_login_customer);

router.post('/login/admin',login_signup_controller.post_login_admin);

router.post('/login/washer',login_signup_controller.post_login_washer);

router.post('/signup/admin',login_signup_controller.post_signup_admin);

router.get('/logout/cusotmer',login_signup_controller.get_logout_cust);


module.exports=router;