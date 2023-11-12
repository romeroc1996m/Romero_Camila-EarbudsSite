(() => {
    
    //variables

    let imageCon = document.querySelector("#imageCon"), 
        drag = document.querySelector(".image-drag"),
        left = document.querySelector(".image-left"),
        right = document.querySelector(".image-right"),
        dragging = false,
        min = 0,
        max = imageCon.offsetWidth;



    //Functions

    function onDown(){
        dragging = true; console.log("on Down called");
    }

    function onUp(){
        dragging = false;
        dragging = true; console.log("on Up called");
    }

    function onMove(e){
        if (dragging === true){
            let x = e.clientX - imageCon.getBoundingClientRect().left;

            if(x < min){
                x = min;
            } else if (x > max){
                x = max - 10;
            }

            drag.style.left = x + "px";
            left.style.width = x + "px";
        }
    }
    
    //Events Listeners

    drag.addEventListener("mousedown", onDown);
    imageCon.addEventListener("mouseup", onUp);
    imageCon.addEventListener("mousemove", onMove);
  
})();