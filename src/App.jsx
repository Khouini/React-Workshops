// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import { useEffect, useState } from 'react';
import './App.css';
// import ClassComponent from './components/ClassComponent';
// import FunctionalComponent from './components/FunctionalComponent';
function App() {
  const [color, setColor] = useState('red');
  useEffect(() => {
    console.log("in every render");
  });
  useEffect(() => {
    console.log("in first render");
  }, []);
  useEffect(() => {
    console.log("in every color change");
  }, [color]);
  return (
    <>
      <input type="text" onChange={(e) => (setColor(e.target.value))} />
      <p>The color is {color}</p>
    </>
  );
}

export default App;
