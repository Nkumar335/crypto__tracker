import { useState, useEffect } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function useFetchTrendingCoins() {

    const [trendingCoins, setTrendingCoins] = useState([]);

    async function fetchTrendingCoins() {
        try {
            const res = await axios.get('https://crypto-tracker-backend-five.vercel.app/get/trending_coins');
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