import { useState } from "react";
import axios from "axios";
const Form = ({ currentImageId, onCommentAdded }) => {
  const [formData, setFormData] = useState({
    comment: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.comment.trim() !== "") {
      try {
        const response = await axios.post(
          `http://test-backend.itdelta.agency/api/image/${currentImageId}/comments`,
          formData
        );
        console.log("Form data submitted successfully:", response.data);
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
      alert("Введите текст");
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
          className="bg-indigo-600 rounded-md self-center text-xs h-8 w-13"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Form;
