import React from "react";
import { useState } from "react";
import Backbuton from "../Components/Backbuton";
import Spinner from "../Components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
  const [loading, Setloading] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeletebook = () => {
    Setloading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        Setloading(false);
        navigate("/");
      })
      .catch((error) => {
        Setloading(false);
        alert("An Error Happened. Please Check console");
        console.log(error);
      });
  };
  return (
    <>
      <div className="p-4">
        <Backbuton />
        <h1 className="text-3xl my-4">Delete Book </h1>
        {loading ? <Spinner /> : ""}
        <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
          <h3 className="text-2xl">Are You Sure You Want Delete Book?</h3>
          <button
            className="p-4 bg-red-600 text-white m-8 w-full"
            onClick={handleDeletebook}
          >
            Yes, Delete it
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteBook;
// DeleteBook
