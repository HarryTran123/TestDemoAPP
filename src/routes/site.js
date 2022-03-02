const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

//site [get]
router.get('/about', siteController.about);
router.get('/products/:catalog_name', siteController.catalog);
router.get('/product/:slug', siteController.product);
router.get('/logout', siteController.logout);
router.get('/search/', siteController.search);



//site [post]
router.post('/check', siteController.check);
router.post('/signup', siteController.signup);


router.get('/', siteController.home);

module.exports = router;