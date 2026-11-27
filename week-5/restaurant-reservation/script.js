/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Makinna Campbell
  Date: 11.22.26
  Filename: script.js
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  // Add your table objects here

  { tableNumber: 1, capacity: 2, isReserved: false },

  { tableNumber: 2, capacity: 4, isReserved: false },

  { tableNumber: 3, capacity: 6, isReserved: false }
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  // Add your code here

  let table = tables.find(table => table.tableNumber === tableNumber);
}

 if (table && !table.isReserved) {
    table.isReserved = true;

    setTimeout(function () {
      callback("Your reservation was successful!");
    }, time);
  } else {
    callback("Sorry, this table is already reserved.");
  }


// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    // Add your code here

    e.preventDefault();

    let name = document.getElementById("name").value;

    let tableNumber = Number(document.getElementById("tableNumber").value);

    let message = document.getElementById("message");


    reserveTable(tableNumber, function (result) {

      message.textContent = name + ", " + result;
      
    }, 1500);
  });
