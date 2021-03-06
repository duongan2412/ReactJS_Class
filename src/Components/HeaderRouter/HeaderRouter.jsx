import React, { Component } from 'react';
import { createRef } from 'react';
import { createSearchParams, NavLink } from 'react-router-dom';
import { withRouter } from '../../HOC/withRouter';


class HeaderRouter extends Component {
    inputRef = createRef();

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        {/* <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li> */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/movies-detail/1314">Movies Detail</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/hooks">Hooks</NavLink>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <a className="dropdown-item" href="#">Action 1</a>
                                <a className="dropdown-item" href="#">Action 2</a>
                            </div>
                        </li> */}
                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                    <div className='d-flex'>
                        <div className="form-group mb-0">
                            <input ref={this.inputRef} type="text" className='form-control' />
                        </div>
                        <button onClick={() => {
                            const value = this.inputRef.current.value;
                            this.props.navigate({
                                pathname: '/about',
                                search: `?${createSearchParams({
                                    keyword: value,
                                    userID: 1,
                                    movieID: 2
                                })}`
                            })
                        }}
                            className="btn btn-warning">Search</button>
                    </div>
                </div>
            </nav >
        )
    }
}

export default withRouter(HeaderRouter)