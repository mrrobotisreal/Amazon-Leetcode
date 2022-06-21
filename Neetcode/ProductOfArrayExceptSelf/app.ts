// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.
// INPUT: nums = [1, 2, 3, 4]
// OUTPUT: [24, 12, 8, 6]

function productExceptSelf(nums: number[]): number[] {
  console.time('productExceptSelf');
  // create result array
  let result: number[] = [];
  // iterate through nums array
  for (let i: number = 0; i < nums.length; i++) {
    // create accumulator variable
    let product: number = 1;
    // iterate through nums array again
    for (let j: number = 0; j < nums.length; j++) {
      // check if j is equal to i
      if (j === i) {
        // if it is, then just continue
        continue;
      }
      // use accumulator variable to multiply itself against each item except the current one from first loop
      product *= nums[j];
    }
    // add accumulator to result array
    result.push(product);
  }
  console.timeEnd('productExceptSelf');
  // return the result array
  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));

function assertProductExceptSelf(test, solution, description): boolean {
  let isEqual: boolean = true;
  if (test.length !== solution.length) {
    console.log('FAIL: arrays are different lengths');
    return false;
  }
  for (let i: number = 0; i < test.length; i++) {
    if (test[i] !== solution[i]) {
      console.log(`FAIL: does not ${description}`);
      return false;
    }
  }
  if (isEqual) {
    console.log(`PASS: ${description}`);
    return isEqual;
  } else {
    console.log(`FAIL: does not ${description}`);
    return false;
  }
}

const successTest = assertProductExceptSelf(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6], 'multiply all items in array together except self, return the resultant array');
const failTest = assertProductExceptSelf(productExceptSelf([1, 2, 3, 4]), [1, 2, 3, 4], 'multiply all items in array together except self, return the resultant array');

console.log(successTest);
console.log(failTest);