import actionTypes from "./roomsTypes";

export const initialState = {
  rooms: []
}

const roomsReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_ROOMS:
      return {
        ...state, rooms: action.payload
      }
    default:
      return state
  }
}

export default roomsReducer