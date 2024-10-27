import "./App.css";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import NavBar from "./components/NavBar/NavBar";
// import DaisyNav from "./components/DaisyNav/DaisyNav";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <DaisyNav></DaisyNav>
      <h1 className="text-7xl bg-emerald-500">Vite + React</h1>
    </>
  );
}

export default App;
