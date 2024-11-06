let Userscore = 0;
let Compscore = 0;

const options = document.querySelectorAll(".choice");
const msg = document.querySelector("#Mensaje");

const userPara = document.querySelector("#User-score");
const compPara = document.querySelector("#Comp-score");

const genCompchoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const radIdx = Math.floor(Math.random() * 3);
    return choices[radIdx];
};

const drawGame = () => {
    msg.innerText = "Game was drawn. Play again";
    msg.style.backgroundColor = "black";
};

const showWinner = (userChoice, compChoice, userWin) => {
    if (userWin) {
        Userscore++;
        userPara.innerText = Userscore; 
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        Compscore++;
        compPara.innerText = Compscore; 
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userChoice) => {
    const compChoice = genCompchoice();
    console.log("user choice = ", userChoice);
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
        // Draw game
        drawGame();
    } else {
        let userWin = false;

        // Determine if the user wins based on choices
        if (userChoice === "rock") {
            userWin = compChoice === "scissors";
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock";
        } else if (userChoice === "scissors") {
            userWin = compChoice === "paper";
        }

        // Display result based on winner
        showWinner(userChoice, compChoice, userWin);
    }
};

// Event listeners for user choices
options.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.querySelector("img").getAttribute("alt").toLowerCase();
        playgame(userChoice);
});
});

