let button = document.getElementById("myButton");
button.addEventListener("click", function() {
    alert("have done a click on button");
});

let firstText = document.getElementById('firstText');
firstText.innerHTML = 'THIS IS THE TEXT THAT I CHANGED IT BY JAVASCRIPT';

document.getElementById("circle").onclick = function() { 
    document.getElementById("circle").style.display = "none"; 
} 

let myFamilyMembers = ['Najib', 'Aziz', 'Habib', 'Alireza', 'MohammadReza' , 'Marzia', 'Tahir', 'Anita', 'Mohammad'];
function show(){
    console.log(myFamilyMembers)
    document.write(myFamilyMembers + '<br>')
}
show()
let numbers = [1, 2 , 3 ,4 ,5 ,6 ,7 ,8 ,9, 10]
function showNumbers(){
    console.log(numbers.length)
    document.write(numbers.length)
}
showNumbers()

var form = document.createElement('form');


var inputName = document.createElement('input');
inputName.type = 'text';
inputName.name = 'userName';
inputName.placeholder = 'Name';

var inputEmail = document.createElement('input');
inputEmail.type = 'email';
inputEmail.name = 'userEmail';
inputEmail.placeholder = 'Email';


var buttonSubmit = document.createElement('input');
buttonSubmit.type = 'submit';
buttonSubmit.value = 'Submit';


form.appendChild(inputName);
form.appendChild(inputEmail);
form.appendChild(buttonSubmit);


document.body.appendChild(form);


//making tables 
var tableData = [
    ["Name", "Age", "Country"],
    ["Atefa", 20, "Afghanistan"],
    ["Sara", 30, "Spain"],
    ["Marcos", 22, "Italia"]
  ];

  // Create a table element
  var table = document.createElement("table");

  var thead = document.createElement("thead");
  var tbody = document.createElement("tbody");


  for (var i = 0; i < tableData.length; i++) {
    var row = document.createElement("tr");

    for (var j = 0; j < tableData[i].length; j++) {
      var cell = document.createElement(i === 0 ? "th" : "td"); 
      var cellText = document.createTextNode(tableData[i][j]);

      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    i === 0 ? thead.appendChild(row) : tbody.appendChild(row);
  }

 
  table.appendChild(thead);
  table.appendChild(tbody);

 
  document.body.appendChild(table);


  //the last part of manipulation dom
  var Coders = [
    {
      id: 1,
      name: "Atefa",
      status: "Alive",
      species: "Human",
      type: "Femcoder",
      gender: "female"
    },
    {
      id: 2,
      name: "Helena",
      status: "Alive",
      species: "Human",
      type: "Femcoder",
      gender: "female"
    },
    {
      id: 3,
      name: "Deisire",
      status: "Alive",
      species: "Human",
      type: "Femcoder",
      gender: "Female"
    },
  ];
  console.log(Coders);
//ADD THE ARRAY ELEMENT INTO THE TABLE

  var table = document.createElement("table");
  var thead = document.createElement("thead");
  var tbody = document.createElement("tbody");
  var headerRow = document.createElement("tr");
  for (var key in Coders[0]) {
    var th = document.createElement("th");
    th.appendChild(document.createTextNode(key));
    headerRow.appendChild(th);
  }
  thead.appendChild(headerRow);
  table.appendChild(thead);
  for (var i = 0; i < Coders.length; i++) {
    var row = document.createElement("tr");
    for (var key in Coders[i]) {
      var cell = document.createElement("td");
      cell.appendChild(document.createTextNode(Coders[i][key]));
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }
  table.appendChild(tbody);
  document.body.appendChild(table);