async function getBooks()
{
    let response= await fetch("books.json")
    let data=await response.json()
    let n=1
    return data.books.map(book =>{
        book.id=n
        n++
        return book
     })
}
function showBooksHtml(books)
{

    return books.map (book => {
        return  `
        <div class="book">
        <div class="book-cover"><a href="${book.website}">${book.title}</a></div>
        <div class="book-spine"></div>
        <div class="book-footer"></div>
       </div>
        `
    }).join("")

}
getBooks().then(books=>{
   
   document.body.innerHTML=`<div class="library">${showBooksHtml(books)}</div>`
})