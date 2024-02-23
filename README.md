# logger-syskey

This module provides a robust logging solution for Node.js applications, built with Winston. It is specifically designed to facilitate easy logging of both development and production-level messages with helpful information such as timestamps. The module is equipped to handle log output to the console and to a rotating log file that is systematically named with a time-based pattern for straightforward tracking. Ready for immediate integration, this logger module simplifies logging setup and helps maintain clear records for application debugging and monitoring.

## Features

* Configurable logging levels (info, warn, error, etc.).
* Automatic daily log rotation with a unique timestamped filename.
* Structured JSON logging for complex data.
* Convenient setup with minimal configuration needed.

Get started with this advanced logging mechanism and enhance your application's monitoring capabilities today!
  
## Installation

To install the module, run the following command:

```bash
npm install logger-syskey
```
## Usage
Require the logger module in your Node.js application and use it to log messages at different levels.
```js
const logger = require('logger-syskey');

logger.info('Information message');
logger.warn('Warning message');
logger.error('Error message');
```