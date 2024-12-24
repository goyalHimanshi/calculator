import React from 'react'
import styles from './ButtonComponent.module.css'

export default function ButtonComponent({ onButtonClick }) {
    const buttoname = ['c', '1', '2', '3', '4', '5', '+', '6', '7', '*', '8', '9', '.', '0', '%', '=', '/'];
    return (
        <div>
            <div className={styles.buttonContainer}>
                {buttoname.map(items => <button className={styles.button} onClick={onButtonClick}>{items} </button>)}




            </div>


        </div>
    )
}
