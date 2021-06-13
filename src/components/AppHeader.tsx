import NavItem from "./NavItem";

function AppHeader(): JSX.Element {
  return (
    <header>
      <h2>twitter</h2>
      <nav>
        <NavItem label={'updates'} />
        <NavItem label={'archive'} />
        <a href="#">preferences</a>
        <span> | </span>
        <a href="#">help</a>
        <span> | </span>
        <a href="#">sign-out</a>
      </nav>
    </header>
  );
}

export default AppHeader;
