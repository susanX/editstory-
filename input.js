var item1;
var item2:
var item3:

document.getElementById('changeList').onclick = newList;

function newList(){   
    item1 = prompt("Enter a new fist item:");   
    item2 = prompt("Enter a new fist item"); 
    item3 = prompt("Enter a new fist item"); 
    updateList();
}

function updateList() {
    document.getElementById('one').innerHTML = item1;
    document.getElementById('two').innerHTML = item2;
    document.getElementById('three').innerHTML = item3;
}