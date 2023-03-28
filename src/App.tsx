import "./App.css";
import CountryDataCard from "./component/cards/CountryDataCard";
import Input from "./component/main/Input";
import Navbar from "./component/navbar/Navbar";
import data from "./data/data.json";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="app_main_container">
        <Input />
        <div className="app_data">
          {data.map((data, index) => {
            return (
              <CountryDataCard
                key={index}
                flag={data.flag}
                country={data.name}
                population={data.population}
                region={data.region}
                capital={data.capital}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
