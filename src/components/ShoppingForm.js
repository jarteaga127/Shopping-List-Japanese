import React, { useState, useEffect, useRef } from "react";

export default function ShoppingForm(props) {
  const [input, setInput] = useState("");

  const inputFocus = useRef(null);

  useEffect(() => {
    inputFocus.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput("");
  };
  return (
    <form className="shopping-form-001" onSubmit={handleSubmit}>
      {props.edit ? (
        <div>
          <input
            type="text"
            placeholder="商品を変更ください"
            value={input}
            name="text"
            onChange={handleChange}
            ref={inputFocus}
            className="shopping-input edit"
          />
          <button className="add-item-btn edit">商品を変更</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="商品を入力ください"
            value={input}
            name="text"
            onChange={handleChange}
            ref={inputFocus}
            className="shopping-input"
          />
          <button className="add-item-btn">商品を追加</button>
        </div>
      )}
    </form>
  );
}
