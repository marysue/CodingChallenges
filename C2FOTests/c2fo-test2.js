/*
Basic Roman Numerals

Have the function BasicRomanNumerals (str) read str which will be a string of Roman numerals.
(The numerals being used are: I for 1, V for 5, X for 10, L for 50, C for 100, D for 500, and M for 1000.
    In Roman numerals, to create a number like 11 you simply add a 1 after the 10, so you get XI. But
    to create a number like 19, you uise the subtraction notation which is to add an I before an X or V
    (or add an X before an L or C). So 19 in roman numerals is XIX.

    The goal of your program is to return the decimal equivalent of the Roman numeral given. For example:
    if str is "XXIV" your program should return 24.

    Examples:
        Input: "IV"
        Output: 4

        Input: "XLVI"
        Output: 46


*/

function char_to_int(c) {
    switch (c){
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return -1;
        }
 }

 //XXVI
 i = 0
    num = 'X' = 10



/*
 XXVI
   iter     i      charAt(i)         num     pre     curr
   0        0        'X'             10      --        --
   1        1        'X'             20      10        10
   2        2        'V'             25      10        5
   3        3        'I'             26       5        1

   XXIV

   iter     i       charAt(i)       curr    pre     num
    0       0        'X'            --      --      10
    1       1        'X'            10      10      20
    2       2        'I'             1      10      21
    3       2        'V'             5      1       24     num = pre*2 + curr = 21  -  2 + 5 = 24

IX
    iter    i       charAt(i)       curr    pre     num
    0       0       I               --      --      1
    1       1       X               10      1           num = num - pre*2 + curr = 1 - 2 + 10 = 9

IV
    iter    i       charAt(i)       curr    pre     num
    0       0       I               --      --      1
    1       1       V               5       1           num = num - pre*2 + curr = 1 - 2 + 5 = 4
    
*/



function roman_to_Int(str1) {
    if(str1 == null) return -1;

    let num = char_to_int(str1.charAt(0));
    let pre, curr;

    for(var i = 1; i < str1.length; i++){
        curr = char_to_int(str1.charAt(i));
        pre = char_to_int(str1.charAt(i-1));
        if(curr <= pre){
            num += curr;
        } else {
            num = num - pre*2 + curr;
        }
    }

    return num;
 }



console.log(roman_to_Int('XXVI'));
console.log(roman_to_Int('CI'));

// console.log("Input: XXIV, Expected: 24");
// console.log(BasicRomanNumerals('XXIV'));
// console.log("Input: IV, Expected: 4");
// console.log(BasicRomanNumerals('IV'));
// console.log("Input: XLVI, Expected: 46");
// console.log(BasicRomanNumerals('XLVI'));
