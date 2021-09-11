import "../styles/nav.css";

const NavBar = () => {
  return (
    <div className="nav-main">
      <div className="logo">DAOFIND</div>
      <div className="search">
        {/* <input placeholder="Search DAOs" /> */}
      </div>
      <div className="connect">
        <button>Connect wallet</button>
      </div>
    </div>
  );
};

export default NavBar;
