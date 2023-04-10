import { useEffect, useState } from "react";
import { Search } from "../../Components/Search";
import { Card, IData } from "../../Components/Card";
import "./style.scss";
import { Modal } from "../../Components/Modal";
import { CardModal, IModalData } from "../../Components/CardModal";

interface IDataApi {
  loading?: boolean;
  repos?: IData[] | null;
}
interface IDataModal {
  loading?: boolean;
  repos?: IModalData[] | null;
}

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
  const closeModal = () => {
    setIsActive(false);
  };
  const openModal = (id: number) => {
    setIsActive(true);
    showDataModal(id);
  };

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = "https://api.artic.edu/api/v1/artworks";
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({
          loading: false,
          repos: repos.data,
        });
      });
  }, [setAppState]);

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
      <Search />
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
