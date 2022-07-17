import React, { Component } from 'react'
import { connect } from 'react-redux';


class UserManagement extends Component {
    state = {
        keyword: "",
        selectedType: "All",
    }
    renderUserList = () => {
        // const { userName, fullName, email, password, phone, type } = this.props.selectedUSer || {};
        let data = this.props.userList.filter(ele => {
            return ele.fullName.toLowerCase().trim().indexOf(this.state.keyword.toLowerCase().trim()) !== - 1
        })

        if (this.state.selectedType !== "All") {
            data = data.filter(ele => ele.type === this.state.selectedType)
        }

        return data.map((ele, idx) => {
            const { id, userName, fullName, email, phone, type } = ele;
            return (
                <tr key={id} className={`${idx % 2 === 0 && 'bg-light'}`}>
                    <td>{idx + 1}</td>
                    <td>{userName}</td>
                    <td>{fullName}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>{type}</td>
                    <td>
                        <button onClick={() => this.props.dispatch({
                            type: "SET_SELECTED_USER",
                            payload: ele
                        })}
                            className="btn btn-info mr-2">EDIT</button>
                        <button onClick={() => this.props.dispatch({
                            type: "DELETE_USER",
                            payload: ele.id
                        })} className="btn btn-danger">DELETE</button>
                    </td>
                </tr>
            )
        })
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="card p-0 mt-3">
                <div className="card-header font-weight-bold">USER MANAGEMENT</div>
                <div className="row mt-4 px-3 ">
                    <div className="col-4">
                        <div className="form-group mb-0">
                            <input
                                type="text"
                                placeholder="Search by full name..."
                                className="form-control"
                                onChange={this.handleChange}
                                name="keyword"
                            />
                        </div>
                    </div>
                    <div className="col-3 ml-auto">
                        <div className="form-group mb-0">
                            <select className="form-control"
                                onChange={this.handleChange}
                                name="selectedType"
                            >
                                <option>All</option>
                                <option>Client</option>
                                <option>Admin</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Username</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Type</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderUserList()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state.userReducer,
    }
};
export default connect(mapStateToProps)(UserManagement);