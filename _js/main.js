var cs_ScrollObject = function( iSpeed ) {
  this.DOMElement = 0;
  this.bMoving = false;
  this.speed = iSpeed;
  this.distance = 0;
}

var scrollObject = new cs_ScrollObject(300) //time in ms

for(var i = 0; i < document.querySelectorAll("a").length; i += 1) {
  document.querySelectorAll("a[href*='#']:not([href='#'])")[i].addEventListener("click", function(e) { // Will select anchor links only
    checkClicks(e);
  });
}

function checkClicks(element) {
element.preventDefault();
  if(scrollObject.bMoving == false) {
    scrollObject.bMoving = true;
    scrollObject.DOMElement = document.getElementById(element.target.getAttribute("href").substring(1));
    scrollObject.distance = scrollObject.DOMElement.offsetTop - window.pageYOffset;
    scrollSmooth();
  }
}

function scrollSmooth() {
  var distanceLeft = scrollObject.DOMElement.offsetTop - window.pageYOffset;
  if (window.pageYOffset + window.innerHeight == scrollObject.DOMElement.offsetTop + scrollObject.DOMElement.offsetHeight) {
    scrollObject.bMoving = false;
    return;
  }
  if( distanceLeft < -10 || distanceLeft > 10 ) {
    window.scrollBy(0, scrollObject.distance/(scrollObject.speed/16));
    requestAnimationFrame(scrollSmooth);
  }
  else {
    window.scrollTo(0, scrollObject.DOMElement.offsetTop);
    scrollObject.bMoving = false;
    return;
  }
  console.log(window.pageYOffset + window.innerHeight +" "+ (scrollObject.DOMElement.offsetTop + scrollObject.DOMElement.clientHeight))
}
