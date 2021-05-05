

// Implement the runSequentially function, that should return a Promise that resolves to an
// array of results. The first argument to runSequentially, functions, is an array of functions
// where each function from the functions array returns a Promise. The functions should be
// run sequentially, one after another. If any of the functions throw an an exception,
// the runSequentially should reject the Promise. The first element in the result array should be
// the result of the first function from the functions array, the second element in the result
// array should be the result of the second function from the functions array, and so on.

// For example, the following code should print "[2, 3]":

//     let counter = 1;
//     function incrementCounterAsync() {
//         return new Promise(( resolve, reject) => {
//             counter += 1;
//             resolve(counter);
//         });
//     }

//     let promise = runSequentially( [incrementCounterAsync, incrementCounterAsync]);
//     if (promise) {
//         promise.then(result => console.log(result))
//         .catch(error => console.log("Error: " + error));
//     }

//     Test cases:
//     Example case:
//     The functions are run sequentially:
//     The return value is correct:
//     The Promise is rejected on error:
//

async function runSequentially(functions) {
    //Write your code here
    let result = [];
    for (let i = 0; i < functions.length; i++) {
        //console.log("Function[", i, "]:  ", functions[i]);
        let promise = functions[i];
        try {
            result.push(await promise());
        } catch (err) {
            return (err);
        }
    }
    return result;
}

let counter = 0;
    function incrementCounterAsync() {
    return new Promise(( resolve, reject) => {
        counter += 1;
        // if (counter === 1) {
        //     resolve(counter);
        // } else {
        //     reject('Failed');
        // }
        resolve(counter);
    });
}

let promise = runSequentially( [incrementCounterAsync, incrementCounterAsync]);
if (promise) {
    promise.then(result => console.log(result))
}
module.exports.runSequentially = runSequentially;
