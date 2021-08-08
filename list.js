// Week 4 - Day 1 Assignment: To Do List

let button = document.getElementById('addButton');

//Show an unordered todo list and allow user in input new tasks:
button.addEventListener('click', function() {
    let newTask = document.createElement('li');
    newTask.innerHTML = document.getElementById('addTask').value; 
    let list = document.querySelector('ul');
    list.appendChild(newTask);
    addTask.value = '';
})


//Enable user to remove list items by clicking - item will be crossed out, then removed after 1 sec.
let list = document.querySelector('ul');
console.log('list');
list.addEventListener('click', function(evt){
    item = evt.target;
    console.log(item);
    item.style.setProperty('text-decoration', 'line-through')
    setTimeout(function() {item.remove()}, 1000);
})














