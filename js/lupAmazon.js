let btnClose = document.getElementById("btnClose")
let mainContent = document.getElementById("mainContent")



// Event Listener for the close button
btnClose.addEventListener('click', function(){
    mainContent.style.display = "none";
    });


let boxImg1 = document.getElementById("boxImg1")
let boxImg2 = document.getElementById("boxImg2")
let boxImg3 = document.getElementById("boxImg3")
let boxImg4 = document.getElementById("boxImg4")
let boxImg5 = document.getElementById("boxImg5")
let boxImg6 = document.getElementById("boxImg6")
let boxImg7 = document.getElementById("boxImg7")
let boxImg8 = document.getElementById("boxImg8")
let mainImgModal = document.getElementById("mainImgModal")

boxImg1.addEventListener("click", () =>{
    mainImgModal.setAttribute("src", "img/Nueva carpeta/laptop1.jpg")
})

boxImg2.addEventListener("click", () =>{
    mainImgModal.setAttribute("src", "img/Nueva carpeta/laptop2.jpg")
})
boxImg3.addEventListener("click", () =>{
    mainImgModal.setAttribute("src", "img/Nueva carpeta/laptop3.jpg")
})

boxImg4.addEventListener("click", () =>{
    mainImgModal.setAttribute("src", "img/Nueva carpeta/laptop4.jpg")
})
boxImg5.addEventListener("click", () =>{
    mainImgModal.setAttribute("src", "img/Nueva carpeta/laptop5.jpg")
})
boxImg6.addEventListener("click", () =>{
    mainImgModal.setAttribute("src", "img/Nueva carpeta/laptop6.jpg")
})
boxImg7.addEventListener("click", () =>{
    mainImgModal.setAttribute("src", "img/Nueva carpeta/laptop7.jpg")
})
boxImg8.addEventListener("click", () =>{
    mainImgModal.setAttribute("src", "img/Nueva carpeta/mousepadlaptop.jpg  ")
})
