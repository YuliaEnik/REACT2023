import "./home.scss";
import { useEffect, useState } from "react";
import { Search } from "../../Components/Search";
import { IData } from "../../Data/data";
import { Card } from "../../Components/Card";
//import { Loading } from "../../Components/Loading";

interface IDataApi {
  loading: boolean;
  repos: IData[] | null;
}

export function Home(): JSX.Element {
  //const ListLoading = Loading(List);
  const [appState, setAppState] = useState<IDataApi>({
    loading: false,
    repos: null,
  });
  useEffect(() => {
    //setAppState({ loading: true });
    const apiUrl = "https://api.artic.edu/api/v1/artworks?";
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        console.log(repos);
        setAppState({ loading: false, repos: repos.data });
      });
  }, [setAppState]);
  return (
    <div className="cards-page">
      <Search />
      <div className="cards-wrapper">
        {!appState.repos ? (
          <div>No Data</div>
        ) : (
          appState.repos.map((data: IData) => <Card {...data} key={data.id} />)
        )}
      </div>
    </div>
  );
}
