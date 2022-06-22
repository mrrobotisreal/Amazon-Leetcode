/*
  Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
  You must write an algorithm that runs in O(n) time.
*/

function longestConsecutive(nums: number[]): number {
  // sort nums array
  nums = nums.sort((a:number, b:number) => {
    return a - b;
  });
  console.log('nums -> ', nums);
  // create counter variable
  let counter:number = 1;
  // create counts array
  let counts:number[] = [];
  // iterate over sorted nums array
  for (let i:number = 0; i < nums.length; i++) {
    if (nums[i] + 1 === nums[i + 1]) {
      counter++;
    } else {
      counts.push(counter);
      counter = 1;
    }
  }
    // increment counter everytime the next item is only 1 greater
  return Math.max(...counts);
};

let testNums:number[] = [0,3,7,2,5,8,4,6,0,1];
let testNums2:number[] = [100,4,200,1,3,2]
console.log(longestConsecutive(testNums));