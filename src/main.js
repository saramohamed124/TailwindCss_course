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

const list = document.querySelectorAll("li");
list.forEach(li => {
    li.addEventListener('click',()=>{
        console.log(li)
        if(li.classList.contains("border-white")){
            li.classList.add("bg-black")
        }else{
            li.classList.remove("border-primary")
        }
    })
});