interface IAction {
  type: string,
  payload: any
}

interface IState {
  value: number
}

export const increment = (state: IState, action: IAction) => {
  state.value += action.payload
}

export const decrement = (state: IState, action: IAction) => {
  state.value -= action.payload
}

export const reset = (state: IState) => {
  state.value = 0
}