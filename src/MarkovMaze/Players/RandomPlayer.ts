import Player from './Player'
import MoveAction from '../MoveAction'

class RandomPlayer extends Player {
    public name = 'Random player'

    public makeDecision(): MoveAction {
        const direction = MoveAction.directions[
            Math.floor(Math.random() * 4)]
        return new MoveAction(this, direction)
    }
}

export default RandomPlayer
