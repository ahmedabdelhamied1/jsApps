let data=[
    {id:1,title:"image1"},{id:2,title:"image2"},{id:3,title:"image3"},{id:4,title:"image4"},{id:5,title:"image5"},{id:6,title:"image6"},{id:7,title:"image7"},{id:8},{id:9},{id:10},{id:11},{id:12},{id:13},{id:14},{id:15},{id:16},{id:17},{id:18},{id:19},{id:20}
]
function getPhotosHtml(data) {
    let htmlImages=data.map(obj =>{
        return `
        <img class="img" src="https://picsum.photos/id/${obj.id}/100/100" alt="${obj.title}">
        `
    }).join('') 
    return `<div class="imagewrapper">${htmlImages}</div>`
    
}

document.body.innerHTML=`
<div class="my-gallarey">
<img id="selected-img"  class="img" src="https://picsum.photos/id/3/300/300">
${getPhotosHtml(data)}
</div>`
const allImages=document.querySelectorAll('img')
const allImagesArr=Array.from(allImages)
allImagesArr.forEach(imageItem=>{
    imageItem.addEventListener('click',function (event) {
     let selectedimageSrc=imageItem.src.substring(0,imageItem.src.length-7)
     const selectedImgEl=document.getElementById("selected-img")
     selectedImgEl.src=`${selectedimageSrc}300/300`
     selectedImgEl.style.display="inline"
      
    })
})
