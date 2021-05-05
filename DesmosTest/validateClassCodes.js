

function validateClassCodes(code, distracting_words, existing_codes) {

}

function containsDistractingWords(code, distracting_words) {


}

function foundWordInOrder(code, distracting_words) {
    //returns true if the code contains distracting_words
    //in consecutive order (RATS42)
    for (let i = 0; i < distracting_words.length; i++) {
        if (distracting_words.includes(code)) {
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
    //does the code contain all letters?
    for (let i = 0; i < distracting_words.length; i++) {

        let result = chars.filter( (char) => { return true;
        });
        if (result.length === 0) {
            return true;
        }
    }
    return false;

}

function inExistingCodes(code, existing_codes) {
    //returns true if code is one of our existing_codes
}
