const sharp = require("sharp");
const { readdir } = require("fs/promises");

function compress(opts) {
  const { size, readPath, writePath } = opts;

  function getFileNames() {
    readdir(readPath).then((data) => {
      compressImages(data);
    });
  }

  function compressImages(data) {
    for (let path of data) {
      sharp(readPath + "/" + path)
        .resize(size)
        .jpeg({ mozjpeg: true })
        .toFile(`${writePath}/${path}`);
    }
  }

  getFileNames();
}

compress({ size: 1080, readPath: "./assets", writePath: "processed" });
