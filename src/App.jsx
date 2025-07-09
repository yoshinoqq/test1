import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Modal from "./components/Modal";
import PhotoFeedback from "./components/PhotoFeedback";
import ImagesList from "./components/ImagesList";
function App() {
const [modalVisible, setModalVisible] = useState(false);
const [currentImageId, setCurrentImageId] = useState(null);
  return (
    <>
    <Header/>
     <ImagesList setCurrentImageId={setCurrentImageId} setModalVisible={setModalVisible}/>
      <Modal
        currenImageId={currentImageId}
        setCurrentImageId={setCurrentImageId}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      >
        <PhotoFeedback currentImageId={currentImageId}></PhotoFeedback>
      </Modal>
    </>
  );
}

export default App;
