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

  const [modalFrame, setModalFrame] = useState(0);

  const frameMap = {0: InitBird,
                    1: "MiddleBird",
                    2: "LastBird",
                   };
  const numFrames = Object.keys(frameMap).length;
  let Frame = frameMap[modalFrame];

  const [formFields, setFormFields] = useState({});

  function saveFormFields(component, field, value) {
    let newState = {...formFields};
    if (!newState[component]) {
      newState[component] = {field: null};
    }
    newState[component][field] = value;
    setFormFields(newState);
    console.log(newState);
  }

  function nextFrame() {
    let next = modalFrame + 1;
    if (next < numFrames) {
      setModalFrame(next);
    }
  }

  function prevFrame() {
    let prev = modalFrame - 1;
    if (prev > 0) {
      setModalFrame(prev);
    }
  }

  const [allAds, setAllAds] = useState([]);

  function renderAd(fields) {
    let ads = allAds.slice();
    ads.push(fields);
    setAllAds(ads);
    return (
      <div>Ads will show up here</div>
    )
  }

  function submit() {
    closeModal();
    setModalFrame(0);
    renderAd(formFields);
    setFormFields({});
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Birblist!</h1>
      </header>
      <button className="Start" onClick={openModal}>List a birb</button>
      <Modal visible={modalVisibility} 
             next={(modalFrame < numFrames-1) ? nextFrame : null} 
             back={(modalFrame > 0) ? prevFrame : null}
             submit={modalFrame === numFrames-1 ? submit : null} 
             close={closeModal}>
        <Frame saveFields={saveFormFields} values={formFields} />
      </Modal>
    </div>
  );
}

export default App;
