import Enviroment from './Enviroment'
import Action from './Action'

abstract class Agent {
    public name: string = 'Abstract agent'
    public enviroment: Enviroment
    public actions: Action[]
    public index: number

    constructor(index: number) {
        this.index = index
    }

    public abstract makeDecision(): Action
}

export default Agent
