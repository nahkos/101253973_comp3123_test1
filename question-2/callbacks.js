function resolvedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = { "message:": "delayed success!" };
      console.log(success);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong!");
      }
    }, 500);
  });
}
function rejectedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        throw new Error("error: delayed exception!");
      } catch (e) {
        console.error(e);
      }
    }, 500);
  });
}


resolvedPromise();

rejectedPromise();
