let postArray=[]
fetch('https://apis.scrimba.com/jsonplaceholder/posts')
.then(response => response.json())
.then(data => 
    {
        postArray=[...data.slice(0,5)]
        renderPosts()
    })

const formEl=document.getElementById('formEl')
formEl.addEventListener('submit',function (event)
{
    event.preventDefault()
    const formData=new FormData(formEl)
    let title=formData.get('title')
    let body=formData.get('body')
    const data={
        title,
        body,
       
    }
    const options={
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        }
    }
    
    fetch('https://apis.scrimba.com/jsonplaceholder/posts',options)
    .then(response => response.json())
    .then(post => 
    {
       postArray.unshift(post) 
       renderPosts()
       formEl.reset()
       
    })
    
})

function renderPosts()
{
    let posts=""
    for (const post of postArray)
    {
    posts+=`
    <h1>${post.title}</h1>
    <p>${post.body}</p>
    `
    }
    document.getElementById('postsWrapper').innerHTML=posts
}

fetch('https://apis.scrimba.com/openweathermap/data/2.5/weather?q=Cairo&lang=ar&units=metric ')
.then(res => res.json())
.then (data => console.log(data))