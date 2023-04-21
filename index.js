function castParallax() {
  var opThresh = 350;
  var opFactor = 750;

  window.addEventListener("scroll", function (event) {
    var top = this.pageYOffset;

    var layers = document.getElementsByClassName("parallax");
    var layer, speed, yPos;
    for (var i = 0; i < layers.length; i++) {
      layer = layers[i];
      speed = layer.getAttribute("data-speed");
      var yPos = -((top * speed) / 100);
      layer.setAttribute(
        "style",
        "transform: translate3d(0px, " + yPos + "px, 0px)"
      );
    }
  });
}

function scrollNav() {
  window.addEventListener("scroll", function (event) {
    var top = this.pageYOffset;
    var nav = document.getElementById("navbar");
    if (top > 150) {
      console.log("scrolling");
      //gradually fade out navbar
      nav.style.top = "-100px";
    } else {
      nav.style.top = "0px";
    }
  });
}

// function slideAnim() {
//   const infocard = document.querySelector(".infocard");

//   window.addEventListener("scroll", () => {
//     const infocardPosition = infocard.getBoundingClientRect().top;
//     const windowHeight = window.innerHeight;

//     if (infocardPosition < windowHeight / 2) {
//       infocard.classList.add("animate-slide-in-left");
//     }
//   });
// }

function openNav() {
  //check if mobile
  if (window.innerWidth < 600) {
    document.getElementById("mySidebar").style.width = "160px";
  } else {
    document.getElementById("mySidebar").style.width = "250px";
  }
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}

document.addEventListener("scroll", function () {
    //if scroll more than 50px, close sidebar
    if (window.pageYOffset > 50) {
        closeNav();
        }
})

function hideLoader() {
    document.getElementById("loader").style.display = "none";
}

document.body.onload = [castParallax(), scrollNav(), hideLoader()];

// window.onscroll=slideAnim();
