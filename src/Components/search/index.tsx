import { useEffect, useRef, useState } from "react";
import "./search.scss";

function Search() {
  const [data, setData] = useState(localStorage.getItem("item") || "");

  const refData = useRef(data);

  useEffect(() => {
    return () => {
      localStorage.setItem("item", refData.current);
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData(event.currentTarget.value);
    refData.current = event.target.value;
  };

  return (
    <div className="search">
      <form className="search-form">
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

export { Search };
