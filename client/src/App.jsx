import { useEffect } from "react";
import { useState } from "react";
import "./app.css";
import Table from "./Table";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`)
      setData(res.data);
    };
    fetchData();
  }, [query]);

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && (
        <Table data={data} />
      )}
    </div>
  );
}

export default App;
