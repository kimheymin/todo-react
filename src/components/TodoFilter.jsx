import React, { useContext } from "react";
import DarkModeContext from "./context/DarkModeContext";

function TodoFilter(props) {
  //const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <header>
      <ul className="todoHeader">
        {/* <li>
          <button onClick={() => toggleDarkMode()}>
            {darkMode.toString()}
          </button>
        </li> */}
        <li>
          <button>ALL</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
      </ul>
    </header>
  );
}

export default TodoFilter;
