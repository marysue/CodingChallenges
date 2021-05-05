let inputArr = [
    ['DEPEND', 'TELNET', 'TCPIP', 'NETCARD'],
    ['DEPEND', 'TCPIP', 'NETCARD'],
    ['DEPEND', 'NETCARD', 'TCPIP'],
    ['DEPEND','DNS', 'TCPIP', 'NETCARD'],
    ['DEPEND','BROWSER','TCPIP','HTML'],
    ['INSTALL', 'NETCARD'],
    ['INSTALL', 'TELNET'],
    ['INSTALL', 'foo'],
    ['REMOVE', 'NETCARD'],
    ['INSTALL', 'BROWSER'],
    ['INSTALL', 'DNS'],
    ['LIST'],
    ['REMOVE', 'TELNET'],
    ['REMOVE', 'NETCARD'],
    ['REMOVE', 'DNS'],
    ['REMOVE', 'NETCARD'],
    ['INSTALL', 'NETCARD'],
    ['REMOVE', 'TCPIP'],
    ['REMOVE', 'BROWSER'],
    ['REMOVE', 'TCPIP'],
    ['LIST'],
    ['END']
];

let dependencyDict = {};
let installedArr = [];

function processInputArray() {
    for (let i = 0; i < inputArr.length; i++) {
        let program = inputArr[i][0];
        switch (program) {
            case 'INSTALL':
                console.log("INSTALL ", inputArr[i][1]);
                installProgram(inputArr[i][1])
                break;
            case 'REMOVE':
                console.log("REMOVE ", inputArr[i][1]);
                removeProgram(inputArr[i][1])
                break;
            case 'LIST':
                console.log("LIST");
                listInstalled();
                break;
            case 'DEPEND':
                console.log(inputArr[i].join(' '));
                addDependency(inputArr[i]);
                break;
            case 'END':
                console.log("END");
                break;
        }
    }
    console.log("dependencyDict:  ", dependencyDict);
    console.log("Installed:  ", installedArr);

}

const addDependency = (inputLine) => {
    //look for program in each dependency
    //so if we have a dependency in the dependencyArr, add this program to it
    let program = inputLine[1];
    //console.log("DependencyDict: ", dependencyDict);
    for (let i=2; i < inputLine.length; i++) {
        //console.log("Adding ", program, " to dependency ", inputLine[i])
        if (inputLine[i] && inputLine[i] in dependencyDict) {
            dependencyDict[inputLine[i]].push(program);
        } else if (inputLine[i]) {
           dependencyDict[inputLine[i]] = [ program ];
        }
    }
    console.log(dependencyDict);

}

function removeDependency(program) {
    // if program in dependency array && dependency array list is not empty, cannot remove
    //console.log("Removing dependencies for program: ", program);

}

function installProgram(program) {
    installedArr.push(program);
    console.log("     Installing ", program)
    //console.log("New installedArr:  ", installedArr);
}
function dependsOn(program) {
    let depends = ''
    //console.log("dependencyDict:  ", dependencyDict);
    for (let key in dependencyDict) {
        if (dependencyDict[key].length > 1) {
            continue;
        }
        if (dependencyDict[key].includes(program) && dependencyDict[key].length > 1) {
            for (k in dependencyDict[key]) {
                if (k != program) {
                depends = depends + ' ' + k;
                }
            }
        }
    }
    return depends;
}

function removeFromDependencyList(program) {
    for (let key in dependencyDict) {
        if (dependencyDict[key].includes(program)) {
            let index = dependencyDict[key].indexOf(program);
            dependencyDict[key].splice(index, 1);
        }
    }
}

function removeProgram(program) {
    let depends = dependsOn(program);
    if (depends == '') {
        //can remove program
        removeFromDependencyList(program);
        let index = installedArr.indexOf(program);
        installedArr.splice(index, 1);
        console.log("     Removing ", program);
    } else {
        console.log("     ", program, " depends on ", depends);
    }

}

function listInstalled() {
    for (let i = 0; i < installedArr.length; i++) {
        console.log("  ", installedArr[i]);
    }
}

processInputArray();
