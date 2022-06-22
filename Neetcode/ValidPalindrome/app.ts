/*
  A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

  Given a string s, return true if it is a palindrome, or false otherwise.
*/

function isPalindrome(s:string): boolean {
  console.time('isPalindrome');
  let regex:RegExp = /[A-Z]/ig;
  let alphaChars:string = s.match(regex).join('').toLowerCase();
  let revAlphaChars:string = s.match(regex).reverse().join('').toLowerCase();

  if (alphaChars === revAlphaChars) {
    console.timeEnd('isPalindrome');
    return true;
  } else {
    console.timeEnd('isPalindrome');
    return false;
  }
}

// console.log(isPalindrome('A man, a plan, a canal: Panama'));
// console.log(isPalindrome('A man, a plan, a canal: Panama RaWr'));

function assertIsPalindrome(test, solution, description): void {
  if (test === solution) {
    console.log(`PASS: ${description}`);
  } else {
    console.log(`FAIL: ${description}`);
  }
}

const successTestIsPalindrome = assertIsPalindrome(isPalindrome('A man, a plan, a canal: Panama'), true, 'should pass and return true if phrase is a palindrome');
const successTestIsNotPalindrome = assertIsPalindrome(isPalindrome('A man, a plan, a canal: Panama rAwR'), false, 'should pass and return false if phrase is not a palindrome');
const failTestIsPalindrome = assertIsPalindrome(isPalindrome('A man, a plan, a canal: Panama'), false, 'should fail and return true if phrase is a palindrome, but solution is wrong');
const failtTestIsNotPalindrome = assertIsPalindrome(isPalindrome('A man, a plan, a canal: Panama RaWr'), true, 'should fail and return false is phrase is not a palindrome, but the solution is wrong');

console.log(successTestIsPalindrome);
console.log(successTestIsNotPalindrome);
console.log(failTestIsPalindrome);
console.log(failtTestIsNotPalindrome);