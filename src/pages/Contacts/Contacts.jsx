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
      <div>
        {" "}
        <img
          src="https://www.google.com/imgres?q=%D1%84%D0%BE%D1%82%D0%BE&imgurl=https%3A%2F%2Flifehacker.ru%2Fspecial%2Ffujifilm%2Fdist%2Fstatic%2Fimg%2F5.2410a2d.jpg&imgrefurl=https%3A%2F%2Flifehacker.ru%2Fspecial%2Ffujifilm%2Fugaday-chto-na-foto%2F&docid=eEy6loxHFyZYuM&tbnid=QHCuZushPaQ5kM&vet=12ahUKEwje3bX5-b2NAxUDHRAIHcWgBAAQM3oECFYQAA..i&w=1000&h=1000&hcb=2&ved=2ahUKEwje3bX5-b2NAxUDHRAIHcWgBAAQM3oECFYQAA"
          alt=""
        />
      </div>
    </div>
  );
};

export default Contacts;
