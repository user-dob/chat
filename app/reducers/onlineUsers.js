import { ONLINE_USER_ADD, USER_OFFLINE } from '../constants/ActionTypes'
import { addOnlineUser } from '../actions/onlineUsers'
import { getSocket } from '../api/socket'

const socket = getSocket()

export default function onlineUsers(state = new Map(), action) {
    switch (action.type) {
        case ONLINE_USER_ADD:
            state.set(action.user.id, action.user)
            return new Map(state)

        case USER_OFFLINE:
            state.delete[action.id]
            return new Map(state)

        default:
            return state
    }
}

socket.on('new_user', (dispatch, data) => {
    dispatch(addOnlineUser(data))
})
