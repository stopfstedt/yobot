'use strict';

var YoBot = require('../lib/yo-bot');

var token = process.env.BOT_API_KEY;
var dbName = process.env.BOT_DB_NAME;
var dbUser = process.env.BOT_DB_USER;
var dbHost = process.env.BOT_DB_HOST;
var dbPort = process.env.BOT_DB_PORT;
var dbPass = process.env.BOT_DB_PASS;
var name = process.env.BOT_NAME;

var yoBot = new YoBot({
  token: token,
  dbName: dbName,
  dbHost: dbHost,
  dbPort: dbPort,
  dbUser: dbUser,
  dbPass: dbPass,
  name: name
});

yoBot.run();
