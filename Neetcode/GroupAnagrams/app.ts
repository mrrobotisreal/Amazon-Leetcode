// function groupAnagrams(strs: string[]): string[][] {
//   // create variables for storing results and sorted strings
//   let result:string[][] = [];
//   let sorted:string[] = [];

//   // iterate though the array of strings
//   for (let i:number = 0; i < strs.length; i++) {
//     // split each string into an array, sort it, and join it back together
//     let sortedString:string = strs[i].split('').sort().join('');
//     // sort each string and put it into a new array of sorted strings, each in the same index as original array
//     sorted.push(sortedString);
//   }

//   // iterate over sorted strings
//   for (let i:number = 0; i < sorted.length; i++) {
//     // create accumulator array
//     let anagrams:string[] = [];
//     let sortedString:string = strs[i].split('').sort().join('');
//     if (sorted[i] === sortedString) {
//       anagrams.push(strs[i])
//     }
//     for (let j:number = 0; j < sorted.length; j++) {
//       // check to see if there are strings containing the exact same letters
//       if (sorted[i]) {}
//         // if so, add them to result array
//     }
//   }
//   return result;
// };

function groupAnagrams(strs: string[]): string[][] {
  console.time('groupAnagrams');
  let result:string[][] = [];
  // let sorted:string[] = [];
  interface Anagrams {
    [key:string]: string[],
  }
  let anagrams:Anagrams = {};

  for (let i:number = 0; i < strs.length; i++) {
    let sortedString:string = strs[i].split('').sort().join('');
    // sorted.push(sortedString);
    if (!anagrams[sortedString]) {
      anagrams[sortedString] = [];
    }
  }


  for (let i:number = 0; i < strs.length; i++) {
    let sortedString:string = strs[i].split('').sort().join('');
    for (const anagram in anagrams) {
      if (sortedString === anagram) {
        anagrams[anagram].push(strs[i]);
      }
    }
  }

  for (const anagram in anagrams) {
    if (anagrams[anagram].length > 0) {
      result.push(anagrams[anagram]);
    }
  }

  console.log('anagrams -> ', anagrams);
  console.log('result -> ', result);
  console.timeEnd('groupAnagrams');
  return result;
};

groupAnagrams(["eat","tea","tan","ate","nat","bat"]);