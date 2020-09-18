const express = require('express');
const router = express.Router();
const ProductsService = require('../../services/products');

const productService = new ProductsService();

/* Get list product*/
router.get('/', async function (req, res, next) {
  const { tags } = req.query;
  console.log('req', req.query);
  try {
    const products = await productService.getProducts({ tags });

    res.status(200).json({
      data: products,
      message: 'products listed',
    });
  } catch (err) {
    next(err);
  }
});

/* Get product Id */
router.get('/:productId', async function (req, res, next) {
  const { productId } = req.params;
  console.log('req', req.params);
  try {
    const product = await productService.getProduct({ productId });

    res.status(200).json({
      data: product,
      message: 'product retrieved',
    });
  } catch (err) {
    next(err);
  }
});

/* Post created product*/
router.post('/', async function (req, res, next) {
  const { body: product } = req;
  console.log('req', req.body);
  try {
    const createdProduct = await productService.createProduct({ product });

    res.status(201).json({
      data: createdProduct,
      message: 'products create',
    });
  } catch (err) {
    next(err);
  }
});

/* PUT product Id */
router.get('/:productId', function (req, res, next) {
  const { productId } = req.params;
  const { body: product } = req;
  console.log('req', req.params, req.body);
  try {
    const updatedProduct = productService.updateProduct({ productId, product });
    res.status(200).json({
      data: updatedProduct,
      message: 'products updated',
    });
  } catch (err) {
    next(err);
  }
});

/* DELETE product Id */
router.get('/:productId', function (req, res, next) {
  const { productId } = req.params;
  console.log('req', req.params);
  try {
    const deletedProduct = productService.deleteProduct({ productId });

    res.status(200).json({
      data: deletedProduct,
      message: 'products deleted',
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
