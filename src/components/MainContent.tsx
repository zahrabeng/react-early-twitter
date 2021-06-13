import FriendStatuses from "./FriendStatuses";
import PublicStatus from "./PublicStatus";
import StatusSetter from "./StatusSetter";
import UserStats from "./UserStats";

function MainContent(): JSX.Element {
  return (
    <main>
      <StatusSetter />
      <FriendStatuses />
      <PublicStatus />
      <UserStats />
    </main>
  );
}

export default MainContent;
