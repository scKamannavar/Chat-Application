const express = require('express');


const { apiConfig } = require('../constants');


const messageRouter = require('./Message');

// const organisationHandler = require('./organisation');

const {
  MESSAGE
} = apiConfig;

const router = express.Router();


router.use(MESSAGE.MESSAGE_API, messageRouter);


module.exports = router;
