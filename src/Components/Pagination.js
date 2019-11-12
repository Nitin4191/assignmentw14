import React from 'react';
import { Link } from 'react-router-dom';

export default class Pagination extends React.Component {
    render() {
        return (
            <div className="container">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </a>
                        </li>
                        <li className="page-item"><Link to={`/home/`}><a className="page-link" href="#">1</a></Link></li>
                        <li className="page-item"><Link to={`/home2/`}><a className="page-link" href="#">2</a></Link></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}