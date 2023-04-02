import { useEffect, useRef, useState } from "react";
import "./search.scss";

type IState = { value: string };

function Search() {
  const [data, setData] = useState(localStorage.getItem("items") || "");

  const value = useRef(data);

  useEffect(() => {
    return () => {
      localStorage.setItem("items", value.current);
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData(event.currentTarget.value);
    value.current = event.target.value;
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
