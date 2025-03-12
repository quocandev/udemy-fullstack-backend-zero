const express = require('express');
const { getHomepage, getABC, getHary, getCreatePage, postCreateUser } = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/hary', getHary);

router.get('/create', getCreatePage);

router.post('/create-user', postCreateUser);

module.exports = router;
