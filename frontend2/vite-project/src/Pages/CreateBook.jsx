import React from "react";
import { useState } from "react";
import Backbuton from "../Components/Backbuton";
import Spinner from "../Components/Spinner";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateBook = () => {
  const [title, SetTitle] = useState();
  const [author, SetAuthor] = useState();
  const [publishYear, SetPublishYear] = useState();
  const [loading, Setloading] = useState(false);
  const navigate = useNavigate();
  const handlesavebook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    Setloading(true);
    axios
      .post(`http://localhost:5555/books`, data)
      .then(() => {
        Setloading(false);
        navigate("/");
      })
      .catch((error) => {
        alert("An Error Happened. Please check console");
        console.log(error);
      });
  };
  return (
    <>
      <div className="p-4">
        <Backbuton />
        <h1 className="text-3xl my-4">Create Book</h1>
        {loading ? <Spinner /> : ""}
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Title </label>
            <input
              type="text"
              value={title}
              onChange={(e) => SetTitle(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full "
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Author </label>
            <input
              type="text"
              value={author}
              onChange={(e) => SetAuthor(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full "
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Publish Year</label>
            <input
              type="text"
              value={publishYear}
              onChange={(e) => SetPublishYear(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full "
            />
          </div>
          <button className="p-2 bg-sky-800 m-8" onClick={handlesavebook}>
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateBook;
