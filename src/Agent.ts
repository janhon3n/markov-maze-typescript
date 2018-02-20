import Enviroment from './Enviroment'
import Action from './Action'

class Agent {
   enviroment: Enviroment
   actions: Action[]
   constructor(enviroment: Enviroment){
      this.enviroment = enviroment
   }
}

export default Agent