/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Wesley Davie';
let currentYear = '2023';
let profilePicture = images/Wes_Davie_2.jpg;

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
currentYear.textContent =  '2023';
imageElement.setAttribute('src', images/Wes_Davie_2.jpg);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

const foodList = ['tacos', 'hamburgers', 'shrimp', 'bundt cake'];
foodElement.innerHTML = foodList;
const otherFood = 'steak';
foodList.push(otherFood);
foodElement.innerHTML += `<br>${foodList}`;
const favFoods = foodList.shift();
foodElement.innerHTML += `<br>${favFoods}`;
const finalList = favFoods.pop();
foodElement.innerHTML += `<br>${finalList}`;
