function twoSum(nums: number[], target: number): number[] {
  let indices:number[] = [];
  for (let i:number = 0; i < nums.length; i++) {
    for (let j:number = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        indices.push(i, j);
        return indices;
      }
    }
  }
};

function assertTwoSum(test:number[], answer:number[], desc:string) {
  let pass:boolean = true;
  for (let i:number = 0; i < answer.length; i++) {
    if (test.indexOf(answer[i]) === -1) {
      pass = false;
    }
  }
  return pass;
}

let test1 = assertTwoSum(twoSum([2,7,11,15], 9), [0,1], 'returns true if index 0 and 1 adds up to target of 9')
console.log('test1 should be true, and is: ', test1);

let test2 = assertTwoSum(twoSum([11,2,3,7], 5), [1,2], 'returns true if index 1 and 2 adds up to target of 5');
console.log('test2 should be true, and is: ', test2);

let test3 = assertTwoSum(twoSum([1,2,3,4],7), [0,1], 'returns false because index 0 and 1 do not add up to target of 7');
console.log('test3 should return false and is: ', test3);