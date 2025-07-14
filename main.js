const { app, BrowserWindow } = require('electron')

const loadWebsite = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadURL('https://github.com')
  win.once('ready-to-show', () => {
  win.show()
})
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

