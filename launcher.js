const { spawn } = require('child_process')
const PATH = '/opt/prototype'
const fixPath = require('fix-path');
module.exports = {
   launch: () => {
       var children = []
       const fixPath = require('fix-path');
       fixPath()
        const pk = children.push(spawn('node', ['start.js'], {
          detached: true,
          cwd: PATH
        }));

        return children;
      }
   }
