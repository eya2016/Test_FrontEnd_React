import React from 'react'
import {FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const NavBar = ({onDeleteCompleted}) => (
    <>
    
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">ToDo List</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" exact={true}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/add-task" className="nav-link" exact={true}>Tache</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Login" className="nav-link" exact={true}>Connexion</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 
        <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter" />
          
    </>
)

export default NavBar