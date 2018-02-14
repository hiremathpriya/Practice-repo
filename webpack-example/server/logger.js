const winston = require('winston');

const logger = new (winston.Logger)({
    transports: [
      // colorize the output to the console
      new (winston.transports.Console)({ colorize: true }),
      new (winston.transports.File)({filename: "./server/logs/default-dev.log"}) 
    ]
});

logger.level = 'debug';

module.exports = logger;