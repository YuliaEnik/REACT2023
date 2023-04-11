import { useEffect, useState, useRef } from "react";
import { Search } from "../../Components/Search";
import { Card, IData } from "../../Components/Card";
import { Modal } from "../../Components/Modal";
import { CardModal } from "../../Components/CardModal";
import { getURL } from "../../Api";
import { IDataApi, IDataModal } from "./types";
import "./style.scss";

export function Home(): JSX.Element {
  const [appState, setAppState] = useState<IDataApi>({
    loading: false,
    repos: null,
  });
  const [modalState, setModalState] = useState<IDataModal>({
    loading: false,
    repos: null,
  });
  const [isActive, setIsActive] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem("search") || ""
  );

  const getApi = async () => {
    setAppState({ loading: true });
    try {
      const repos = await getURL(searchValue);
      setAppState({
        loading: false,
        repos: repos.data,
      });
    } catch (error) {
      setAppState({ loading: false });
    }
  };

  const refData = useRef(searchValue);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
    refData.current = event.target.value;
    console.log(123);
  };
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem("search", refData.current || "");
    getApi();
    console.log(428);
  };
  useEffect(() => {
    setAppState({ loading: true });
    getApi();
  }, []);

  const closeModal = () => {
    setIsActive(false);
  };
  const openModal = (id: number) => {
    setIsActive(true);
    showDataModal(id);
  };
  const showDataModal = (id: number) => {
    setModalState({ loading: true });
    const apiUrl = `https://api.artic.edu/api/v1/artworks/${id}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setModalState({ loading: false, repos: repos.data });
      });
  };

  return (
    <div className="cards-page">
      <Search onSubmit={handleFormSubmit} onChange={handleChange} />
      <ul className="cards-wrapper">
        {appState.loading && <p className="loading">Loading...</p>}
        {appState.repos &&
          appState.repos.map((data: IData) => (
            <Card {...data} key={data.id} onClick={() => openModal(data.id)} />
          ))}
      </ul>
      <Modal isActive={isActive} closeModal={closeModal}>
        {modalState.loading && <p className="loading">Loading...</p>}
        <CardModal {...modalState.repos} isActive={isActive} />
      </Modal>
    </div>
  );
}
