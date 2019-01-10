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
    pathname: path.join(__dirname, './index.html'),
    protocol: 'file',
    slashes: true
  }))

  const mainMenu = Menu.buildFromTemplate(templateMenu);
  Menu.setApplicationMenu(mainMenu);

});

const templateMenu = [{
    label: 'Info',
    submenu: [{
        label: 'About',
        accelerator: 'F1',
        click() {
            alert('About')
        }
    }]
}]

