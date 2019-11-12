import React from 'react';
import Axios from 'axios';
import Navbar from './Navbar';

export default class Show extends React.Component {
    constructor() {
        super();
        this.state = {
            details: []
        }
    }

    componentDidMount() {
        let Id = this.props.match.params.id;
        Axios.get("https://reqres.in/api/users/" + Id)
            .then(response => {
                console.log(response);
                this.setState({
                    details: response.data.data
                });
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <Navbar />
                    <div className="card text-center">
                        <h2 className="card-header">{this.state.details.id}. {this.state.details.first_name} {this.state.details.last_name}</h2>

                        <div className="card-body">
                            <img className="card-title" src={this.state.details.avatar} alt="..." style={{ height: 300, width: 300 }} />
                            <h5 className="card-text">{this.state.details.email}</h5>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}