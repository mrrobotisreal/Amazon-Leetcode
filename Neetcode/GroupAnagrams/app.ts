/* STILL NEEDS EDGE CASES HANDLED */

function groupAnagrams(strs: string[]): string[][] {
  console.time('groupAnagrams');
  let result:string[][] = [];
  interface Anagrams {
    [key:string]: string[],
  }
  let anagrams:Anagrams = {};

  for (let i:number = 0; i < strs.length; i++) {
    let sortedString:string = strs[i].split('').sort().join('');
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