let chai=require('chai');
let server=require('../main_orders');
let chaiHttp=require('chai-http');

chai.should();


chai.use(chaiHttp);
//npm run test....
describe('Tesks API',()=>{
    describe('GET WORKERS',()=>{
        it("get all the orders",(done)=>{
            chai.request(server)
            .get('/orders/')
            .end((err,res)=>{
                res.should.have.status(404);
                done()
            })
        })
        it("get acceted orders by id",(done)=>{
            chai.request(server)
            .get('/orders/acceptedorders/614437e23de33eda98b0fcbc')
            .end((err,res)=>{
                res.should.have.status(200);
                done()
            })
        })
        it("get inprocess orders by id",(done)=>{
            chai.request(server)
            .get('/orders/inprocessorders/614437e23de33eda98b0fcbc')
            .end((err,res)=>{
                res.should.have.status(200);
                done()
            })
        })
        it("get completed orders by id",(done)=>{
            chai.request(server)
            .get('/orders/completedorders/614437e23de33eda98b0fcbc')
            .end((err,res)=>{
                res.should.have.status(200);
                done()
            })
        })
        it("get washer by id",(done)=>{
            chai.request(server)
            .get('/orders/washer/614437e23de33eda98b0fcbc')
            .end((err,res)=>{
                res.should.have.status(200);
                done()
            })
        })
        it("get washer accepted orders by id",(done)=>{
            chai.request(server)
            .get('/orders/acceptedordes/614437e23de33eda98b0fcbc')
            .end((err,res)=>{
                res.should.have.status(404);
                done()
            })
        })
        it("get washer inprocess orders by id",(done)=>{
            chai.request(server)
            .get('/orders/inprocessorders/614437e23de33eda98b0f')
            .end((err,res)=>{
                res.should.have.status(200);
                done()
            })
        })
        it("get washer completed orders by id",(done)=>{
            chai.request(server)
            .get('/orders/completedorders/614437e23de33eda98b0f')
            .end((err,res)=>{
                res.should.have.status(200);
                done()
            })
        })

    })
})