import { useTodos } from "../../context/TodosContext";
import { useDisclosure } from "../../hooks/useDisclosure";
import { Todo } from "../../model";
import { Dots } from "../icons/Dots";
import { Modal } from "../Modal";
import { ModalHeader } from "./ModalHeader";
import { StatusBar } from "./StatusBar";

import "./Settings.css";
import { useSettings } from "./useSettings";
import { PriorityPicker } from "./PriorityPicker/PriorityPicker";
import { DeleteButton } from "./DeleteButton";
import { SaveButton } from "./SaveButton";
import { Description } from "./Description";
import { DoneToggle } from "./DoneToggle";

interface Props {
  todo: Todo;
}

export const SettingsModal = ({ todo }: Props) => {
  const { isOpen, close, open } = useDisclosure();
  const { removeTodo } = useTodos(); 
  // todo add toasts to context ex. on remove
  const { name, changeName, status, markStatus, done, toggleDone, priority, setPriority } = useSettings(todo);

  // TODO: On Save, On delete

  return (
    <>
      <button className="btn-icons" onClick={open}>
        <Dots/>
      </button>

      <Modal isOpen={isOpen} closeModal={close}>
        <ModalHeader name={name} editName={changeName} closeModal={close}/>

        <div className="column">
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <DoneToggle done={done} toggleDone={toggleDone} />
            <StatusBar status={status} markStatus={markStatus} />
          </div>
          <div className="modal-body-settings">
            <Description />
            <PriorityPicker selected={priority} onSelect={setPriority} />
          </div>

          <div className="btns-footer">
            <DeleteButton onClick={() => console.log("delete")}/>
            <SaveButton onClick={() => console.log("save")}/>
          </div>

        </div>
      </Modal>
    </>
  );
};