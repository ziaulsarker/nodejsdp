// practice exercise from nodejs design patters  exercise 4.1

import fs from "node:fs";

const concatFiles = (...args) => {
  // min of 4 args required (file1, file2, dest, cb)
  if (args.length < 4) {
    console.error("not enough arguments supplied");
    return process.exit(1);
  }

  const cb = args.pop();
  let dest = args.pop();
  const files = args;

  const writeStream = fs.createWriteStream(dest);

  files.map((file) => {
    const readStream = fs.createReadStream(file);
    readStream.pipe(writeStream);
    cb(file, (dest = dest));
  });
};

//  testing fn
concatFiles("first.txt", "second.txt", "dest.txt", (file, dest) => {
  console.log(`finised reading ${file} and writing to ${dest}`);
});
