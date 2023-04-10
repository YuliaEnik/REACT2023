import { useEffect, useRef, useState } from "react";
import { getURL } from "./../../Api";
import "./style.scss";

export function Search() {
  const [data, setData] = useState(localStorage.getItem("item") || "");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const refData = useRef(data);

  const getApi = async () => {
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const data = await getURL(refData.current);
        setItems(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    }, 1000);
  };
  useEffect(() => {
    setIsLoading(true);
    getApi();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData(event.currentTarget.value);
    refData.current = event.target.value;
  };
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem("search", refData.current || "");
    getApi();
  };

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleFormSubmit}>
        <input
          className="search-form_input"
          placeholder="Search..."
          value={data}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
