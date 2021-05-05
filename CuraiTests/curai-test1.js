function textEditor(operations) {
    let lastOp = [];
    let textStr = '';

    for (let i = 0; i < operations.length; i++) {
        let op = getOps(operations[i]);
        let arg = getArgs(operations[i]);
        textStr = processOp(op, arg, lastOp, textStr)
    }
    return textStr;

}

function getOps(operation) {
    let op = operation.split(" ");
    return op[0];
}

function getArgs(operation) {
    let arg = operation.split(" ");
    if (arg.length > 1) {
        return arg[1];
    } else {
        return null;
    }
}

function processOp(operation, arg, lastOp, textStr) {
    console.log("arg:  ", arg);
    console.log("operation: ", operation);
    switch (operation) {
        case 'INSERT' :
            lastOp.push({'INSERT' : arg});
            textStr += arg;
            break;
        case 'DELETE' :
            let newObj = {'DELETE' : textStr[textStr.length - 1]};
            console.log("pushing lastOp:  ", newObj);
            lastOp.push({'DELETE' : textStr.length - 1});
            textStr = textStr.slice(0, textStr.length-1);
            break;
        case 'UNDO' :
            let undo = lastOp.pop();
            console.log("undoing:  ", undo);
            textStr = processUndo(undo, textStr);
            break;
        default :
            break;
    }
    console.log("New text string: ", textStr);
    return textStr;

}

function processUndo(op, textString) {
    if (op.INSERT) {
        let newStr = textString.slice(op.arg.length);
        console.log("Undoing insert:  ", newStr);
        return textString.slice(op.arg.length);
    } else if (op.DELETE) {
        let newStr = textString + op.arg;
        console.log("Undeleting newStr:  ", newStr);
        return textString += op.arg;
    }
    return textString;
}


console.log(textEditor(["INSERT abc", "INSERT def", "DELETE", "UNDO"]));
