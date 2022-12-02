import "./App.css";
import ReactAudioPlayer from "react-audio-player";
import Modal from "react-modal";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modal2IsOpen, setIsOpen2] = useState(false);
  const [currentPlaying, setCurrentPlaying] = useState(1);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    if (currentPlaying < 5) setCurrentPlaying(currentPlaying + 1);
    if (currentPlaying == 5) {
      setIsOpen2(true);
    }
  }
  function closeModa2l() {
    setIsOpen2(false);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>
            <h3>Did you hear the sound?</h3>
            <div>
              <button onClick={closeModal}>Yes</button>
              <button onClick={closeModal}>No</button>
            </div>
          </div>
        </Modal>
        <ReactAudioPlayer
          src={`./mp3/${currentPlaying}.mp3`}
          controls
          autoPlay
          onEnded={() => {
            openModal();
          }}
        />
        <Modal
          isOpen={modal2IsOpen}
          onRequestClose={closeModa2l}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>
            <h3>You were able to hear sound between 120Hz to 10KHz.</h3>
          </div>
        </Modal>
      </header>
    </div>
  );
}

export default App;
