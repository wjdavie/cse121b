/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) =>{
    temples.forEach((temple) => {
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.innerHTML = temple.templeName;
        let img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async() => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
    console.log(temples);
    console.log(templeList);
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
};

/* sortBy Function */
let sortBy = (temples) => {
    reset();
    const filter = document.getElementById("sortBy").value;
    switch (filter) {
        case "utah":
            console.log(temples);
            utahFilter = temples.filter(temples => temples.location.includes("Utah"));
            displayTemples(utahFilter);
            console.log(utahFilter);
            break;
        case "notutah":
            notutahFilter = temples.filter(temples => !temples.location.includes("Utah"));
            displayTemples(notutahFilter);
            break;
        case "older":
            olderFilter = temples.filter(temples => new Date(temples.dedicated) < new Date(1950, 0, 1) );
            displayTemples(olderFilter);
            break;
        case "all":
            displayTemples(temples);
            break;
    };
};

getTemples(temples);
/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });