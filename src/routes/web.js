const express = require('express');
const { getHomepage, getABC, getHary } = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/hary', getHary);

module.exports = router;
