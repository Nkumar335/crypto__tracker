import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import ModalComponent from './ModalComponent';

const CryptoTracker = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header onButtonClick={openModal} />
      <ModalComponent isOpen={isModalOpen} onRequestClose={closeModal} />
      <Main />
    </div>
  );
};

export default CryptoTracker;

