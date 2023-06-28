let boxes = document.querySelectorAll(".box")
let img = document.querySelector(".imagem")



boxes.forEach(box =>{

    box.addEventListener("dragover" , (e)=>{
        e.preventDefault()
    })

    box.addEventListener("drop" , (e)=>{
         box.appendChild(img)       
    })
})


