abstract class State {
   abstract copy(): State
   abstract equals(): Boolean
}

export default State
export class StateError extends Error {}