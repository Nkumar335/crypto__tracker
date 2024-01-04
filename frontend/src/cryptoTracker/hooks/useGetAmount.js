import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function useGetAmount() {

    async function getCryptoAmount({ selectedCryptoCoin = {}, selectedCurrency = {}, inputAmount = '' }) {

        const coin_id = selectedCryptoCoin?.value;
        const currency = selectedCurrency?.value;
        try {
            const response = await axios.post('https://crypto-tracker-backend-five.vercel.app/get/amount', {
                coin_id,
                currency,
                inputAmount,
            });
          
            const result = response.data;
            return result
        } catch (err) {
            toast.error(`${err} Pls Try after some time`, { position: toast.POSITION.TOP_CENTER })
        }
    }

    return {
        getCryptoAmount
    }
}

export default useGetAmount;