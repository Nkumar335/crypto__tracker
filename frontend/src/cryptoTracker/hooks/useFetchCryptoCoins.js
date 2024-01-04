import { useState, useEffect } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function useFetchCryptoCoins() {

    const [cryptoCoins, setCryptoCoins] = useState([]);

    async function fetchCryptoCoins() {
        try {
            const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
            const result = res.data;
            setCryptoCoins(result);
        } catch (err) {
            toast.error(`${err} Pls Try after some time`, {position: toast.POSITION.TOP_CENTER})
        }
    }

    useEffect(() => {
        fetchCryptoCoins()
    }, []);

    return {
        cryptoCoins
    }
}

export default useFetchCryptoCoins;