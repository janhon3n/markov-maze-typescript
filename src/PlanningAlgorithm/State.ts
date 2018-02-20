abstract class State {
   public abstract copy(): State
   public abstract equals(state: State): boolean
}

export default State
export class StateError extends Error {}
