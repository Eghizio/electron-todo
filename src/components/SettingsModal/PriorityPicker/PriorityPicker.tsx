import { Priority } from "../../../model";
import s from "./PriorityPicker.module.css";

interface Props {
  selected: string;
  onSelect: (label: string) => void;
}

const priorities = Object.values(Priority);

export const PriorityPicker = ({ selected, onSelect }: Props) => {
  const btnStyle = (label: string) => {
    console.log(label, selected)
    const activeStyle = label === selected ? " " + s["active"] : "";
    return s["btn"] + " " + s[label.toLowerCase()] + activeStyle
  };

  return (
    <div className={s["picker"]}>
      {priorities.map((label) => 
        <button key={label} className={btnStyle(label)} onClick={() => onSelect(label)}>
          {label}
        </button>
      )}
    </div>
  );
};