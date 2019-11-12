import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            history: '',
            tokens : ''
            
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onSubmitThis = (e) => {
        e.preventDefault();
        var fields = {
            "email": this.state.email,
            "password": this.state.password
        }
        
        axios.post("https://reqres.in/api/login", fields)
            .then((response) => {
                console.log("token is:" + response.data.token);
                this.setState({
                    tokens: response.data.token,
                });
                this.props.history.push('/home')
                console.log(this.state.tokens);
                
            })
    }
    render() {
        return (
            <div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" value={this.state.email} onChange={(e)=>this.handleInput(e)} name="email" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={this.state.password} onChange={(e)=>this.handleInput(e)} name="password" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e)=>this.onSubmitThis(e)}>Submit</button>
                
            </div>
           
        );
    }
}