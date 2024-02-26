import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import BackBtn from "../components/BackBtn";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPusblishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSave = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };

  return (
    <div className="p-4">
      <BackBtn />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label htmlFor="Title" className="text-xl mr-4 text-gray-500">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full rounded-md"
            />
          </div>
          <div className="my-4">
            <label htmlFor="Title" className="text-xl mr-4 text-gray-500">
              Author
            </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full rounded-md"
            />
          </div>
          <div className="my-4">
            <label htmlFor="publishYear" className="text-xl mr-4 text-gray-500">
              Publish Year
            </label>
            <input
              type="number"
              value={publishYear}
              onChange={(e) => setPusblishYear(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full rounded-md"
            />
          </div>
          <button
            className="p-2 w-full bg-sky-300 m-8 mx-auto rounded-md"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateBook;
