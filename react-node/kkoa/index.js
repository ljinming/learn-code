const http = require('http');
class Kkoa {
  listen(...args) {
    http
      .createServer((req, res) => {
        this.callback(req, res);
      })
      .listen(...args);
  }
  use(callback) {
    this.callback = callback;
  }
}

module.exports = Kkoa;
