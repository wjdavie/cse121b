/*//OPERATORS
//Add
let x = 10 + 2;
//Multiply
let x = 10 * 2;
//Subtract
let x = 6 - 2;
//Concatinate Strings
let x = "Happy";
let y = "Birthday";
message = (x + " " + y);
//Assign a Value to a Variable
x = 4;
// Increment the value in a variable by 3
x += 3;
//Compare 2 Values
x == y;
//Check to see if one number is less than another number
x < y;
//Check to see if 2 values are NOT equal
x != y;
//Check to see if a value is less than 10 and greater than 0
(x < 10 && > 0);
*/
/*//COERCION
// These would also be true with a double equals
3 === 3.0; // true
"yes" === "yes"; // true
null === null; // true
false === false; // true

42 === "42"; // false
"hello" === "Hello"; // false
true === 1; // false
0 === null; // false
"" === null; // false
null === undefined; // false
//note the difference in a double equal comparison
42 == "42"; // true...the string "42" gets coerced into the number 42
"hello" == "Hello"; // false...are you surprised at this one?
1 == true; // true...the boolean value true gets coerced into the number 1
null == undefined; //  true
10 < 11; // true
42 > "42"; // false
43 > "42"; // true!  what is going on?
"a" < "b"; // true
// array example
var x = [1, 2, 3];

// assignment is by reference-copy, so
// y references the *same* array as x,
// not another copy of it.
var y = x;

y === x; // true...both variables are bound to the exact same array.
y === [1, 2, 3]; // false...it might look the same, but this is NOT the same array that y is bound to.
x === [1, 2, 3]; // false
y == [1, 2, 3]; // false...doesn't work with double equal either :(
*/
/*//W03 FUNCTIONS
//Standard function
function fullName(first, last) {
    return `${first} ${last}`
}
//Anonymous function
const fullName = function (first, last) {
    return `${first} ${last}`
}
//Arrow function
const fullName = function (firstName, lastName) => `${firstName} ${lastName}`
//Calling a function
document.querySelector('#fullname').innerHTML = fullname(firstName, lastName);
*/
/*//ARRAY METHODS
let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];
let namesB = names.filter((name) => name.charAt(0) == 'B'); //Creates an array with only those name that start with 'B'
let namesLength = names.map((name) => name.length); //Creates an array with the length of each name.
let namesAvg = names.reduce((total, name) => name.length, 0) / names.length; //Returns the average string lenth of the names. 
//The initial value of the reduction is set to 0.
//Inside the reducer function, total represents the accumulated sum of string lenths, and name represents each individual name in the array.
//The reducer function adds the length of each name to the total in each iteration. (like any accumulator, total =+ name.length)
*/
/*//ARRAY METHODS PONDER ACTIVITY
//1. Declare an array with value = ['one', 'two', 'three']
//2. Convert our array of strings into an array of HTML strings. Each string should be turned into a list item. For example: "<li>one</li>"
//3. Set our list of HTML strings into the myList list. (Hint...checkout the .join() method.)
const numbers = ['one', 'two', 'three'];
const numbersHtml = numbers.map(function (number) {
    return `<li>${number}</li>`;
});
document.getElementById("myList").innerHTML = numbersHtml.join();
//1. Declare an array with letter grades in it: ['A', 'B', 'A']
//2. Write a function that will take one letter grade, and return the appropriate gpa points for that grade. IE if we send in 'A' it should return 4.
//3. Use map and our conversion function to convert the array in step 1 to gpa points.
const grades = ['A', 'B', 'A'];
function convertLetterToGPA(grade) {
    let gpa = 0
    if (grade === "A") {
        gpa = 4;
    }
        else if (grade === "B") {
            gpa = 3;
        }
    return gpa;
};
const gpaPoints = grades.map(convertLetterToGPA);
//1. Using the function from the previous activity, convert an array of grades into an array of gpaPoints.
//2. Using reduce calculate the GPA from the array of gpaPoints.
const pointsTotal = gpaPoints.reduce(function (total, item) {
    return total + item;
});
const gpa = pointsTotal / gpaPoints.length;
//OR YOU COULD SOLVE IT THIS WAY
const pointsTotal = gpaPoints.reduce ((total, item) => total + item);
const gpa = pointsTotal / gpaPoints.length;
//OR YOU COULD SIMPLIFY IT THIS WAY
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;
//1. Declare an array with the following value: ['watermelon', 'peach', 'apple', 'tomato', 'grape']
//2. Using filter keep only the fruits that are longer than 6 characters.
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const fruitsLen = fruits.filter((fruit) => fruit.length > 6);
//1. Declare an array with the following value: [12, 34, 21, 54]
//2. Declare a luckNumber variable with the value 21;
//3. Use indexOf to see if the luckyNumber is in the Array.
const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = numbers.indexOf(luckyNumber);
*/
//DOM EVENTS - PONDER
//html #
<!-- events.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Events practice: ToDos</title>
    <style>
      .todos {
        width: 300px;
      }
      .todos > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid;
        padding: 0.5em;
      }
      .todos p {
        margin: 0;
      }
      .todos span {
        cursor: pointer;
      }
      .strike {
        text-decoration: line-through;
        color: gray;
      }
    </style>
  </head>
  <body>
    <h1>ToDos</h1>
    <section>
      <label for="todo">Enter Task</label>
      <input name="todo" id="todo" />
      <button id="submitTask">Enter</button>
    </section>
    <ul id="todoList" class="todos"></ul>
    <script src="events.js"></script>
  </body>
