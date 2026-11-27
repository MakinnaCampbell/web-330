/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Makinna Campbell
  Date: 11.1.26
  Filename: script.js
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  let heroName = name;
  let heroGender = gender;
  let heroClass = characterClass;

  return {
    getName: function() {
      return heroName;
    },

    getGender: function() {
      return heroGender;
    },

    getClass: function() {
      return heroClass;
    }
  };
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  let name = document.getElementById("heroName").value;

  let gender = document.getElementById("heroGender").value;

  let characterClass = document.getElementById("heroClass").value;

  let character = createCharacter(name, gender, characterClass);

document.getElementById("characterOutput").innerHTML =
  "<h2>Your Character</h2>" +
  "<p><strong>Hero Name:</strong> " + character.getName() + "</p>" +
  "<p><strong>Hero Gender:</strong> " + character.getGender() + "</p>" +
  "<p><strong>Hero Class:</strong> " + character.getClass() + "</p>";});