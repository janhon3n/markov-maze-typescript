import State from './State'

abstract class SimulationListener {
   abstract update(state: State)
}

export default SimulationListener