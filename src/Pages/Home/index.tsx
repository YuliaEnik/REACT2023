/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";
import { Search } from "../../Components/Search";
import { Card, IData } from "../../Components/Card";
import { Modal } from "../../Components/Modal";
import { CardModal } from "../../Components/CardModal";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { IDataModal } from "./types";
import { fetchcardApiData } from "../../Store/reducers/homePageReducer";
import "./style.scss";

export function Home(): JSX.Element {
  const [modalState, setModalState] = useState<IDataModal>({
    loading: false,
    repos: null,
  });
  const [isActive, setIsActive] = useState<boolean>(false);

  const { search, cardApiData, isLoading } = useAppSelector(
    (state) => state.homePage
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchcardApiData(search));
  }, [search, dispatch]);

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
      .catch((error) => console.log(error))
      .then((repos) => {
        setModalState({ loading: false, repos: repos.data });
      });
  };

  return (
    <div className="cards-page">
      <Search />
      <ul className="cards-wrapper">
        {isLoading && <p className="loading">Loading...</p>}
        {cardApiData &&
          cardApiData.map((data: IData) => (
            <Card {...data} key={data.id} onClick={() => openModal(data.id)} />
          ))}
      </ul>
      <Modal isActive={isActive} closeModal={closeModal}>
        {modalState.loading && <p className="loading">Loading...</p>}
        {modalState.repos && (
          <CardModal {...modalState.repos} isActive={isActive} />
        )}
      </Modal>
    </div>
  );
}
