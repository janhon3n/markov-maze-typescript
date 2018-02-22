import Enviroment from './Enviroment'
import SimulationListener from './SimulationListener'
import Agent from './Agent'

class Simulation {
    private listeners: SimulationListener[]
    private enviroment: Enviroment
    private turnNumber: number = 0

    constructor(enviroment) {
        this.enviroment = enviroment
        this.listeners = []
        this.run = this.run.bind(this)
    }

    public addListener(listener: SimulationListener) {
        this.listeners.push(listener)
    }

    public run() {
        if (this.enviroment.goalStateReached()) {
            return
        }
        this.runTurnForAgent(
            this.enviroment.agents[
            this.turnNumber++ % this.enviroment.agents.length])
        this.listeners.forEach((listener) => {
            listener.update(this.enviroment.state)
        })
        setTimeout(this.run, 0)
    }

    private runTurnForAgent(agent: Agent) {
        let turnSuccessful = false // The agents must make a decision that is executed successfully
        while (!turnSuccessful) {
            try {
                this.enviroment.executeAction(
                    agent.makeDecision(),
                )
                turnSuccessful = true
            } catch (error) {
                console.log('Turn ' + this.turnNumber, error)
            }
        }
    }
}

export default Simulation
