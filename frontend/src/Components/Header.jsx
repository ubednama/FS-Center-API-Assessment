import Modal from "./Modal";

const Header = ({
  isModalOpen,
  setIsModalOpen,
  setData,
  handleSubmit,
}) => {
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <header className="bg-black text-white p-4 flex justify-between items-center px-52">
        <div className="text-lg font-semibold">Abstract | Help Center</div>
        <button
          onClick={()=>setIsModalOpen(true)}
          className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded"
        >
          Submit a request
        </button>
      </header>

      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          setData={setData}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default Header
