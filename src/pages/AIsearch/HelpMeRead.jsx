import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const AIChat = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    if (!query.trim()) {
      alert("Please enter a query.");
      return;
    }

    setLoading(true);
    setResponse("");

    try {
      const res = await axios.post("http://localhost:5000/api/ai", { query });
      setResponse(res.data.response);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setResponse("Failed to get a response. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">AI Search Bar</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Ask me anything..."
              value={query}
              onChange={handleInputChange}
            />
            <button
              className="btn btn-outline-info"
              onClick={handleSearch}
              disabled={loading}
            >
              {loading ? "Loading..." : "Search"}
            </button>
          </div>
          {response && (
            <div className="alert alert-secondary mt-3" role="alert">
              {response}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIChat;
