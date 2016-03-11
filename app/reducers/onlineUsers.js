import { ONLINE_USER_ADD, USER_OFFLINE } from '../constants/ActionTypes'
import { addOnlineUser } from '../actions/onlineUsers'
import { getSocket } from '../api/socket'

const initState = new Map()
const socket = getSocket()

//initState.set(72, {
//    id: 72,
//    avatar: "https://randomuser.me/api/portraits/thumb/men/72.jpg",
//    username: "whiteswan373",
//    name: "Justine Goliyad"
//})


export default function onlineUsers(state = initState, action) {

    switch (action.type) {
        case ONLINE_USER_ADD:
            state.set(action.user.id, action.user)
            return state

        case USER_OFFLINE:
            state.delete[action.id]
            return state

        default:
            return state
    }
}

//socket.on('new_user', (dispatch, data) => {
//    dispatch(addOnlineUser(data))
//})
//
//
//
//
