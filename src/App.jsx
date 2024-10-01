import { useState } from "react";
import "./App.css";
import { HomeIcon } from "./components/ui/icon";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="dark">
        <HomeIcon />
        <div className="bg-white dark:bg-black">
          <h1 className="text-3xl font-bold underline dark:text-white">
            Hello world!
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
