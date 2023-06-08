let togleBox = document.getElementById("togleBox");
let containerBoll = document.getElementById("containerBox");


togleBox.addEventListener("click", function(){

        if(containerBoll.classList.contains("containerBoll")){
            containerBoll.classList.add("bolasM");
           containerBoll.classList.add("containerBoll");
        }
        else{
            containerBoll.classList.remove("bolasM");
            containerBoll.classList.add("containerBoll");
        }
});