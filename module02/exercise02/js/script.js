let b = document.getElementById('myButton');
b.addEventListener('click', processClick);
function processClick(evt){
    alert("You clicked me!");
    b.removeEventListener('click', processClick);
}