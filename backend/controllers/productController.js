const asyncHandler = require('express-async-handler');

const Product = require('../models/productModel');

const getProduct = asyncHandler(async (req, res) => {
  const Products = await Product.find();
  res.status(200).json(Products);
});

const postProduct = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  const product = await Product.create({
    name: req.body.name,
  });
  console.log(req.body);
  res.status(200).json(product);
});

const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error('Product not found');
  }
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedProduct);
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error('Product not found');
  }
  await product.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
};
