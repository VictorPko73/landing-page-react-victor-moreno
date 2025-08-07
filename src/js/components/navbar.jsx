import React from "react";

const Navbar = ({title, element1, element2, element3, element4}) => (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">{title || "Title"}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">{element1 || "Elemento1"}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{element2 || "Elemento2"}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{element3 || "Elemento3"} </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{element4|| "Elemento4"}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );




export default Navbar;