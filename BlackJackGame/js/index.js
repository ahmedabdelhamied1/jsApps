let player={
    name:"Ahmed ",
    chips:900,
    sayNickName:function()
    {
     console.log("Medo");
    }
}
//here is the intial state for our game
let sum=0
let cards=[]
let hasaBlackJack=false
let isAlive=false
let message=""
let elMessage=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cardsEl")
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name + "$" +player.chips 

function getRandomCard()
{
    let randomnuber= Math.floor(Math.random() * 13) + 1;
    if(randomnuber === 1)
    {
        randomnuber=11
        return randomnuber
    }else if(randomnuber>10){
        randomnuber=10
        return randomnuber
    }else
    {
        return randomnuber
    }
}
function startGame()
{
    let firstCard=getRandomCard()
    let secondcard=getRandomCard()
    cards=[firstCard,secondcard]
    sum=firstCard+secondcard
    isAlive=true
    renderGame();
}
function renderGame()
{
    sumEl.textContent="Sum : " + sum
    cardsEl.textContent="Cards :"
    for (let i=0;i<cards.length;i++)
    {
      cardsEl.textContent += cards[i] + " , "
    
    }
    if(sum <=20)
    {
       
        message="Do You want to draw anew card 😗?"
       
    }else if(sum === 21)
    {
        message="Congratulations you win you have the Black jack🥳"
        hasaBlackJack=true
        
    }
    else{
        message="Sorry you Lost 😌"
        isAlive=false
    }
    elMessage.textContent = message

}

function newCard ()
{
    if(isAlive === true && hasaBlackJack === false)
      {
        console.log("drawin a new card ");
        let card=getRandomCard()
        sum=sum+card
        cards.push(card)
        renderGame();
      }
    
}
