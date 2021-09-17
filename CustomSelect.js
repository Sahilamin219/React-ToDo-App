import React, { useState } from "react";
function CustomSelect(props) {
  const [data] = useState(props.data);
  console.log(data, "OK");
  const [selectedData, updateSelectedData] = useState("");
  function handleChange(event) {
    updateSelectedData(event.target.value);
    if (props.onSelectChange) props.onSelectChange(selectedData);
  }
  let options = data.map((data) => (
    <option key={data.id} value={data.id}>
      {data.name}
    </option>
  ));
  return (
    <select
      name="customSearch"
      className="custom-search-select"
      onChange={handleChange}
    >
      <option>Choose Wisely</option>
      {options}
    </select>
  );
}
export default CustomSelect;
