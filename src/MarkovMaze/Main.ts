import Stage from './Stage'
import GameState from './GameState'
import Simulation from '../PlanningAlgorithm/Simulation'

const initialState = new GameState()
initialState.playerPositions.push([1, 5])
initialState.coinPositions.push([5, 2], [6, 1])
const testStage = new Stage([10, 10], initialState)
const testSimulation = new Simulation(testStage)
testSimulation.run()
