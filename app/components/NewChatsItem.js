import React, { Component, PropTypes } from 'react'

export default class NewChatsItem extends Component {

    onClickHandle(e) {
        e.preventDefault()
        console.log(this.props.id)
    }

    render() {

        let { avatar, username } = this.props

        username = `(@${username})`

        return (
            <a href="#" onClick={e => this.onClickHandle(e)}>
                <img src={avatar} className="img-circle" />
                <span className="username">{username}</span>
                <hr className="hr-clas-low" />
            </a>
        )
    }
}


NewChatsItem.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
}






