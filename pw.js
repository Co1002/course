const passwords = ['KARpf'];

var error = document.getElementById("error");

function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

let pwInput = getCookie("pwInput");
if (pwInput !== "") {
    document.getElementById("courses").style.display = "grid";
}

function loginBtn(){
    if (pwInput == "") {
        var psw = document.getElementById("psw");
        if(psw){
            if(passwords.includes(psw.value())){
                setCookie("pwInput", "pwEntered", 30);
                window.location="/#courses";
                window.location.reload();
            }
            else{
                error.innerHTML = 'Falsches Passwort!';
            }
        }else{
            error.innerHTML = 'Passwort eingeben!';
        }
    }else{
        window.location="/#courses";
    }
}

//--------------------------------------------------

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("login");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    if (pwInput == "") {
        modal.style.display = "block";
    }else{
        window.location="/#courses";
    }
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