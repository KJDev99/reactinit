import { app, BrowserWindow, dialog, shell } from 'electron'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import electronUpdater from 'electron-updater'

const { autoUpdater } = electronUpdater
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const devServerUrl = process.env.VITE_DEV_SERVER_URL

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    autoHideMenuBar: true,
    backgroundColor: '#ffffff',
    show: false,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  })

  win.once('ready-to-show', () => win.show())

  // External links open in the user's browser, not inside the app window.
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url)
    return { action: 'deny' }
  })

  if (devServerUrl) {
    win.loadURL(devServerUrl)
  } else {
    win.loadFile(path.join(__dirname, '../dist/index.html'))
  }
}

function setupAutoUpdater() {
  autoUpdater.autoDownload = false

  autoUpdater.on('update-available', async (info) => {
    const { response } = await dialog.showMessageBox({
      type: 'info',
      buttons: ['Yangilash', 'Keyinroq'],
      defaultId: 0,
      cancelId: 1,
      title: 'Yangi versiya mavjud',
      message: `Props2 ${info.version} versiyasi chiqdi.`,
      detail: `Sizda ${app.getVersion()} versiyasi o'rnatilgan. Hozir yuklab olinsinmi?`,
    })
    if (response === 0) autoUpdater.downloadUpdate()
  })

  autoUpdater.on('update-downloaded', async () => {
    const { response } = await dialog.showMessageBox({
      type: 'info',
      buttons: ["O'rnatish va qayta ishga tushirish", 'Keyinroq'],
      defaultId: 0,
      cancelId: 1,
      title: 'Yangilanish tayyor',
      message: 'Yangi versiya yuklab olindi.',
      detail: "O'rnatish uchun dastur qayta ishga tushadi.",
    })
    if (response === 0) autoUpdater.quitAndInstall()
  })

  // Network failures must not block the app — the user keeps the working version.
  // checkForUpdates() rejects as well as emitting 'error', so both need handling.
  autoUpdater.on('error', (err) => {
    console.error('Update check failed:', err?.message ?? err)
  })

  autoUpdater.checkForUpdates().catch(() => {})
}

app.whenReady().then(() => {
  createWindow()
  if (app.isPackaged) setupAutoUpdater()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
