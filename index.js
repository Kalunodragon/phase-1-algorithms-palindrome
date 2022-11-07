function isPalindrome(word) {
  // Write your algorithm here
  return word === word.split("").reverse().join("") ? true : false
}

/* 
  Add your pseudocode here

  Take in a "string"
  reverse "string"
  return comparison of reverse "string" to "string"
    boolean ^^^


*/

/*
  Add written explanation of your solution here

  Word.split("") splits word into an array of individual charaters
  chained .reverse() reverses the array ([y,e,s] => [s,e,y])
  chained .join("") returns the array back to a single string

  unchained is a longer version to type out
  let splitWord = word.split("")
  let reveresed = splitWord.reverse()
  let drow = reveresed.join("")
  word === drow ? true : false

  if the word had upper case letters the word would need to be converted
  to either all upper or lower case, then compared at one of those values

  word is compaired to the reversed version to see if they are equal
  using the boolean if they are equal then true is returned
  if they are not equal to one another false is returned

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("")

  console.log("Expecting: true")
  console.log("=>", isPalindrome("tacocat"))
}

module.exports = isPalindrome;
