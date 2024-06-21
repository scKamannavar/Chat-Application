const sql = require('./sql');
const mysql = require('../../utils/db');


exports.addMessage = async cartData => mysql.query(sql.ADD_CART, [cartData]);
