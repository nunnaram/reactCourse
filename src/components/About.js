import React, { Component } from "react";
import UserClass from "./UserClass";

export default class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo:[{}]
        }
    }
    async componentDidMount() {
        
        // const response = await fetch('https://api.github.com/users/nunnaram');
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await response.json();
        
        console.log(json);
        this.setState({userInfo: json});
       
    }
    render() {
        const userDetials = this.state.userInfo;
        console.log(userDetials);
    return (
        <div>
            <h1>About</h1>
            <h2>About Page</h2>
            {userDetials.map((user) => <UserClass id={user.id}   userInfo={user} /> )}
        </div>
    )
  }
}
