
let user=localStorage.getItem("username");
let exit=document.querySelector('#exit');
let username=document.querySelector('#user_name')
username.innerHTML=user;
exit.addEventListener('click',()=>{
    redired()
    console.log("hello");
    localStorage.clear();
})


function redired(){
    if(!localStorage.getItem('token')){
        window.location.replace('../login/login.html')
    }
}

redired()