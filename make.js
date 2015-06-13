var path = require('path');
var os = require('os');
var fs = require('fs');

console.log("I'm glad you to select ccap, enjoy it!")
console.log("")
console.log("ccap is a cross plat form and portable nodejs simple captcha module, simple api and lightweight.")

if(os.platform() == 'win32'){
  var lib_name = 'libjpeg.dll';

  var bind_path = __dirname + path.sep + 'binding.gyp';
  try {
    fs.chmodSync(bind_path, '0777');
    var binding = fs.readFileSync(bind_path).toString();
  } catch (e) {
    throw('fail to read binding.gyp file, ' + e);
  }

  binding = binding.replace(/\{\$__dirname\}/g,__dirname + '\\\\addon\\\\' + lib_name);
  try {
    fs.writeFileSync(bind_path, binding);
  } catch (e) {
    throw('update binding.gyp file error, ' + e);
  }
}

console.log("");
console.log("starting compile ccap! good luck!");
