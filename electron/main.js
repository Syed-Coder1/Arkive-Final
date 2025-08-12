const path = require('path'); // ✅ Require path first
const fs = require('fs');

// Error logging to file
const logPath = path.join(__dirname, 'error-log.txt');
process.on('uncaughtException', (err) => {
  fs.writeFileSync(logPath, `ERROR: ${err.stack || err}`);
});
process.on('unhandledRejection', (reason) => {
  fs.writeFileSync(logPath, `REJECTION: ${reason}`);
});

const { app, BrowserWindow, Menu } = require('electron');
const isDev = process.env.NODE_ENV === 'development';

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1600,
    height: 1000,
    minWidth: 1400,
    minHeight: 800,
    resizable: true,
    maximizable: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      webSecurity: true,
      allowRunningInsecureContent: false,
      zoomFactor: 1.0
    },
    icon: path.join(__dirname, 'assets', 'icon.png'),
    titleBarStyle: 'hiddenInset',
    autoHideMenuBar: !isDev,
    show: false,
    backgroundColor: '#1f2937'
  });

  mainWindow.webContents.once('dom-ready', () => {
    mainWindow.webContents.setZoomFactor(1.0);
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    if (isDev) mainWindow.focus();
  });

  // Load app content
  if (isDev) {
    mainWindow.loadURL('http://localhost:5173');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, 'dist', 'index.html'));
  }

  // Menu template
  const template = [
    {
      label: 'File',
      submenu: [
        {
          label: 'New Receipt',
          accelerator: 'CmdOrCtrl+N',
          click: () => mainWindow.webContents.send('menu-new-receipt')
        },
        {
          label: 'Export Data',
          accelerator: 'CmdOrCtrl+E',
          click: () => mainWindow.webContents.send('menu-export')
        },
        { type: 'separator' },
        {
          label: 'Exit',
          accelerator: process.platform === 'darwin' ? 'Cmd+Q' : 'Ctrl+Q',
          click: () => app.quit()
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'close' }
      ]
    }
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
