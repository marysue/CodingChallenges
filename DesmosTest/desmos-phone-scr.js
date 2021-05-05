const fetch = require('node-fetch');

let dict;

fetch(
    'https://gist.githubusercontent.com/dlants/d3b25b0f6c0bf8d023f65e86498bf9e6/raw/b310b5aff00f62f5073b3b8d366f5a639aa88ee3/3000-words.txt'
).then(
  (res) => res.text()
).then(
  (text) => {
  dict = text.split('\n');
//console.log("Dict:  ", dict)
});

function tryThis() {
    const word = "aggressive";
    const o = [];
    console.log("dict:  ", dict);

    console.log("tryThis ... ");
    for (let word2 of ['a', 'b', 'c']) {
        console.log("inside for loop");
        //sort each word for comparison
        const sortedWord = word.split("").sort().join("");
        const sortedWord2 = word2.split("").sort().join("");
        if (sortedWord == sortedWord2) {
            o.push(word2)
        }

    }
    console.log("O:  ", o);
}

console.log("Trying...");
tryThis(dict);
