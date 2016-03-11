import React, { Component, PropTypes } from 'react'


export default class OnlineUsersItem extends Component {

    onClickHandle(e) {
        e.preventDefault()
        console.log(this.props.id)
    }

    render() {

        const { avatar, name } = this.props

        return (
            <a href="#" onClick={e => this.onClickHandle(e)}>
                <div className="chat-box-online-left">
                    <img src={avatar} className="img-circle" />
                    <span className="username">- {name}</span>
                </div>
                <hr className="hr-clas-low" />
            </a>
        )
    }
}


OnlineUsersItem.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}









