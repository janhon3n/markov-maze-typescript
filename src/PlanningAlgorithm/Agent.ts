import Enviroment from './Enviroment'
import Action from './Action'
import State from './State'

abstract class Agent {
    public name: string = 'Abstract agent'
    public enviroment: Enviroment
    public actions: Action[]
    constructor(enviroment: Enviroment) {
        this.enviroment = enviroment
    }

    public abstract makeDecision(): Action
}

export default Agent
