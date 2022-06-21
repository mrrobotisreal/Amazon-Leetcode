// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
function topKFrequent(nums: number[], k: number): number[] {
  console.time('topKFrequent');
  let result:number[] = [];
  interface Frequency {
    [key:string]: number,
  }
  let frequency:Frequency = {};

  for (let i:number = 0; i < nums.length; i++) {
    if (!frequency[nums[i]]) {
      frequency[nums[i]] = 1;
    } else {
      frequency[nums[i]]++;
    }
  }

  for (const key in frequency) {
    if (frequency[key] >= k) {
      result.push(Number(key));
    }
  }

  console.timeEnd('topKFrequent');
  return result;
};

topKFrequent([1,1,1,2,2,3], 2);