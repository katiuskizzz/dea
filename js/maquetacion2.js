let hamburguerMenu = document.getElementById("hamburguerMenu");
let menuTop = document.getElementById("menuTop");

hamburguerMenu.addEventListener("click", function() {
     if(menuTop.classList.contains("menutop")){
        menuTop.classList.add("menutop-block");
        menuTop.classList.remove("menutop");
     }
    else{
        menuTop.classList.remove("menutop-block");
        menuTop.classList.add("menutop");
    
    }
});
