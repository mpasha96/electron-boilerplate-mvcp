import {app, BrowserWindow, BrowserView} from "electron";

let mainWindow : BrowserWindow;

app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
      app.quit();
    }
  });
  
  app.on('ready', function() {
    
    mainWindow = new BrowserWindow({ width: 980, height: 740 ,minWidth:780, minHeight:560, show : false });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    // mainWindow.setMenu(null);
    // mainWindow.webContents.openDevTools();
    mainWindow.once("ready-to-show" , (e) => {
      mainWindow.show();
    })
    mainWindow.on('closed', function() {
      mainWindow = null;
    });
  });