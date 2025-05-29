import React, { useState } from 'react';
import HeaderNav from './components/HeaderNav';
import Result from './pages/Result';
import AllFoods from './pages/AllFoods';
import PopUp from './components/PopUp';

function App() {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [modalType, setModalType ] = useState(null);

    const openModal = (foodData, modalType, date) => {
        setModalContent(
            modalType === 'list'
                ? { foods: foodData, date }
                : foodData
        );
        setModalType(modalType);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };

    return (
        <div className="app-container">
            <HeaderNav currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
            <Result currentMonth={currentMonth} openModal={openModal} />
            <AllFoods currentMonth={currentMonth} openModal={openModal} />
            <PopUp isOpen={isModalOpen} closeModal={closeModal} content={modalContent} type={modalType} />
        </div>
    );
}

export default App;