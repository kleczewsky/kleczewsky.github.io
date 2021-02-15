// Add Event listeners for hitboxes
function setupLettersForExplode() {
    //Reference for svg and hitboxes
    const shatterWord = document.querySelectorAll(".napis");
    // console.log(shatterWord);
    const hitboxLetters = document.querySelectorAll(".charhitbox");
    // console.log(hitboxLetters);
    //Colors array
    const colors = ["#000000", "#bb4646", "#cb39ff", "#08e0b2"];

    // Fly in letters
    for (let i = 0; i < shatterWord[0].children.length - 1; i++) {
        // Remove 1 from lenght because of "defs" being one of the children
        const letterInWord = shatterWord[0].children[i + 1];
        // Skip 1 because of "defs" being first

        //console.log(letterInWord);

        flyinMutatedLetter(letterInWord, colors[i]);
    }

    //  EventListener Setup Skip font group
    for (let i = 0; i < shatterWord[0].children.length - 2; i++) {
        // Remove 2 to skip font
        const letterInWord = shatterWord[0].children[i + 2];
        // Skip 2 defs + font

        hitboxLetters[i].addEventListener("mouseenter", () => {
            explodeLetter(letterInWord, colors[i + 1]); // Skip Black Color
        });
        hitboxLetters[i].addEventListener("mouseleave", () => {
            implodeLetter(letterInWord);
        });
    }

    function flyinMutatedLetter(letterReference, color) {
        shatterLetter(letterReference, color);
        setTimeout(implodeLetter, 1500, letterReference);
        letterReference.style.transform = "scale(1)";
    }
}

window.addEventListener("load", function () {
    setupLettersForExplode();
});

//Exploding each "pixel" in a letter and adding color
function explodeLetter(letterReference, color = "hsl(32, 100%, 59%)") {
    for (let i = 0; i < letterReference.children.length; i++) {
        const miniRect = letterReference.children[i];
        miniRect.style.transform =
            "translate3d(" +
            randomIntFromRange(-45, 45) +
            "px, " +
            randomIntFromRange(-45, 45) +
            "px, 0px)";

        miniRect.style.fill = color;
    }
}

function shatterLetter(letterReference, color = "hsl(32, 100%, 59%)") {
    for (let i = 0; i < letterReference.children.length; i++) {
        const miniRect = letterReference.children[i];
        miniRect.style.transform =
            "translate3d(" +
            randomIntFromRange(-5, 5) +
            "px, " +
            randomIntFromRange(-5, 5) +
            "px, 0px)";

        miniRect.style.fill = color;
    }
}

//Going back to normal
function implodeLetter(letterReference) {
    for (let i = 0; i < letterReference.children.length; i++) {
        const miniRect = letterReference.children[i];
        miniRect.style.transform = "translate3d(0px, 0px, 0px)";

        miniRect.style.fill = "";
    }
}

function randomIntFromRange(min, max) {
    let randomNum = Math.floor(Math.random() * (max - min) + min);

    return randomNum;
}

particlesJS.load("particles-js", "particles.json");
