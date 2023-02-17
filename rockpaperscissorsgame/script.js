const PlayerText = document.querySelector("#PlayerText");
const ComputerText = document.querySelector("#ComputerText");
const ResultText = document.querySelector("#ResultText");
const ChoiceBtns = document.querySelectorAll(".ChoiceBtn");
let Player;
let Computer;
let Result;
let numRounds = prompt("How many rounds would you like to play?");
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;



ChoiceBtns.forEach(button => button.addEventListener("click",() => {
    Player = button.textContent; /* oyuncunun sectigi seyi belirleme*/
    ComputerTurn(); /*bilgisayarin sirasi icin bir fonksiyon ata*/
    PlayerText.textContent = `Player: ${Player}`;
    ComputerText.textContent = `Computer: ${Computer}`;
    ResultText.textContent = checkWinner(); /*fonksiyon yazilacak*/

}) );

function ComputerTurn(){
    const randNum = Math.floor (Math.random()*3)+1;   /*integer olmasi icin floor kullandin floor yuvarliyor*/ /*uc olasilik var 3 le carp 3 ile 1 arasinda bir sayi verecek*/

    switch(randNum){ /*COMPUTER SECIMI FONKSIYONU*/
        case 1 :
        Computer= "ROCK"
        break;

        case 2 :
        Computer= "PAPER"
        break;

        case 3 :
        Computer= "SCISSORS"
        break;    
    }

}
function checkWinner(){
    if(Player == Computer){
        return "Draw!";
    }
    else if(Computer == "ROCK" && Player == "PAPER"){
      return "You Win!";
    }
    else if(Computer == "PAPER" && Player == "SCISSORS"){
      return "You Win!";
    }
    else if(Computer == "SCISSORS" && Player == "ROCK"){
      return "You Win!";
    }
    else 
      return "You lose!";
}
