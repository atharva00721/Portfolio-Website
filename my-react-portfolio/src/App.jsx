import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import "@radix-ui/themes/styles.css";
import { Flex, Text } from "@radix-ui/themes";
import Home from "./components/Home";
// import { Globe } from "./components/Globe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Home />
      {/* <Globe /> */}
      <h1>
        <Text>Hello</Text>
      </h1>
      <Flex></Flex>
      {/* <Flex>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Vite + React</h1>
        <div className="card">
          <button
            className="custom-button"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p> 
        </div>
      </Flex>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>*/}
    </div>
  );
}

export default App;
