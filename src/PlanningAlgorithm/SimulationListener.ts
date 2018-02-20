import State from './State'

abstract class SimulationListener {
    public abstract update(state: State)
}

export default SimulationListener
