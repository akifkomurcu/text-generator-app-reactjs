import React from "react";
import Content from "./Content";
import Form from "./Form";
import Header from "./Header";
import { useState } from "react";
function Index() {
  const [paras, setParas] = useState(4);
  const [text, setText] = useState("text");

  const handleChange = (e) => {
    setParas(e.target.value);
  };
  const DropDownChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <Header />
      <Form
        paras={paras}
        text={text}
        handleChange={handleChange}
        DropDownChange={DropDownChange}
      />
      <Content paras={paras} text={text} />
    </div>
  );
}

export default Index;
