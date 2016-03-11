import Socket from './Socket'

let socket = new Socket('ws://127.0.0.1:5736')

export function getSocket() {
    return socket
}

export function socketMiddleware({ dispatch, getState }) {
    return next => action => {

        if(typeof action.ws === 'function') {
            action.ws(socket, dispatch, getState)
        } else {
            return next(action);
        }
    }
}