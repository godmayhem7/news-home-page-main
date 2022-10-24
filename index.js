document.querySelector("#menu").addEventListener("click",()=>{
    document.querySelector("#menu").classList.remove("menu");
    document.querySelector("#menu").classList.add("menu-combo")
    document.querySelector("#dropdown").classList.remove("dropdown")
    document.querySelector("#dropdown").classList.add("dropdown-active")
    document.querySelector("body").classList.remove("body")
    document.querySelector("body").classList.add("body-clone")
})

document.querySelector("#menu-close").addEventListener("click",()=>{
    document.querySelector("#menu").classList.add("menu");
    document.querySelector("#menu").classList.remove("menu-combo")
    document.querySelector("#dropdown").classList.add("dropdown")
    document.querySelector("#dropdown").classList.remove("dropdown-active")
    document.querySelector("body").classList.add("body")
    document.querySelector("body").classList.remove("body-clone")
})