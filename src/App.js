import logo from "./logo.svg";
import "./App.css";
import Home from "./views/Home";
import Nav from "./views/Nav";

function App() {
  return (
    <div className="bg-red-200 h-screen flex flex-col">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
