// Anagram Checker
// Given two strings, determine if they are anagrams of each other (contain the same characters in any order).

// Ignore casing and white space.


function areAnagrams(str1, str2) {
  // Remove white spaces and convert to lowercase
  str1 = str1.split(" ").join("").toLowerCase();
  str2 = str2.split(" ").join("").toLowerCase();
  // If lengths differ, they cannot be anagrams
  if (str1.length !== str2.length) {
    return false;
  }
  // Sort the characters of both strings
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");
  // Compare the sorted strings
  if (str1 !== str2) {
    return false;
  }
  return true;
}

// console.log(areAnagrams("A gentleman", "Elegant man"))
