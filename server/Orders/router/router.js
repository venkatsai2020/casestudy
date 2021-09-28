let express=require('express');
let controller=require('../controller/controller.js');
const completed_order_model = require('../db/completed_order.js');
let router=express.Router();
let jwt=require('jsonwebtoken');

router.get('/:id',controller.get_orders);

router.post('/',controller.post_order);

//router.get('/:id',controller.get_orders_byid);

router.put('/',controller.put_orders);

router.delete('/:id',veriyToken,controller.delete_order);

router.post('/acceptedorders',veriyToken,controller.post_accepted_order);

router.get('/acceptedorders/:id',controller.get_accepted_order);

router.delete('/acceptedorders/:id',veriyToken,controller.delete_accepted_order);

router.get('/inprocessorders/:id',controller.get_inprocess_orders);

router.post('/inprocessorders',veriyToken,controller.post_inprocess_orders);

router.delete('/inprocessorders/:id',veriyToken,controller.delete_inprocess_orders);

router.get('/completedorders/:id',controller.get_completed_orders);

router.post('/completedorders',veriyToken,controller.post_completed_orders);

router.get('/scheduleorders/:id',controller.get_scheduled_orders);

router.delete('/scheduleorders/:id',veriyToken,controller.delete_scheduled_orders);

router.post('/scheduleorders',veriyToken,controller.post_scheduled_orders);

router.put('/scheduleorders',veriyToken,controller.put_scheduled_orders);

router.get('/cancledorders/:id',controller.get_cancled_orders);

router.post('/cancledorders',veriyToken,controller.post_cancled_orders);

router.delete('/cancledorders/:id',veriyToken,controller.delete_cancled_orders);

router.post('/restor',veriyToken,controller.post_restore_order);

router.get('/paidorders/:id',controller.get_paid_orders);

router.delete('/deleteunpaidorders/:id',controller.delete_unpaid_orders);

router.post('/paidorder/',controller.post_paid_orders);

router.put('/updatepaymentid',controller.put_updatepayment_id);
////////////////////////////////////////////////

router.get('/washer/:id',controller.get_washer_orders);

router.get('/washer/acceptedorders/:id',controller.get_washer_accepted_order);

router.get('/washer/inprocessorders/:id',controller.get_washer_inprocess_orders);

router.get('/washer/completedorders/:id',controller.get_washer_completed_orders);

router.get('/washer/scheduleorders/:id',controller.get_washer_scheduled_orders);

router.get('/washer/cancledorders/:id',controller.get_washer_cancled_orders);

module.exports=router;


function veriyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request');
    }
    let token=req.headers.authorization.split(' ')[1]
    if(token==='null'){
        return res.status(401).send('Unauthorized request')
    }
    let payload=jwt.verify(token,'car_wash')
    if(!payload){
        return res.status(401).send('Unauthorized request')
    }
    next();
}