import Stage from './MarkovMaze/Stage'
import GameState from './MarkovMaze/GameState'
import Player from './MarkovMaze/Players/Player'
import * as fs from 'fs'

const stagesFolder = './stages/'

class StageLoader {
    public static getStages(): string[] {
        return fs.readdirSync(stagesFolder)
    }

    public static createStage(stageName: string, players: Player[]): Stage {
        const res = fs.readFileSync(stagesFolder + stageName + '.json')
        const data = JSON.parse(res.toString())
        const initialState = Object.assign({},
            { playerPositions: data.playerPositions },
            { coinPositions: data.coinPositions })
        const stageData = Object.assign({},
            { wallPositions: data.wallPositions },
            { dimensions: data.dimensions })
        console.log(initialState, stageData)
        return new Stage(initialState, players, stageData)
    }
}

export default StageLoader
