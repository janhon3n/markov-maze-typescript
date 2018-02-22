import * as sio from 'socket.io'
import SimulationListener from '../PlanningAlgorithm/SimulationListener'
import GameState from '../MarkovMaze/GameState'
import Stage from '../MarkovMaze/Stage'

class MarkovSocket extends SimulationListener {
    private io: any
    private stageCache: object
    private stateCache: object

    constructor() {
        super()
        this.io = sio(3010)
        this.io.on('connection', (socket) => {
            socket.emit('setStage', this.stageCache)
            socket.emit('updateState', this.stateCache)
            console.log('New connection')
        })
    }

    public setStage(stage: Stage) {
        const stageObject = {
            cols: stage.dimensions[1],
            rows: stage.dimensions[0],
            walls: stage.wallPositions.map((wallPos) => {
                return { row: wallPos[0], col: wallPos[1] }
            }),
        }
        this.stageCache = stageObject
        this.io.sockets.emit('setStage', stageObject)
    }

    public update(state: GameState) {
        const stateObject = {
            coins: state.coinPositions.map((pos) => {
                return { row: pos[0], col: pos[1] }
            }),
            players: state.playerPositions.map((pos) => {
                return { row: pos[0], col: pos[1] }
            }),
        }
        this.stateCache = stateObject
        this.io.sockets.emit('updateState', stateObject)
    }
}

export default MarkovSocket
