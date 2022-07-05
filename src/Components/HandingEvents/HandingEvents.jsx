import React, { Component } from 'react'

export default class HandingEvents extends Component {
    handleLogin = () => {
        alert("Wellcome Cyber Soft");
    }

    handleLogout = (name) => alert(`${name} đã đăng xuất.`);


    render() {
        return (
            <div>
                <h5>Handling Events</h5>
                {/* không có tham số */}
                <button onClick={this.handleLogin} className='btn btn-success'>Login</button>
                <button onClick={() => { alert("Welcome Login 2") }} className="btn btn-info">Login 2</button>
                {/* có dùng tham số */}
                <br />
                <button onClick={this.handleLogout.bind(this, "CyberSoft")} className="btn btn-warning">Logout</button>
                <button onClick={() => {
                    this.handleLogout("CyberSoft")
                    if (true) {
                        this.handleLogin();
                    }
                }}
                    className="btn btn-dark">Logout 2</button>
            </div>
        )
    }
}
