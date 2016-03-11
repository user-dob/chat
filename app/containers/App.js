import React, { Component } from 'react'
import ChatHistory from './ChatHistory'
import OnlineUsers from './OnlineUsers'
import NewChats from './NewChats'


export default class App extends Component {

    render() {
        return (
            <div className="container">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <ChatHistory/>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <OnlineUsers/>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <NewChats/>
                </div>
            </div>
        )
    }

}

