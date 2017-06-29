require('browserfs');

// check out MainView.js for example usage
// this file sets up the storage system to be used.
// looking at localstorage keys, data is somehow hashed/compressed/encrypted????
const lsfs = new BrowserFS.FileSystem.LocalStorage();
BrowserFS.initialize(lsfs);

// a note on html5fs: running this script creates an Allow/Block popup on the client's window
// so that they can decide whether or not we are allowed to use their device for storage
// const html5fs = new BrowserFS.FileSystem.HTML5FS();
// html5fs.allocate();
// BrowserFS.initialize(html5fs);
