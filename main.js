// Modules to control application life and create native browser window
const {app, BrowserWindow, protocol} = require('electron')
const path = require('path')
const { spawn } = require('child_process');

const pk = spawn('node', ['/Volumes/Development/dvsa-olcs/start.js'], {
  detached: true,
  cwd: '/Volumes/Development/dvsa-olcs/'
});

pk.stdout.on('data', (data) => {
  console.log(`pk stdout: ${data}`);
});

pk.stderr.on('data', (data) => {
  console.log(`pk stderr: ${data}`);
});

pk.on('close', (code) => {
  if (code !== 0) {
    console.log(`pk process exited with code ${code}`);
  }

});

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
const PROTOCOL_PREFIX = 'file'
function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 400,
    height: 750,
    //icon: path.join(__dirname, 'assets/icons/png/64x64.png'),

  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
    createWindow()
  })


// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    pk.kill('SIGINT')
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
