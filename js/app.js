const button = document.querySelector(".button-burger");
const menu = document.querySelector(".nav-header");

console.log(button, menu)


button.addEventListener("click", function(){
    const attribut = button.getAttribute("aria-expanded");
        if (attribut === "false"){
            button.setAttribute("aria-expanded", "true");}
        if (attribut === "true"){
            button.setAttribute("aria-expanded", "false");}
        console.log(attribut)
})



