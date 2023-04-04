import "./App.css";
import Navbar from "./component/navbar/Navbar";
import HomePage from "./pages/Home/Homepage";
import { Routes, Route } from "react-router-dom";
import CountryPage from "./pages/countryPage/CountryPage";
import { useEffect, useState } from "react";
import Footer from "./component/Footer/Footer";
import ScrollButton from "./component/ScrollButton/ScrollButton";

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
        <Route index element={<HomePage />} />
        <Route path="/country/:countryCode" element={<CountryPage />} />
      </Routes>
      <ScrollButton />
      <Footer />
    </div>
  );
}

export default App;
