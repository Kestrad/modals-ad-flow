import { useState } from 'react';
import './App.css';
import InitBird from './InitBird';
import MiddleBird from './MiddleBird';
import LastBird from './LastBird';
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
                    1: MiddleBird,
                    2: LastBird,
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
    if (prev >= 0) {
      setModalFrame(prev);
    }
  }

  const [allowSubmit, setAllowSubmit] = useState(false);
  const [allAds, setAllAds] = useState([]);

  function renderAd(fields) {
    let ads = allAds.slice();
    ads.push(fields);
    setAllAds(ads);
  }

  function submit() {
    closeModal();
    setModalFrame(0);
    renderAd(formFields);
    setFormFields({});
  }

  function showAd(fields) {
    return (
        <div className="Ad">
            <h1>{fields.InitBird.Name}</h1>
            <div className="info">
                <div className="PreviewImage">
                    <img src={fields.MiddleBird.Image} />
                </div>
                Sex: {fields.InitBird.Sex}
                <br />
                How much more adorable than cute: {fields.MiddleBird.Cuteness}%
                <br />
                Type of friend: {fields.MiddleBird.Friendtype}
                <br />
                Needs to leave before {fields.MiddleBird.Date}
            </div>
        </div>
    )
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Birblist!</h1>
      </header>
      <button className="Start" onClick={openModal}>List a birb</button>
      {allAds.map((ad) => showAd(ad))}
      <Modal visible={modalVisibility} 
             next={(modalFrame < numFrames-1) ? nextFrame : null} 
             back={(modalFrame > 0) ? prevFrame : null}
             submit={(modalFrame === numFrames-1 && allowSubmit) ? submit : null} 
             close={closeModal}>
        <Frame saveFields={saveFormFields} values={formFields} setAllowSubmit={setAllowSubmit} showAd={showAd} />
      </Modal>
    </div>
  );
}

export default App;
