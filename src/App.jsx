import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Matrix from "./components/Matrix";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Matrix />
    </>
  );
}

export default App;
