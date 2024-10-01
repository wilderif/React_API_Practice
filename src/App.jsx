import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="dark">
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
