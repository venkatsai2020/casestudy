let express=require('express');
let router=require('./router/router.js');
let mongoose=require('mongoose');
let cookieparser=require('cookie-parser');
let cors=require('cors');
let app=express();

app.use(express.json());
app.use(cookieparser());
app.use(cors());
app.use(router);

mongoose.connect('mongodb+srv://venkat:venkatsai2020@cluster0.whw6z.mongodb.net/login_signup');

app.listen(4000,()=>{
    console.log('server is listning to login_signup port 4000');
});