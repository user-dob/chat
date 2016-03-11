import React, { Component, PropTypes } from 'react'


export default class ChatMessageMy extends Component {
    render() {

        const { message } = this.props

        const avatar = 'https://randomuser.me/api/portraits/thumb/men/72.jpg'
        const name = 'Justine Goliyad'

        return (
            <div>
                <div className="chat-box-right">{message}</div>
                <div className="chat-box-name-right">
                    <img src={avatar} className="img-circle" />
                        - {name}
                </div>
                <hr className="hr-clas" />
            </div>
        )
    }
}


ChatMessageMy.propTypes = {
    message: PropTypes.string.isRequired,
}







