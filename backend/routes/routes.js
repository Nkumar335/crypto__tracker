const express = require('express');

const { handleGetCurrencies, handleGetCryptoCoins, handleConvertAmount, handleGetTrendingCoins} = require('../controllers/controller')

const router = express.Router();

router.get('/currenies', handleGetCurrencies);
router.get('/crypto_coins',handleGetCryptoCoins);
router.post('/get/amount',handleConvertAmount);
router.get('/get/trending_coins',handleGetTrendingCoins);

module.exports = router;