//Javascript main index file

const { app, BrowserWindow, Menu } = require('electron');
const url = require('url');
const path = require('path');

let mainWindow

if(process.env.NODE_ENV !== 'production'){
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
    })
}

app.on('ready', ()=> {

  mainWindow = new BrowserWindow({
      title: 'Nioscent Weather App',
      width: 450
  });
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
  mainWindow.on('closed', function(){
  // Dereference the window object, usually you would store windows
  // in an array if your app supports multi windows, this is the time
  // when you should delete the corresponding element.
    mainWindow = null
  })
  Menu.setApplicationMenu(null);
  //Menu.setApplicationMenu(mainMenu);


})

app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

app.on('activate', ()=> {
    if(mainWindow === null) {
        createWindow()
    }
})





