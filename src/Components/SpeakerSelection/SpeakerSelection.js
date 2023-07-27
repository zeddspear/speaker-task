import React, { useState } from 'react';
import speakerData from '../../speakerData';

const speakers = [
  'spk_0',
  'spk_1',
  'spk_2',
  'spk_3',
  'spk_4',
  'spk_5',
  'spk_6',
  'spk_7',
  'spk_8',
];

function SpeakerSelection() {
  const [data, setData] = useState(speakerData);
  const [totalSpeakers, setTotalSpeakers] = useState(speakers);
  const [selectedSpeaker, setSelectedSpeaker] = useState('spk_0');
  const [nameInput, setNameInput] = useState('');

  const handleSpeaker = (e) => {
    setSelectedSpeaker((prev) => (prev = e.target.value));
  };

  const handleName = (e) => {
    setNameInput(e.target.value);
  };

  const changeName = (e) => {
    e.preventDefault();

    const newName = nameInput;

    if (newName === '') {
      alert('Please enter valid name!');
      return;
    }
    //Change Selected Speaker in dropdown menu
    setTotalSpeakers((prev) => {
      return prev.map((name) => {
        return name === selectedSpeaker ? newName : name;
      });
    });

    //Replace speaker name with provided name
    setData(data.replaceAll(selectedSpeaker, newName));

    setNameInput('');
  };

  return (
    <div className="SpeakerContainer">
      <select
        name="speakers"
        id="speakers"
        value={selectedSpeaker}
        onChange={handleSpeaker}
      >
        {totalSpeakers.map((op, idx) => {
          return <option key={idx}>{op}</option>;
        })}
      </select>
      <br />
      <div className="inputContainer">
        <label htmlFor="name">Enter Name: </label>
        <input type="text" id="name" value={nameInput} onChange={handleName} />
        <button onClick={changeName}>Done</button>
      </div>
      <br />
      <div>
        <p className="dataShow">{data}</p>
      </div>
    </div>
  );
}

export default SpeakerSelection;
