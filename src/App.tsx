import "./App.css";
import Input from "./component/main/Input";
import Navbar from "./component/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="app_main_container">
        <Input />
      </main>
    </div>
  );
}

export default App;
