const prevBtnEl=document.getElementById("carousl-button-prev")
const nextBtnEl=document.getElementById("carousl-button-next")
const carousalEl=document.getElementById("carousal")
let startPosition=0
let slides=document.getElementsByClassName("carousal-item")
const totalslides=slides.length
prevBtnEl.addEventListener("click",moveToPrevSlide)
nextBtnEl.addEventListener("click",moveToNextSlide)
function moveToNextSlide()
{
    hideAllSlides()
    if(startPosition===totalslides-1)
    {
        startPosition=0
    }else{
        startPosition++
    }
    slides[startPosition].classList.add("carousal-item-visible")
}

function moveToPrevSlide()
{
    hideAllSlides()
    if(startPosition===0)
    {
        startPosition=totalslides-1
    }else{
        startPosition--
    }
    slides[startPosition].classList.add("carousal-item-visible")
}

function hideAllSlides()
{
    for(let slide of slides)
    {
        slide.classList.remove("carousal-item-visible")
        slide.classList.add("carousal-item-hidden")
    }
}

setInterval(() => {
   moveToNextSlide() 
}, 3000);







// function moveToNextSlide()
// {

//    if(startPosition===totalslides-1)
//    {
//     startPosition=0
//     slides[startPosition].classList.add("carousal-item-visible")
//     slides[totalslides-1].classList.remove("carousal-item-visible")

   
//    }else if(startPosition<totalslides-1)
//    {
   
//     startPosition++
//     console.log(startPosition)
//     slides[startPosition-1].classList.remove("carousal-item-visible")
//     slides[startPosition].classList.add("carousal-item-visible")
//    }

// }
// function moveToPrevSlide()
// {
    // if(startPosition===0)
    // {
    //     startPosition=totalslides-1
    //     console.log(startPosition);
    //     slides[startPosition].classList.add("carousal-item-visible")
    //     slides[0].classList.remove("carousal-item-visible")
    // }
    // else if(startPosition>0)
    // {
    //     startPosition--
    //     slides[startPosition+1].classList.remove("carousal-item-visible")
    //     slides[startPosition].classList.add("carousal-item-visible")
       
    // }  
    

// }