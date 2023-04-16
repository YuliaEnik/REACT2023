import "./style.scss";
import React, { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { setSearchString } from "../../Store/reducers/homePageReducer";

export interface ISearch {
  value?: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export function Search() {
  const search = useAppSelector((state) => state.homePage.search);
  const dispatch = useAppDispatch();
  const searchStringRef = useRef<HTMLInputElement>(null);

  const handleFormSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchStringRef.current) {
      const searchStr = searchStringRef.current.value;
      dispatch(setSearchString(searchStr));
    }
  };

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleFormSumbit}>
        <input
          className="search-form_input"
          placeholder="Search..."
          defaultValue={search}
          ref={searchStringRef}
        />
      </form>
    </div>
  );
}
