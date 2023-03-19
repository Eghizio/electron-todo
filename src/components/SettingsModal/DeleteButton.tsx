interface Props {
  onClick: () => void;
}

export const DeleteButton = ({ onClick }: Props) => {
  return (
    <button className="btn-delete" onClick={onClick}>Delete</button>
  );
};