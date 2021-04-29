const sharp = require("sharp");
const { readdir } = require("fs/promises");

function compress(opts = {}) {
  const size = opts.size || 1080;
  const readPath = opts.readPath || "assets";
  const writePath = opts.writePath || "processed";

  function getFileNames() {
    readdir(readPath).then((data) => {
      compressImages(data);
    });
  }

  function compressImages(data) {
    for (let path of data) {
      sharp(readPath + "/" + path)
        .resize(size)
        .jpeg({ mozjpeg: true, progressive: true })
        .toFile(`${writePath}/${path}`);
    }
  }

  getFileNames();
}

compress();
