
const {app, BrowserWindow, protocol, remote} = require('electron')

document.querySelector('#btnExit').addEventListener('click',
  ()=>{
    var window = remote.getCurrentWindow();
     window.close();
  }
)

document.querySelector('#app-start').addEventListener('click',
  ()=>{
    remote.shell.openExternal('http://localhost:3000');
  }
)

document.querySelector('#app-stop').addEventListener('click',
  ()=>{
        var window = remote.getCurrentWindow();
        app.quit()
  }
)
