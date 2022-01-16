const fechData = require("../fetchData");
const fecthData = require("../fetchData");
const API = "https://rickandmortyapi.com/api/character/";

fechData(API)
  .then((res) => {
    console.log(res.info.count);
    return fechData(`${API}${res.results[0].id}`);
  })
  .then((res) => {
    console.log(res.name);
    return fecthData(`${res.origin.url}`);
  })
  .then((res) => {
    console.log(res.dimension);
  })
  .catch((err) => console.error(err));
