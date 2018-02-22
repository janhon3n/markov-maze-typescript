import io from 'socket.io'
import Stage from './MarkovMaze/Stage'
import GameState from './MarkovMaze/GameState'
import Simulation from './PlanningAlgorithm/Simulation'
import MarkovSocket from './Socket/MarkovSocket'
import Player from './MarkovMaze/Players/Player'
import RandomPlayer from './MarkovMaze/Players/RandomPlayer'
import StageLoader from './StageLoader'

const players = [new RandomPlayer(0), new Player(1)]
const stage = StageLoader.createStage('testStage', players)
const testSimulation = new Simulation(stage)

const socket = new MarkovSocket()
socket.setStage(stage)
testSimulation.addListener(socket)

testSimulation.run()
