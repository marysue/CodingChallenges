/*
given n, for i = 1; i <= n; print whether i satisfies the following requirements and print the results as indicated:
There should be exactly n lines of output for each input.

if i is divisible by 2 AND 3, print "OnBase"
if i is divisible by 2 but not 3, print "On"
if i is divisible by 3 but not 2, print "Base"
if i is not divisible by either 2 or 3, print n
*/
function OnBase(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            console.log(i, ":  OnBase");
        } else if ( i % 2 === 0) {
            console.log(i, ":  On");
        } else if ( i % 3 === 0) {
            console.log(i, ":  Base");
        } else {
            console.log(i, ": ", i);
        }
    }
}

OnBase(30);

/*
    Print a list of all prime numbers contained in 'n'

    Enumerate Primes:

    Comple the printListOfPrimes function.  It has one parameter: an integer, n. The function should
    print every prime number i (where 2 <= i <= n), each on its own line.

    A prime number is a positive integer that is only divisible by itself and 1.  1 is not prime.

    Input Format
        Locked stub code in the editor reads an integer, n, from stdin and passes it to the function.

    Constraints:
        0 < n < 1000000

    Output Format
        Print each prime number less than or equal to n, each on its own line. 
*/
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function printListOfPrimes(n) {
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

printListOfPrimes(30);
/*
 * Complete the 'dnaComplement' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 *
 * Complementing a DNA Strand
 * A DNA string is made up of four symbols: A, T, C, and G.
 * Each symbol has a complement:
 *  A and T complement each other
 *  C and G complement each other
 *
 * Determine the reverse complement of a DNA string by reversing the symbols in the string and replacing
 * each symbol in the reversed string by its complement.
 *
 * Example:
 *  s = GTCAG
 *
 *  Revers the string:  GTCAG --> GACTG
 *  Replace each symbol by its complement GACTG --> CTGAC
 *  The reverse complement of a DNA string is CTGAC
 *
 * Function description:
 *  Complete the function dnaComplement in the editor.
 *
 *   dnaComplement has the following parameter(s):
 *      string s:  a string of DNA symbols
 *   Returns:
 *      string: a string denoting the reverse complement of s.
 *
 *  Constraints:
 *      1 <= length of s <= 1000
 *      Each character s[i] is in the set [A,T,C,G]
 *
 *  Sample Case 0
 *
 *      Sample Input 0:
 *          STDIN           Function Parameters
 *          ---------       ---------------------
 *          ACCGGGTTTT ->   string s = "ACCGGGTTTT"
 *
 *      Sample Output 0
 *          AAAACCCGGT
 *
 *      Explanation 0
 *          Reverse the string ACCGGGTTTT --> TTTTGGGCCA
 *          Replace each symbol by its complement:  TTTTGGGCCA  --> AAAACCCGGT
 *          The reverse complement of DNA string is s(subc) = AAAACCCGGT
 *
 */

function getComplement(s) {
    switch (s) {
        case 'A' : return 'T';
        case 'T' : return 'A';
        case 'C' : return 'G';
        case 'G' : return 'C'
    }
}
function reverseString(s) {
    let reversed = [];
    for (let i = s.length - 1; i >= 0; i--) {
        reversed.push(s[i]);
    }
    return reversed.join('');
}
function dnaComplement(s) {
    // Write your code here
    let tmpStr = reverseString(s);
    let complementString = ''
    for (let i = 0; i < tmpStr.length; i++) {

        complementString += getComplement(tmpStr[i]);
    }
    console.log(complementString)
    return complementString;

}


let S = 'ACCGGGTTTT'
console.log('Input: ', S);
console.log("Expecting:  AAAACCCGGT")
dnaComplement(S);
