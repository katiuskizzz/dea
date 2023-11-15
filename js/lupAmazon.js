let btnClose = document.getElementById("btnClose")
let mainContent = document.getElementById("mainContent")
let boxModal = document.getElementById("boxModal")
let containtP = document.getElementById("containtP")
let zoomed = document.getElementById('zoomed');




//containts de la pagina principal con su border color cuando el cursor esta alfrente de ellos 
let miniContaint1 = document.getElementById("miniContaint1"),
    miniContaint2 = document.getElementById("miniContaint2"),
    miniContaint3 = document.getElementById("miniContaint3"),
    miniContaint4 = document.getElementById("miniContaint4"),
    miniContaint5 = document.getElementById("miniContaint5"),
    miniContaint6 = document.getElementById("miniContaint6"),
    miniContaint7 = document.getElementById("miniContaint7"),
    miniContaint8 = document.getElementById("miniContaint8"),
    imagen1     = document.getElementById("imagen1");




    miniContaint1.onmouseover = function() {
        imagen1.setAttribute("src", "img/Nueva carpeta/laptop1.jpg"); 

        this.style.borderColor = 'DodgerBlue';  
    }
    miniContaint1.onmouseout = function() {
        // Revierte el estilo del elemento
        this.style.borderColor = '';
      }


    miniContaint2.onmouseover = function() {
        imagen1.setAttribute("src", "img/Nueva carpeta/laptop2.jpg");
        this.style.borderColor = 'DodgerBlue';  
    }
    miniContaint2.onmouseout = function() {
        // Revierte el estilo del elemento
        this.style.borderColor = '';
      }


    miniContaint3.onmouseover = function() {
        imagen1.setAttribute("src", "img/Nueva carpeta/laptop3.jpg");
        this.style.borderColor = 'DodgerBlue';
        this.style.boxShadow = 'cyan';
    }
    miniContaint3.onmouseout = function() {
        // Revierte el estilo del elemento
        this.style.borderColor = '';
      }


    miniContaint4.onmouseover = function() {
        imagen1.setAttribute("src", "img/Nueva carpeta/laptop4.jpg");
        this.style.borderColor = 'DodgerBlue';
    }
    miniContaint4.onmouseout = function() {
        // Revierte el estilo del elemento
        this.style.borderColor = '';
      }


    miniContaint5.onmouseover = function() {
        imagen1.setAttribute("src", "img/Nueva carpeta/laptop5.jpg");
        this.style.borderColor = 'DodgerBlue';
    }
    miniContaint5.onmouseout = function() {
        // Revierte el estilo del elemento
        this.style.borderColor = '';
      }



    miniContaint6.onmouseover = function() {
        imagen1.setAttribute("src", "img/Nueva carpeta/laptop6.jpg");
        this.style.borderColor = 'DodgerBlue';
    }
    miniContaint6.onmouseout = function() {
        // Revierte el estilo del elemento
        this.style.borderColor = '';
      }


    miniContaint7.onmouseover = function() {
        imagen1.setAttribute("src", "img/Nueva carpeta/laptop7.jpg");
         this.style.borderColor = 'DodgerBlue';
    }
    miniContaint7.onmouseout = function() {
        // Revierte el estilo del elemento
        this.style.borderColor = '';
      }


    miniContaint8.onmouseover = function() {
        imagen1.setAttribute("src", "img/Nueva carpeta/mousepadlaptop.jpg");
         this.style.borderColor = 'DodgerBlue';
    }
    miniContaint8.onmouseout = function() {
        // Revierte el estilo del elemento
        this.style.borderColor = '';
      }
    

//aqui es donde amplio la imagen
    
         document.getElementById('imagen1').addEventListener('mouseover', function(){
             this.style.transform= 'scale(1.3)';
         });
         document.getElementById('imagen1').addEventListener('mouseout', function() {
             this.style.transform = 'scale(1)';
           });

        //    zoomed.style.backgroundImage = "url('" + imagen1 + "')";
        //    zoomed.style.backgroundRepeat = "no-repeat";
        //    imagen1.addEventListener('mousemove', function(e) {
        //      var rect = this.getBoundingClientRect();
        //      var x = e.clientX - rect.left;
        //      var y = e.clientY - rect.top;
        //      zoomed.style.backgroundPosition = "-" + (x*3) + "px -" + (y*3) + "px";
        //    });
      


//parte que hace salir la otra pestaña por decirleo asi

containtP.addEventListener('click', function(){
    //con el flex mejore lo de que no se cierre con un hjo
    boxModal.style.display = "flex";
    mainContent.style.display = "block";
})

// Event Listener for the close button
btnClose.addEventListener('click', function(){
    mainContent.style.display = "none";
    });


mainContent.addEventListener('click', function(event){
    if(event.target === boxModal){
        boxModal.style.display = 'none'
    }
   
})
//estreallas 

let star1 = document.getElementById("star1");
let star2 = document.getElementById("star1");
let star3 = document.getElementById("star1");
let star4 = document.getElementById("star1");
let star5 = document.getElementById("star1");
let calificacion = 4.5;

let puntuacion = document.getElementById("calificacion").ariaValueMax;
if(puntuacion >= 0 && puntuacion <= 0.2){
    star1.setAttribute("class","fa-regular fa-star");
    star2.setAttribute("class","fa-regular fa-star");
    star3.setAttribute("class","fa-regular fa-star");
    star4.setAttribute("class","fa-regular fa-star");
    star5.setAttribute("class","fa-regular fa-star");
}
else if(puntuacion >= 0.3 && puntuacion <= 0.7){
    star1.setAttribute("class","fa-regular fa-star-half-stroke");
    star2.setAttribute("class","fa-regular fa-star");
    star3.setAttribute("class","fa-regular fa-star");
    star4.setAttribute("class","fa-regular fa-star");
    star5.setAttribute("class","fa-regular fa-star");
}

else if(puntuacion >= 0.8 && puntuacion <= 1.2){
    star1.setAttribute("class","fa-regular fa-star-half-stroke");
    star2.setAttribute("class","fa-regular fa-star-half-stroke");
    star3.setAttribute("class","fa-regular fa-star");
    star4.setAttribute("class","fa-regular fa-star");
    star5.setAttribute("class","fa-regular fa-star");
}
else if(puntuacion >= 1.3 && puntuacion <= 1.7  ){
    star1.setAttribute("class","fa-regular fa-star-half-stroke");
    star2.setAttribute("class","fa-regular fa-star-half-stroke");
    star3.setAttribute("class","fa-regular fa-star");
    star4.setAttribute("class","fa-regular fa-star");
    star5.setAttribute("class","fa-regular fa-star");
}








//pantalla que se llama al darle click a la imagen principal con sus hijos
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
