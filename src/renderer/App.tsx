import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <input
        type="checkbox"
        value="synthwave"
        className="toggle theme-controller"
      />

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
