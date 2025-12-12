import axios from "axios";
import placeholder from "../images/placeholder.jpg";
import { useDispatch, useSelector } from "react-redux";

import {
  changeTitle,
  changeArtist,
  changePrice,
  changeCategory,
  changeDescription,
  changeImage,
  addArt
} from "../store";

const AddArtPage = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // POST request 
    const response = await axios.post(
      "http://localhost:3001/artData",
      form
    );

    // Use server response to update Redux
    dispatch(addArt(response.data));

    alert("Artwork added!");
  };

  return (
    <div className="p-10 max-w-4xl mx-auto flex gap-8">
      {/* Image Preview */}
      <div className="w-1/2">
        <img
          src={form.image || placeholder}
          alt=""
          className="rounded-xl object-cover w-full h-[500px]"
        />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-1/2 space-y-4">
        <input
          className="p-2 border w-full bg-blue-800 py-2 rounded"
          placeholder="Title"
          value={form.title}
          onChange={(e) => dispatch(changeTitle(e.target.value))}
        />

        <input
          className="p-2 border w-full bg-blue-800 py-2 rounded"
          placeholder="Artist"
          value={form.artist}
          onChange={(e) => dispatch(changeArtist(e.target.value))}
        />

        <input
          className="p-2 border w-full bg-blue-800 py-2 rounded"
          placeholder="Price"
          value={form.price}
          onChange={(e) => dispatch(changePrice(e.target.value))}
        />

        <input
          className="p-2 border w-full bg-blue-800 py-2 rounded"
          placeholder="Category"
          value={form.category}
          onChange={(e) => dispatch(changeCategory(e.target.value))}
        />

        <textarea
          className="p-2 border w-full bg-blue-800 py-2 rounded"
          placeholder="Description"
          value={form.description}
          onChange={(e) => dispatch(changeDescription(e.target.value))}
        />

        <input
          className="p-2 border w-full bg-blue-800 py-2 rounded"
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => dispatch(changeImage(e.target.value))}
        />

        <button className="bg-white text-blue-800 px-4 py-2 rounded w-full">
          Add Piece
        </button>
      </form>
    </div>
  );
};

export default AddArtPage;