const btns = document.querySelectorAll('#buttons');
const display = document.querySelector('.display');
const clearBtn = document.querySelector('#ac'); 
const delBtn = document.querySelector('#del');
const opBtns = document.querySelectorAll('#operator');
let currentInput = '';
let previousInput = '';
let operator = null;
let shouldResetDisp = false;
let calcFinished = false;

const updateDisplay = (value) =>{
    display.textContent = value;
}

const clear = ()=>{
    currentInput ='';
    previousInput = '';
    operator = null;
    shouldResetDisp = false;
    calcFinished = false;

    updateDisplay(currentInput);
}

const appendNum = (num) =>{
    if(currentInput === '' || calcFinished || shouldResetDisp){
        currentInput = num;
        shouldResetDisp = false;
        calcFinished = false;
        updateDisplay(currentInput);        
    }else{
        currentInput += num; 
    }

    updateDisplay(currentInput);
}

const deleteNum = () => {
    currentInput = currentInput.slice(0,-1); 

    updateDisplay(currentInput);
}


const chooseOperator = (newOperator) =>{
    if(operator !=null && !shouldResetDisp){
        operate();
    }
    previousInput = currentInput;
    operator = newOperator;
    shouldResetDisp = true;
    calcFinished = false;
}

let sum =function(a,b){
    return a+b;
}

let subtract = function(a,b){
    return a-b;
}

let multiply = function(a,b){
    return a*b;
}

let divide = function(a,b){
    if(b==0){
        alert("Cannot divide by zero");
    }
    return a/b;
}

let operate = (x,y,operator)=>{
    if(operator== '+'){
        return sum(x,y);
    }else if(operator== '-'){
        return subtract(x,y);
    }else if(operator== '*'){
        return multiply(x,y);
    }else if(operator=='/'){
        return divide(x,y);
    }
}

btns.forEach((btn)=>{
    btn.addEventListener('click', function(){
        const val = btn.textContent;
        appendNum(val);
    });
});

clearBtn.addEventListener('click',clear);
delBtn.addEventListener('click',deleteNum);