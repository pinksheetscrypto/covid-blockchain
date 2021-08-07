const electron = require('electron');

const geoip =require("geoip-lite");

window.remote = electron.remote;
window.ipcRenderer = electron.ipcRenderer;
window.shell = electron.shell;
window.geoip = geoip;