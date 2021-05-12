import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';

const {
    expect
} = chai;
chai.use(chaiHttp);


describe('testing index Page ', () => {
    it('should return a message from index page.', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.status).to.equal(200);
                expect(res.body.message).to.equal('welcome to rogistic backend API');
                done();
            });
    });
});

describe('Non existant route test', () => {
    it('should return an error message that the route is not found', (done) => {
        chai.request(app)
            .get('/dsafa')
            .end((err, res) => {
                expect(res.status).to.equal(404);
                done();
            })
    })
})