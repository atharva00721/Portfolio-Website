import { useState } from "react";
import Layout from './Components/Layout/index';
import "./App.scss";
import { Routes, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
