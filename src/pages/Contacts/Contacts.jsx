import React, { useState } from "react";
import "./Contacts.scss";

const Contacts = () => {
  const [count, setCount] = useState(0);
  const [inputText, setInput] = useState("");

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <div>
      <div className="card" onClick={incrementCount}>
        <button> enter {count} </button>
      </div>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Текст киргиниз"
        />

        <p>{inputText || "текст жок ❤️😒"}</p>
      </div>
    </div>
  );
};

export default Contacts;
