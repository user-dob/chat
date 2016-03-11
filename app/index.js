import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../dist/css/style.css'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import App from './containers/App'
import { addOnlineUser, getUsers } from './actions/onlineUsers'
import { getSocket, socketMiddleware } from './api/socket'

const socket = getSocket()

const middleware = [
    socketMiddleware
]

//const store = createStore(
//    reducers,
//    applyMiddleware(...middleware)
//)

const store = createStore(reducers)


socket.setDispatch(store.dispatch)

//store.dispatch(getUsers())

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)




