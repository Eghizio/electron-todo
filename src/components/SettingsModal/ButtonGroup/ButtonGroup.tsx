import s from "./ButtonGroup.module.css";

interface Props {
  labels: string[];
  selected: string;
  onSelect: (label: string) => void;
}

export const ButtonGroup = ({ labels, selected, onSelect }: Props) => {
  const btnStyle = (label: string) => label === selected ? (s["btn"]+" "+s["active"]) : s["btn"];
  
  return (
    <div className={s["button-group"]}>
      {labels.map((label) => 
        <button key={label} className={btnStyle(label)} onClick={() => onSelect(label)}>
          {label}
        </button>
      )}
    </div>
  );
};