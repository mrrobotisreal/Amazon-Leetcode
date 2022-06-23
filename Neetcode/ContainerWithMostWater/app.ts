/*
  You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

  Find two lines that together with the x-axis form a container, such that the container contains the most water.

  Return the maximum amount of water a container can store.

  Notice that you may not slant the container.
*/

function maxArea(height: number[]): number {
  let left:number = 0, right:number = height.length - 1, max:number = 0;
  while (left < right) {
    let volume:number = Math.min(height[left], height[right]) * (right - 1);
    max = max > volume ? max : volume;
    height[left] < height[right] ? left++ : right--;
  }
  return max;
};

const successHeight:number[] = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(successHeight));