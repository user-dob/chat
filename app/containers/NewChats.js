import React, { Component } from 'react'
import NewChatsItem from '../components/NewChatsItem'


export default class NewChats extends Component {

    render() {

        let count = 4

        return (
            <div className="chat-box-new-div">
                <div className="chat-box-new-head">NEW CHATS ({count})</div>
                <div className="panel-body chat-box-new">
                    <NewChatsItem id={72} avatar="https://randomuser.me/api/portraits/thumb/men/72.jpg" username="whiteswan373" />
                    <NewChatsItem id={29} avatar="https://randomuser.me/api/portraits/thumb/women/29.jpg" username="organi571" />
                </div>
            </div>
        )
    }

}



