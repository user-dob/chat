export default class Socket {

    constructor(url) {
        let ws = new WebSocket(url)

        this.ws = ws
        this.sends = new Map()
        this.events = new Map()
        this.waits = []

        ws.onmessage = (event) => {
            this.onMessage(JSON.parse(event.data))
        }

        ws.onopen = () => {
            this.waits.forEach(resolve => resolve())
        }
    }

    setDispatch(dispatch) {
        this.dispatch = dispatch
    }

    on(name, cb) {
        let events = this.events

        if(events.has(name)) {
            events.get(name).push(cb)
        } else {
            events.set(name, [cb])
        }
    }

    fetch() {
        let { ws, waits } = this

        if(ws.readyState === WebSocket.OPEN) {
            return Promise.resolve()
        }

        return new Promise((resolve, reject) => {
            waits.push(resolve)
        })
    }

    send(event, data = {}) {

        let { ws, sends } = this

        return this.fetch().then(() => {
            let token = Math.random()

            if(typeof event === 'string') {
                data = {token, event, data}
            } else {
                data.token = token
            }

            return new Promise((resolve, reject) => {
                ws.send(JSON.stringify(data))
                sends.set(token, resolve)
            })
        })
    }


    onMessage(json) {
        let { sends, events } = this
        let { token, event, data } = json

        if(token && sends.has(token)) {
            sends.get(token)(data)
            sends.delete(token)
        }

        if(event && events.has(event)) {
            events.get(event).forEach(cb => cb(this.dispatch, data))
        }
    }



}

