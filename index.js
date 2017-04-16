const express = require('express');
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');

server = express();
server.use('/', require('./api'));
server.use('/static', express.static(path.join(__dirname, 'web')));

let port;
let win;

let listener = server.listen(0, () => {
  port = listener.address().port;
});

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadURL(`http://localhost:${port}/static/index.html`);
  win.setFullScreen(true);
  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
