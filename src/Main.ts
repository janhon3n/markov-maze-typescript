import io from 'socket.io'
import Stage from './MarkovMaze/Stage'
import GameState from './MarkovMaze/GameState'
import Simulation from './PlanningAlgorithm/Simulation'
import MarkovSocket from './Socket/MarkovSocket'
import Player from './MarkovMaze/Player'

const initialState = new GameState()
initialState.playerPositions.push([1, 5])
initialState.coinPositions.push([5, 2], [6, 1])
const testStage = new Stage([10, 10], initialState)
testStage.agents.push(new Player(testStage))
const testSimulation = new Simulation(testStage)

const socket = new MarkovSocket()
socket.setStage(testStage)
testSimulation.addListener(socket)

testSimulation.run()
