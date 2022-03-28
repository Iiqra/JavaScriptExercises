//To find Vowel count in a given string
function vowel_count(str)
 {
 return str.match(/[aeiou]/gi).length;
  }
   console.log(vowel_count('East or West Home is the best'));