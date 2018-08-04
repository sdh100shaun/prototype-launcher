const { spawn } = require('child_process')
const PATH = '/Volumes/Development/dvsa-olcs/'
module.exports = {
   launch: () => {
       var children = []
        const pk = children.push(spawn('node', ['start.js'], {
          detached: true,
          cwd: PATH
        }));
        return children;
      }
   }
