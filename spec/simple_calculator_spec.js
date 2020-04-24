var {add,multiply} = require('../src/simple_calculator');

describe("add", function(){
    it("should add two number", function(){
        expect(add(1,2)).toEqual(3)
    })
    it('should add multiple numbers', function(){
        expect(add(1,2,3,4,5)).toEqual(15)
        
    })
})
describe('multiply', function(){
    it('should miltiply two numbers',function(){
        expect(multiply(1,3)).toEqual(3)
    })
    it('should multiply more than two numbers',function(){
        expect(multiply(1,2,3,4,5)).toEqual(120)
    })
})