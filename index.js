function html(){
    window.location = "/area/html-area.html";
}

function css(){
    window.location = "/area/css-area.html";
}

function js(){
    window.location = "/area/js-area.html";
}

function later(){
    alert("Dieser Bereich ist noch nicht fertig...")
}

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}