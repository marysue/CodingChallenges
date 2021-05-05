/*
Write a function that, given a string S, returns a boolean indicating if all the brackets
in the input are balanced.

Two brackets are considered to be balanced if an opening bracket (i.e., '(', '['
or '{') occurs to the left of a closing bracket (i.e., ')', ']', or '}]) of the
exact same type with either no other brackets in between them, or only balanced
pairs of brackets in between them.

Function returns True or False
*/

function isBalanced(S) {
    let brackets = [];
    let opening = ['(', '[', '{'];
    let closing = [')', ']', '}'];

    for (let i = 0; i < S.length; i++) {
        if (opening.includes(S[i])) {
            brackets.push(S[i]);
            continue;
        }

        if (closing.includes(S[i])) {
            let current = brackets.pop();
            if (S[i] === ']' && current === '[') {
                continue;
            } else if (S[i] === '}' && current === '{') {
                continue;
            } else if (S[i] === ')' && current === '(') {
                continue;
            } else {
                return false;
            }
        } else {
            continue;
        }
    }
    return true;

}

let S = '(ab[cd]efg)';
console.log(isBalanced(S));
