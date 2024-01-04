import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function useGetAmount() {

    async function getCryptoAmount({ selectedCryptoCoin, selectedCurrency }) {
        console.log({selectedCryptoCoin,selectedCurrency,})
        try {
            const res = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${selectedCryptoCoin?.value}&vs_currencies=${selectedCurrency?.value}`);
            const result = res.data;
            return result
        } catch (err) {
            toast.error(`${err} Pls Try after some time`, {position: toast.POSITION.TOP_CENTER})
        }
    }

    return {
        getCryptoAmount
    }
}

export default useGetAmount;