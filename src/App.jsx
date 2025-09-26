import { useState } from "react";

function App() {
  const [color, setColor] = useState();

  return (
    <>
      <div
        className="w-full h-screen duration-200    "
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-5 p-6 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg {setColor} px-3 py-2 rounded-xl border border-gray-300 bg-white/80 backdrop-blur-sm">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-lg font-semibold cursor-pointer    "
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-lg font-semibold cursor-pointer"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-lg font-semibold cursor-pointer"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 py-1 rounded-lg font-semibold cursor-pointer"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => setColor("pink")}
              className="outline-none px-4 py-1 rounded-lg font-semibold cursor-pointer"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => setColor("cyan")}
              className="outline-none px-4 py-1 rounded-lg font-semibold cursor-pointer"
              style={{ backgroundColor: "cyan" }}
            >
              Cyan
            </button>
            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-1 rounded-lg font-semibold cursor-pointer"
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-lg font-semibold cursor-pointer"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("brown")}
              className="outline-none px-4 py-1 rounded-lg font-semibold cursor-pointer"
              style={{ backgroundColor: "brown" }}
            >
              Brown
            </button>
            <button
              onClick={() => setColor("Indigo")}
              className="outline-none px-4 py-1 rounded-lg font-semibold cursor-pointer"
              style={{ backgroundColor: "Indigo" }}
            >
              Indigo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
