

// My test score link:  https://app.codility.com/c/feedback/SKNEBV-3WG/
//Ya, screwed the pooch.  This was for Genospace.
//It was just a matter of making sure to transform the
//string to lower case and that's all it needed!

/*  algorithm
    1.  transform everything to lower case;
    2.  create an array representing the position of every letter via index 0-25
    3.  cycle through the incoming string
        a.  determine what the character position will be
            - first find the code at the character
*/
function solution(S) {
    let lowerS = S.toLowerCase();
    var occurrences = new Array(26);
    //set every letter as array index, and occurrences as 0 to initialize
    for (var i = 0; i < occurrences.length; i++) {
        occurrences[i] = 0;
    }
    // for ( <var> in <string> ) {
        // returns index of each element of string;
    // for ( <var> of <string> ) {
        // returns each character of string
        
    //for (var id in lowerS) {
        for (let id = 0; id < lowerS.length; id++) {
        //id yields the index of the characters in lowerS
        //lowerS.charCodeAt(id) yields the character code at position id of lower
            // Code:   104  id:   0  lowerS[id]:   h
            // code - 'a'.charCodeAt(0) = 104 - 97 = 7
            // Code:   101  id:   1  lowerS[id]:   e
            // code - 'a'.charCodeAt(0) = 101 - 97 = 4
            // Code:   108  id:   2  lowerS[id]:   l
            // code - 'a'.charCodeAt(0) = 108 - 97 = 11
            // Code:   108  id:   3  lowerS[id]:   l
            // code - 'a'.charCodeAt(0) = 108 - 97 = 11
            // Code:   111  id:   4  lowerS[id]:   o
            // code - 'a'.charCodeAt(0) = 111 - 97 = 14
        let code = lowerS.charCodeAt(id);
        console.log("Code:  ", code, " id:  ", id, " lowerS[id]:  ", lowerS[id]);
        //Subtracting the character code of 'a' from code yields the character # of a-z (0-25)
        let index = code - 'a'.charCodeAt(0);
        console.log(`code - 'a'.charCodeAt(0) = ${code} - ${'a'.charCodeAt(0)} = ${index}`);
        occurrences[index]++;
    }
    console.log("New occurrences:  ", occurrences);

    var best_char = 'a';
    var best_res  = occurrences[0]; //replace 0 with the actual value of occurrences of 'a'

    //starting i at 1, because we've already set best_char = 'a' and 'a's occurrences.
    for (var i = 1; i < 26; i++) {
        if (occurrences[i] >= best_res) {
            //Now reverse this from an index (i) to a character code (fromCharCode) to a character (best_char)
            best_char = String.fromCharCode('a'.charCodeAt(0) + i);
            best_res  = occurrences[i];
        }
    }

    return best_char;
}

let S = 'aaaaaaaaHELLOz';
console.log(solution(S));
