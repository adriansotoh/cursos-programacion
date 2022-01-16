let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let API = "https://rickandmortyapi.com/api/character/";

function fechData(url_api, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", url_api, true);
  xhttp.onreadystatechange = function (e) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error("Error: ", url_api);
        return callback(error, null);
      }
    }
  };
  xhttp.send();
}

fechData(API, function (err1, res1) {
  if (err1) return console.error(err1);
  fechData(API + res1.results[0].id, function (err2, res2) {
    if (err2) return console.error(err2);
    fechData(res2.origin.url, function (err3, res3) {
      if (err3) return console.error(err3);
      console.log("Cantidad de personajes: ", res1.info.count);
      console.log("Nombre del primer personaje: ", res2.name);
      console.log("Dimension: ", res3.dimension);
    });
  });
});
