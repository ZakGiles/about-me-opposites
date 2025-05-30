function switchThemes () {
    factsLight = document.querySelectorAll("#light");
    factsDark = document.querySelectorAll("#dark");
    profilePicture = document.querySelector("#profile");

    if (currentState) {
        css.setAttribute("href", "light.css");
        try {
            profilePicture.setAttribute("src", "cat1.jpg");
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

function showProfileToolTip () {
    document.querySelector(".tooltip").removeAttribute("hidden");
    console.log("meow");
}

function hideProfileToolTip () {
    document.querySelector(".tooltip").setAttribute("hidden", "hidden");
    console.log("meow");
}

try {
hideProfileToolTip();
} catch {};

let cookie = document.cookie;

if (cookie != "") {
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

try {
document.getElementById("profile").addEventListener("mouseover", showProfileToolTip);
document.getElementById("profile").addEventListener("mouseout", hideProfileToolTip);
} catch {};


