import Enviroment from './Enviroment'
import Action from './Action'
import State from './State'

abstract class Agent {
   name: String = 'Abstract agent'
   enviroment: Enviroment
   actions: Action[]
   constructor(enviroment: Enviroment){
      this.enviroment = enviroment
   }

   abstract makeDecision(state: State): Action
}

export default Agent