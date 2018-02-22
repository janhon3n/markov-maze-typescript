import * as sio from 'socket.io'
import SimulationListener from '../PlanningAlgorithm/SimulationListener'
import GameState from '../MarkovMaze/GameState'
import Stage, {StageData} from '../MarkovMaze/Stage'

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
        const stageData = stage.getStageData()
        this.stageCache = stageData
        this.io.sockets.emit('setStage', stageData)
    }

    public update(state: GameState) {
        this.stateCache = state
        this.io.sockets.emit('updateState', state)
    }
}

export default MarkovSocket
