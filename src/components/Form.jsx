function Form({ paras, handleChange }) {
  return (
    <div>
      <input type="number" value={paras} onChange={handleChange} />
    </div>
  );
}

export default Form;
