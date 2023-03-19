import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  children?: ReactNode;
}

export const Modal = ({ isOpen, closeModal, children }: Props) => {
  if(!isOpen) return null;
  return <OpenedModal closeModal={closeModal}>{children}</OpenedModal>
};

const OpenedModal = ({ closeModal, children }: Omit<Props, "isOpen">) => {
  useEffect(() => {
    const closeOnEscape = ({ key }: KeyboardEvent) => {
      if(key === "Escape") closeModal();
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  return createPortal(
    <>
      <div className="backdrop" onClick={closeModal}/>
      <div className="modal">
        {children}
      </div>
    </>
  , document.querySelector("#modal-root") as HTMLElement);
};