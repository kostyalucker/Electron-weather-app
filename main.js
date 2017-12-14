const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let mainWindow;

// Если приложение готово к запуску
app.on('ready', function(){
    // Добавляем окно
    mainWindow = new BrowserWindow({width: 350, height: 500, frame: false
        // webPreferences: {
        //     nodeIntegration: true,
        //     webSecurity: true,
        //     preload: path.resolve(path.join(__dirname, './preload.js'))
        // }
        });

    // resizable: false
    mainWindow.loadURL('file://' + __dirname + '/index.html')
})

// ajax