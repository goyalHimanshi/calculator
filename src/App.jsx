import React, { useState } from 'react'
import styles from "./App.module.css";
import Display from './comptsonen/Display';
import ButtonComponent from './comptsonen/ButtonComponent';

export default function App() {
  const [calvalue, setcalvalue] = useState("");

  const onButtonClick =
    (event) => console.log("button click" + event);
  return (
    <div>
      <div className={styles.calculator}>

        <Display displayvalue={calvalue}></Display>

        <ButtonComponent onButtonClick={onButtonClick} />

      </div>


    </div>
  )
}
