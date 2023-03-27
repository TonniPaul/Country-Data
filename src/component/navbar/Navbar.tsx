import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="nav">
          <a href="/" className="logo">
            Where in the world?
          </a>
          <button className="toggle_mode_container">
            <img src="/assets/moon-solid.svg" alt="" className="mode_icon" />
            <p className="toggle_mode_text">Dark Mode</p>
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
