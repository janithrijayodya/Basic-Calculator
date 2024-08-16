

let txtDisplay = document.getElementById("txtDisplay");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");

let btnAdd = document.getElementById("btn+");
let btnSub = document.getElementById("btn-");
let btnDiv = document.getElementById("btn/");
let btnMul = document.getElementById("btn*");


btn0.addEventListener("click", e=>{
    txtDisplay.value+=0;
});
btn1.addEventListener("click", e=>{
    txtDisplay.value+=1;
});
btn2.addEventListener("click", e=>{
    txtDisplay.value+=2;
});
btn3.addEventListener("click", e=>{
    txtDisplay.value+=3;
});
btn4.addEventListener("click", e=>{
    txtDisplay.value+=4;
});
btn5.addEventListener("click", e=>{
    txtDisplay.value+=5;
});
btn6.addEventListener("click", e=>{
    txtDisplay.value+=6;
});
btn7.addEventListener("click", e=>{
    txtDisplay.value+=7;
});
btn8.addEventListener("click", e=>{
    txtDisplay.value+=8;
});
btn9.addEventListener("click", e=>{
    txtDisplay.value+=9;
});


let num1;
let op;

btnAdd.addEventListener("click", e=>{
    num1 = parseFloat(txtDisplay.value);
    txtDisplay.value="";
    // console.log(num1);
    op = "+";
    // console.log(op);
});
btnSub.addEventListener("click", e=>{
    num1 = parseFloat(txtDisplay.value);
    op = "-";
    txtDisplay.value="";
});
btnMul.addEventListener("click", e=>{
    num1 = parseFloat(txtDisplay.value);
    op = "*";
    txtDisplay.value="";
});
btnDiv.addEventListener("click", e=>{
    num1 = parseFloat(txtDisplay.value);
    op = "/";
    txtDisplay.value="";
});



let num2;
let outNo;

function cal(){

    num2 = parseFloat(txtDisplay.value);

    switch(op){
        case "+":
            outNo = num1+num2;
            txtDisplay.value = outNo;
            break;
        case "-": 
            outNo = num1-num2;
            txtDisplay.value = outNo;
            break;
        case "/":
            outNo = num1/num2;
            txtDisplay.value = outNo;
            break;
        case "*":
            outNo = num1*num2;
            txtDisplay.value = outNo;
            break;
        default: 
            console.log("invalid")
    }
}