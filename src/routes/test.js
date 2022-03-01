const express = require('express');
const { get } = require('express/lib/response');
const router = express.Router();

const testController = require('../app/controllers/test')

router.get('/', testController.test);


module.exports = router;