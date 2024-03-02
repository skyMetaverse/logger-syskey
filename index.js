// Require necessary modules from Node.js and winston package.
const fs = require('fs');
const path = require('path');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

// Define a custom format function for the log messages.
const myFormat = printf(info => {
    let message = info.message;
    // Check if the message is an object (excluding null). If so, stringify it.
    if (typeof message === 'object' && message !== null) {
        message = JSON.stringify(message, null, 4);
    }
    // Return the formatted log string with timestamp, level, and message.
    return `${info.timestamp} [${info.level}]: ${message}`;
});

// Generate a timestamp to create a unique log file path.
const runTime = new Date().toISOString().replace(/[-:.]/g, "").replace("T", "_").slice(0, 15);
// Build the log file path using the current working directory and the generated timestamp.
const LOGSPATH = path.join(process.cwd(), `./logs_${runTime}.txt`);

// Determine the directory where the log file will be stored.
const logDir = path.dirname(LOGSPATH);
// Check if the directory exists. If not, create it synchronously.
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
};

// Create a logger instance with custom format and transports.
const logger = createLogger({
    // Combine timestamp formatting and custom message formatting.
    format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
        myFormat
    ),
    // Define transports - log messages will be output to console and the log file.
    transports: [
        new transports.Console(),
        new transports.File({ filename: LOGSPATH })
    ]
});


module.exports = logger;