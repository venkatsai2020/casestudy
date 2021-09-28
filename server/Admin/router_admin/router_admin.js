let express=require('express');
let controller=require('../controller/controller.js');
let router=express.Router();
let jwt=require('jsonwebtoken');


router.get('/',controller.get_admin);

router.post('/',controller.post_admin);

//router.put('/',controller.put_admin);

router.post('/carmangement',veriyToken,controller.post_carmangement);

router.get('/carmangement',controller.get_carmangement);

router.delete('/carmangement/:id',veriyToken,controller.delete_carmangement);

router.put('/carmangement',veriyToken,controller.put_carmangement);


router.post('/addonmangement',veriyToken,controller.post_addonmangement);

router.get('/addonmangement',controller.get_addonmangement);

router.delete('/addonmangement/:id',veriyToken,controller.delete_addonmangement);

router.put('/addonmangement',veriyToken,controller.put_addonmangement)


router.post('/planmangement',veriyToken,controller.post_planmangement);

router.get('/planmangement',controller.get_planmangement);

router.delete('/planmangement/:id',veriyToken,controller.delete_planmangement);

router.put('/planmangement',veriyToken,controller.put_planmangement);

router.get('/planmangement/active',controller.get_planmangement_active);

router.get('/addonmangement/active',controller.get_addonmangement_active);

router.get('/planmangement/:id',controller.get_planmangement_id);

router.get('/addonmangement/:id',controller.get_addonmangement_id);


router.get('/carmangement/active',controller.get_carmangement_active);

router.get('/carmanagement/:id',controller.get_carmangement_id);


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




module.exports=router;