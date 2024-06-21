module.exports = {


  ADD_CART: 'INSERT INTO CART SET ?',
  // GET_CART: 'SELECT * FROM CART WHERE ct_us_id = ?',
  GET_CART: 'SELECT c.*, p.* FROM CART c LEFT JOIN PRODUCTS p ON c.ct_pd_id = p.pd_id WHERE c.ct_us_id = ?',
  REMOVE_CART: 'DELETE FROM CART WHERE ct_id = ?',
  CLEAR_CART: 'DELETE FROM CART WHERE ct_us_id = ?',
  UPDATE_QUANTITY: 'UPDATE CART SET ct_qty = ? WHERE ct_id = ?'
};
