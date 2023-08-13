let myleads=[]

const saveBtnEl=document.getElementById("save-btn")
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")
const deleteBtn=document.getElementById("clear-btn")
const tabBtn=document.getElementById("tab-btn")

const myleadsfromlocalstorage=JSON.parse(localStorage.getItem("myLeads"))
if(myleadsfromlocalstorage)
{
  myleads=myleadsfromlocalstorage
  render(myleads)
}
saveBtnEl.addEventListener("click",function ()
{
 
    myleads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myLeads",JSON.stringify(myleads))
    render(myleads) 
})

deleteBtn.addEventListener("dblclick",function (){
  localStorage.clear()
  myleads=[]
  render(myleads)
})
function render(leads)
{
    let listitems=""
   
    for(let i=0;i<leads.length;i++)
   {
  
   listitems += 
   `<li>
        <a target="_blank" href="https://${leads[i]}">
        ${leads[i]}
        </a> 
   </li> 
   `
   }                                                                       
                                                                                                                                     
 ulEl.innerHTML = listitems

}
tabBtn.addEventListener("click",function()
{
  chrome.tabs.query({active: true, currentWindow: true},
   function(tabs) {
   var tabURL = tabs[0].url;
   myleads.push(tabURL)
   localStorage.setItem("myLeads",JSON.stringify(myleads))
   render(myleads)
 
});
 
}
)

 // ulEl.innerHTML += "<li>"+myleads[i]+"</li>"
   // const li=document.createElement("li")
   // li.textContent=myleads[i]
   // ulEl.append(li)
