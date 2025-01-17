const express = require('express');

// const { preAuthorize } = require('../../common/security/preAuthorize');
const {
  asyncMiddleware: _async
} = require('../../common/security/asyncMiddleware');

const messageHandler = require('./messageHandler');

const router = express.Router();

router.use((req, res, next) => {
  next();
});


router.post('/add-message', [
  // preAuthorize([]),
  _async(messageHandler.addMessage)
]);


module.exports = router;
