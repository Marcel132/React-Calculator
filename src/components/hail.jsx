// import files
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// function hail which is exported to App.jsx. This function can be used to render the hail calculator.
export default function Hail() {
  const [degrees, setDegrees] = useState(0)
  const [radians, setRadians] = useState(0)
  const [gradians, setGradians] = useState(0)

  // Change degrees to radians and gradians values  

  const handleDegreesChange = (event) => {
    const degreesValue = event.target.value
    setDegrees(degreesValue)
    const radiansValue = (degreesValue * Math.PI) / 180
    const gradiansValue = (degreesValue * 10) / 9
    
    setRadians(Number(radiansValue).toFixed(4))
    setGradians(Number(gradiansValue).toFixed(4))
  }

  // Change radians to degrees and gradians values  

  const handleRadiansChange = (event) => {
    const radiansValue = event.target.value
    setRadians(radiansValue)
    const degreesValue = (radiansValue * 180) / Math.PI
    const gradiansValue = (degreesValue * 10) / 9

    setDegrees(Number(degreesValue).toFixed(4))
    setGradians(Number(gradiansValue).toFixed(4))
  }

  // Change gradians to radians and degrees values  

  const handleGradiansChange = (event) => {
    const gradiansValue = event.target.value
    setGradians(gradiansValue)
    const degreesValue = (gradiansValue * 9) / 10
    const radiansValue = (degreesValue * Math.PI) / 180

    setDegrees(Number(degreesValue).toFixed(4))
    setRadians(Number(radiansValue).toFixed(4))
  }

  return (
    <div className="container">
      <div className="board" id="hail_board">
        <div className="hail_box flex" id="degrees">
          <label>Stopnie:</label>
          <input 
            type="number"
            value={degrees}
            onChange={handleDegreesChange} 
          /> 
        </div>
        <div className="hail_box flex" id="radians">
          <label>Radiany:</label>
          <input
            type="number"
            value={radians}
            onChange={handleRadiansChange}
          />
        </div>
        <div className="hail_box flex" id="gradians">
          <label>Grady:</label>
          <input
            type="number"
            value={gradians}
            onChange={handleGradiansChange}
          />
        </div>
        <div>
            <Link to="/"><button className="buttons" id="return_to_main_side">Powrót</button></Link> {/* Return to main page (main.jsx)*/}
        </div>
      </div>
    </div>
  )
}
