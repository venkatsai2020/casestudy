let express=require('express');
let router=express.Router();
let controller=require('../controller/controller.js');

router.get('/',controller.get_customers);

router.post('/',controller.post_customer);

//router.put('/:id',controller.put_customer);

router.get('/:id',controller.get_customer_id);

//router.delete('/:id',controller.delete_customer);


module.exports=router;