import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        axios
            .get("https://reqres.in/api/users?page=1")
            .then(res => {
                console.log(res.data.data);

                this.setState({
                    posts: res.data.data,
                });
            })
            .catch(error => console.log(error));
    }

    render() {
        let postUsers = this.state.posts.map(e => {
            return (
                <tr>
                    <td><Link to={`/show/${e.id}`}><button className="btn btn-link">{e.id}</button></Link></td>
                    <td>{e.first_name}</td>
                    <td>{e.last_name}</td>
                    <td>{e.email}</td>
                    <img src={e.avatar} alt="..." />
                    <td><Link to={`/edit/${e.id}`}><button className="btn btn-danger">Edit</button></Link></td>
                    <td><Link to={`/delete/${e.id}`}><button className="btn btn-dark">Delete</button></Link></td>
                </tr>
            );
        })
        
        return (
            <React.Fragment>
                <div className="container">
                    <Navbar />
                    <div className="row">
                        <h1 className="text-white d-4">List of Users</h1>
                    </div>
                    <div className="row">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Avatar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {postUsers}
                            </tbody>
                        </table>
                    </div>
                    <Pagination />
                </div>
            </React.Fragment>

        );
    }
}