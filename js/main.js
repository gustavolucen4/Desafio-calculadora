const data = document.querySelectorAll(".form-input");
const inputs = Array.from(data);
const result = document.querySelector("#result-box");

const btnPlus = document.querySelector("#btn-plus");
const btnTimes = document.querySelector("#btn-times");
const btnClear = document.querySelector("#btn-clear");

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function clear(){
    inputs.forEach(x => {
        x.classList.remove("input-error");
        x.value = '';
    });

    result.innerHTML = 0;
}

function check(){
    let boo = true;

    inputs.forEach(x => {
        if(isNumber(x.value)){
            x.classList.remove("input-error");
        }else{
            x.classList.add("input-error");
            boo = false;
        }
    });

    return boo;
}

function plus() {
    if(check()){
        result.innerHTML = Number(inputs[0].value) + Number(inputs[1].value);
    }
}

function times() {
    if(check()){
        result.innerHTML = Number(inputs[0].value) * Number(inputs[1].value);
    }
}

clear();

btnClear.addEventListener('click', clear);
btnPlus.addEventListener('click', plus);
btnTimes.addEventListener('click', times);
