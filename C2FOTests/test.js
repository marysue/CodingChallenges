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
console.log("Expecting: input: 'aaabhcaaa', output: 'not possible'");
console.log(PalindromeCreator('aaabhcaaa'));
