import fs, { promises as fsPromise } from "node:fs";

const concatFiles = (files = [], dest, cb) => {
  const writeStream = fs.createWriteStream(dest);

  files.map((file) => {
    const readStream = fs.createReadStream(file);
    readStream.pipe(writeStream);
    cb(file, (dest = dest));
  });
};

concatFiles(["first.txt", "second.txt"], "dest.txt", (file, dest) => {
  console.log(`finised reading ${file} and writing to ${dest}`);
});
