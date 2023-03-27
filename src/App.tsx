import "./App.css";
import CountryDataCard from "./component/cards/CountryDataCard";
import Input from "./component/main/Input";
import Navbar from "./component/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="app_main_container">
        <Input />
        <CountryDataCard />
      </main>
    </div>
  );
}

export default App;
