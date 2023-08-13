async function getCategories(count,offset){
    let response=await fetch(`https://jservice.io//api/categories?count=${count}&offset=${offset}`)
    let data=await response.json()
    return data
}
function showCategorey(category)
{
  let allCategories=category.map(ctg=>{
    return `
    <div class="my-categorey-title">${ctg.title}</div>
    ${getClueHtml(100)}
    ${getClueHtml(200)}
    ${getClueHtml(300)}
    ${getClueHtml(400)}
    `
  })
  return allCategories.join('') 
}
function getClueHtml(clueValue)
{
    return `<div class="my-categorey-clue" style="grid-row:${(clueValue / 100) +1}">${clueValue}</div>`

}
getCategories(5,33).then(category=>{
    document.body.innerHTML=`
    <div class="board">${showCategorey(category)}</div>
    `
    console.log(category);

})