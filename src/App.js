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
  const [allowNext, setAllowNext] = useState(true);

  function saveFormFields(field, value) {
    let newState = {...formFields};
    newState[field] = value;
    setFormFields(newState);
  }

  function checkRequiredFields(reqfields) {
    for (let field of reqfields) {
      if (!formFields[field.className]) {
        console.log(formFields, field, field.className);
        setAllowNext(false);
        return;
      }
    }
    setAllowNext(true);
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
    let ads = [fields]
    allAds.forEach((ad => ads.push(ad)));
    setAllAds(ads);
  }

  function submit() {
    closeModal();
    setModalFrame(0);
    renderAd(formFields);
    setFormFields({});
    setAllowSubmit(false);
  }

  function showAd(fields) {
    return (
        <div className="Ad">
            <h1>{fields.Name}</h1>
            <div className="info">
                <div className="PreviewImage">
                    <img src={fields.Image ? fields.Image : null} />
                </div>
                <div className="info-text">
                  <span className="Label-bold">Sex:</span>{fields.Sex}
                  <br />
                  <span className="Label-bold">How much more adorable than cute:</span>{fields.Cuteness || 50}%
                  <br />
                  <span className="Label-bold">Type of friend:</span>{fields.Friendtype}
                  <br />
                  <span className="Label-bold">Needs to leave before {fields.Date}</span>
                </div>
            </div>
            <div className="DescriptionPane">{fields.Description}</div>
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
             next={(modalFrame < numFrames-1 && allowNext) ? nextFrame : null} 
             back={(modalFrame > 0) ? prevFrame : null}
             submit={(modalFrame === numFrames-1 && allowSubmit) ? submit : null} 
             close={closeModal}>
        <Frame saveFields={saveFormFields} values={formFields} required={checkRequiredFields} setAllowSubmit={setAllowSubmit} showAd={showAd} />
      </Modal>
    </div>
  );
}

export default App;
