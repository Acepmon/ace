const {app, BrowserWindow} = require('electron')
const path = require('path');
const url = require('url');

require('dotenv').config();
require('electron-reload')(__dirname, {
  electron: require('${__dirname}/../../node_modules/electron')
});

let win = null;

app.on('ready', function () {

  // Initialize the window to our specified dimensions
  win = new BrowserWindow({width: 1280, height: 712, icon:'src/favicon.ico', frame: true});
  win.hide();
  win.maximize();
  win.setMinimumSize(360, 80);

  // Specify entry point
  if (process.env.PACKAGE === 'false'){
    win.loadURL(process.env.HOST);
  } else {
    win.loadURL(`file://${__dirname}/dist/index.html`);
    //win.webContents.openDevTools();
  }

  // Remove window once app is closed
  win.on('closed', function () {
    win = null;
  });

});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});