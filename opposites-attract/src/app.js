function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
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

function switchThemes () {
    console.log("Switching themes...")
    if (currentState) {
        css.setAttribute("href", "light.css");
        try {
            document.getElementById("light").removeAttribute("hidden");
            document.getElementById("dark").setAttribute("hidden","hidden");
        } catch {};
        document.cookie = "cookie=yum;";
    } else {
        css.setAttribute("href", "dark.css");
        try {
            document.getElementById("dark").removeAttribute("hidden");
            document.getElementById("light").setAttribute("hidden","hidden");
        } catch {};
        document.cookie = "cookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    }
    currentState = !currentState;
    console.log("Switched themes!");
}

let cookie = document.cookie;

if (getCookie("cookie") != "") {
    currentState = false;    
} else {
    currentState = true;
}

if (currentState == false) {
    currentState = true;
    switchThemes()
}

document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("button");
    button.addEventListener('click', switchThemes);
});

