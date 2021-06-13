import formTimeString, { TimeUnit } from "../utils/formTimeString";

interface StatusItemProps {
  username: string;
  content: string;
  emoji?: string;
  timeAgo: { n: number; unit: TimeUnit };
}

function StatusItem(props: StatusItemProps): JSX.Element {
  return (
    <li>
      {props.emoji} <a href="#">{props.username}</a>: {props.content}
      <small>{formTimeString(props.timeAgo.n, props.timeAgo.unit)} ago</small>
    </li>
  );
}

export default StatusItem;
