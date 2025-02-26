import React, { Component } from 'react'

export default class UserClass extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }
  render() {
    console.log(this.props.userInfo);
    const {name, email, phone} = this.props.userInfo;
    return (
        <div className="userCard">
            <h2>Name: {name}</h2>
            <h3>Email: {email}</h3>
            <h3>Phone: {phone}</h3>
        </div>
    )
  }
}
