import React from 'react';
import Axios from 'axios';
import Navbar from './Navbar';
// import { Redirect } from 'react-router-dom';


export default class Edit extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            details: [],
            edit: '',
            flag: false

        }
    }

    componentDidMount() {
        let Id = this.props.match.params.id;
        Axios.get("https://reqres.in/api/users" + Id)
            .then(response => {
                console.log(response);
                this.setState({
                    details: response.data.data
                });
            })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        let Id = this.props.match.params.id;
        Axios.put("https://reqres.in/api/users/2" + Id)
            .then(result => {
                console.log(result);
                this.setState({
                    edit: result.data.updatedAt,
                    flag: true
                })
                .catch(error => console.log(error))
                console.log(this.state.edit);
                this.props.history.push(`/show/${this.state.details.id}`)
            })
    }


    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <Navbar />
                    <div>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" name="name" value={this.state.name} onChange={e => this.handleChange(e)} placeholder="Enter New Name" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" name="email" value={this.state.email} onChange={e => this.handleChange(e)} placeholder="Enter New Email" />
                        </div>
                        <button type="submit" className="btn btn-dark" onClick={e => this.handleClick(e)}>Edit</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}