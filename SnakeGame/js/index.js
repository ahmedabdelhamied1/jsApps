const startBtnEl=document.getElementById("startBtn")
const scoreEl=document.querySelector("#score")
const gridEl=document.querySelector(".grid")
const yummyApple=document.getElementById("eatEffect")
const gameOverSound=document.getElementById("gameOver")
const gameOverModalEl=document.getElementById("gameOverModal")
const replayEl=document.getElementById("replay")

let sqaures=[]
let emptySquares=[]
let direction=1
let currentSnake=[2,1,0] //Snake Intial stata
let appleIndex=0
let score=0
let width=10
let timerId=0
let time=1000
let speed=.9
function createGrid() {
  for (let index = 0; index < width*width; index++) {
  const square=document.createElement("div")
  square.classList.add("square")
  gridEl.appendChild(square)
  sqaures.push(square)
   } 
}
createGrid()
currentSnake.forEach(index => sqaures[index].classList.add("snake"))
startBtnEl.addEventListener("click",startGame)

function startGame() {
  clearInterval(timerId)
  currentSnake.forEach(index => sqaures[index].classList.remove("snake"))
  emptySquares[appleIndex].classList.remove("apple")
  score=0
  currentSnake=[2,1,0] 
  currentSnake.forEach(index => sqaures[index].classList.add("snake"))
  direction=1
  time=1000
  scoreEl.textContent=score
  generatrApple()
  timerId=setInterval(move,time)
  document.addEventListener("keydown",control)


}

function move() {
 
      
    if((currentSnake[0] % width === 0  && direction === -1 )||            //if snake hit left
       (currentSnake[0] % width === width-1  && direction === 1)||        //if snake hit right
       (currentSnake[0] - width < 0    && direction === -width) ||        //if snake hit top
       (currentSnake[0] + width >= width*width && direction === width) || //if snake hit bottom
       (sqaures[currentSnake[0] + direction] .classList.contains("snake")) //if snake hit it self
       )
                                                                            
       {
        console.log("Game over");
        gameOverSound.play()
        gameOverModalEl.style.display="block"
        gameOverModalEl.style.position="absolute"
        gameOverModalEl.style.top="0"
        gameOverModalEl.style.left="50%"
        gameOverModalEl.style.transform="translateX(-50%)"
        document.removeEventListener("keydown",control)

        return clearInterval(timerId)
       }
       let tail=currentSnake.pop()
       sqaures[tail].classList.remove("snake")
       currentSnake.unshift(currentSnake[0]+direction)
       sqaures[currentSnake[0]].classList.add("snake")
       if(sqaures[currentSnake[0]].classList.contains("apple") )
       {
       score++ 
       scoreEl.textContent=score
       currentSnake.push(tail)
       yummyApple.play()
       sqaures[currentSnake[0]].classList.remove("apple")
       generatrApple()
       console.log(time);
       clearInterval(timerId)
       time=time*speed
       console.log(time);

       timerId=setInterval(move,time);
      }
      if(score=== 97)
      {
        console.log("Congratulations you won");
        return
      }
   

}
document.addEventListener("keydown",control)
function control(event) {
  if(event.key === "ArrowLeft")
  {
    console.log("Left Key");
    direction=-1
    move()
  }else if(event.key === "ArrowUp")
  {
    console.log("Up Key");
    direction=-10
    move()
  }else if(event.key === "ArrowDown")
  {
    console.log("Down Key");
    direction=10
    move()
  }
  else if(event.key === "ArrowRight")
  {
    console.log("Right Key");
    direction=1
    move()
  }
}
emptySquares=sqaures.filter(function(square,index,arr){
  return !square.classList.contains("snake") 
})
function generatrApple() {
  appleIndex=Math.floor(Math.random() * emptySquares.length)
  if(appleIndex>=0 && appleIndex <= emptySquares.length-1)
  {
    emptySquares[appleIndex].classList.add("apple")

  }
  
}
replayEl.addEventListener("click",function ()
{
  gameOverModalEl.style.display="none"
  startGame()
})
generatrApple()


