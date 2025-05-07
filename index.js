let mourselookup = {
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--.."
}
let mourseunlookup = Object.fromEntries(
    Object.entries(mourselookup).map(([k, v]) => [v, k])
);
  

function GetTestFromTextBox() {
    return document.getElementById("input");
}

function ShowResult(result) {
    var box = document.getElementById("result");


    box.innerHTML = "<p>"+ result +"</p>"
}


function Parse() {
    var input = GetTestFromTextBox().value;
    var output = "";
    var char = "";

    for (let i = 0; i < input.length; i++) { 
        if (input[i] === " ") {
            output += "|";
        } else {
            char = mourselookup[input[i]]
            if (char == undefined) {
                output += char;
            } else {
                output +=  (mourselookup[input[i]])
                if (i + 1 < input.length && input[i+1] != " ") {
                    output += "/";
                }
            }
        }
    }
    ShowResult(output);
}

function Encode() {
    var input = GetTestFromTextBox().value;
    var currentword = "";
    var output = "";
    var char;

    for(let i = 0; i < input.length; i++) {
        if(input[i] == "/" ) {
            char = mourseunlookup[currentword];
            if (char === undefined) {
                output += currentword;
            } else {
                output += mourseunlookup[currentword];
            }
            currentword = "";
        } else if(input[i] == "|") {
            char = mourseunlookup[currentword];
            if (char === undefined) {
                output += currentword;
            } else {
                output += mourseunlookup[currentword];
            }
            output += " ";
            currentword = "";
        } else {
            currentword += input[i];
        }
    }
    char = mourseunlookup[currentword];
    if (char === undefined) {
        output += currentword;
    } else {
        output += mourseunlookup[currentword];
    }
    ShowResult(output);
}