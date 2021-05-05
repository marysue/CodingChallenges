/*
Min Window Substring(strArr) take the array of strings stored in strArr,
which will contain only two strings, the first parameter being the string N and the
second parameter being a string K of some characters, and your goal is to determine
the smallest substring of N that contains all the characters in K.

For example: if strArr is ["aaabaaddae", "aed"] then the smallest substring of N that
contains the characters a, e, and d is "dae" located at the end of the string. So for
this exmaple your program should return dae.


Another example: if strArr is ["aabdccdbcacd", "aad"] then the smallest substring of N that
contains all of the characters in K is "aabd" which is located at the beginning of the string.
Both parameters will be strings ranging in length from 1 to 50 characters and all of K's characters
will exist somewhere in the string N. Both strings will only contain lower alphabetic characters.

Exmaples:
    Input: ["ahffaksfajeeubsne", "jefaa"]
    Output: aksfaje

    Input: ["aaffhkksemckelloe", "fhea"]
    Output: affhkkse
*/

const subIncludesAll = (str, str2) => {
   console.log(`Comparing str: ${str} with str2: ${str2}`);
   for (let i = 0; i < str.length; i++) {
      if (str2.indexOf(str[i]) !== -1) {
         str2 = str2.replace(str[i], '');
      };
   };
   //if all of the characters in str2 were in
   //str, then str2 will be empty - returns true or false
   return (str2.length === 0);
};


const minWindow = (inputArray) => {
    let str1 = inputArray[0];
    let str2 = inputArray[1];

   let shortestString = null;

   //for every character of string1
   for (let i = 0; i < str1.length; i++) {
      // start at i, then end at j-i+1
      // so if i = 0, starting at the i'th char of the string, and
      // progress through the end of the string ... 'a', 'ab', 'abc'... then 'b', 'bc', bcd'... etc.
      for (let j = i; j < str1.length; j++) {
         let testString = str1.substr(i, j-i+1);
         if (subIncludesAll(testString, str2)) {
            if (shortestString === null || testString.length < shortestString.length) {
               shortestString = testString;
               console.log('shortestString is now: ', shortestString)
            }
         }
      }
   }
   return shortestString;
};

console.log(minWindow(["abcdefgh", "gedcf"]));

// all test cases ran // 46 minutes to submit
/*
marylark@MacBook-Pro hacker-rank % node c2fo-test3.js
Comparing str: a with str2: gedcf
Comparing str: ab with str2: gedcf
Comparing str: abc with str2: gedcf
Comparing str: abcd with str2: gedcf
Comparing str: abcde with str2: gedcf
Comparing str: abcdef with str2: gedcf
Comparing str: abcdefg with str2: gedcf
shortestString is now:  abcdefg
Comparing str: abcdefgh with str2: gedcf
Comparing str: b with str2: gedcf
Comparing str: bc with str2: gedcf
Comparing str: bcd with str2: gedcf
Comparing str: bcde with str2: gedcf
Comparing str: bcdef with str2: gedcf
Comparing str: bcdefg with str2: gedcf
shortestString is now:  bcdefg
Comparing str: bcdefgh with str2: gedcf
Comparing str: c with str2: gedcf
Comparing str: cd with str2: gedcf
Comparing str: cde with str2: gedcf
Comparing str: cdef with str2: gedcf
Comparing str: cdefg with str2: gedcf
shortestString is now:  cdefg
Comparing str: cdefgh with str2: gedcf
Comparing str: d with str2: gedcf
Comparing str: de with str2: gedcf
Comparing str: def with str2: gedcf
Comparing str: defg with str2: gedcf
Comparing str: defgh with str2: gedcf
Comparing str: e with str2: gedcf
Comparing str: ef with str2: gedcf
Comparing str: efg with str2: gedcf
Comparing str: efgh with str2: gedcf
Comparing str: f with str2: gedcf
Comparing str: fg with str2: gedcf
Comparing str: fgh with str2: gedcf
Comparing str: g with str2: gedcf
Comparing str: gh with str2: gedcf
Comparing str: h with str2: gedcf
cdefg
marylark@MacBook-Pro hacker-rank %
*/
