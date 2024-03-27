const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill")
const tipInput = document.getElementById("tip")
const Totalspan = document.getElementById("total")


function calculateTotal(){
    // console.log("clicked");

    const billValue = billInput.value;
    // console.log(billValue)

    const tipValue = tipInput.value;
    // console.log(tipValue)

    const totalvalue = billValue * (1 + tipValue / 100);
    // console.log(totalvalue);

    Totalspan.innerHTML = totalvalue.toFixed(2);
}

btnEl.addEventListener("click", calculateTotal);