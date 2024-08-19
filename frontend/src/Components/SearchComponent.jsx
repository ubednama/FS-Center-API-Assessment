const SearchComponent = ({searchTerm, setSearchTerm}) => {
  return (
    <div
      className={
        "w-full flex flex-col bg-gray-300 py-20 items-center text-center"
      }
    >
      <h1 className="text-6xl font-bold mb-6">How can we help?</h1>
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
    </div>
  );
}

export default SearchComponent
