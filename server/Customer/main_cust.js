let express=require('express');
let mongoose=require('mongoose');
let cors=require('cors');
let router=require('./router_cust/router_cust.js');
let app=express();

app.use(express.json());
app.use(cors());
app.use('/customer',router);


mongoose.connect('mongodb+srv://venkat:venkatsai2020@cluster0.whw6z.mongodb.net/customers');
app.listen(5000,()=>{
    console.log('sever is listning to customer port 5000');
});