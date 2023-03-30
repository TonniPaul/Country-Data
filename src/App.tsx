import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Homepage from "./pages/Home/Homepage";
import { Routes, Route } from "react-router-dom";
import CountryPage from "./pages/countryPage/CountryPage";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("themeColor");
    return storedTheme !== null ? storedTheme : "light";
  });

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("themeColor", theme);
  }, [theme]);

  return (
    <div className="App" id={theme}>
      <Navbar theme={theme} onClick={toggleTheme} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/country/:countryCode" element={<CountryPage />} />
      </Routes>
    </div>
  );
}

export default App;
