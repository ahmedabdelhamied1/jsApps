const userInputEL=document.getElementById("userNameInput")
let allNamesDomCollections=document.getElementsByClassName("name")
userInputEL.addEventListener("keyup",function (event) {
    let searchQuery =event.target.value.toLowerCase()
    
    
    for (let counter=0;counter<allNamesDomCollections.length;counter++)
    {
         const currentName=allNamesDomCollections[counter].textContent.toLocaleLowerCase()
         
            if(currentName.includes(searchQuery))
            {
               console.log("matched");
               allNamesDomCollections[counter].style.display="block"
               allNamesDomCollections[counter].classList.add("pulse");

            }else 
            {
               allNamesDomCollections[counter].style.display="none"
            }

}
})
