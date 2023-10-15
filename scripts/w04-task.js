/* LESSON 4 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Wesley Davie",
    photo: 'images/Wes_Davie_2.jpg',
    favoriteFoods: [
        'Tacos',
        'Hamburgers',
        'Shrimp',
        'Bundt Cake'
    ],
    hobbies: [
        'Reading',
        'Basketball',
        'Golf',
        'Camping'
    ],
    placesLived: [

    ],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Salt Lake City, UT",
        length: "25 years"
    },
    {
        place: "Bountiful, UT",
        length: "7 years"
    },
    {
        place: "Sanford, ME",
        length: "17 years"
    }
);

/* DOM Manipulation - Output */
 const imageElement = document.querySelector('img');
/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
imageElement.setAttribute("src", myProfile.photo);
imageElement.setAttribute("alt", `Profile image of ${myProfile.name}`);
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement("ul");
    ul.textContent = hobby;
    document.querySelector("#hobbies").appendChild(ul);
});
/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});

