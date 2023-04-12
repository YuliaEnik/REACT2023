import { PropsWithChildren } from "react";
import "./style.scss";

export interface IModal {
  isActive: boolean;
  closeModal: () => void;
}

export const Modal = ({
  isActive,
  closeModal,
  children,
}: PropsWithChildren<IModal>) => {
  return (
    <>
      {isActive && (
        <div className="modal-wrapper" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-header">
              <div className="btn-modal" onClick={closeModal}>
                <img
                  className="btn-modal__img"
                  src="./img/close.png"
                  alt="close"
                />
              </div>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};
