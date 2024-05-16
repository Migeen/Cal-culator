const btns = document.querySelectorAll('.buttons');
const display = document.querySelector('.display');
let input = '';
let operator = null;
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

const handleNUm = function(val){
    if(input===''){
        input=val;
    }else{
        input+=value;
    }

}


btns.forEach((btn) => {
    btn.addEventListener('click',function(){
        const value = btn.textContent;

        if(value >=0 && value<=9){
            return handleNUm(value);
        }
        display.textContent = value;
    })
});