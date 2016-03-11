const WebSocketServer = require('ws').Server;
require('isomorphic-fetch');


function randomUser() {
    return fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(json => json.results[0].user)
}



const wss = new WebSocketServer({ host: '127.0.0.1', port: 5736 });

let users = new Map()

let chat = {

    login(user_id, ws) {

        randomUser().then(user => {
            user.id = user_id

            users.set(user_id, {ws, user})

            this.send(ws, {event: 'me', data: user})

            users.forEach((item, id) => {
                if(id !== user_id) {
                    this.send(item.ws, {event: 'new_user', data: user})
                }
            })
        })
    },

    logaut(id) {
        users.delete(id)
        this.emit('logaut', {id})
    },

    get_temp(message, ws) {
        return {
            name: 'name'
        }
    },

    get_users(message, ws) {
        let data = []
        users.forEach(item => {
            data.push(item.user)
        })

        return data
    },

    send(ws, data) {
        ws.send(JSON.stringify(data))
    },

    emit(event, data) {
        users.forEach((item, id) => {
            this.send(item.ws, {event: event, data})
        })
    }
}

let userCount = 0

wss.on('connection', ws => {

    const id = userCount++
    chat.login(id, ws)

    ws.on('message', message => {
        let json = JSON.parse(message)

        //let { token, event, data } = json
        let token = json.token
        let event = json.event
        let data = json.data

        if(chat[event]) {
            let res = chat[event](data, ws)
            chat.send(ws, {data: res, token})
        }
    })

    ws.on('close', function() {
        chat.logaut(id)
    });


})