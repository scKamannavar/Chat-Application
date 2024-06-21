const { HttpUtil } = require('../../utils');
// const employeeService = require("./employeeService");
const messageService = require('./messageService');
const requestValidator = require('../../utils/requestValidator');
// const employeeValidator = require('./validator');
const httpUtil = require('../../utils/HttpUtil');
// const { messages } = require('../../constants');

// const { COMMON, COMPENSATION } = messages;


exports.addMessage = async (req, res) => {
  try {
    await requestValidator.validateRequest(req, 'body');
    const data = req.body;
    const result = await messageService.addMessage(data);
    const results = {
      message : result,
      name : 'bot'
    }
    return res.json(httpUtil.getSuccess(results));
  }
  catch (error) {
    console.log(error);
    return HttpUtil.HandleError(error, res);
  }
};
