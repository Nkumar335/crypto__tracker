import React, { useState } from 'react';
import Modal from 'react-modal';
import Select from 'react-select';
import useFetchCurrencies from './hooks/useFetchCurrencies';
import useFetchCryptoCoins from './hooks/useFetchCryptoCoins';
import useGetAmount from './hooks/useGetAmount'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { ModalWrapper, FieldWrapper, ModalHeading, Label, InputField, 
    SubmitButton, ResultParagraph, ButtonDiv } from './styles'

Modal.setAppElement('#root');


const ModalComponent = ({ isOpen, onRequestClose }) => {
    const [selectedCryptoCoin, setSelectedCryptoCoin] = useState({});
    const [selectedCurrency, setSelectedCurrency] = useState({});
    const [inputAmount, setinputAmount] = useState('');
    const [result, setResult] = useState(null);

    const { currencies } = useFetchCurrencies();
    const { cryptoCoins } = useFetchCryptoCoins();
    const { getCryptoAmount } = useGetAmount();


    const CURRENCY_OPTIONS = currencies.map((currency) => ({
        value: currency,
        label: currency.toUpperCase(),
    }));

    const COINS_OPTIONS = cryptoCoins.map((coins) => ({
        value: coins?.id,
        label: `${coins?.name.toUpperCase()} (${coins?.symbol})`,
    }));

    const resetState = () => {
        setSelectedCryptoCoin({});
        setSelectedCurrency({});
        setinputAmount('');
        setResult(null);
      };
    
    const handleSubmit = async () => {

        if (!selectedCryptoCoin?.value || !selectedCurrency?.value || !inputAmount) {
            toast.warn('Pls fill all required feild', { position: toast.POSITION.TOP_CENTER })
            return
        }

        const res = await  getCryptoAmount({ selectedCryptoCoin, selectedCurrency,inputAmount })
   
        if (res) {
            setResult(`Total Amount of Crypto Coin ${selectedCryptoCoin?.label} for Currency ${selectedCurrency?.label} is ${(res?.total_amount).toFixed(4)}`);
        }
     
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => {
                resetState();
                onRequestClose();
            }}
            contentLabel="Example Modal"
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
                content: {
                    width: '50%',
                    height: '450px',
                    margin: 'auto',
                    borderRadius: '8px',
                },
            }}
        >
            <ModalWrapper>
                <ModalHeading>Get Crypto Amount</ModalHeading>
                <FieldWrapper>
                    <Label>Select Crypto Coin:</Label>
                    <Select
                        placeholder='Select Crypto Coin'
                        value={selectedCryptoCoin}
                        onChange={(selectedCoin) => setSelectedCryptoCoin(selectedCoin)}
                        options={COINS_OPTIONS}

                    />
                </FieldWrapper>
                <FieldWrapper>
                    <Label>Select Target Currency:</Label>
                    <Select
                        placeholder='Select Currency'
                        defaultValue={{ value: 'usd', label: 'USD' }}
                        value={selectedCurrency}
                        onChange={(selectedCurrency) => setSelectedCurrency(selectedCurrency)}
                        options={CURRENCY_OPTIONS}
                    />
                </FieldWrapper>
                <FieldWrapper>
                    <Label>Amount:</Label>
                    <InputField
                        type="number"
                        placeholder='Enter Amount'
                        value={inputAmount}
                        onChange={(e) => setinputAmount(e.target.value)}

                    />
                </FieldWrapper>
                <ButtonDiv>
                    <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
                </ButtonDiv>
                {!result ? <p>See your result here after Submit</p>  : <ResultParagraph>{result}</ResultParagraph> }
            </ModalWrapper>
        </Modal>
    );
};


export default ModalComponent;
