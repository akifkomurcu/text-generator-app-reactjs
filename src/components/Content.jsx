import { useEffect, useState } from "react";
import axios from "axios";

function Content({ paras, text }) {
  const [data, setData] = useState("");

  useEffect(() => {
    axios(
      `https://baconipsum.com/api/?type=all-meat&paras=${paras}&format=${text}`
    ).then((res) => setData(res.data));
  }, [paras]);

  return (
    <>
      <div className="DataArea">
        <div className="data">{text === "Html" ? `<p>${data}</p>` : data}</div>
      </div>
      <div className="owner">Mehmet Akif Kömürcü - 2022</div>
    </>
  );
}

export default Content;
