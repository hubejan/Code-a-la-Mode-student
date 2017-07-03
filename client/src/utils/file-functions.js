const Promiseb = require('bluebird');
const BrowserFS = require('browserfs');

// turns off forgotten return warning in Bluebird
Promiseb.config({
  warnings: {
    wForgottenReturn: false
  }
});

const fsp = Promiseb.promisifyAll(require('fs'));

function initializationPromise(dir) {
  return new Promise((resolve, reject) => {
    const html5fs = new BrowserFS.FileSystem.HTML5FS(10, 1);
    html5fs.allocate(() => {
      resolve();
    });
    BrowserFS.initialize(html5fs);
  });
}

const getAllFiles = (dir) => {
  let fileStatPromises;
  return fsp.readdirAsync(dir)
    .then(fileNamesArr => {
      fileStatPromises = fileNamesArr.map(fileName => {
        return fsp.statAsync(`${dir}/${fileName}`)
          .then(stats => {
            const file = {};
            file.filePath = `${dir}/${fileName}`;
            file.isDirectory = !stats.isFile();
            if (stats.isDirectory() === true) {
              return getAllFiles(file.filePath)
              .then(fileNamesSubArr => {
                file.files = fileNamesSubArr;
                return file;
              })
              .catch(error => console.error(error));
            }
            return file;
          });
      });
      return Promiseb.all(fileStatPromises);
    });
};

const mkDirStructure = (tree) => {
  const filePromises = tree.map(file => {
    if (file.isDirectory) {
      fsp.statAsync(file.filePath, (err, fStat) => {
        console.log('fStat is:', fStat, 'err is:', err);
        if (err) {
          console.log('dir not in students FS');
          return fsp.mkdirAsync(file.filePath, (error) => {
            if (error) {
              console.log('mkdir error. fstat: ', fStat)
              return console.error(error);
            }
          });
        }
        return mkDirStructure(file.files);
      });
    }
    // console.log('writing to:', file.filePath);
    return writeFile(file.filePath, '');
  });
  // console.log('filePromises:', filePromises);
  Promiseb.all(filePromises)
    .then(() => {
      return tree;
    })
    .catch(error => {
      // console.log('promise.all error.');
      console.error(error)
    });
};

const writeFile = (path, file) => fsp.writeFileAsync(path, file);
const fstat = (path) => fsp.fstatAsync(path);


module.exports = {
  getAllFiles, writeFile, initializationPromise, fstat, mkDirStructure
};
