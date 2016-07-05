var cs_DOMElement = 0;
var bMoving = false;
var speed = 1000;
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
    scrollSmooth();
  }
}

function scrollSmooth() {
  var distance = cs_DOMElement.offsetTop - window.pageYOffset;
  if(window.pageYOffset < cs_DOMElement.offsetTop) {
    window.scrollBy(0, distance/(speed/16));
    console.log( window.pageYOffset - cs_DOMElement.offsetTop );
    requestAnimationFrame(scrollSmooth);
  }
  else if (window.pageYOffset > cs_DOMElement.offsetTop) {
    window.scrollBy(0, distance/(speed/16));
    console.log( window.pageYOffset + " -- " + cs_DOMElement.offsetTop );
    requestAnimationFrame(scrollSmooth);
  }
  else {
    console.log("finished");
    bMoving = false;
    return false;
  }
}
