function setup() {
    document
        .getElementById("menu-hamburger")
        .addEventListener("click", przelaczMenu, false);
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
