import HamburgerMenuIcon from "./HamburgerMenuIcon";

function Nav() {
  return (
    <nav>
      <HamburgerMenuIcon />
      <h3 className="nav-title">Country</h3>
      <div className="search-bar">
        {" "}
        <small>Search</small>{" "}
      </div>
    </nav>
  );
}

export default Nav;
