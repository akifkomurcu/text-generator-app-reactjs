import { useEffect, useState } from "react";
import axios from "axios";

function Content({ paras }) {
  const [text, setText] = useState("text");
  const [data, setData] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
    console.log("text", text);
  };

  useEffect(() => {
    axios(
      `https://baconipsum.com/api/?type=all-meat&paras=${paras}&format=${text}`
    ).then((res) => setData(res.data));
  }, [paras, text]);
  console.log("paras", paras);
  console.log("data", data);
  return (
    <div>
      <select name={text} id="" onChange={handleChange}>
        <option value="Text">Text</option>
        <option value="Html">Html</option>
      </select>

      <div>
        <div>
          <p>{data}</p>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Content;
