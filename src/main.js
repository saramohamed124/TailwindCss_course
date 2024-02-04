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

document.querySelectorAll("#menu li a").forEach(e=>{
    e.addEventListener('click',()=>{
        document.querySelectorAll("#menu li a").forEach(a=>{
            a.classList.remove("active_a");
        })
        if(!e.classList.contains("active_a")){
        e.classList.add("active_a")
    }
})
})