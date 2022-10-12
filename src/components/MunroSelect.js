import React from "react";

const MunroSelector = ({onSelectedMunro,munros}) => {

    const handleChange = function(event) {
      const chosenMunro = munros[event.target.value];
      onSelectedMunro(chosenMunro);
    }

    const munrosOptions = munros.map((munro,index) => {
      return (
        <option value={index} key={index}>{munro.name}</option>
     )
    })

  return (
    <select defaultValue="" onChange={handleChange}>
        <option value="" selected>Choose a Munro</option>
        {munrosOptions}
        
    </select>
  )
}

export default MunroSelector;