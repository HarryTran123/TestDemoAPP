const express = require('express');
const router = express.Router();

const formController = require('../app/controllers/FormController')

router.use('/:slug', formController.show)
router.use('/', formController.index)


module.exports = router;