const remote = require('electron').remote;


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
