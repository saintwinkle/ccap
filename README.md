## ccap-dev

A fork from [ccap](https://github.com/DoubleSpout/ccap).

### Install

``` bash
$ npm install ccap-dev
```

### Features

- Add text length in options

``` js
var http = require('http');
var ccap = require('ccap-dev')({
  textlen: 4, // 6 by default
  width: 120,
  height: 40,
  offset: 25,
  quality: 100,
  fontsize: 36
});

http.createServer(function (req, res) {
  if(req.url == '/favicon.ico')
    return res.end('');

  var ary = ccap.get();
  var txt = ary[0];
  var buf = ary[1];

  res.end(buf);
  console.log(txt);
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');
```

- TODO

### License

MIT