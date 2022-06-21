// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/* Naive Solution */

function isAnagram(s: string, t: string): boolean {
  console.time('isAnagramTest');
  interface Letters {
    [key:string]: number,
  }

  if (s.length !== t.length) {
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
      return false;
    }
  }
  console.timeEnd('isAnagramTest');
  return true;
};

/* Optimized Solution */

function isAnagramSet(s:string, t:string): boolean {
  console.time('isAnagramSetTest');
  if (s.length !== t.length) {
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
  console.timeEnd('isAnagramSetTest');
  return true;
}

// /* SPEED TEST 1 */
// console.log('TEST 1:');
// console.log('=======================================');
// console.log('isAnagram: ', isAnagram('string', 'grints')); // 0.042ms
// console.log('---------------------------------------');
// console.log('isAnagramSet: ', isAnagramSet('string', 'grints')); // 0.008ms
// console.log('========================================');

// /* SPEED TEST 2 */
// console.log('TEST 2:');
// console.log('======================================='); // 0.005ms
// console.log('isAnagram: ', isAnagram('string', 'grints'));
// console.log('---------------------------------------');
// console.log('isAnagramSet: ', isAnagramSet('string', 'grints')); // 0.003ms
// console.log('========================================');

// /* SPEED TEST 3 */
// console.log('TEST 3:');
// console.log('=======================================');
// console.log('isAnagram: ', isAnagram('string', 'grints')); // 0.056ms
// console.log('---------------------------------------');
// console.log('isAnagramSet: ', isAnagramSet('string', 'grints')); // 0.003ms
// console.log('========================================');

// /* SPEED TEST 4 */
// console.log('TEST 4:');
// console.log('=======================================');
// console.log('isAnagram: ', isAnagram('string', 'grints')); // 0.012ms
// console.log('---------------------------------------');
// console.log('isAnagramSet: ', isAnagramSet('string', 'grints')); // 0.003ms
// console.log('========================================');


/* UNIT TESTING */

function assertIsAnagram(test, solution, description): boolean {
  if (test === solution) {
    console.log(`PASS: ${description}`);
    return test;
  } else {
    console.log(`FAIL: ${description}`);
    return test;
  }
}

const successTestAnagram = assertIsAnagram(isAnagram('string', 'grints'), true, 'should pass and return true');
const successTestNotAnagram = assertIsAnagram(isAnagram('string', 'strung'), false, 'should pass and return false');
const failTestAnagram = assertIsAnagram(isAnagram('string', 'grints'), false, 'should fail and return true');
const failTestNotAnagram = assertIsAnagram(isAnagram('string', 'strung'), true, 'should fail and return false');

const successTestAnagramSet = assertIsAnagram(isAnagramSet('string', 'grints'), true, 'should pass and return true');
const successTestNotAnagramSet = assertIsAnagram(isAnagramSet('string', 'strung'), false, 'should pass and return false');
const failTestAnagramSet = assertIsAnagram(isAnagramSet('string', 'grints'), false, 'should fail and return true');
const failTestNotAnagramSet = assertIsAnagram(isAnagramSet('string', 'strung'), true, 'should fail and return false');