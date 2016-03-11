import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import OnlineUsersItem from '../components/OnlineUsersItem'
import { addOnlineUser, userOffline } from '../actions/onlineUsers'


class OnlineUsers extends Component {

    getUserList(users) {
        let data = []

        users.forEach(user => {
            data.push(<OnlineUsersItem key={user.id} id={user.id} name={user.username} avatar={user.picture.thumbnail} />)
        })

        return data
    }

    render() {
        const { users } = this.props

        return (
            <div className="chat-box-online-div">
                <div className="chat-box-online-head">ONLINE USERS ({users.size})</div>
                <div className="panel-body chat-box-online">
                    {this.getUserList(users)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.onlineUsers
    }
}

export default connect(
    mapStateToProps
)(OnlineUsers)