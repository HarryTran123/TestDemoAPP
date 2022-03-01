const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/about', siteController.about);
router.get('/products/:catalog_name', siteController.catalog);
router.get('/product/:slug', siteController.product);

router.get('/', siteController.home);

module.exports = router;