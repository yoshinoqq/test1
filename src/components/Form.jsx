import { useState } from "react";
import postComment from "../API/postComment";
const Form = ({ currentImageId, onCommentAdded }) => {
  const [formData, setFormData] = useState({
    comment: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.comment.trim() !== "") {
      try {
        await postComment(currentImageId, formData);
        onCommentAdded({
          id: Date.now(),
          author: "Aноним",
          text: formData.comment,
        });
        setFormData({ comment: "" });
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Write some text");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="flex flex-col ">
        <h6 className="text-black text-xs self-start">Comment</h6>
        <textarea
          className="text-black"
          type="text"
          value={formData.comment}
          name="comment"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        ></textarea>
        <span className="text-gray-500 text-xs self-start">
          Write a few sentences about the photo.
        </span>
        <button
          type="submit"
          className="bg-indigo-600 rounded-md self-center text-xs h-8 w-13 mt-3"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Form;
