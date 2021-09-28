let express=require('express');
let mongoose=require('mongoose');
let router=require('./router/router.js');
let cors=require('cors');
let app=express();


app.use(express.json());
app.use(cors());
app.use('/worker',router);

mongoose.connect('mongodb+srv://venkat:venkatsai2020@cluster0.whw6z.mongodb.net/workers');


app.listen('8000',()=>{
    console.log('server is listening to washer port 8000');
});

module.exports=app;