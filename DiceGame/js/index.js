// Creating variables for the game state
let player1Score=0
let player2Score=0
let player1Turn=true
let playersFace=["👦🏼","👩"]
const containerEl=document.querySelector(".container")
const rollBtn=document.getElementById("roll-btn")
const resetBtn=document.getElementById("reset-btn")
const playerEl=document.getElementById("player")
const playerFace=document.getElementById("player-face")
const player1ScoreEl=document.getElementById("player1score")
const player2ScoreEl=document.getElementById("player2score")
const player1Dice=document.querySelector(".player1-Dice")
const player2Dice=document.querySelector(".player2-Dice")
player1ScoreEl.textContent+=player2Score
player2ScoreEl.textContent+=player2Score
rollBtn.addEventListener("click",startGame)
function startGame()
{   
   if(player1Turn)
   {
    player1()
   }else
   {
    player2()
   }
   if(player1Score>=22)
   {
    playerEl.textContent="1 is the winner"
    rollBtn.style.display="none"
    resetBtn.style.display="block"
    containerEl.style.backgroundImage = "url('../imgs/celebtate.gif')" 
    containerEl.style.color="#fff"


   }else if(player2Score>=22)
   {
    playerEl.textContent="2 is the winner"
    rollBtn.style.display="none"
    resetBtn.style.display="block"
    containerEl.style.backgroundImage ="url('../imgs/celebtate.gif')" 
    containerEl.style.color="#fff"

   }
 player1Turn =! player1Turn
}
playerFace.textContent=playersFace[0]
function player1()
{
    playerFace.textContent=playersFace[0]
    playerEl.innerText="1"
    player1Dice.classList.add("shadow")
    player2Dice.classList.remove("shadow")
    const dice1=randomDice()
    player1Dice.textContent=dice1
    player1Score+=dice1
    player1ScoreEl.textContent=player1Score

   
}
function player2()
{  
    playerFace.textContent=playersFace[1]
    playerEl.innerText="2"
    player1Dice.classList.remove("shadow")
    player2Dice.classList.add("shadow")
    const dice2=randomDice()
    player2Dice.textContent=dice2
    player2Score+=dice2
    player2ScoreEl.textContent=player2Score
   
}

const randomDice=function genrateDiceNumber() {
    return Math.floor((Math.random()*6)+1) 
 }
 resetBtn.addEventListener("click",reset)
 function reset() {
    playerEl.textContent="1"
    playerFace.textContent=playersFace[0]
    player1Score=0
    player2Score=0
    player1ScoreEl.textContent=player1Score
    player2ScoreEl.textContent=player2Score
    player1Dice.textContent="-"
    player2Dice.textContent="-"
    this.style.display="none"
    rollBtn.style.display="block"
    player1Dice.classList.add("shadow")
    player2Dice.classList.remove("shadow")
    containerEl.style.backgroundImage ="none" 
    containerEl.style.color="#000"
 }