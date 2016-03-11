import React, { Component } from 'react'
import ChatMessageMy from '../components/ChatMessageMy'
import ChatMessageUser from '../components/ChatMessageUser'

export default class ChatHistory extends Component {

    render() {
        return (
            <div className="chat-box-div">
                <div className="chat-box-head">GROUP CHAT HISTORY</div>
                <div className="panel-body chat-box-main">
                    <ChatMessageMy message="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                    <ChatMessageUser avatar="https://randomuser.me/api/portraits/thumb/men/29.jpg" name="whiteswan373"  message="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                    <ChatMessageMy message="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                    <ChatMessageUser avatar="https://randomuser.me/api/portraits/thumb/men/29.jpg" name="whiteswan373"  message="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                    <ChatMessageUser avatar="https://randomuser.me/api/portraits/thumb/women/29.jpg" name="whiteswan373"  message="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                </div>
                <div className="chat-box-footer">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Enter Text Here..." />
                        <span className="input-group-btn">
                            <button className="btn btn-info" type="button">SEND</button>
                        </span>
                    </div>
                </div>
            </div>
        )
    }

}


