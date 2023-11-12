(() => {
  //console.log("IIFE Fired");
  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [ {
      title: "Noise cancelling microphones",
      text: "Even in the busiest setting, our unique earbud shape allows for acoustic perception of sound and 360-degree noise-canceling microphones.",
      images: "images/hotspot_noiseCancelled.jpg"
    },
    {
      title:"Ultra Fast Charging",
      text: "The most recent chrome ultra charging technology on the market will fully charge your earbuds in 30 minutes or less.",
      images: "images/hotspot_circuits.jpg"
    },
    {
      title:"Wide High Quality audio",
      text: "Our partnership with one of the most significant speakers, Bose™, adopts a more balanced approach and produces a sound profile that is generalist high-fidelity.",
      images: "images/hotspot_speaker.jpg"
    },
  ]

  //functions
  function modelLoaded() {
    //console.log(hotspots);
    hotspots.forEach(hotspot => {
      hotspot.style.display = "block";
    });
  }

  function loadInfo () {

    infoBoxes.forEach((infoBox, index) => {

      let selected = document.querySelector(`#hotspot-${index+1}`);
      // console.log(selected);

      const titleE = document.createElement("h2");
      const textE = document.createElement("p");
      const imageE = document.createElement("img");
      
      titleE.textContent = infoBox.title;
      textE.textContent = infoBox.text;
      imageE.src = infoBox.images;

      selected.appendChild(titleE);
      selected.appendChild(textE);
      selected.appendChild(imageE);

      titleE.classList.add("hotspot.title");
      textE.classList.add("hotspot.text");
      imageE.classList.add("hotspot.image");

      // document.createElement('h2');
        //textContent = infoBox.title

      // document.createElement('p');
        //textContent = infoBox.title


      // console.log(infoBox.title);
      // console.log(infoBox.text);

      //selected.appendChild();
      //selected.appendChild();
  })


  }

  loadInfo();

  function showInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    //since the slot value matches the id value I can use the slot value as a selector to get to the div I want.
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event Listener
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });
})();

// In this version, the event listeners use regular functions instead of arrow functions, so the "this" keyword inside the event listeners will refer to the DOM element that triggered the event.