
function topNav() {
  var nav = document.getElementById("topNav");
  if (nav.className === "navBarRight") {
    nav.className += " responsive";
  } else {
    nav.className = "navBarRight";
  }
}