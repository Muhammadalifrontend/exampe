"use strict";


let baseURL="https://task.samid.uz/v1/user";


$('#login').addEventListener("submit",(e)=>{
    e.preventDefault();
    let username=$('#username').value.trim(),
    password=$('#password').value.trim();
    



    const params={
        username:username,
        password:password,
       

    }
    
    if(params.username===0 || params.password===0 ){
        alert("please enter a username and password")
}else{
    fetch(`${baseURL}/sign-in`,{
        method:'POST',
        headers:{
            "Content-Type":"application/json",

        },
        body:JSON.stringify(params)
    }).then((response)=>response.json()).then((result)=>{
       if(result.code===1){
        localStorage.setItem('username',result.data.username);
        localStorage.setItem('token',result.data.token);

        setInterval(()=>{
            window.location.replace('../index/index.html')
        })

       }
       else{
        alert(result.errors.password)
       }
    })
}




})