import channels from '../enums/channels'

const initialState = {
  channels,
}

export const reducer = (state = initialState, action) => {
  if (action.type == 'add') {
    return action.payload;
  }

  return state
}
