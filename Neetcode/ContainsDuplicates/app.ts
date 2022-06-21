/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 var containsDuplicate = function(nums) {
  for (let i:number = 0; i < nums.length; i++) {
      for (let j:number = 0; j < nums.length && j !== i; j++) {
        if (nums[i] === nums[j]) {
            return true;
        }
      }
  }
  return false;
};

function assertContainsDuplicates(test, solution, description) {
  let answer:boolean = test === solution;
  if (answer) {
    console.log('PASS');
    console.log(`${description}, and returns ${test}`);
    return test;
  } else {
    console.log('FAIL');
    console.log(`${description}, and returns ${test}`);
    return test;
  }
}

let successTestWithDuplicates = assertContainsDuplicates(containsDuplicate([1, 2, 3, 4, 5, 5]), true, 'should pass and return true');
let successTestWithoutDuplicates = assertContainsDuplicates(containsDuplicate([1, 2, 3, 4]), false, 'should pass and return false');
let failTestWithDuplicates = assertContainsDuplicates(containsDuplicate([3, 3, 4, 5, 6, 6]), false, 'should fail and return true');
let failTestWithoutDuplicates = assertContainsDuplicates(containsDuplicate([6, 7, 8, 9]), true, 'should fail and return false');

console.log(successTestWithDuplicates); // true
console.log(successTestWithoutDuplicates); // false
console.log(failTestWithDuplicates); // true
console.log(failTestWithoutDuplicates); // false