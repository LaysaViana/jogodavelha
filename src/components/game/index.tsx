import React from 'react'
import styles from "./game.module.css"

const Game = () => {

  return (
    <div className={styles.ticTacToe}>
      <div className={styles.column}>
        <span className={styles.square} data-col="0" data-row="0"></span>
        <span className={styles.square} data-col="0" data-row="1"></span>
        <span className={styles.square} data-col="0" data-row="2"></span>
      </div>
      <div className={styles.column}>
        <span className={styles.square} data-col="1" data-row="0"></span>
        <span className={styles.square} data-col="1" data-row="1"></span>
        <span className={styles.square} data-col="1" data-row="2"></span>
      </div>
      <div className={styles.column}>
        <span className={styles.square} data-col="2" data-row="0"></span>
        <span className={styles.square} data-col="2" data-row="1"></span>
        <span className={styles.square} data-col="2" data-row="2"></span>
      </div>
    </div>



  )
}

export default Game