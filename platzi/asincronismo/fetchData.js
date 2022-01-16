let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fechData = (url_api) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", url_api, true);
    xhttp.onreadystatechange = (e) => {
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error("Error en ", url_api));
      }
    };
    xhttp.send();
  });
};

module.exports = fechData;
