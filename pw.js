const passwords = ['KARpf'];

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

function login(){
    if (pwInput == "") {
        var password;
        password=prompt('Bitte Passwort eingeben:','');
        if(password == null){

        }else{
            if(passwords.includes(password)){
                setCookie("pwInput", "pwEntered", 30);
                window.location.reload("/#courses");
            }
            else{
                alert("Passwort Falsch!");
            }
        }
    }else{
        window.location="/#courses";
    }
}