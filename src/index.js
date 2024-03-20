// custom-logger.js

class CustomLogger {
    constructor(options = {}) {
      this.level = options.level || 'info';
    }
  
    log(message, level = 'info') {
      if (this.shouldLog(level)) {
        console.log(`[${level.toUpperCase()}] ${message}`);
      }
    }
  
    debug(message) {
      this.log(message, 'debug');
    }
  
    info(message) {
      this.log(message, 'info');
    }
  
    warn(message) {
      this.log(message, 'warn');
    }
  
    error(message) {
      this.log(message, 'error');
    }
  
    shouldLog(level) {
      const levels = ['debug', 'info', 'warn', 'error'];
      return levels.indexOf(level) >= levels.indexOf(this.level);
    }
  }
  
  module.exports = CustomLogger;
  