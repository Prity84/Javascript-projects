const buttonsEl = document.querySelectorAll("button");
// console.log(buttonsEl);

const InputFieldEl = document.getElementById("result")

for(let i = 0; i < buttonsEl.length; i++){
    buttonsEl[i].addEventListener("click", ()=>{
        const buttonValue = (buttonsEl[i].textContent);
        if(buttonValue === "C"){
            clearResult()
        }
        else if(buttonValue === "="){
            calculateResults()
        }
        else{
            appenValue(buttonValue)
        }
    });
}
function clearResult(){
    InputFieldEl.value = "";

}
function calculateResults(){
    InputFieldEl.value = eval(InputFieldEl.value);
// eval is a finc to evaluate in js
}
function appenValue(buttonValue){
    InputFieldEl.value = InputFieldEl.value + buttonValue;

}
