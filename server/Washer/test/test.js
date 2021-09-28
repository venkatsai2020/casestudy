let chai=require('chai');
let server=require('../main_washer');
let chaiHttp=require('chai-http');

chai.should();


chai.use(chaiHttp);


describe('Tesks API',()=>{
    describe('GET WORKERS',()=>{
        it("get all the workers details",(done)=>{
            chai.request(server)
            .get('/worker/')
            .end((err,res)=>{
                res.should.have.status(200);
                done()
            })
        })
        it("get all the workers details",(done)=>{
            chai.request(server)
            .get('/worker/614713fefaefc70a597c364d')
            .end((err,res)=>{
                res.should.have.status(200);
                done()
            })
        })
        it("get no the workers details",(done)=>{
            chai.request(server)
            .get('/worker/614713fefaefc70a597c36d')
            .end((err,res)=>{
                res.text.should.be.eq('[]');
                done()
            })
        })

        it("wrong end point",(done)=>{
            chai.request(server)
            .get('/worke/')
            .end((err,res)=>{
                res.should.have.status(404);
                done()
            })
        })
    })
})