"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var mainWindow;
electron_1.app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('ready', function () {
    mainWindow = new electron_1.BrowserWindow({ width: 980, height: 740, minWidth: 780, minHeight: 560, show: false });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    // mainWindow.setMenu(null);
    // mainWindow.webContents.openDevTools();
    mainWindow.once("ready-to-show", function (e) {
        mainWindow.show();
    });
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});
