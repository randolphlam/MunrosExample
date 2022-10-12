import React from "react";

const MunroDetail = ({selectedMunro}) => {
  return (
    <div>
    {/* <p>I'm the MunroDetail component</p> */}
    <h3>{selectedMunro.name}</h3>
    <p>{selectedMunro.height}</p>
    <p>{selectedMunro.region}</p>
    <p>{selectedMunro.meaning}</p>
    </div>
  )
}

export default MunroDetail;