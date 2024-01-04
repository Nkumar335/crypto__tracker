import { useState, useEffect } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function useFetchCurrencies() {

    const [currencies, setCurrencies] = useState([]);

    async function fetchCurrencies() {
        try {
            const res = await axios.get('https://crypto-tracker-backend-five.vercel.app/currenies');
            const result = res.data;
            setCurrencies(result);
        } catch (err) {
            toast.error(`${err} Pls Try after some time`, {position: toast.POSITION.TOP_CENTER})
        }
    }

    useEffect(() => {
        fetchCurrencies()
    }, []);

    return {
        currencies
    }
}

export default useFetchCurrencies;