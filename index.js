'use strict';
const electron = require('electron');
const app = electron.app;

require('electron-debug')();

let mainWindow;

function onClosed() {
	mainWindow = null;
}

function createSettingsWindow() {
	const win = new electron.BrowserWindow({
		width: 600,
		height: 400
	});

	win.loadURL(`file://${__dirname}/index.html`);
	win.on('closed', onClosed);

	return win;
}

app.on('window-all-closed', () => {

});

app.on('activate', () => {

});

app.on('ready', () => {

});
