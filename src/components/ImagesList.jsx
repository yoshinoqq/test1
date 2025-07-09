import { useState,useEffect } from "react";
import getImages from "../API/getImages";
const ImagesList = ({setCurrentImageId,setModalVisible}) => {
    
  useEffect(() => {
    fetchImages();
  }, []);
  async function fetchImages() {
    const images = await getImages();
    setImages(images);
  }
     const [images, setImages] = useState([]);
    return ( <div className="grid grid-cols-4 gap-5 mt-10">
        {images.map((imageItem) => (
          <div
            onClick={() => {
              setCurrentImageId(imageItem.id);
              setModalVisible(true);
            }}
            key={imageItem.id}
            className="flex flex-col items-start"
          >
            <img className="size-50  rounded-md" src={imageItem.image}></img>
            <div className="text-black text-xs">id: {imageItem.id}</div>
          </div>
        ))}
      </div>)
}
export default ImagesList;