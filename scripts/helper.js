const fs = require('fs');
const path = require('path');

const getAllFiles = (dirPath, arrayOfFiles) => {
  files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach((file) => {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, '/', file));
    }
  });

  return arrayOfFiles;
};

const removeDuplicates = (data) => {
  return [...new Set(data)];
};

const checkFolderExist = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, {
      recursive: true,
    }),
      (err) => {
        throw err;
      };
  }
};

exports.getAllFiles = getAllFiles;
exports.removeDuplicates = removeDuplicates;
exports.checkFolderExist = checkFolderExist;
