


function auth(){
    const users = JSON.parse(localStorage.getItem('users'))
    var email= document.getElementById("email").value;
    var password=document.getElementById("password").value;
    const user = users.users.find(item=>(item?.email === email && item?.password === password)  )
    console.log(user)
    if (user){
        window.location.assign("index.html");
        localStorage.setItem('role',user?.role)
        alert("login successful");

    }
    else{
        alert("Invalid Information");
        return;
    }
}



