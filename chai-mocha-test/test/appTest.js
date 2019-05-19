'use strict'

const assert = require('chai').assert;
const app = require('../app');

describe('App', function(){
    it('sayHello should return hello', function(){
        let result = app.sayHello();
        assert.equal(result, 'hello');
    });

    it('sayHello should return type string', function(){
        let result = app.sayHello();
        assert.typeOf(result, 'string');
    });

    it('retDouble should double the input number', function(){
        let res = app.retDouble(5);
        assert.equal(res, 10);
    });

    it('retDouble should return type number', function(){
        let res = app.retDouble(3);
        assert.typeOf(res, 'number');
    });

    it('addNumbers should add input numbers', function(){
        let result = app.addNumbers(2, 6);
        assert.isAbove(result, 6);
    });
});