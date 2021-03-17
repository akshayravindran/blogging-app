import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Header.css'

interface Props {
    title: string
}

export const Header: React.FC<Props> = ({ title }) => {
    const history = useHistory()

    useEffect(() => {
        let link
        if (JSON.parse(localStorage.getItem('blogAppToken') as string) === null) {
            link = document.getElementById('postsLink')
            if (link) link.style.display = "none"
            link = document.getElementById('albumsLink')
            if (link) link.style.display = "none"
            link = document.getElementById('logoutLink')
            if (link) link.style.display = "none"
        }
        else {
            link = document.getElementById('postsLink')
            if (link) link.style.display = "block"
            link = document.getElementById('albumsLink')
            if (link) link.style.display = "block"
            link = document.getElementById('logoutLink')
            if (link) link.style.display = "block"
        }
    }, [])

    const LogoutHandler = () => {
        localStorage.setItem('blogAppToken', JSON.stringify(null))
        let link = document.getElementById('postsLink')
        if (link) link.style.display = "none"
        link = document.getElementById('albumsLink')
        if (link) link.style.display = "none"
        link = document.getElementById('logoutLink')
        if (link) link.style.display = "none"
        history.push("/")
    }

    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark myheader" id="mainheader">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-card-heading mx-3" viewBox="0 0 16 16">
                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                        <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z" />
                    </svg>
                    {title}
                </Link>
                <button id="togglerBtn" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mr-auto">
                        <li className="nav-item">
                            <Link id="postsLink" to="/posts" className="nav-link headerLinks">Posts</Link>
                        </li>
                        <li className="nav-item">
                            <Link id="albumsLink" to="/albums" className="nav-link headerLinks">Albums</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0 ml-auto">
                        <li className="nav-item">
                            <Link id="logoutLink" to="/" className="nav-link headerLinks" data-bs-toggle="modal" data-bs-target="#logoutModal">
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="modal fade" id="logoutModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="logoutModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="logoutModalLabel">Logout</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to logout?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={LogoutHandler}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}