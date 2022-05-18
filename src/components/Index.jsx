import React from "react";
import Content from "./Content";
import Form from "./Form";
import Header from "./Header";
import { useState } from "react";
function Index() {
  const [paras, setParas] = useState(1);

  const handleChange = (e) => {
    setParas(e.target.value);
    console.log(paras);
  };
  return (
    <div>
      <Header />
      <Form paras={paras} handleChange={handleChange} />
      <Content paras={paras} />
    </div>
  );
}

export default Index;
