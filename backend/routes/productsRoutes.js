const express = require('express');
const router = express.Router();
const {
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');

router.route('/').get(getProduct).post(postProduct);
router.route('/:id').put(updateProduct).delete(deleteProduct);

module.exports = router;
