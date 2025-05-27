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
};

function switchThemes () {
    console.log("Switching themes...")
    factsLight = document.querySelectorAll("#light");
    factsDark = document.querySelectorAll("#dark");
    profilePicture = document.querySelector("#profile");

    if (currentState) {
        css.setAttribute("href", "light.css");
        try {
            profilePicture.setAttribute("src", "me.jpg")
            for (let i = 0; i < 3; i++) {
                factsLight[i].removeAttribute("hidden");
                factsDark[i].setAttribute("hidden","hidden");
            }
        } catch {};
        document.cookie = "cookie=yum;";
    } else {
        css.setAttribute("href", "dark.css");
        try {
            profilePicture.setAttribute("src", "cat.jpg")
            for (let i = 0; i < 3; i++) {
                factsDark[i].removeAttribute("hidden");
                factsLight[i].setAttribute("hidden","hidden");
            }
        } catch {};
        document.cookie = "cookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    };
    currentState = !currentState;
    console.log("Switched themes!");
};

let cookie = document.cookie;

if (getCookie("cookie") != "") {
    currentState = false;    
} else {
    currentState = true;
};

if (currentState == false) {
    currentState = true;
    switchThemes()
};

document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("button");
    button.addEventListener('click', switchThemes);
});

