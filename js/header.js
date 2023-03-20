function myFunction() {
    var x = document.getElementById("navbar-id");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
}