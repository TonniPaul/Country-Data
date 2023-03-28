import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Homepage from "./pages/Home/Homepage";
import { Routes, Route } from "react-router-dom";
import CountryPage from "./pages/countryPage/CountryPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/country/:countryCode" element={<CountryPage />} />
      </Routes>
    </div>
  );
}

export default App;
