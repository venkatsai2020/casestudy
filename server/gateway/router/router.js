let express=require('express');
let router=express.Router();
let axios=require('axios');


/*router.get('/orders/:id',async (req,res)=>{
    let data= await axios({
        method:req.method,
        url:'http://localhost:7000/orders/'+req.params.id,
    });
    console.log(data.data);
    res.send(data.data);
});

router.get('/orders/acceptedorders/:id',async (req,res)=>{
    let data= await axios({
        method:req.method,
        url:'http://localhost:7000/orders/acceptedorders/'+req.params.id,
    });

    console.log(data.data);
    res.send(data.data);
});

router.post('/orders/',async (req,res)=>{
    let data= await axios({
        method:req.method,
        url:'http://localhost:7000/orders/',
        data:req.body
    });
    console.log(data.data);
    res.send(data.data);
});*/



//login gateway for washer..........
router.post('/login/washer',async (req,res)=>{
    try{
    let data=await axios({
        method:'POST',
        url:'http://localhost:4000/login/washer',
        data:req.body
    });
    console.log(data.data);
    res.status(200).send(data.data);
}
catch(err){
    console.log(err.response.data);
    res.status(400).send(err.response.data);
}
});

//login gateway for customers
router.post('/login/customer',async (req,res)=>{
    try{
    let data=await axios({
        method:'POST',
        url:'http://localhost:4000/login/customer',
        data:req.body
    });
    console.log(data.data);
    res.status(200).send(data.data);
}
catch(err){
    console.log(err.response.data);
    res.status(400).send(err.response.data);
}
});

//login gateway for admin.......
router.post('/login/admin',async (req,res)=>{
    try{
    let data=await axios({
        method:'POST',
        url:'http://localhost:4000/login/admin',
        data:req.body
    });
    console.log(data.data);
    res.status(200).send(data.data);
}
catch(err){
    console.log(err.response.data);
    res.status(400).send(err.response.data);
}
});

//get completed orders..........
router.get('/getWasherCompletedOrders/:id',async (req,res)=>{
    try{
    let data=await axios({
        method:'GET',
        url:'http://localhost:7000/orders/washer/completedorders/'+req.params.id,
    });
    console.log(data.data);
    res.status(200).send(data.data);
}
catch(err){
    console.log(err.response.data);
    res.status(400).send(err.response.data);
}
});


//get carmanagement data.........
router.get('/getCarManagement',async (req,res)=>{
    try{
    let data=await axios({
        method:'GET',
        url:'http://localhost:5500/admin/carmangement'
    });
    console.log(data.data);
    res.status(200).send(data.data);
}
catch(err){
    console.log(err.response.data);
    res.status(400).send(err.response.data);
}
});

//get addonsmanagement..........
router.get('/getAddonsManagement',async (req,res)=>{
    try{
    let data=await axios({
        method:'GET',
        url:'http://localhost:5500/admin/addonmangement'
    });
    console.log(data.data);
    res.status(200).send(data.data);
}
catch(err){
    console.log(err.response.data);
    res.status(400).send(err.response.data);
}
});

//get plan management gatway
router.get('/getPlanManagement',async (req,res)=>{
    try{
    let data=await axios({
        method:'GET',
        url:'http://localhost:5500/admin/planmangement'
    });
    console.log(data.data);
    res.status(200).send(data.data);
}
catch(err){
    console.log(err.response.data);
    res.status(400).send(err.response.data);
}
});

//get washer order by ref id..............
router.get('/getWasherOrders:id',async (req,res)=>{
    try{
    let data=await axios({
        method:'GET',
        url:'http://localhost:7000/orders/washer/'+req.params.id
    });
    console.log(data.data);
    res.status(200).send(data.data);
}
catch(err){
    console.log(err.response.data);
    res.status(400).send(err.response.data);
}
});



module.exports=router;