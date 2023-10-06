// import files
import React, {useState} from "react"
import { Link } from 'react-router-dom'


// function Calc() which is exported to App.jsx. This function can be used to render the standard calculator.
export default function Calc() {
  const [expression, setExpression] = useState("")
  const [result, setResult] = useState("")

  // Handle button clicks and update the expression and result accordingly.
  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const evalResult = eval(expression)
        setResult(Number(evalResult).toFixed(2))
        setExpression("")
      } catch (error) {
        setResult("Błąd")
        setExpression("")
      }
    } else if (value === "C") {
      setResult("")
      setExpression("")
    } else {
      if (result !== "") {
        setExpression(result + value)
        setResult("")
      } else {
        setExpression((prevExpression) => prevExpression + value)
      }
    }
  }

    return(
        <div className="container">
            <div className="board" id="calc_board">
                <div  className="border" id="screen">{result ? result : expression}</div>
                <div id="buttons_board">
                    <button className="buttons" onClick={() => handleButtonClick("7")}>7</button>
                    <button className="buttons" onClick={() => handleButtonClick("8")}>8</button>
                    <button className="buttons" onClick={() => handleButtonClick("9")}>9</button>
                    <button className="buttons" onClick={() => handleButtonClick("*")}>*</button>
                    <button className="buttons" onClick={() => handleButtonClick("4")}>4</button>
                    <button className="buttons" onClick={() => handleButtonClick("5")}>5</button>
                    <button className="buttons" onClick={() => handleButtonClick("6")}>6</button>
                    <button className="buttons" onClick={() => handleButtonClick("/")}>/</button>
                    <button className="buttons" onClick={() => handleButtonClick("1")}>1</button>
                    <button className="buttons" onClick={() => handleButtonClick("2")}>2</button>
                    <button className="buttons" onClick={() => handleButtonClick("3")}>3</button>
                    <button className="buttons" onClick={() => handleButtonClick("-")}>-</button>
                    <button className="buttons" id="clear" onClick={() => handleButtonClick("C")}>C</button>
                    <button className="buttons" id="equal" onClick={() => handleButtonClick("0")}>0</button>
                    <button className="buttons" onClick={() => handleButtonClick("=")}>=</button>
                    <button className="buttons" onClick={() => handleButtonClick("+")}>+</button>
                    <button className="buttons" onClick={() => handleButtonClick(".")}>.</button>
                    <Link to="/"><button className="buttons" id="exit_button">Powrót</button></Link> {/* Return to main page (main.jsx)*/}
                </div>
            </div>
        </div>
    )
}
