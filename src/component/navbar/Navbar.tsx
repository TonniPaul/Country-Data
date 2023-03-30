import "./navbar.css";

interface NavbarProps {
  theme: string;
  onClick: () => void;
}

const Navbar = ({ theme, onClick }: NavbarProps) => {
  const toggleTheme = () => {
    onClick();
  };
  return (
    <div>
      <header>
        <nav className="nav">
          <a href="/" className="logo">
            Where in the world?
          </a>
          <button className="toggle_mode_container" onClick={toggleTheme}>
            <img
              src={
                theme === "light"
                  ? "/assets/moon-solid.svg"
                  : "/assets/sun-icon.svg"
              }
              alt=""
              className="mode_icon"
            />
            <p className="toggle_mode_text">
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </p>
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
