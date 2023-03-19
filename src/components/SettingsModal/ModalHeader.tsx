import { useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { Cross } from "../icons/Cross";

interface Props {
  name: string;
  editName: (name: string) => void;
  closeModal: () => void;
}

export const ModalHeader = ({ name, editName, closeModal }: Props) => {
  const [isEditable, setIsEditable] = useState(false);
  const ref = useClickOutside<HTMLInputElement>(() => setIsEditable(false));

  return (
    <div className="modal-header">
      <form className="modal-title" onSubmit={(e) => {
        e.preventDefault();
        setIsEditable(false);
      }}>
        {isEditable
        ? <input ref={ref} className="header-input" type="text" value={name} onChange={e => editName(e.target.value)}/>
        : <h3 className="modal-name" onClick={() => setIsEditable(true)}>{name}</h3>
        }
      </form>

      <div className="clickable" onClick={closeModal}>
        <Cross/>
      </div>
    </div>
  );
};