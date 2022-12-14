"use strict";


let baseURL="https://task.samid.uz/v1/user/sign-up";


$('#sign').addEventListener("submit",(e)=>{
    e.preventDefault();
    let username=$('#username').value.trim(),
    password=$('#password').value.trim(),
    email=$('#email').value.trim();



    const params={
        username:username,
        password:password,
        email:email

    }
    
    if(params.username===0 || params.password===0 || params.email==0){
        alert("please enter a username or email and password")
}else{
    fetch(baseURL, {
        method:'POST',
        headers:{
            "Content-Type":"application/json",

        },
        body:JSON.stringify(params)
    }).then((response)=>response.json()).then((result)=>{
        if(result.code=="1"){
            alert("succes");
            setTimeout(()=>{
                window.location.replace("../login/login.html")
            },2000)
        }
        else{
            alert(result.errors.username)
            console.log(result);
        }
    })
}




})