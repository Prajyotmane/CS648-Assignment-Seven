/*eslint-env browser*/

function playGame() {
    "use strict";
        var cpuChoice, userChoice, gameOptions = ['r', 'p', 's'];

        userChoice = window.prompt("Select either rock (r), paper (p) or scissor (s)?").toLowerCase().trim();
        var cpuChoice = gameOptions[(Math.round(Math.random()*10) % 3)];

        window.console.log("CPUs choice:" + cpuChoice);
        window.console.log("Your choice:" + userChoice);

        if ((userChoice == "rock" || userChoice == "r") && (cpuChoice == 's')) {
            window.alert("You win!");
        }
        else if ((cpuChoice == "r") && (userChoice == 'scissor' || userChoice == 's')) {
            window.alert("You lose.");
        }
        else if ((userChoice == "scissor"|| userChoice == 's') && cpuChoice == "p") {
            window.alert("You win!");
        }
        else if (cpuChoice == "s" && (userChoice == "paper"|| userChoice == 'p')) {
            window.alert("You lose.");
        }
        else if (cpuChoice == "p" && (userChoice == "rock" || userChoice == 'r')) {
            window.alert("You lose.");
        }
        else if ((userChoice == "paper"|| userChoice == 'p') && cpuChoice == "r") {
            window.alert("You win!");
        }else if(((userChoice == "rock" || userChoice == "r") && (cpuChoice == 'r')) || ((userChoice == "paper" || userChoice == "p") && (cpuChoice == 'p')) || ((userChoice == "scissor" || userChoice == "s") && (cpuChoice == 's'))){
            window.alert("Its a draw");
        }
        else{
            window.alert("Invalid choice.");
        }
        
}

function startGame() {
    "use strict";
    var cont;
     do{
        playGame();
        cont = window.prompt("Enter Y/y to continue, enter any key to exit.").toLowerCase();
    }while (cont === "y")

}

startGame();
