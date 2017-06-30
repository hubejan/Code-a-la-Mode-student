require('browserfs');

(function initializeFS() {
  console.log('Initializing FS...');
  var html5fs = new BrowserFS.FileSystem.HTML5FS(10, window.TEMPORARY);
  html5fs.allocate();
  BrowserFS.initialize(html5fs);
  console.dir(html5fs);
  console.log('FS Initialized!!');
})();
