function rot13(message:string): string {
  message = message.toLowerCase();
  let alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
  let decoded: string = '';
  let special: RegExp = /A-Z/ig;

  for (let i:number = 0; i < message.length; i++) {
      // use the alphabet for determining the indexOf the current letter of the string
      let index:number = alphabet.indexOf(message[i]);
      // check if letter variable (index) + 13 is greater 25
      if (message[i].match(special)) {
          if (index + 13 > 25) {
              // if so, add it together and subtract 26
              index += 13 - 26;
              decoded += alphabet[index];
          } else {
                // otherwise
                // just add 13
                index += 13;
                decoded += alphabet[index];
          }
      } else {
          decoded += message[i];
      }
  }
  return decoded;
};