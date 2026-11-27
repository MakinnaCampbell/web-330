"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-02

      Project to read field values from web storage
      Author: Makinna Campbell
      Date:11.08.26

      Filename: project09-02a.js
*/

/* Page Objects */

let riderName = document.getElementById("riderName");
let ageGroup = document.getElementById("ageGroup");
let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let accOption = document.getElementById("accOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");

function showData() {
   sessionStorage.riderName = document.getElementById("riderName").value;

   sessionStorage.ageGroup = document.getElementById("ageGroup").value;

   sessionStorage.bikeOption = document.getElementById("bikeOption").value;

   sessionStorage.routeOption = document.getElementById("routeOption").value;

   sessionStorage.accOption = document.getElementById("accOption").value;

   sessionStorage.region = document.getElementById("region").value;

   sessionStorage.miles = document.getElementById("miles").value;

   sessionStorage.comments = document.getElementById("comments").value;

   location.href = "project09-02b_txt.html";
}

document.getElementById("submitButton").onclick = showData;