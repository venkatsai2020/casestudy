let express=require('express');
let mongoose=require('mongoose');
let router=require('./router_admin/router_admin.js');
let cors=require('cors');

let app=express();


app.use(cors());
app.use(express.json());
app.use('/admin',router);

mongoose.connect('mongodb+srv://venkat:venkatsai2020@cluster0.whw6z.mongodb.net/admins')

app.listen(5500,()=>{
    console.log('server is litning to admin port 5500');
});