const { ipcRenderer,shell } = require('electron');

window.ipcRenderer = ipcRenderer;
window.shell = shell;

const geoip =require("geoip-lite");

window.geoip = geoip;
