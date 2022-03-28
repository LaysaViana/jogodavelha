import { useState } from 'react'
import styles from "./game.module.css"

const Game = () => {

  const emptyBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  const [board, setBoard] = useState(emptyBoard);
  const [ganhador, setGanhador] = useState(false);
  const [playerAtual, setPlayerAtual] = useState("X");

  const resetarJogo = () => {
    setBoard(emptyBoard);
    setGanhador(false);
  }

  const verificarGanhador = () => {

    for (let i = 0; i < board.length; i++) {
      if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
        return board[i][0];
      }
    }
    for (let i = 0; i < board.length; i++) {
      if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
        return board[0][i];
      }
    }
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      return board[0][0];
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      return board[0][2];
    }
    return false;
  }

  const registrarJogada = (coluna: number, linha: number) => {

    if (board[coluna][linha] === '') {
      let novoBoard = board;
      novoBoard[coluna][linha] = playerAtual;

      setBoard((state) => novoBoard);

      if (verificarGanhador()) {
        setGanhador(true);
      }
      else {
        let player = playerAtual === 'X' ? 'O' : 'X';
        setPlayerAtual(player);
      }
    }
  }

  return (
    <div>
      <div className={styles.header}>
        <button onClick={resetarJogo}>Novo Jogo</button>
      </div>
      <div className={styles.ticTacToe}>
        <div className={styles.column}>
          <span className={styles.square} onClick={() => registrarJogada(0, 0)}>{board[0][0]}</span>
          <span className={styles.square} onClick={() => registrarJogada(0, 1)}>{board[0][1]}</span>
          <span className={styles.square} onClick={() => registrarJogada(0, 2)}>{board[0][2]}</span>
        </div>
        <div className={styles.column}>
          <span className={styles.square} onClick={() => registrarJogada(1, 0)}>{board[1][0]}</span>
          <span className={styles.square} onClick={() => registrarJogada(1, 1)}>{board[1][1]}</span>
          <span className={styles.square} onClick={() => registrarJogada(1, 2)}>{board[1][2]}</span>
        </div>
        <div className={styles.column}>
          <span className={styles.square} onClick={() => registrarJogada(2, 0)}>{board[2][0]}</span>
          <span className={styles.square} onClick={() => registrarJogada(2, 1)}>{board[2][1]}</span>
          <span className={styles.square} onClick={() => registrarJogada(2, 2)}>{board[2][2]}</span>
        </div>
      </div>
      <div className={styles.footer}>
        {ganhador && <span>O GANHADOR É: {playerAtual}</span>}
      </div>
    </div>
  )
}

export default Game;