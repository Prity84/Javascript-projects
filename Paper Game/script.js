let userScore = 0;
let computerScore = 1;

const choices = document.querySelectorAll('.choice');

const mes = document.querySelector('#message')

const userscorePara = document.querySelector('#UserScore');

const comscorePara = document.querySelector('#ComputerScore')


const drawGame = () => {
    console.log(" HAHA, Game was Draw!😂 Play again ");
    mes.innerText = " HAHA, Game was Draw!😂Play again";
    mes.style.backgroundColor = "#1287A5";

}

const showWinner = (Userwin, ComChoice, Userchoice) => {
       if(Userwin){
        userScore++;
        userscorePara.innerText = userScore;
        mes.innerText = `Congratulations ,You won!🎉😊Your  ${Userchoice} beats ${ComChoice}`;
        mes.style.backgroundColor = "#BB2CD9";
       }else 
       {
          computerScore++;
          comscorePara.innerText = computerScore;
          mes.innerText = ` Opps, You lost!😑  ${ComChoice} beats Your ${Userchoice}`;
          mes.style.backgroundColor = "#758A45";

          
        }
}
const genComChoices = () => {
    const options = ["rock", "paper", "sessor"];
    const RandomIndex = Math.floor(Math.random() * 3);
    return options[RandomIndex];
}

const playGame = (Userchoice) => {
    // console.log("User choice =", Userchoice);

    //Generate Computer choice
    const ComChoice = genComChoices();
    // console.log("Computer choice =", ComChoice);

    if (Userchoice === ComChoice) {
        //Draw Game
        drawGame();
    } else {
        let Userwin = true;
        if (Userchoice === "rock") {
            //scissors , paper
            Userwin = ComChoice === "paper" ? false : true;
        } else if (Userchoice === "paper") {
            // rock, scissors
            Userwin = ComChoice === "sessor" ? false : true;
        } else {
            //rock,paper
            Userwin = ComChoice === "rock" ? false : true;
        }
        showWinner(Userwin, ComChoice, Userchoice);


    }

}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener('click', () => {

        const Userchoice = choice.getAttribute("id");
        // console.log('choice was clicked', Userchoice);
        playGame(Userchoice)

    });

});
