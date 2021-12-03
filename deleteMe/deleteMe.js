let data = [
  "http://swapi.dev/api/films/1/",
  "http://swapi.dev/api/films/2/",
  "http://swapi.dev/api/films/3/",
  "http://swapi.dev/api/films/6/",
];

function testingShit() {
  let thing;

  for (let i of data) {
    if (i.includes("1")) {
      thing = 1;
    }
  }

  return thing;
}

console.log(testingShit(data));
