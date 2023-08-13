async function getUserInfo() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/10");
    const data = await res.json();
    return data;
}
function showUser(user) {
    return `
    <div class="userprofile">
        <div class="userprofile-header">
         <div>
         ${user.name}
         </div>
         <div>
         @${user.name}
         </div>
        </div>
        <div class="userprofile-copmany">
        <div>  ${user.company.name}</div>
        <div>  ${user.company.catchPhrase}</div>
        <div>  ${user.company.bs}</div>
        </div>
        <div class="userprofile-contact">
        <div>
        📧${user.email}
        </div>
        <div>
        📞${user.phone}
        </div>
        <div>
        👨‍💻${user.website}
        </div>
        </div>
        <div class="userprofile-adress">
        <div>
        <div>
        ${user.address.street}
        </div>
        <div>
        ${user.address.suite}
        </div>
        </div>
        <div>
        <div>
        ${user.address.city}
        </div>
        <div>
        ${user.address.zipcode}
        </div>
        </div>
        </div>
    </div>
    `;
}
getUserInfo()
    .then((data) => {
        console.log(data);
        document.body.innerHTML = showUser(data);
    })
    .catch((err) => console.log(err));
