import Enviroment from './Enviroment'
import SimulationListener from './SimulationListener'
import Agent from './Agent'

class Simulation {
   listeners: SimulationListener[]
   enviroment: Enviroment
   turnNumber: number = 0
   constructor(enviroment) {
      this.enviroment = enviroment
   }

   addListener(listener: SimulationListener){
      this.listeners.push(listener)
   }

   run() {
      while(!this.enviroment.goalStateReached()){
         this.runTurnForAgent(
            this.enviroment.agents[
               this.turnNumber++ % this.enviroment.agents.length
            ])
      }
   }

   runTurnForAgent(agent: Agent) {
      let turnSuccessful = false // The agents must make a decision that is executed successfully
      while(!turnSuccessful) {
         try {
            this.enviroment.executeAction(
               agent.makeDecision(this.enviroment.state)
            )
            turnSuccessful = true
         } catch(error) {
            console.log("Turn "+this.turnNumber, error)
         }
      }
   }
}