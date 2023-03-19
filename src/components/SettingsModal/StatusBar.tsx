import { Status } from "../../model";
import { ButtonGroup } from "./ButtonGroup/ButtonGroup";

interface Props {
  status: string;
  markStatus: (status: string) => void;
}

const statuses = Object.values(Status);

export const StatusBar = ({ status, markStatus }: Props) => {
  return (
    <div className="status-bar">
      <ButtonGroup labels={statuses} selected={status} onSelect={markStatus}/>
    </div>
  );
};