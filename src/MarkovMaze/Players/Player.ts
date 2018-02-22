import Agent from '../../PlanningAlgorithm/Agent'
import Action from '../../PlanningAlgorithm/Action'

class Player extends Agent {
    public points = 0
    public name = 'Idle player'

    public makeDecision(): Action {
        return new Action(this)
    }
}

export default Player
