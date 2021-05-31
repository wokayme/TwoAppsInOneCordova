const fs = require('fs')

const reactIndex = './cordova/www/react-app/index.html';

const replacePathInFile = (fileName) => {
    fs.readFile(fileName, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      let result = data.replace(/href=\"\//g, 'href=\"');
      result = result.replace(/src=\"\//g, 'src=\"');
    
      fs.writeFile(fileName, result, 'utf8', function (err) {
         if (err) return console.log(err);
      });
    });
}
replacePathInFile(reactIndex);

const nextFiles = ['index.html', 'contact.html'];
nextFiles.forEach(fileName=>{
    replacePathInFile(`./cordova/www/next-app/${fileName}`)
})