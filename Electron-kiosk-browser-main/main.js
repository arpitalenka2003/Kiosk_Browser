const { app, BrowserWindow, globalShortcut } = require('electron');

function createWindow() {
  win = new BrowserWindow({
    fullscreen: true,
    kiosk: true,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true
    }
  });


  win.loadURL('http://localhost:8081');

   // Remove the menu bar
   win.setMenuBarVisibility(false);


  win.webContents.on('before-input-event', (event, input) => {
    // Debugging line to see what keys are being pressed
    console.log(`Key: ${input.key}, Type: ${input.type}`);

    // Refine the conditions to ensure they precisely match the intended keys
    if ((input.key === 'Tab' && input.alt) || (input.key === 'F4' && input.alt) || (input.key === 'D' && input.meta)) {
      event.preventDefault();
    }
  });
  // Proper way to close the application
  globalShortcut.register('Ctrl+Q', () => {
    app.quit();
  });

  win.on('closed', () => {
    globalShortcut.unregisterAll();
    win = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (!win) {
    createWindow();
  }
});
