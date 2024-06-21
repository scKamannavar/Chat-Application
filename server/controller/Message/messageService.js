const messageDA = require('./messageDA');
const uuidGenerator = require('../../utils/uuidGenerator');
const { decryptToken } = require('../../utils/jwt');
// const MessageBase = require('../../constants/messages')


exports.addMessage = async data => {
  const messageBase = {
    'HI' : 'Hello there, how can i help you',
    'HELLO' : 'Hello there, how can i help you',
    'GOOD MORNING' : 'Very Good morning',
  }
  const message = data.message.toUpperCase();
  const response = messageBase[message] ? messageBase[message] : 'Sorry i cannot understand...'
  return response;
};
