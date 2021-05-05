/*
Using streams:

Finish the setupStreams function that should set up streams so that they:
    - receive data from datainputStream
    - transform each chunk into an object and add an incremented id field that starts from zero.
    - Write the object into the dataOutputStream.
    - Invoke the callback argument once the dataInputStream is finished.

    Each chunk the dataInputStream receives will be a valid JavaScript object in JSON string format.

    For example, the following code:

         let readable = new stream.Readable();
         let writeable = new stream.Writable({   objectMode: true,
                                                    write: ( chunk, encoding, callback) => {
                                                        console.log(chunk);
                                                        callback(null, true);
                                                    }
                                                });
        setupStreams( readable, writable, () => console.log("onEnd"));

        readable.push('{ "log": "Request received" }');
        readable.push(null);

    should print:
         { log: 'Request received', id: 0}
         onEnd


    Test Cases:
        Example case:
        Objects are written to dataOutputStream:
        Objects are written to dataOutputStream with correct id:
        callback argument is invoked when the dataInputStream is finished:
*/

const stream = require('stream');

function setupStreams(dataInputStream, dataOutputStream, callback) {
    // write your code here
    let retObj = {};
    let counter = 0;
    console.log(dataInputStream.read().toString());
    // console.log(dataInputStream._readableState.buffer.head);
    // for (let i=0; i < dataInputStream.length; i++) {
    //     //dataOutputStream += dataInputStream.shift();
    //     let obj = json.parse(dataInputStream[i]);
    //     console.log("Str: ", obj);
    //     //retObj += {log:
    // }


}

let readable = new stream.Readable();
let writeable = new stream.Writable({   objectMode: true,
                                        write: ( chunk, encoding, callback) => {
                                            console.log(chunk);
                                            callback(null, true);
                                        }
                                    });
readable.push('{ "log": "Request received" }');
readable.push(null);
setupStreams(readable, writeable, () => console.log("onEnd"));


module.exports.setupStreams = setupStreams;
