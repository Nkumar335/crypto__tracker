import { useState, useEffect } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function useFetchCryptoCoins() {

    const [cryptoCoins, setCryptoCoins] = useState([]);

    async function fetchCryptoCoins() {
        try {
            const res = await axios.get('https://crypto-tracker-backend-five.vercel.app/crypto_coins');
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