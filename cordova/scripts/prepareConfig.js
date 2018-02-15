var fs = require('fs');
var path = require('path');

var dir = '../'
var configFile = fs.readFileSync(dir + 'cordova/config-live.xml');
var envFile = fs.readFileSync(dir + '.env').toString();

var HOST = '';
var config = configFile.toString();

var PACKAGE = envFile.substring(8, 12);
if(PACKAGE == 'fals'){
	HOST = envFile.substring(envFile.lastIndexOf('=')+1)+'/';
}

var content = config.replace(new RegExp('(?<=<content src=")(.*)(?=" />)'), HOST+'index.html');
//console.log(content);
fs.writeFileSync(dir + 'cordova/config.xml', content);