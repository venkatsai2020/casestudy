let express=require('express');
let router=require('./router/router.js');
let mongooose=require('mongoose');
let cors=require('cors');
let stripe=require('stripe');
let app=express();

app.use(express.json());
app.use(cors());
app.use('/orders',router);

mongooose.connect('mongodb+srv://venkat:venkatsai2020@cluster0.whw6z.mongodb.net/orders');
mongooose.Promise=global.Promise;
app.listen('7000',()=>{
console.log('server is listening to orders port 7000');
})

module.exports=app;