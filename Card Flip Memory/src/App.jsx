import { useEffect, useState } from 'react'
import './index.css'

const TILE_COLORS = ['red', 'green', 'blue', 'yellow']

function App() {
  const [board, setBoard] = useState(() =>
    shuffle([...TILE_COLORS, ...TILE_COLORS])
  )
  const [selected, setSelected] = useState([])
  const [matched, setMatched] = useState([])

  const didPlayerWin = matched.length === board.length
  const selectTile = (idx) => {
    console.log('working')
    if (selected.length >= 2 || selected.includes(idx)) return
    setSelected([...selected, idx])
  }

  const restartGame = () => {
    setBoard(shuffle([...TILE_COLORS, ...TILE_COLORS]))
    setSelected([])
    setMatched([])
  }

  useEffect(() => {
    if (selected.length < 2) return

    if (board[selected[0]] === board[selected[1]]) {
      setMatched([...matched, ...selected])
      setSelected([])
    } else {
      const timerId = setTimeout(() => setSelected([]), 1000)

      return () => clearTimeout(timerId)
    }
  }, [selected])

  return (
    <>
      <h1>{didPlayerWin ? 'you win' : 'Memory game'}</h1>
      <div className="board">
        {board.map((tileColor, i) => {
          const isTurnedOver = selected.includes(i) || matched.includes(i)
          const className = isTurnedOver ? `tile ${tileColor}` : 'tile'
          console.log(className)
          return (
            <div key={i} className={className} onClick={() => selectTile(i)} />
          )
        })}
      </div>
      {didPlayerWin && <button onClick={restartGame}>Restart</button>}
    </>
  )
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const randomIdx = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[randomIdx]] = [arr[randomIdx], arr[i]]
  }

  return arr
}

export default App
