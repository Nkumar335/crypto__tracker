const axios = require('axios');

async function handleGetCurrencies(req, res) {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/simple/supported_vs_currencies`);
        const data = response.data;

        res.json(data);
        console.log('response', response);
    } catch (error) {
        res.status(500).send('Internal Server Error from API');
    }
}

async function handleGetCryptoCoins(req, res) {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
        const data = response.data;

        res.json(data);
    } catch (error) {
        res.status(500).send('Internal Server Error from API');
    }
}

async function handleGetTrendingCoins(req, res) {

    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`);
        const data = response.data;

        res.json(data);
    
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}

async function handleConvertAmount(req, res) {

    const { currency, coin_id } = req.body;

    console.log(currency, coin_id)

    if(!coin_id || !currency ) {
        return res.status(400).json({error : 'Pls fill all required fields'})
    }

    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coin_id}&vs_currencies=${currency}`);
        const data = response.data;

        res.json(data);
    
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}


module.exports = {
    handleGetCurrencies,
    handleGetCryptoCoins,
    handleConvertAmount,
    handleGetTrendingCoins
};
