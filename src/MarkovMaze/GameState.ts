interface GameState {
    playerPositions: Position[]
    coinPositions: Position[]
}

export default GameState
export interface Position {
    row: number
    col: number
}
