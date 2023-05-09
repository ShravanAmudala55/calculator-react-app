import "./App.css";
import "./components/Button";
import Button from "./components/Button";
import Input from "./components/input";
import { useState } from "react";
import { evaluate } from "mathjs";

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (e) => {
    if (result !== "") {
      if (!isNaN(parseInt(e))) {
        // reset text and result if a number button is clicked after a calculation
        setText("");
        setResult("");
      } else {
        setText([result, "", e + ""]);
        setResult("");
        return;
      }
    } else if (e === "." && text[text.length - 1]?.includes(".")) {
      // do nothing if there's already a decimal point in the current number
      return;
    }
    setText((text) => [...text, e + ""]);
  };

  const calculateResult = () => {
    if (text.length > 0) {
      const input = text.join("");
      console.log("Input:", input);
      setResult(evaluate(input));
      setText("");
    }
  };

  const resetInput = () => {
    setText("");
    setResult("");
  };

  const buttonColor = "#48B749";
  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        <div className="row">
          <Button symbol="7" handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText} />
          <Button symbol="/" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="x" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="+" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addToText} />
          <Button symbol="." handleClick={addToText} />
          <Button symbol="=" handleClick={calculateResult} />
          <Button symbol="-" color={buttonColor} handleClick={addToText} />
        </div>
        <Button symbol="AC" color="#F8991D" handleClick={resetInput} />
      </div>
    </div>
  );
};
export default App;
