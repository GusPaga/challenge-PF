import { useState } from "react";
import "./Styles/Style.scss";
import { icons } from "./Assets/support";
import { ImageBar } from "./Components/imageBar";

function App() {
  let [value, setValue] = useState(1);
  const maxLength = icons.length;
  console.log(value);

  const handleFront = (e) => {
    if (value === maxLength) {
      setValue(1);
    } else {
      setValue(value + 1);
    }
  };

  const handleBack = (e) => {
    if (value === 1) {
      setValue(maxLength);
    } else {
      setValue(value - 1);
    }
  };

  return (
    <ImageBar handleFront={handleFront} handleBack={handleBack} value={value} />
  );
}

export default App;
