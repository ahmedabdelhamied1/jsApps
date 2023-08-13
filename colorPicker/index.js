let colorCount=100
function displayColors(colors) {
  let boxescolors=colors.map(color=>`<div class="my-color" style="background:${color.value}"></div>`).join('')
  document.body.innerHTML=boxescolors
}
async function getColors(colorCount)
{
    const response=await fetch(`https://apis.scrimba.com/hexcolors?count=${colorCount}`)
    const data=await response.json()
    console.log(data);
    let colors= data.colors
    displayColors(colors)
}

getColors(colorCount)