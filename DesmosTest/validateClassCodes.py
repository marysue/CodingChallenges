

def validateClassCodes(code, distracting_words, existing_codes):
    code = code.lower()
    if code in existing_codes :
        print("Code already has been used.")
        return False
    else:
        if containsDistractingWords(code, distracting_words):
            print("Code contains a distracting word:  ", code)
            return False
        else :
            existing_codes.append(code)
            print("Adding code to existing codes: ", existing_codes)
            return True

def containsDistractingWords(code, distracting_words):
    if foundWordInOrder(code, distracting_words) :
        print("foundWordInOrder returned true!")
        return True
    elif foundAllLettersInCode(code, distracting_words):
        print("foundAllLettersInCode returned true!")
        return True
    else :
        print("Code is good!")
        return False




def foundWordInOrder(code, distracting_words):
    # returns Trueif the code contains distracting_words
    # in consecutive order (RATS42)
    for distracting_word in distracting_words:
        if distracting_word.lower() in code:
            print("found entire word in code: ", code)
            return True
        else :
            return False


def foundAllLettersInCode(code, distracting_words) :
    #returns Trueif code contains all letters of
    #any distracting word

    #for each distracting word
    for distracting_word in distracting_words:
        distracting_word = distracting_word.lower()
        print(f'Is {code} in this distracting word: {distracting_word}')
        #look at every code character and see if it is in distracting word
        for char in code :
            idx = distracting_word.find(char)
            if (idx >= 0):
               # distracting_word = distracting_word.slice(0, idx) + distracting_word.slice(idx + 1);
                distracting_word = distracting_word[:idx] + distracting_word[idx + 1:]
                print('     Found letter {char}, removing from distracting_word: {distracting_word}');

            if len(distracting_word) == 0:
                print("     foundAllLettersInCode:  ", len(distracting_word));
                return True

    #if we made it here, all of the letters of any distracting word is not in the code
    return False


distracting_words = [
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

existing_codes = []

testCodes = ['rats', 'RRATTS', 'TTRRTTTAASS', 'abc', 'def', 'ghi' ]

for code in testCodes :
    if  not validateClassCodes(code, distracting_words, existing_codes):
        print("Undesirable code ... ", code, " ... moving on...")
