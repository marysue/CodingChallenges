

function validateClassCodes(code, distracting_words, existing_codes) {
    code = code.toLowerCase();
    if (existing_codes.includes(code)) {
        console.log("Code already has been used.");
        return false;
    } else {
        if (containsDistractingWords(code, distracting_words)) {
            console.log("Code contains a distracting word:  ", code);
            return false;
        } else {
            existing_codes.push(code);
            console.log("Adding code to existing codes: ", existing_codes);
            return true;
        }
    }
}

function containsDistractingWords(code, distracting_words) {
    if (foundWordInOrder(code, distracting_words)) {
        console.log("foundWordInOrder returned true!");
        return true;
    } else if (foundAllLettersInCode(code, distracting_words)) {
        console.log("foundAllLettersInCode returned true!");
        return true;
    } else {
        console.log("Code is good!");
        return false;
    }

}

function foundWordInOrder(code, distracting_words) {
    //returns true if the code contains distracting_words
    //in consecutive order (RATS42)
    for (let i = 0; i < distracting_words.length; i++) {
        if (distracting_words[i].toLowerCase().includes(code)) {
            console.log("found entire word in code: ", code);
            return true;
        } else {
            return false;
        }
    }

}

function foundAllLettersInCode(code, distracting_words) {
    //returns true if code contains all letters of
    //any distracting word

    //for each distracting word
    for (let i = 0; i < distracting_words.length; i++) {
        let distracting_word = distracting_words[i].toLowerCase();
        console.log(`Is ${code} in this distracting word: ${distracting_word}`);
        //look at every code character and see if it is in distracting word
        for (let j = 0; j < code.length; j++) {
            idx = distracting_word.indexOf(code[j])
            if (idx >= 0) {
                distracting_word = distracting_word.slice(0, idx) + distracting_word.slice(idx + 1);
                console.log(`     Found letter ${code[j]}, removing from distracting_word: ${distracting_word}`);
            }
            if (distracting_word.length === 0) {
                console.log("     foundAllLettersInCode:  ", distracting_word.length);
                return true;
            }
        }

    }
    //if we made it here, all of the letters of any distracting word is not in the code
    return false;

}

let distracting_words = [
    "darn",
    "rats",
    "egg",
    "fuzzy",
    "kthx",
    "haha",
    "ugh",
    "777",
    "cheese",
]

let existing_codes = [];

let testCodes = ['rats', 'RRATTS', 'TTRRTTTAASS', 'abc', 'def', 'ghi' ]

for (let i = 0; i < testCodes.length; i++) {
    if (!validateClassCodes(testCodes[i], distracting_words, existing_codes)) {
        console.log("Undesirable code ... ", testCodes[i], " ... moving on...");
    }
}
