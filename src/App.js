import { useState } from 'react';
import './App.css';
import InitBird from './InitBird';
import Modal from './Modal';

function App() {
  const [modalVisibility, setModalVisibility] = useState(false);
  
  function openModal() {
    setModalVisibility(true);
  }

  function closeModal() {
    setModalVisibility(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Birblist!</h1>
      </header>
      <button className="Start" onClick={openModal}>List a birb</button>
      <Modal visible={modalVisibility} close={closeModal}>
        <InitBird />
      </Modal>
    </div>
  );
}

export default App;
