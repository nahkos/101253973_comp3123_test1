const fs = require("fs");
const path = require("path");

const directory = "test";
const dir = "/multiple";
const content = "writing something in file";

// Read and remove log file
const readFile = () => {
  fs.readdir(directory, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      console.log('deleting file ... ' + file);
      fs.unlink(path.join(directory, file), (err) => {
        if (err) throw err;
      });
    }
  });
};

// Create directory and file
const createDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(process.cwd() + dir, {
      recursive: true,
    });
  }
};

// create file
const writeFile = () => {
  var files = "";
  //   var count = 0;
  for (let i = 0; i < 10; i++) {
    files[i] = fs.writeFileSync(`./multiple/toy${i}.txt`, "write a phrase");
    console.log(`creating files ... toy${i}.txt`);
  }
}

readFile();
createDir(dir);
writeFile();
