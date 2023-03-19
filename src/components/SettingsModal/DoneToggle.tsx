interface Props {
  done: boolean;
  toggleDone: () => void;
}

export const DoneToggle = ({ done, toggleDone }: Props) => {
  return (
    <div className="filter toggle-done" onClick={toggleDone}>
      <span>Done</span>
      <input type="checkbox" defaultChecked={done}/>
    </div>
  );
};