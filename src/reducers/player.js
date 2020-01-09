import * as types from 'constants/actionTypes'

// State global
const initialState = {
    players: 0,
    playersInRoom: [],
    message:'here we go'
}

const players = (state = initialState, action) => {

    let newState = {}

    switch (action.type) {

        case types.ADD_PLAYER_TO_ROOM:
            newState = { ...state, message: action.message }
            return newState

        default:
            return state

    }

}

export default players