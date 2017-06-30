const Promiseb = require('bluebird');
// const BrowserFS = require('browserfs');

// turns off forgotten return warning in Bluebird
// Promise.config({
//   warnings: {
//     wForgottenReturn: false
//   }
// });

const fsp = Promiseb.promisifyAll(require('fs'));
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
// let howdy;
// const ttt = (dir) => {
//   fsp.readdirAsync(dir)
//   .then(fileNamesArr => {
//     console.log('++++++++++++++++++++++++readdirasync');
//     const fileStatPromises = fileNamesArr.map(fileName => {
//       return fs.statAsync(dir + '/' + fileName)
//       .then(stats => {
//         const file = {};
//         file.filePath = dir + '/' + fileName;
//         file.isDirectory = !stats.isFile();
//         if (stats.isDirectory == true) {
//           return getAllFiles(file.filePath)
//           .then(fileNamesSubArr => {
//             file.files = fileNamesSubArr;
//             return file.files;
//           })
//           .catch(error => console.error(error));
//         }
//         return file;
//       });
//     });
//     howdy = Promise.all(fileStatPromises);

//   });

// }
// function init(dir){
//   return new Promise(function (resolve, reject) {
//     var html5fs = new BrowserFS.FileSystem.HTML5FS(10, window.TEMPORARY, err => {
//       if (err) reject(err);
//       else resolve()
//     });
//     html5fs.allocate();
//     BrowserFS.initialize(html5fs);
//     resolve()
//     return dir;
//   });
// }
function initializationPromise (dir) {
  return new Promise((resolve, reject) => {
    var html5fs = new BrowserFS.FileSystem.HTML5FS(10, window.TEMPORARY);
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
        return fsp.statAsync(dir + '/' + fileName)
          .then(stats => {
            const file = {};
            file.filePath = dir + '/' + fileName;
            file.isDirectory = !stats.isFile();
            if (stats.isDirectory == true) {
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
      console.log(fileStatPromises);
      return Promiseb.all(fileStatPromises);
    });
};

// const getAllFiles = (dir) => {
//   let jet, hop;
//   let fileStatPromises;
//   var html5fs = new BrowserFS.FileSystem.HTML5FS(10, window.TEMPORARY);
//     html5fs.allocate(() => {
//       BrowserFS.initialize(html5fs);
//       jet = fsp.readdirAsync(dir)
//         .then(fileNamesArr => {
//           fileStatPromises = fileNamesArr.map(fileName => {
//             return fsp.statAsync(dir + '/' + fileName)
//               .then(stats => {
//                 const file = {};
//                 file.filePath = dir + '/' + fileName;
//                 file.isDirectory = !stats.isFile();
//                 if (stats.isDirectory == true) {
//                   return getAllFiles(file.filePath)
//                   .then(fileNamesSubArr => {
//                     file.files = fileNamesSubArr;
//                     return file.files;
//                   })
//                   .catch(error => console.error(error));
//                 }
//                 return file;
//               });
//           });
//           promiseArray = fileStatPromises;
//           console.log(fileStatPromises);
//           return Promiseb.all(fileStatPromises);
//         });
//       console.log('jet: ', jet);
//       return jet;
//     });
// };


module.exports = {
  getAllFiles, initializationPromise
};
