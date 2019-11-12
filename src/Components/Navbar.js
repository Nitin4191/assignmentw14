import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        
    }


    render() {
        console.log(this.props.tokens);
        return (
            <BrowserRouter>
                <React.Fragment>
                    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
                        <Link className="navbar-brand nav-link active" to="/home">Home</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link">User Token:{this.props.tokens}</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </React.Fragment>
            </BrowserRouter>
        )
    }
}