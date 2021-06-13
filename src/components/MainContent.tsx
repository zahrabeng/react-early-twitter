import FriendStatuses from "./FriendStatuses";
import StatusSetter from "./StatusSetter";

function MainContent(): JSX.Element {
  return (
    <main>
      <StatusSetter />
      <FriendStatuses />
    </main>
  )
}

export default MainContent