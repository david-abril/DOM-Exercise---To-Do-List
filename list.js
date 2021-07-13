
/*function getInputValue() {
    let inputVal= document.getElementById("inputId").value
    alert(inputVal);
}*/

let button = document.getElementById('addButton');

button.addEventListener('click', function(event) {
    let newTask = document.createElement('li');
    newTask.innerHTML = document.getElementById('addTask').value; 
    let list = document.querySelector('ul');
    list.appendChild(newTask);
    
})

let listLength = document.getElementsByTagName('ul').length; 
if (listLength > 0)
{
    let oldItem = document.querySelector('li');
    oldItem.addEventListener('click', function(event) {
    document.querySelector('li').remove()
 })
}






/*
    button.addEventListener('mouseup', function(event) {
    let newTask = document.createElement('li');
    newTask.innerHTML = document.getElementById('');
})
 */