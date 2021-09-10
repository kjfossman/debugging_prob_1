# Debugging Problem 1

## Usage
-Fork and clone this repo
-run npm install to gather all dependencies and test framework

### Solving
-Write your code in problemOne.js 
-Run npm test until all tests are passing
-You can also run node problemOne.js if you would like to see what you are printing to the console for debugging purposes 
-comments on a more efficient solution than provided in solution.js are welcom


## Instructions
- Write a function called minFromMax that takes in array of numbers as an argument
- minFromMax should find the largest number in the array and the smallest number
- If there are duplicates of these numbers take the sum of the largest and the sum of the smallest
- Subtract the sum of the smallest from the sum of the largest 
- If the result comes back as a negative number return 'Too many small numbers'


## Example
array = [1, 1, 2, 3, 5, 5, 5]
largestNum = 5
smallestNum = 1 
largestNum is in the array 3 times 
smallestNum is in the array 2 times
result should be (15 - 2)
return 13
