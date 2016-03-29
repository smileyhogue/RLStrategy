import { app, Menu, BrowserWindow } from 'electron';
const dialog = require('electron').dialog;
var setDevMenu = function () {
    var devMenu = Menu.buildFromTemplate([{
        label: 'Development',
        submenu: [{
            label: 'Credits',
            click: function () {
                dialog.showErrorBox("Credits", "Developed by Tristen Hogue!")
            }
        },{
            label: 'Quit',
            accelerator: 'CmdOrCtrl+Q',
            click: function () {
                app.quit();
            }
        }]
    }]);
    Menu.setApplicationMenu(devMenu);
};

export default {
    setDevMenu: setDevMenu,
}
