import { useEffect, useState, useCallback } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SearchComponent from "./Components/SearchComponent";
import CardComponent from "./Components/CardComponent";

function App() {
  const [cardData, setCardData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/data/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error(`Error creating request. ${response}`);

      const res = await response.json();
      console.log("Data sent successfully", res);

      setCardData((prevCardData) => [...prevCardData, res.data]);

      setIsModalOpen(false);
    } catch (err) {
      console.log(err);
    }
  };



  const fetchCardData = useCallback(async (title) => {
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch(`/api/data/${title}`);
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message || `HTTP error! status: ${response.status}`
        );
      }
      const data = await response.json();
      setCardData(data.data);
    } catch (err) {
      console.error(err);
      setCardData([]);
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (searchTerm) fetchCardData(searchTerm);
      else fetchCardData("");
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm, fetchCardData]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header
        setData={setData}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleSubmit={handleSubmit}
      />
      <SearchComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CardComponent cardData={cardData} error={error} isLoading={isLoading} />
      <Footer />
    </div>
  );
}

export default App;
