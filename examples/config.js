// Generated by CoffeeScript 1.6.2
(function() {
  var e;

  module.exports = {
    connection: {
      host: '127.0.0.1',
      port: 9090
    }
  };

  try {
    module.exports = require('./config.local');
  } catch (_error) {
    e = _error;
  }

}).call(this);
