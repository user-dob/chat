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

        const count = 120

        return (
            <div className="chat-box-online-div">
                <div className="chat-box-online-head">ONLINE USERS ({count})</div>
                <div className="panel-body chat-box-online">
                    {this.getUserList(users)}
                </div>
                <button onClick={() => this.props.addOnlineUser({id: Math.random(), avatar: 'https://randomuser.me/api/portraits/thumb/men/77.jpg', name: 'Name'})} >addOnlineUser</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.onlineUsers
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addOnlineUser: (user) => {
            dispatch(addOnlineUser(user))
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OnlineUsers)