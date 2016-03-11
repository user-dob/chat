import React, { Component } from 'react'
import { connect } from 'react-redux'
import OnlineUsersItem from '../components/OnlineUsersItem'
import { addOnlineUser } from '../actions/onlineUsers'


class OnlineUsers extends Component {

    getUserList(users) {
        let data = []

        users.forEach(user => {
            data.push(<OnlineUsersItem key={user.id} {...user} />)
        })

        return data
    }

    render() {

        const { users } = this.props

        const count = 120

        return (
            <div className="chat-box-online-div">
                <div className="chat-box-online-head">ONLINE USERS ({count})</div>
                <div className="panel-body chat-box-online">
                    {this.getUserList(users)}
                </div>
                <button onClick={() => this.props.addOnlineUser({id: 100, avatar: 'https://randomuser.me/api/portraits/thumb/men/77.jpg', name: 'Name'})} >addOnlineUser</button>
            </div>
        )
    }
}

function mapStateToProps(state) {

    console.log(state)

    return {
        users: state.onlineUsers
    }
}

export default connect(
    mapStateToProps,
    { addOnlineUser }
)(OnlineUsers)
