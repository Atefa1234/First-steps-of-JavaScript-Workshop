let button = document.getElementById("myButton");
button.addEventListener("click", function() {
    alert("have done a click on button");
});

let firstText = document.getElementById('firstText');
firstText.innerHTML = 'THIS IS THE TEXT THAT I CHANGED IT BY JAVASCRIPT';

document.getElementById("circle").onclick = function() { 
    document.getElementById("circle").style.display = "none"; 
} 

