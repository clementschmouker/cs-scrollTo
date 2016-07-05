var cs_DOMElement = 0;
var bMoving = false;
var speed = 300;

var distance = 0;

for(var i = 0; i < document.querySelectorAll("a").length; i += 1) {
  document.querySelectorAll("a[href*='#']:not([href='#'])")[i].addEventListener("click", function(e) { // Will select anchor links only
    checkClicks(e); //Time in ms
  });
}

function checkClicks(element) {
element.preventDefault();
  if(bMoving == false) {
    bMoving = true;
    cs_DOMElement = document.getElementById(element.target.getAttribute("href").substring(1));
    distance = cs_DOMElement.offsetTop - window.pageYOffset;
    scrollSmooth();
  }
}

function scrollSmooth() {
  var distanceLeft = cs_DOMElement.offsetTop - window.pageYOffset;
  if(distanceLeft < -10 || distanceLeft > 10) {
    window.scrollBy(0, distance/(speed/16));
    requestAnimationFrame(scrollSmooth);
  }
  else {
    window.scrollTo(0, cs_DOMElement.offsetTop);
    bMoving = false;
    return false;
  }
}
