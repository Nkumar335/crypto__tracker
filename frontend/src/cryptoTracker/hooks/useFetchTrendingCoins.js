import { useState, useEffect } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function useFetchTrendingCoins() {

    const [trendingCoins, setTrendingCoins] = useState([]);

    async function fetchTrendingCoins() {
        try {
            const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h');
            const result = res.data;
            setTrendingCoins(result);
        } catch (err) {
            toast.error(`${err} Pls Try after some time`, {position: toast.POSITION.TOP_CENTER})
        }
    }

    useEffect(() => {
        fetchTrendingCoins()
    }, []);

    return {
        trendingCoins
    }
}

export default useFetchTrendingCoins;