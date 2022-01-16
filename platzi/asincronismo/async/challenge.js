const fechData = require("../fetchData");
const API = "https://rickandmortyapi.com/api/character/";

const anotherFunction = async (url_api) => {
  try {
    const data = await fechData(url_api);
    const character = await fechData(`${url_api}${data.results[0].id}`);
    const origin = await fechData(`${character.origin.url}`);

    console.log("#personajes: ", data.info.count);
    console.log("Nombre: ", character.name);
    console.log("Dimension: ", origin.dimension);
  } catch (error) {
    console.error(error);
  }
};

console.log("Before");
anotherFunction(API);
console.log("Before");
