document.getElementById('one').onclick = newList;

var item1;
var item2:
var item3:

function newList(){
    
    item1 = prompt("Enter a new fist item").innerHTML = item1;    
    item2 = prompt("Enter a new fist item").innerHTML = item2; 
    item3 = prompt("Enter a new fist item").innerHTML = item3; 
    updateList();
}

function updateList() {
    document.getElementById('one').innerHTML = item1;
    document.getElementById('two').innerHTML = item2;
    document.getElementById('three').innerHTML = item3;
}