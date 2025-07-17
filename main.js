const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');
const opcua = require('./opcua-backend');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
    }
  });

  //win.loadURL('http://localhost:3000'); // GUI runs on local web server
  win.loadFile('renderer/index.html'); 
}

app.whenReady().then(() => {
  loadWebsite()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) loadWebsite()
  })

// Handle IPC messages from renderer
ipcMain.handle('opcua:read', async (_, nodeId) => {
  return await opcua.readNode(nodeId);
});

ipcMain.handle('opcua:write', async (_, nodeId, value) => {
  return await opcua.writeNode(nodeId, value);
});

app.whenReady().then(createWindow);
