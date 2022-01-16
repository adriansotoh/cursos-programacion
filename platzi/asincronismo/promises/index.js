const somethingWillHapend = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Oops");
    }
  });
};

somethingWillHapend()
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });

const somethingWillHapend2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("True");
      }, 2000);
    } else {
      const error = new Error("Oppss");
      reject(error);
    }
  });
};

somethingWillHapend2()
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });

Promise.all([somethingWillHapend(), somethingWillHapend2()])
  .then((response) => {
    console.log("Array de resultados: ", response);
  })
  .catch((err) => {
    console.error(err);
  });
