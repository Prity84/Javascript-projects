const InputEl = document.getElementById("input");

const ButtonEl = document.querySelector(".btn");

const CopyconEl = document.querySelector(".fa-copy");

const alertContainetEl = document.querySelector(".alert-container");

ButtonEl.addEventListener("click", () => {
    createPass()
})

CopyconEl.addEventListener("click", () => {
    copyPassword()
    // alertContainetEl.classList.remove("active")
});

function createPass() {
    const chars = "01234567890abcdefghijklmnopqrstuvwxyz!@#$%&*(){}[]|ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    const passwordLength = 14;
    let password = "";
    for (let index = 0; index < passwordLength; index++) {
        const randomnum = Math.floor(Math.random() * chars.length);

        password += chars.substring(randomnum, randomnum + 1);

        alertContainetEl.innerText = password + "copied";


        // console.log(randomnum, password);

    }
    InputEl.value = password;
}
function copyPassword() {
    InputEl.select();
    navigator.clipboard.writeText(InputEl.value)
}