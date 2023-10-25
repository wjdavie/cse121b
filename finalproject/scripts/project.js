/* W07: Final Project */

/* Create the global variables */
const teamsElement = document.getElementById("teams");
let teamsList = [];

/* displayTeams Function */
const displayTeams = (teams) =>{
    teams.forEach((team) => {
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        h3.innerHTML = team.full_name;
        p1.innerHTML = "Abbreviation: " + team.abbreviation; 
        p2.innerHTML = "Conference: " + team.conference;
        p3.innerHTML = "Division: " + team.division;
        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        teamsElement.appendChild(article);
    });
};
/* getTeams Function using fetch()*/
const getTeams = async() => {
    const response = await fetch("https://www.balldontlie.io/api/v1/teams");
    const data  = await response.json();
    teamsList = data.data;
    displayTeams(teamsList);
    console.log(teams);
    console.log(teamsList);
};

/* reset Function */
const reset = () => {
    teamsElement.innerHTML = "";
};

/* sortBy Function */
let sortBy = (teams) => {
    reset();
    const filter = document.getElementById("sortBy").value;
    switch(filter) {
        case "East":
            const eastFilter = teamsList.filter((team )=> team.conference === "East");
            displayTeams(eastFilter);
            break;
        case "West":
            const westFilter = teamsList.filter((team )=> team.conference === "West");
            displayTeams(westFilter);
            break;
        case "Southeast":
            const seFilter = teamsList.filter((team )=> team.division === "Southeast");
            displayTeams(seFilter);
            break;
        case "Atlantic":
            const atlanticFilter = teamsList.filter((team )=> team.division === "Atlantic");
            displayTeams(atlanticFilter);
            break;
        case "Central":
            const centralFilter = teamsList.filter((team )=> team.division === "Central");
            displayTeams(centralFilter);
            break;
        case "Southwest":
            const swFilter = teamsList.filter((team )=> team.division === "Southwest");
            displayTeams(swFilter);
            break;
        case "Northwest":
            const nwFilter = teamsList.filter((team )=> team.division === "Northwest");
            displayTeams(nwFilter);
            break;
        case "Pacific":
            const pacificFilter = teamsList.filter((team )=> team.division === "Pacific");
            displayTeams(pacificFilter);
        break;
        case "All":
            displayTeams(teams);
    };
    if (filter === "West") {
        alert("HOME TO THE WORLD CHAMPION DENVER NUGGETS! ");
    }  else if (filter === "East") {
        alert ("BETTER LUCK NEXT YEAR! ");
    }  else if (filter === "Northwest") {
        alert ("THE CONFERENCE OF CHAMPIONS! ");
    }  else if (filter === "All") {
    }  else {
        alert("THIS IS NOT YOUR YEAR!");
    };
};

getTeams(teams);
/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(teamsList) });