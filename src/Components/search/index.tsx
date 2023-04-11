import { e } from "vitest/dist/types-fafda418";
import "./style.scss";

export interface ISearch {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export function Search(props: ISearch) {
  return (
    <div className="search">
      <form className="search-form" onSubmit={props.onSubmit}>
        <input
          className="search-form_input"
          placeholder="Search..."
          value={props.value}
          onChange={props.onChange}
        />
      </form>
    </div>
  );
}
