import { useEffect, useState } from "react";
import { Search } from "../../Components/Search";
import { Card, IData } from "../../Components/Card";
import "./style.scss";
import { Modal } from "../../Components/Modal";

interface IDataApi {
  loading?: boolean;
  repos?: IData[] | null;
}

export function Home(): JSX.Element {
  const [appState, setAppState] = useState<IDataApi>({
    loading: false,
    repos: null,
  });
  const [isActive, setIsActive] = useState<boolean>(false);
  const closeModal = () => {
    setIsActive(false);
  };
  const openModal = () => {
    setIsActive(true);
  };

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = "https://api.artic.edu/api/v1/artworks";
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
      <ul className="cards-wrapper">
        {appState.loading && <p className="loading">Loading...</p>}
        {appState.repos &&
          appState.repos.map((data: IData) => (
            <Card {...data} key={data.id} openModal={openModal} />
          ))}
      </ul>
      <Modal isActive={isActive} closeModal={closeModal}></Modal>
    </div>
  );
}
