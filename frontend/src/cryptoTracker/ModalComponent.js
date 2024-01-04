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
    const [inputNumber, setInputNumber] = useState('');
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

    const handleSubmit = async() => {

        if (!selectedCryptoCoin?.value || !selectedCurrency?.value || !inputNumber) {
            toast.warn('Pls fill all required feild', { position: toast.POSITION.TOP_CENTER })
            return
        }

        const res = await getCryptoAmount({ selectedCryptoCoin, selectedCurrency })

        if (res) {
            setResult(`Amount for Crypto Coin is ${res[selectedCryptoCoin?.value]?.selectedCoin?.value}`);
        }
        setSelectedCryptoCoin({});
        setSelectedCryptoCoin({});

    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
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
                <ModalHeading>View Crypto Amount</ModalHeading>
                <FieldWrapper>
                    <Label>Select Crypto Currency:</Label>
                    <Select
                        placeholder='Select Crypto Currency'
                        value={selectedCryptoCoin}
                        onChange={(selectedCoin) => setSelectedCryptoCoin(selectedCoin)}
                        options={COINS_OPTIONS}

                    />
                </FieldWrapper>
                <FieldWrapper>
                    <Label>Select Target Currency:</Label>
                    <Select
                        placeholder='Select Currency'
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
                        value={inputNumber}
                        onChange={(e) => setInputNumber(e.target.value)}

                    />
                </FieldWrapper>
                <ButtonDiv>
                    <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
                </ButtonDiv>
                {result && <ResultParagraph>{result}</ResultParagraph>}
            </ModalWrapper>
        </Modal>
    );
};


export default ModalComponent;
