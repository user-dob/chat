import { ONLINE_USER_ADD, USER_OFFLINE } from '../constants/ActionTypes'

export function addOnlineUser(user) {
    return {type: ONLINE_USER_ADD, user}
}

export function userOffline(id) {
    return {type: USER_OFFLINE, id}
}

export function getUsers() {
    return {
        ws: (socket, dispatch) => {
            socket.send('get_users').then(data => {
                data.forEach(user => dispatch(addOnlineUser(user)))
            })
        }
    }
}
