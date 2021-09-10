const minFromMax = require("./problemOne");


test('Handles single largest and single smallest', () =>{
    expect(minFromMax([1,2,3])).toBe(2)
})

test('Handles multiple largest and single smallest', () =>{
    expect(minFromMax([1,1,2,3,3])).toBe(4)
    expect(minFromMax([10, 10, 10, 1, 2, 3, 3])).toBe(29)
})

test('Handles multiple smallest and single largest', () =>{
    expect(minFromMax([1,1,2,3])).toBe(1)
})

test('Handles negative smallest', () =>{
    expect(minFromMax([-1,2,3,3])).toBe(7)
})

test('Handles when difference is 0', () =>{
    expect(minFromMax([1,1,1,1,1,1])).toBe(0)
    expect(minFromMax([1,1,1,3])).toBe(0)
    
})

test('Handles all negative numbers', () =>{
    expect(minFromMax([-10, -4, -4, -3, -10, -6])).toBe(17)
})

test('Handles when difference is negative', () =>{
    expect(minFromMax([1,1,1,2])).toBe('Too many small numbers')
})






