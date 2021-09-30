function isPalindrome(word) {
  const string = word.split('');
  console.log(string);
  const revString = string.reverse();
  console.log(revString)
  const finalString = string.join('');
  console.log(finalString)
  if(finalString === word){
    return true
  }
  else{
     return false;
  }
}

/* 
 use split string and assign to new variable
 use new variable to use reverse
 use join
 check word === new variable
return true or false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
