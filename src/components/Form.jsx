function Form({ paras, text, handleChange, DropDownChange }) {
  return (
    <div className="FormArea">
      <div className="InputArea">
        Paragraphs
        <input
          type="number"
          className="Input"
          value={paras}
          onChange={handleChange}
        />
      </div>
      <div className="DropdownArea">
        Include HTML
        <select
          className="Dropdown"
          name={text}
          value={text}
          onChange={DropDownChange}
        >
          <option value="Text">Text</option>
          <option value="Html">Html</option>
        </select>
      </div>
    </div>
  );
}

export default Form;
