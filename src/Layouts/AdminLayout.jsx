import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default class AdminLayout extends Component {
    render() {
        return (
            <div className='d-flex'>
                <div className='bg-light w-25 vh100'>
                    <ul>
                        <li>
                            <NavLink to='/admin/user-management'>User management</NavLink>
                        </li>
                        <li>
                            <NavLink to='/admin/clothes-management'>Clothes management</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='bg-white w-75'>
                    <Outlet />
                </div>
            </div>
        )
    }
}
