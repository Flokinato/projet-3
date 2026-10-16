const button = document.querySelector(".button-burger");
const menu = document.querySelector(".nav-header");

console.log(button, menu)


button.addEventListener("click", function(){
    const attribut = button.getAttribute("aria-expanded");
        if (attribut === "false"){
            button.setAttribute("aria-expanded", "true");
            menu.classList.add("open");}
        else {
            button.setAttribute("aria-expanded", "false");
            menu.classList.remove("open")}
        console.log(attribut)
})



