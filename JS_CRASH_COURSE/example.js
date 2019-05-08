
//var, let, const

//primitive viriable
//String, Numbers, Boolean, null, undefined
const name = "John";
const age = 30;

//Concatenation
console.log("My name is "+name+" and I am "+age);

//Template String
alert(`My name is ${name}, and I am ${age}`);

//String and split
const s = "tecknology, computer, it, smart";
console.log(s.length);
console.log(s.substring(0,5));
console.log(s.split(', ',2));

//Arrays - variables that hold multiple values
const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ["apple", "oranges", 3, true];
console.log(fruits);
console.log(fruits[1]);
fruits[4] = 'grapes'
console.log(fruits);
fruits.push("mingos");
console.log(fruits);
fruits.unshift('strawberry');
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(fruits.indexOf(3));

//Object literal
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age:30,
    hobbies:['Music','Movies','Sports'],
    address:{
        street: '50 main street',
        city:'Boston',
        state:"MA"
    }
}

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);

const {firstName, lastName , hobbies} = person;
console.log(firstName,lastName,`has a hobby of ${hobbies[0]}`);
person.email = 'john@gmail.com';
console.log(person.email);

const todos = [
    {
        id:1,
        text: "Take out trash",
        isComplete: true
    },
    {
        id:2,
        text: "Meeting with boss",
        isComplete: true
    },
    {
        id:3,
        text: "Dentist appointment",
        isComplete: false
    },
]
/*
console.log(todos[1].text);

const todoJSON= JSON.stringify(todos);

console.log(todoJSON);
//for literal
for(let i=0; i< 10; i++){
    console.log(i);
}
//while
let i = 0;
while( i < 10 ){
    console.log(`While Loop Number: ${i}`);
    i++;
}

for(let todo of todos){
    console.log(todo);
}

*/


//forEach, map, filter

console.log('----forEach example:-----');
todos.forEach(function(todo){
    console.log(todo.id);
});

console.log('----map example:----');
todos.map( todo => {
    console.log(`Items in todos are ${todo.text}`);
});

console.log('----filter example:----');
const todoCompleted = todos.filter(function(todo){
   return todo.isComplete === true;
}).map(function(todo){
    return todo.text;
});
console.log(todoCompleted);

const x = 9;

const color = x >10 ? 'red' : 'blue'; 

console.log(color);

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}

//function addNums(num1 = 1, num2 = 1){
//    return num1+num2;
//}
const addNums = (num1,num2) => num1+num2;
//{return num1 + num2;}
console.log(addNums(5,5));

//Constructor function
function Person (firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);

    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }

    this.getFirstName = function(){
        return this.firstName;
    }

    this.getLastName = function(){
        return this.lastName;
    }

    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

//Instantiate object
const person1 = new Person('John',"Doe",'4-3-1980');
const person2 = new Person('Mary','Smith','3-6-1980');
console.log(person1.getBirthYear());
//console.log(person2.dob.getFullYear());
console.log(person2.getFirstName());
console.log(person2.getLastName());
console.log(person1.getFullName());
console.log(person2.getFullName());


//DOM
console.log(window);
alert(1);

//Single element
    //console.log(document.getElementById('my-form'));
    const form = document.getElementById("my-form");
    console.log(form);
    const h1Element = document.querySelector('h1');
    console.log(h1Element);
//Multiple elements
    console.log(document.querySelectorAll('.item'));
    const containerClass = document.getElementsByClassName("container");
    console.log(containerClass);
    console.log(document.querySelectorAll('.container'))

    const items = document.querySelectorAll('.item');
    items.forEach(item => console.log(item));

    const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = "text Content";
ul.children[1].textContent = "chose by children[1]";
ul.lastElementChild.innerHTML = '<h1>innerHTML</h1>';

const button = document.querySelector('.btn');
console.log(button);
button.style.background = 'red';

//event
const btn = document.querySelector('.btn');
btn.style.background = 'blue';
btn.style.width = "80%";
btn.style.color = 'white';

btn.addEventListener('mouseout', (e)=>{
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.className);
    document.querySelector('#my-form').style.backgroundColor = "grey";
    document.querySelector('body').classList.add('bg-dark');
    //document.querySelector('.items').lastElementChild.innerHTML = "<h1>Hello</h1>"
});