const Promise = require('bluebird');
// const BrowserFS = require('browserfs');

// turns off forgotten return warning in Bluebird
Promise.config({
  warnings: {
    wForgottenReturn: false
  }
});

const fs = Promise.promisifyAll(require('fs'));
// const fs = getFS();
// fs.readdir('/')
// .then((files) => { console.log(`then mkdir: ${files}`);})
// .catch((er)=>console.log(`Error in catch: ${er}`));
// console.dir(fs);

//  BrowserFS.initialize(lsfs);
//  fs.readdir('/', (err, files) => { console.log(`cb readdir: ${files}`);})

// const fs = require('fs');

// this function accesses the file system
// it returns a promise


const getAllFiles = (dir) => {
  return fs.readdirAsync(dir)
  .then(fileNamesArr => {
    console.log('fileNamesArr', fileNamesArr);
    const fileStatPromises = fileNamesArr.map(fileName => {
      return fs.statAsync(dir + '/' + fileName)
      .then(stats => {
        console.log('stats', stats);
        const file = {};
        file.filePath = dir + '/' + fileName;
        file.isDirectory = !stats.isFile();
        if (stats.isDirectory === true) {
          return getAllFiles(file.filePath)
          .then(fileNamesSubArr => {
            file.files = fileNamesSubArr;
            return file.files;
          })
          .catch(error => console.error(error));
        }
        return file;
      });
    });
    return Promise.all(fileStatPromises);
  });
};

module.exports = {
  getAllFiles
};
