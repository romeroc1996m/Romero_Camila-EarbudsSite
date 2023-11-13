(() => {
    const canvas = document.querySelector("#explode-view");
    const context = canvas.getContext("2d");
    canvas.width = 1920;
    canvas.height = 1080;
    const frameCount = 622; // how many still frames do we have?
    const images = []; // array to hold all of out images

    // object literal, that has a property of frame to hold the current frame
    const buds = {
        frame:0
    }
    // run a for loop to populate our images array

    for (let i=0; i<frameCount; i++) {
            // console.log(i);
        const img = new Image();
         // string I am trying to create: images/explode_0013.webp
        img.src = `images/Earbuds_${(i+1).toString().padStart(3, '0')}.jpg`;
        images.push(img);
    }

    // console.log(images);

    // we are not actually animating a DOM element, but rather an object 
    // which contains a frame count, as the user scrolls we increase the valur by 1. We tell GreenSock there is a total of 449 frames to cycle thpugh, so it know when to stop. Greensock scrolling uses decimals, so we use "snap" to gice us whole numbers 1 vs 0.0085. 
    // 

    gsap.to(buds, {
        frame: 621, 
        snap: "frame",
        scrollTrigger: {
            trigger: "#explode-view",
            pin: true,
            scrub: 1,
            markers: true,
            start: "top top"
        },

        onUpdate: render
    })

    images[0].addEventListener("onload", render);

    function render() {
        // console.log(buds.frame);
        // console.log (images[buds.frame]);
        context.clearRect(0,0, canvas.width, canvas.height)
        context.drawImage(images[buds.frame],0,0);

    }

})();