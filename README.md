# custom-logger

A simple custom logger package for Node.js applications.

## Installation

You can install the `custom-logger` package via npm:

```bash
npm install custom-logger
```

## Usage

```javascript
const CustomLogger = require('custom-logger');

// Initialize logger with optional log level
const logger = new CustomLogger({ level: 'debug' });

// Log messages at different levels
logger.debug('This is a debug message');
logger.info('This is an info message');
logger.warn('This is a warning message');
logger.error('This is an error message');
```

## Configuration

You can customize the log level when initializing the logger. By default, the log level is set to `info`.

```javascript
const logger = new CustomLogger({ level: 'debug' });
```

Available log levels are: `debug`, `info`, `warn`, and `error`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
