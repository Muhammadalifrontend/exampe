const cc = document.querySelector('#cc')
const boxs= document.querySelectorAll('.book')
const divcha = document.createElement('div')
cc.addEventListener('click',()=>{
    document.body.appendChild(divcha)
    divcha.classList  ="divcha"
    
})
let i = 0
boxs.forEach((e)=>{
    e.addEventListener("click" , ()=>{
        divcha.appendChild(e)
        i++
        cc.innerHTML = `Cart(${i})` 
    })

})

