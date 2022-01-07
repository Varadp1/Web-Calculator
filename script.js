var Btn1 = document.getElementById("Btn1");
var Btn2 = document.getElementById("Btn2");
var Btn3 = document.getElementById("Btn3");
var Btn4 = document.getElementById("Btn4");
var Btn5 = document.getElementById("Btn5");
var Btn6 = document.getElementById("Btn6");
var Btn7 = document.getElementById("Btn7");
var Btn8 = document.getElementById("Btn8");
var Btn9 = document.getElementById("Btn9");
var Btn0 = document.getElementById("Btn0");

var AddBtn = document.getElementById("AddBtn");
var SubtractBtn = document.getElementById("SubtractBtn");
var MultiplicationBtn = document.getElementById("MultiplicationBtn");
var DivisionBtn = document.getElementById("DivisionBtn");

var ClearBtn = document.getElementById("ClearBtn");
var EqualsBtn = document.getElementById("EqualsBtn")

var TextArea = document.getElementById("TextArea").children[0];
var equalsblock = document.getElementById("TextArea").children[1]

const OtherOperationBtns = [ClearBtn, EqualsBtn];
const OperationBtns = [AddBtn, SubtractBtn, MultiplicationBtn, DivisionBtn];
const NumberBtns = [Btn0, Btn1, Btn2, Btn3, Btn4, Btn5, Btn6, Btn7, Btn8, Btn9];

NumberBtns.forEach(element => {
    element.onclick = function () {
        if (TextArea.innerHTML == "0") {
            TextArea.innerHTML = element.value;
        }
        else {
            TextArea.innerHTML = TextArea.innerHTML + element.value;
            equalsblock.style = "opacity:0.0";
            TextArea.style = "opacity:1.0";
        }

        if (TextArea.innerHTML.length >= 15) {
            TextArea.style = "font-size:35px";
        }

        if (TextArea.innerHTML.length >= 30) {
            TextArea.style = "font-size:30px";
        }

        if (TextArea.innerHTML.length >= 45) {
            TextArea.style = "font-size:25px";
        }
    }
});

AddBtn.onclick = function () {
    if (
        TextArea.innerHTML.slice(-2) == "+ " ||
        TextArea.innerHTML.slice(-2) == "- " ||
        TextArea.innerHTML.slice(-2) == "* " ||
        TextArea.innerHTML.slice(-2) == "/ ") {
        str = TextArea.innerHTML.slice(0, -3);
        str = str + " + ";
        TextArea.innerHTML = str;

    }
    else {
        TextArea.innerHTML = TextArea.innerHTML + " + ";
        equalsblock.style = "opacity:0.0";
        // TextArea.style = "opacity:1.0";
    }

}

SubtractBtn.onclick = function () {
    if (
        TextArea.innerHTML.slice(-2) == "+ " ||
        TextArea.innerHTML.slice(-2) == "- " ||
        TextArea.innerHTML.slice(-2) == "* " ||
        TextArea.innerHTML.slice(-2) == "/ ") {
        str = TextArea.innerHTML.slice(0, -3);
        str = str + " - ";
        TextArea.innerHTML = str;

    } else {
        TextArea.innerHTML = TextArea.innerHTML + " - ";
        equalsblock.style = "opacity:0.0";
        // TextArea.style = "opacity:1.0";
    }
}
MultiplicationBtn.onclick = function () {
    if (
        TextArea.innerHTML.slice(-2) == "+ " ||
        TextArea.innerHTML.slice(-2) == "- " ||
        TextArea.innerHTML.slice(-2) == "* " ||
        TextArea.innerHTML.slice(-2) == "/ ") {
        str = TextArea.innerHTML.slice(0, -3);
        str = str + " * ";
        TextArea.innerHTML = str;
    } else {
        TextArea.innerHTML = TextArea.innerHTML + " * ";
        equalsblock.style = "opacity:0.0";
        // TextArea.style = "opacity:1.0";
    }
}
DivisionBtn.onclick = function () {
    if (
        TextArea.innerHTML.slice(-2) == "+ " ||
        TextArea.innerHTML.slice(-2) == "- " ||
        TextArea.innerHTML.slice(-2) == "* " ||
        TextArea.innerHTML.slice(-2) == "/ ") {
        str = TextArea.innerHTML.slice(0, -3);
        str = str + " / ";
        TextArea.innerHTML = str;
    } else {
        TextArea.innerHTML = TextArea.innerHTML + " / ";
        equalsblock.style = "opacity:0.0";
        // TextArea.style = "opacity:1.0";
    }
}

EqualsBtn.onclick = function () {
    var text = TextArea.innerHTML;

    equalsblock.style = "opacity:1.0";
    equalsblock.style.fontSize = TextArea.style.fontSize;
    TextArea.style = "opacity:0.0";
    equalsblock.innerHTML = eval(text);
}

ClearBtn.onclick = function () {
    TextArea.innerHTML = "0";
    equalsblock.style = "opacity:0.0";
    TextArea.style = "opacity:1.0";
}

