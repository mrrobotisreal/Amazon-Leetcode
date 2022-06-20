/* Naive Solution */

function isAnagram(s: string, t: string): boolean {
  console.time();
  interface Letters {
    [key:string]: number,
  }

  if (s.length !== t.length) {
    console.log('FAIL');
    return false;
  }
  const sLetters:Letters = {};
  const tLetters:Letters = {};

  for (let i:number = 0; i < s.length; i++) {
    if (!sLetters[s[i]]) {
      sLetters[s[i]] = 1;
    } else {
      sLetters[s[i]]++;
    }
  }
  for (let i:number = 0; i < t.length; i++) {
    if (!tLetters[t[i]]) {
      tLetters[t[i]] = 1;
    } else {
      tLetters[t[i]]++;
    }
  }

  for (const letter in sLetters) {
    if (sLetters[letter] !== tLetters[letter]) {
      console.log('FAIL2');
      return false;
    }
  }
  console.timeEnd();
  return true;
};

/* Optimized Solution */

function isAnagramSet(s:string, t:string): boolean {
  console.time();
  if (s.length !== t.length) {
    console.log('FAIL');
    return false;
  }

  let sArr:string[] = s.split('');
  sArr = sArr.sort();
  let tArr:string[] = t.split('');
  tArr = tArr.sort();

  for (let i:number = 0; i < sArr.length; i++) {
    if (sArr[i] !== tArr[i]) {
      return false;
    }
  }
  console.timeEnd();
  return true;
}

/* SPEED TEST 1 */
console.log('TEST 1:');
console.log('=======================================');
console.log('isAnagram: ', isAnagram('string', 'grints')); // 0.042ms
console.log('---------------------------------------');
console.log('isAnagramSet: ', isAnagramSet('string', 'grints')); // 0.008ms
console.log('========================================');

/* SPEED TEST 2 */
console.log('TEST 2:');
console.log('======================================='); // 0.005ms
console.log('isAnagram: ', isAnagram('string', 'grints'));
console.log('---------------------------------------');
console.log('isAnagramSet: ', isAnagramSet('string', 'grints')); // 0.003ms
console.log('========================================');

/* SPEED TEST 3 */
console.log('TEST 3:');
console.log('=======================================');
console.log('isAnagram: ', isAnagram('string', 'grints')); // 0.056ms
console.log('---------------------------------------');
console.log('isAnagramSet: ', isAnagramSet('string', 'grints')); // 0.003ms
console.log('========================================');

/* SPEED TEST 4 */
console.log('TEST 4:');
console.log('=======================================');
console.log('isAnagram: ', isAnagram('string', 'grints')); // 0.012ms
console.log('---------------------------------------');
console.log('isAnagramSet: ', isAnagramSet('string', 'grints')); // 0.003ms
console.log('========================================');