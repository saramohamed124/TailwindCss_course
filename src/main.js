document.querySelector("#bar-menu").onclick = function(){
    document.querySelector("#menu").classList.toggle("hidden");
}

// Another Way
// const barMenu = document.getElementById("bar-menu");
// const burger = document.getElementById("menu");

// barMenu.addEventListener("click",()=>{
//     if(burger.classList.contains("hidden")){
//         burger.classList.remove("hidden");
//     }else{
//         burger.classList.add("hidden");
//     }
// })

const list = document.querySelectorAll("#menu li a");
list.forEach(li => {
    li.addEventListener('click',()=>{
        li.classList.remove("border-primary")
        if(li.classList.contains("border-white")){
        li.classList.remove("border-white")
        li.classList.add("border-primary")
    }else{
        li.classList.remove("border-primary")
    }
    })
});