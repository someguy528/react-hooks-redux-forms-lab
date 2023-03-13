import React, { useState } from "react";
import { useSelector } from "react-redux";
import BandInput from "./BandInput";
import { useDispatch } from "react-redux";
import { bandAdded } from "./bandsSlice";
function BandsContainer() {
  let stateBands = useSelector(state=> state.bands.entities)
  const [bands, setBands] = useState(stateBands)
  const dispatch = useDispatch()
  
  function handleBandSubmit(name){
    dispatch(bandAdded(name));
    setBands([...bands, name ])
  }
  const allBands = bands.map(b=><li key={b} >{b}</li>)
  return <div>BandsContainer
    <BandInput onBandSubmit={handleBandSubmit} />
    <ul> {allBands} </ul>
  </div>;
}

export default BandsContainer;
