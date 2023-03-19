interface Props {
  onClick: () => void;
}

export const SaveButton = ({ onClick }: Props) => {
  return (
    <button className="btn-save" onClick={onClick}>Save</button>
  );
};