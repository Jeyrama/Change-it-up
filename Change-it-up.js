/*
Create a function that takes a string as a parameter 
and does the following, in this order:

Replaces every letter with the letter following it in the alphabet
Makes any consonants lower case
Makes any vowels capital

So, for example the string "Cat30" would return "dbU30" 
(Cat30 --> Dbu30 --> dbU30)

Note:
  the alphabet should wrap around, so Z becomes A
  in this kata, y isn't considered as a vowel.
*/


// Solution

const letterChanger = str =>
  str
    .toLowerCase()
    .replace(/[a-z]/g, m => String.fromCharCode((m.charCodeAt(0) - 96) % 26 + 97)) 
    .replace(/[aeiou]/g, m => m.toUpperCase())

// or

const letters = "abcdEefghIijklmnOopqrstUuvwxyzA";
const changer = s => s.replace( /[a-z]/gi, c => letters[ letters.indexOf(c.toLowerCase())+1 ] );
