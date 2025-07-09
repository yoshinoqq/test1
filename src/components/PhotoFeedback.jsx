import { useEffect, useState } from "react";
import Form from "./Form";
import getPhotoFeedback from "../API/getPhotoFeedbackItem";
import CommentList from "./CommentList";

const PhotoFeedback = ({ currentImageId }) => {
  const [PhotoFeedbackItem, setPhotoFeedbackItem] = useState({});

  const addNewComment = (newComment) => {
    setPhotoFeedbackItem({
      ...PhotoFeedbackItem,
      comments: [...PhotoFeedbackItem.comments, newComment],
    });
  };

  async function fetchPhotoFeedback() {
    const items = await getPhotoFeedback(currentImageId);
    setPhotoFeedbackItem(items);
  }

  useEffect(() => {
    fetchPhotoFeedback();
  }, [currentImageId]);

  return (
    <div className="flex flex-col  gap-3">
      <img className=" size-100" src={PhotoFeedbackItem.largeImage}></img>
      <Form
        currentImageId={currentImageId}
        PhotoFeedbackItem={PhotoFeedbackItem}
        onCommentAdded={addNewComment}
      />
      <CommentList PhotoFeedbackItem={PhotoFeedbackItem}></CommentList>
    </div>
  );
};
export default PhotoFeedback;
