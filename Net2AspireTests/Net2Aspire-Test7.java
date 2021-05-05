//Which input would return a value of true?

public boolean isSpecial(String text) {
    String tempText = alterText(text);
    return text.equals(tempText);
}


public String alterText(String inputText) {
    if (inputText == null || inputText.isEmpty()) {
        return inputText;
    }

    return inputText.charAt(inputText.length() - 1) +
        alterText(inputText.substring(0, inputText.length() - 1));
}

// 'abcd4321'
// 'abcdef'
// 'aaabbb'
// 'a1a1b2'
// 'ab1221ba'

