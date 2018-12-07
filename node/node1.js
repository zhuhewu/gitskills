let http = require('http');

http
  .createServer((request, response) => {
    // response.write('hello Liu')
    response.setHeader('Access-Control-Allow-Origin', '*');
    let url = request.url.substring(2);
    let arr = url.split('&');

    let json = {};
    for (let i = 0; i < arr.length; i++) {
      json[arr[i].split('=')[0]] = arr[i].split('=')[1];
    }
    if (json.user === 'zhw' && json.pass === '123') {
      response.write('success');
    } else {
      response.write('error');
    }
    response.end();
    
  })
  .listen(9217);
