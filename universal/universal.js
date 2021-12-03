// Toggle the menu
let menu = document.querySelector(".menu");
let menuButton = document.querySelector(".fa-bars");
let closeMenu = document.querySelector(".close-menu");

function toggleMenu() {
  console.log("Clicked Menu Button");
  menu.classList.toggle("menu-show");
  menuButton.classList.toggle("fa-bars-hide");
}

menuButton.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);

// Renders All characters that were in this movie
fetch("http://swapi.dev/api/people", {
  method: "GET",
  headers: {
    accept: "application/json",
  },
})
  .then((response) => {
    // console.log("WE ARE HERE!");
    return response.json();
  })
  .then((data) => {
    console.log(data);
    // console.log("AND NOW WE ARE HERE!");
    let starWarsCharacters = data.results;
    // console.log(starWarsCharacters);
    for (let character of starWarsCharacters) {
      let filmsFromCharacterData = character.films;
      // console.log(filmsFromData);
      if (document.URL.includes("newHope")) {
        for (let film of filmsFromCharacterData) {
          if (film.includes("1")) {
            let characterElement = document.createElement("p");
            let characterName = document.createTextNode(character.name);
            characterElement.appendChild(characterName);
            let element = document.getElementById("characters");
            element.appendChild(characterElement);
          }
        }
      } else if (document.URL.includes("phantomMence")) {
        for (let film of filmsFromCharacterData) {
          if (film.includes("2")) {
            let characterElement = document.createElement("p");
            let characterName = document.createTextNode(character.name);
            characterElement.appendChild(characterName);
            let element = document.getElementById("characters");
            element.appendChild(characterElement);
          }
        }
      } else if (document.URL.includes("strikesBack")) {
        for (let film of filmsFromCharacterData) {
          if (film.includes("3")) {
            let characterElement = document.createElement("p");
            let characterName = document.createTextNode(character.name);
            characterElement.appendChild(characterName);
            let element = document.getElementById("characters");
            element.appendChild(characterElement);
          }
        }
      } else if (document.URL.includes("theClones")) {
        for (let film of filmsFromCharacterData) {
          if (film.includes("4")) {
            let characterElement = document.createElement("p");
            let characterName = document.createTextNode(character.name);
            characterElement.appendChild(characterName);
            let element = document.getElementById("characters");
            element.appendChild(characterElement);
          }
        }
      } else if (document.URL.includes("theJedi")) {
        for (let film of filmsFromCharacterData) {
          if (film.includes("5")) {
            let characterElement = document.createElement("p");
            let characterName = document.createTextNode(character.name);
            characterElement.appendChild(characterName);
            let element = document.getElementById("characters");
            element.appendChild(characterElement);
          }
        }
      } else if (document.URL.includes("theSith")) {
        for (let film of filmsFromCharacterData) {
          if (film.includes("6")) {
            let characterElement = document.createElement("p");
            let characterName = document.createTextNode(character.name);
            characterElement.appendChild(characterName);
            let element = document.getElementById("characters");
            element.appendChild(characterElement);
          }
        }
      }
    }
  })
  .catch((err) => {
    console.log(err);
  });
