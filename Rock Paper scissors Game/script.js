let user =0;
let computer = 0;
const choices= document.querySelectorAll(".choice");
const msg =document.querySelector("#msg")
const userScore =document.querySelector("#user-score");
const compScore =document.querySelector("#comp-score");




const genCompChoice = () =>{
    const option =["Rock" ,"paper" ,"scissores"]
    const randInx = Math.floor(Math.random() *3)
    return option[randInx];
}

const drawGame = () =>{
    console.log("Game is Draw");
    msg.innerText ="Game was Draw, Play Again"
    msg.style.backgroundColor = " #061629";
   
}
const showWinner = (userWin ,userChoice,compChoice) =>{
    if(userWin){
        user++;
        userScore.innerText = user
        console.log("You Win")
        msg.innerText =`You Win, Your ${userChoice} Beats ${compChoice}`
        msg.style.backgroundColor = "green";
    }else{
        console.log("You Loose")
        computer++;
        compScore.innerText = computer;
        msg.innerText = msg.innerText =`You Loose, ${compChoice} Beats Your ${userChoice}`
        msg.style.backgroundColor = "Red";
    }
}

const playGame = (userChoice) =>{
    console.log("user choice =", userChoice)
    //genarate computer choice
    const compChoice = genCompChoice();
    console.log("Computer choice =", compChoice)

    if(userChoice === compChoice){
    drawGame(); 
    } else{
        userWin = true;
      if(userChoice == "Rock"){
        userWin = compChoice === "paper" ? false : true;
      } else if(userChoice === "paper"){
        userWin = compChoice === "scissores" ? false :true;
      }else{
        userWin = compChoice === "Rock" ? false :true;
      }
      showWinner(userWin ,userChoice,compChoice);
    }
   



}


choices.forEach((choice) =>{
    choice.addEventListener('click' , () =>{
        const userChoice = choice.getAttribute('id')  
        playGame(userChoice);

    })
})


