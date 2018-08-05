const { spawn } = require('child_process')
const PATH = '/opt/prototype'
const fixPath = require('fix-path');
module.exports = {
   launch: () => {
       var children = []
       const fixPath = require('fix-path');
       fixPath()
       const pks = spawn('node', ['start.js'], {
        detached: true,
        cwd: PATH
      })
        const pk = children.push(pks);
        pks.stdout.on('data', (data) => {
          if(data.includes("Change to an available port"))
          {
            pks.kill()
          }
          console.log(`child stdout:\n${data}`);
          
        });
        pks.on('exit', function (code, signal) {
          console.log('child process exited with ' +
                      `code ${code} and signal ${signal}`);
        });
        return children;
      },
   }
