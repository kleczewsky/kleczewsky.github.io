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

    console.log(
        `%cMoje algorytmy wykryły, że jesteś%c ${a[rand]} %cosobą i miło, że tu zaglądasz %c :)`,
        "font-size: 1rem; font-weight:600; background-color:black; padding:3rem 0rem 3rem 3rem; color: green; ",
        "font-size: 1rem; font-weight:600; background-color:black; padding:3rem 0; color: red;",
        "font-size: 1rem; font-weight:600; background-color:black; padding:3rem 0; color: green;",
        "font-size: 1rem; font-weight:600; background-color:black; padding:3rem 3rem 3rem 0rem; color: green;"
    );
}
