import * as React from 'react';
import { useState } from 'react';
import './App.css';
import Button from './Components/Button/Button';
import Home from './Pages/Home';

function App() {
  const [colorButton, setColorButton] = useState("Pink")

  
  return (
    <div >
      <Home />
      <Button 
        border="solid"
        color="grey"
        height = "50px"
        onClick={() => console.log("Grey Button Clicked")}
        radius = "10px"
        width = "100px"
        children = "Grey Button!"
      />
      <br />
      <Button 
        border="none"
        color= {colorButton}
        height = "70px"
        onClick={() => {colorButton==="Pink" ? setColorButton("Orange") : setColorButton("Pink")}}
        radius = "0px"
        width = "120px"
        children = {`${colorButton} Button`}
      />
      <br />
      <Button 
        border="dashed"
        color="yellow"
        height = "70px"
        onClick={() => alert("Yellow Button Clicked")}
        radius = "50%"
        width = "70px"
        children = "Pink Button!"
      />
    </div>
  );
}

export default App;
