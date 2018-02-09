const fs = require('fs');
const execSync = require('child_process').execSync;

module.exports = function(context) {
  console.log('Building Angular 2 application into "./www" directory.');
  const basePath = context.opts.projectRoot;
  const baseWWW = basePath + '/www';

  getFiles(basePath + '/../src', '.mobile');

  //execSync("cd ../... && find -mane '*.mobile*' -execdir bash -c 'mv -i '{}' '");

  console.log(execSync(
    "ng build --prod --output-path cordova/www/ --base-href",
    {
      maxBuffer: 1024*1024,
      cwd: basePath + '/..'
    }).toString('utf8')
  );

  var files = fs.readdirSync(baseWWW);
  for (var i = 0; i < files.length; i++) {
    if (files[i].endsWith('.gz')) {
      fs.unlinkSync(baseWWW + '/' + files[i]);
    }
  }

  getFiles2(basePath+'/../src', '.temp');
};

function getFiles (dir, ren){
  files_ = [];
  var files = fs.readdirSync(dir);
  for (var i in files){
    var name = dir + '/' + files[i];
    if (fs.statSync(name).isDirectory()){
      getFiles(name, files_);
    } else {
      if(files[i].includes('.mobile')){
        var temp = files[i].replace('.mobile', '');
        if(fs.existsSync(dir + '/' + temp)){
          console.log(dir + '/' + temp + ' exists. Renaming...');
          fs.renameSync(dir + '/' + temp, dir + '/' + files[i].replace('.mobile', '.temp'));
        }

        fs.renameSync(dir + '/' + files[i], dir + '/' + temp);
      }
    }
  }
   // return files_;
 }

 function getFiles2 (dir, ren){
  files_ = [];
  var files = fs.readdirSync(dir);
  for (var i in files){
    var name = dir + '/' + files[i];
    if (fs.statSync(name).isDirectory()){
      getFiles2(name, files_);
    } else {
      if(files[i].includes('.temp')){
        var temp = files[i].replace('.temp', '');
        if(fs.existsSync(dir + '/' + temp)){
          console.log(dir + '/' + temp + ' exists. Renaming...');
          fs.renameSync(dir + '/' + temp, dir + '/' + files[i].replace('.temp', '.mobile'));
        }

        fs.renameSync(dir + '/' + files[i], dir + '/' + temp);
      }
    }
  }
   // return files_;
 }