import { assoc } from 'ramda'
import { START_EXPERIMENT } from '../constants'

const initialState = { };

export default function experiments(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case START_EXPERIMENT:
      return { signUpCopyChange: 'variation' }
    default:
      return state
  }
}