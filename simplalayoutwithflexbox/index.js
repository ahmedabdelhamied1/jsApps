async function getUsers()
{
    const response=await fetch('users.json');
    const data=await response.json()
    return data
}
function showUsers (users)
{
  return  users.map(user=>{
        return  `
        <div class="user">
        <div>${user.name}</div>
        <div class="isonline"></div>
        </div>
        `
    }).join('')

}
getUsers().then(data=>{
  
   let onlineUsers= showUsers(data)

    document.body.innerHTML=`
    <div class="header">Header</div>
    <div class="online-users"> ${onlineUsers}</div>
    <div class="main">Main content</div>
    <div class="footer">Footer</div>
    `
})