const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

var filterArray = mixedArray.filter((e) => typeof e === "string" && e !== "");

var lowerArray = filterArray.map(function (t) {
  return t.toLowerCase();
});

function lowerCaseWords(filterArray) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(lowerArray);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Somethign went wrong!");
      }
    }, 1000);
  });
}

lowerCaseWords()

