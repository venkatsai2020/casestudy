let express=require('express');
let router=require('./router/router.js');
let cors=require('cors');
let app=express();


app.use(express.json());
app.use(cors());
app.use('/gateway',router);


app.listen('8500',()=>{
    console.log('server is listening to washer port 8500');
});
