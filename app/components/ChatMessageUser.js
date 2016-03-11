import React, { Component, PropTypes } from 'react'


export default class ChatMessageUser extends Component {
    render() {

        const { message, avatar, name } = this.props

        return (
            <div>
                <div className="chat-box-left">{message}</div>
                <div className="chat-box-name-left">
                    <img src={avatar} className="img-circle" />
                    - {name}
                </div>
                <hr className="hr-clas" />
            </div>
        )
    }
}


ChatMessageUser.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}








