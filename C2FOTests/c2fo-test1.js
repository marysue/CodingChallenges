/*
Have the function PalindromeCreator(str) take the str parameter being passed and determine if
it is possible to create a palindromic string of minimum length 3 characters by removing 1 or
2 characters. For example: if str is "abjchba" then you can remove the characters jc to
produce "abhba" which is a palindrome. For this example your program should return the two
characters that were removed with no delimiter and in the order they appear in the string,
so jc.  If 1 or 2 characters cannot be removed to produce a palindrome, then return the string
not possible.

If the input string is already a palindrome, your program should return the string palindrome.
Your program should always remove the characters that appear earlier in the string. In the
example above, you can also remove ch to form a palindrome but jc appears first, so the
correct answer is jc.

The input will only contain lowercase alphabetic characters. Your program should always attempt
to create the longest palindromic substring by removing 1 or 2 characters
( see second sample testcase as an example). The 2 characters you remove do not have to
be adjacent in the string.

Examples:
    Input: "mnop"
    Output: not possible

    Input "kjjjhjjj"
    Output: k
*/
//input "racecar" the output was incorrect. The correct output is 'palindrome'
// input 'aaabaaaj' the output was incorrect. The correct output is j;
// input 'annak' the output was incorrect. the correct output is k;
// input 'aaaaaa' the output was incorrect the correct output is palindrome.

function PalindromeCreator (str) {

    let badActors = '';

    if (isPalindrome(str)) {
        return 'is Palindrome';
    }
    //remove one letter only
    for (let i = 0; i <= str.length; i++) {
        //remove a letter from the string.
        let substr = str.slice(0, i) + str.slice(i+1, str.length + 1)
        console.log("i:  ", i, "substr: ", substr);

        if (isPalindrome(substr)) {
            badActors = str[i];
            return badActors;
        }
    }

    //if we get here, removing one letter didn't work. let's try removing two letters.
    for (let i = 0; i <= str.length; i++) {
        //remove a letter from the string.
        let substr = str.slice(0, i) + str.slice(i+1, str.length + 1)
        //console.log("i:  ", i, "substr: ", substr);

        // if (!isPalindrome(substr)) {
            for (let j = 0; j < substr.length; j++) {

                //remove a letter from the substring
                let sub2str = substr.slice(0, j) + substr.slice(j+1, substr.length+1);
                console.log("j: ", j, " sub2str: ", sub2str);
                if (isPalindrome(sub2str)) {
                    if (sub2str.length < 3) {
                        return 'not possible'
                    } else {
                        badActors += str[i];
                        badActors += substr[j];

                        return badActors;
                    }
                }
            }
            // } else {

            //     badActors += str[i];
            //     console.log("badActors:  ", badActors);
            //     return badActors;
            // }
        }

    // }
    return 'not possible'
}

function isPalindrome(str) {
    let splitString = str.split(""); // var splitString = "hello".split("");
    let reverseArray = splitString.reverse();
    let reverseStr = reverseArray.join("");

    if (reverseStr === str) {
        return true
    } else {
        return false;
    }
}


// console.log(palindromeIndex("abcjcba"));
// console.log(PalindromeCreator('aajabaaka'));
// console.log(PalindromeCreator('aabaa'));
// console.log("Expecting : input: racecar, output: palindrome");
// console.log(PalindromeCreator('racecar'));
// console.log("Expecting : input: 'aaabaaaj', output: 'j'");
// console.log(PalindromeCreator('aaabaaaj'));
// console.log("Expecting: input: 'annak', output: 'k'");
// console.log(PalindromeCreator('annak'));
// console.log("Expecting: input: 'aaaaaa', output: 'palindrome'");
// console.log(PalindromeCreator('aaaaaa'));
console.log("Expecting: input: 'aaabhcaaa', output: 'bh'");
console.log(PalindromeCreator('aaabhcaaa'));

//got 3 wrong - the annak, aaabaaaj, and aaaaaa.  added an initial once through to check whether
//the removal of just one letter would work before trying to check if removing 2 letters is required.
//also added the check for a string < 3 - got that wrong too on "mmop", should have been not possible
