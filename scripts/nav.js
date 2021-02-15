function setup() {
    document
        .getElementById("menu-hamburger")
        .addEventListener("click", przelaczMenu, false);

    clg();
}

function przelaczMenu() {
    //  document.getElementById("header-menu").style.height = "";
    document.getElementById("header-menu").classList.toggle("expand");
    let nav = document.getElementsByClassName("navBarList");
    nav[0].classList.toggle("expand");
    let buttonStyle = document.getElementById("menu-button").style.display;
    if (buttonStyle != "none") {
        document.getElementById("menu-button").style.display = "none";
        document.getElementById("close-button").style.display = "block";
    } else {
        document.getElementById("menu-button").style.display = "block";
        document.getElementById("close-button").style.display = "none";
        //   document.getElementById("header-menu").style.height = "0px";
    }
}

setup();

function clg() {
    const a = new Array(
        "ciekawą",
        "niesamowitą",
        "niezastąpioną",
        "niewzykłą",
        "fascynującą",
        "misterną",
        "fenomenalną",
        "wirtuozerską"
    );

    const rand = Math.floor(Math.random() * (a.length - 0)) + 0;

    console.log(rand);

    console.log(
        `Moje algorytmy wykryły, że jesteś%c ${a[rand]} %cosobą i miło, że tu zaglądasz %c :)`,
        "color: red;",
        "",
        "color: green;"
    );
}
