function palindromeString(str)
{
// Change the string into lower case 
    var cstr = str.toLowerCase()
    var ccount = 0;
//check the sting length is even or odd
    if ((cstr.length) % 2 === 0)
     {
       ccount = (cstr.length) / 2;
    } else
     {
// If the length of the string is 1 then it becomes a palindrome
    if (cstr.length === 1) {
     console.log("Entry is a palindrome.");
        return true;
         } else {
 // If the length of the string is odd ignore middle character
    ccount = (cstr.length - 1) / 2;
         }
        }
// Loop through to check the first character to the last character and then move next
     for (var x = 0; x < ccount; x++) 
     {
        if (cstr[x] != cstr.slice(-1-x)[0]) 
        {
        console.log("Entry is not a palindrome.");
        return false;
        }
    }
console.log("The entry is a palindrome.");
return true;
}
palindromeString('madam');
palindromeString('malayalam');
palindromeString('fox');  
palindromeString('racecar')         
