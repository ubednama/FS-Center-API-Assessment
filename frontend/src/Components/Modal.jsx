import { useEffect, useState } from "react";

const Modal = ({ closeModal, setData, handleSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleInputChange = (setter) => (e) => setter(e.target.value);

  useEffect(() => {
    setData((prevData) => ({
      ...prevData,
      title,
      description,
    }));
  }, [title, description, setData]);

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="bg-gray-500 p-6 rounded shadow-lg min-w-96 w-1/3">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Submit a Request
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1 text-gray-300"
              htmlFor="title"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={handleInputChange(setTitle)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1 text-gray-300"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={handleInputChange(setDescription)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="4"
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
