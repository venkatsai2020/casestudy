let express=require('express');
let router=require('../router/router.js');
let mongoose=require('mongoose');
let cookieparser=require('cookie-parser');
let app=express();

app.use(express.json());
app.use(cookieparser());
app.use(router);

mongoose.connect('mongodb+srv://venkat:venkatsai2020@cluster0.whw6z.mongodb.net/car_wash');

app.listen(3000,()=>{
    console.log('server is listning to port 3000');
});

app.get('/',(req,res)=>{
    res.render('home');
})