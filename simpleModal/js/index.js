const overlayEl=document.getElementById("overlay")
const openBtn=document.getElementById("open-modal")
const closeBtn=document.getElementById("close-modal")
const infoEl=document.getElementById("info-header")


openBtn.addEventListener("click",function () {
    overlayEl.style.display="block";
    
})
closeBtn.addEventListener("click",function () {
    overlayEl.style.display="none";
   
})