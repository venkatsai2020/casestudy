let express=require('express');
let contorller=require('../controller/controller.js');
let router=express.Router();
let jwt=require('jsonwebtoken');


router.post('/',contorller.post_worker_profile);

router.get('/',contorller.get_worker_profile);

router.put('/',contorller.put_worker_profile);

router.get('/:id',contorller.get_worker_id);

//router.delete('/:d',contorller.delete_worker_id);



module.exports=router;