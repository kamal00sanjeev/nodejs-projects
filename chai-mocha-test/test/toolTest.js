'use strict'

const expect = require('chai').expect;
const tools = require('../utils/tools');

describe("Tools", function(){

    describe('printName()', function(){
        it('should print the last name first', function(){
            let results = tools.printName({first: 'Sanjeev', last: 'kamal'});
            expect(results).to.equal('kamal, Sanjeev');
        });
    });

    //unit-test asynchronous function
    describe('loadWiki()', function(){
        this.timeout(5000); //wait for 5secs until get results
        it('load Nikita Singh wikipedia page', function(done){
            let results = tools.loadWiki({first: 'Nikita', last: 'Singh'}, function(html){
                expect(html).to.be.ok;
                done();
            });            
        });
    });
})