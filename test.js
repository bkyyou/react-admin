const glob = require('glob');

// const files = glob.sync('./home/*/*.js');
const files = glob.sync('./home/[ab].js');

console.log('files', files);