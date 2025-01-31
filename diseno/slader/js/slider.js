
//obtener elemneo por el id
let boxSlider = document.getElementById("boxSlider");
let iconChevronLeft = document.getElementById("iconChevronLeft")
let iconChevronRight = document.getElementById("iconChevronRight")
let signal1 = document.getElementById("signal-1")
let signal2 = document.getElementById("signal-2")
let signal3 = document.getElementById("signal-3")


iconChevronRight.addEventListener("click", function(){
    if (boxSlider.classList.contains("box-slider-1")){
        boxSlider.classList.remove("box-slider-1")
        boxSlider.classList.add("box-slider-2")

        signal1.classList.remove("signal-select")
        signal2.classList.add("signal-select")

        
    }
    else if( boxSlider.classList.contains("box-slider-2")){
        boxSlider.classList.remove("box-slider-2")
        boxSlider.classList.add("box-slider-3")

        signal2.classList.remove("signal-select")
        signal3.classList.add("signal-select")  
    }

    else {
        boxSlider.classList.remove("box-slider-3")
        boxSlider.classList.add("box-slider-1")

        signal3.classList.remove("signal-select")
        signal1.classList.add("signal-select")
    }
    
})  
iconChevronLeft.addEventListener("click", function(){
    if (boxSlider.classList.contains("box-slider-3")){
        boxSlider.classList.remove("box-slider-3")
        boxSlider.classList.add("box-slider-2")

        signal3.classList.remove("signal-select")
        signal2.classList.add("signal-select")
    }
    else if( boxSlider.classList.contains("box-slider-2")){
        boxSlider.classList.remove("box-slider-2")
        boxSlider.classList.add("box-slider-1")

        signal2.classList.remove("signal-select")
        signal1.classList.add("signal-select")
    }
    else{
        boxSlider.classList.remove("box-slider-1")
        boxSlider.classList.add("box-slider-3")

        signal1.classList.remove("signal-select")
        signal3.classList.add("signal-select")
    }
})  