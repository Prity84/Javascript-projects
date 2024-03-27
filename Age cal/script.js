const buttonEl = document.getElementById("btn");

const birthdayEl = document.getElementById("birthday");

const resultEl = document.getElementById("result");



function calculateAge() {
    // console.log("prity");

    const birthdayValue = birthdayEl.value;
    // console.log(birthdayValue);

    if (birthdayValue === "") {
        alert("Please Enter Your Birth date")
    }
    else {
        let age = getAge(birthdayValue)
        // console.log(age);
        resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }

    function getAge(birthdayValue) {
        const currentDate = new Date();
        const birthDate = new Date(birthdayValue);
        // console.log(birthDate.getFullYear());

        const age = currentDate.getFullYear() - birthDate.getFullYear();
        // console.log(age);

        const months = currentDate.getMonth() - birthDate.getMonth();
        if (months < 0 || (months === 0 && currentDate.getDate() < birthDate.getDate())) {
            age--

        }

        return age;


    }

}

buttonEl.addEventListener("click", calculateAge);