const log4js = require("log4js");

log4js.configure({
    appenders: { cheese: { type: "file", filename: "logs.log" } },
    categories: { default: { appenders: ["cheese"], level: "error" } },
  });

const logger = log4js.getLogger();
logger.level = "debug";

module.exports = logger;