</html>

//Javascript #
// events.js
let tasks = [];

function renderTasks(tasks) {
  // get the list element from the DOM
  const listElement = document.querySelector("#todoList");
  // make sure it is empty
  listElement.innerHTML = "";
  // loop through the tasks array. for each of them we need to add the HTML markup for a todo.
  tasks.forEach(task => {
    listElement.innerHTML += `
    <l1 ${task.completed ? 'class-"strike"' : ""}>
      <p>${task.detail}</p>
      <div>
        <span data-function="delete">❎</span>
        <span data-function="complete">✅</span>
      </div>
    </li>`;
  });
}

function newTask() {
  // get the value entered into the #todo input
  const task = document.querySelector("#todo").value;
  // add it to our arrays tasks
  tasks.push({detail: task, completed: false});
  // render out the list.
  renderTasks(tasks);
}

function removeTask(taskElement) {
  // note the use of Array.filter to remove the element from our task array
  tasks = tasks.filter(
    (task) => task.detail != taskElement.childNodes[0].innerText
  );
  // this line removes the HTML element from the DOM
  taskElement.remove();
}

function completeTask(taskElement) {
  // In this case we need to find the index of the task so we can modify it.
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.childNodes[0].innerText
  );
  // once we have the index we can modify the complete field.
  // tasks[taskIndex].completed ? false : true is a ternary expression.
  // If the first part is true (left of the ?), then the value on the left of the : will get returned, otherwise the value on the right of the : will be returned.
  tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
  // toggle adds a class if it is not there, removes it if it is.
  taskElement.classList.toggle("strike");
  console.log(tasks);
}

function manageTasks(event) {
  // did they click the delete or complete icon?
  console.log(event.target);
  
  // event.target will point to the actual icon clicked on. We need to get the parent li to work with however. HINT: Remember element.closest()? Look it up if you don't
  const parent = event.target.closest("li");
  // because we added 'data-function="delete"' to each icon in a task we can access a dataset property on our target
  if (event.target.dataset.function === "delete") {
    removeTask(parent); 
  }
  // use that in a couple of if statements to decide whether to run removeTask or completeTask
  if (event.target.dataset.function === "complete") {
    completeTask(parent);
  }
}

// we need to attach listeners to the submit button and the list. Listen for a click, call the 'newTask' function on submit and call the 'manageTasks' function if either of the icons are clicked in the list of tasks.
document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("todoList").addEventListener("click", manageTasks);