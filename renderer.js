
const {app, BrowserWindow, protocol, remote} = require('electron')
const url = {local:'http://localhost:3000',remote:'https://dvsa-olcs.herokuapp.com/'}

document.querySelector('#btnExit').addEventListener('click',
  ()=>{
    var window = remote.getCurrentWindow();
     window.close();
  }
)

var radios = document.querySelectorAll('input'),
			result;
		for (var i = 0; i < radios.length; i++) {
	    result = radios[i];
	    result.addEventListener('click', function() {
           let site = this.getAttribute("value");
			     remote.shell.openExternal(url[site]);
		});
	}
