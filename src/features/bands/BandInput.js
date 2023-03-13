import React, { useState } from "react";

function BandInput({onBandSubmit}) {
  const [name, setName] = useState("")
  function handleChange(e){
    setName(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault();
    onBandSubmit(name);
    setName("")
  }
  return (
    <form onSubmit={handleSubmit} >
      <label>name
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      
      <button type="submit">Add Band</button>
    </form> 
  )
}

export default BandInput;
