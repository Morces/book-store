import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import BackBtn from "../components/BackBtn";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Deleted Successfully!!", { variant: "success" });
        navigate("/");
      })
      .catch((e) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
      });
  };

  return (
    <div className="p-4">
      <BackBtn />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] mx-auto m-8 p-5">
        <h1 className="text-2xl">
          Are you sure you want to delete this record?
        </h1>
        <div className="flex max-md:flex-col justify-center w-full gap-x-6 mt-8">
          <button
            className="bg-white border border-gray-900 rounded-md px-6 py-2"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
          <button
            className="bg-red-600 border-0 rounded-md text-white px-6 py-2"
            onClick={handleDelete}
          >
            Yes, Delete It!
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;
