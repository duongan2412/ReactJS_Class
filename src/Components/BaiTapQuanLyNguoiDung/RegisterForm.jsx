import React, { Component } from 'react'
import { connect } from 'react-redux/es/exports';

class RegisterForm extends Component {
    state = {
        values: {
            id: "",
            userName: "",
            fullName: "",
            email: "",
            password: "",
            phone: "",
            type: "Client",
        },
        error: {
            id: "",
            userName: "",
            fullName: "",
            email: "",
            password: "",
            phone: "",
            type: "",
        },
    };
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            value: {
                ...this.state.values,
                [name]: value,
            }
        }, () => {
            // console.log(this.state);
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();

        for (const key in this.state.error) {
            const message = this.state.error[key];
            if (message) {
                return;
            }
        }

        this.props.dispatch({
            type: "ADD_USER",
            payload: this.state.values,
        })
    }
    handerBlur = (e) => {
        const { name,
            title,
            minLength,
            maxLength,
            // validationMessage, 
            validity: { valueMissing, patternMismatch, tooLong, tooShort } } = e.target;
        // const { valueMissing } = validity;
        // console.log(`NAme: ${name}, validMess: ${validationMessage}`);

        let message = ""
        if (patternMismatch) {
            message = `${title} is invalid pattern.`
        }
        if (tooLong || tooShort) {
            message = `${title} must from ${minLength} to ${maxLength} character.`
        }
        if (valueMissing) {
            message = `${title} is required.`
        }
        this.setState({
            error: {
                ...this.state.error,
                [name]: message,
            }
        })
    }
    render() {
        return (
            <div className="card p-0">
                <div className="card-header bg-warning text-white font-weight-bold">
                    REGISTER FORM
                </div>
                <div className="card-body">
                    <form noValidate onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">

                                    <label>Username</label>
                                    <input type="text" className="form-control"
                                        name="userName"
                                        // onChange={(event) => {this.handleChange(event)}}
                                        // khi 2 tham số nhận vào giống nhau thì dùng rút gọn
                                        onChange={this.handleChange}
                                        onBlur={this.handerBlur}
                                        required
                                        title="User name"
                                    />
                                    {this.state.error.userName && <span className='text-danger'>{this.state.error.userName}</span>}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" className="form-control"
                                        name="fullName"
                                        minLength={4}
                                        maxLength={12}
                                        onChange={this.handleChange}
                                        onBlur={this.handerBlur}
                                        required
                                        title="Full name"
                                    />
                                    {this.state.error.fullName && <span className='text-danger'>{this.state.error.fullName}</span>}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="text" className="form-control"
                                        name="password"
                                        onChange={this.handleChange}
                                        onBlur={this.handerBlur}
                                        required
                                        title="Password"
                                    />
                                    {this.state.error.password && <span className='text-danger'>{this.state.error.password}</span>}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="text" className="form-control"
                                        name="phone"
                                        onChange={this.handleChange}
                                        onBlur={this.handerBlur}
                                        required
                                        title="Phone number"
                                    />
                                    {this.state.error.phone && <span className='text-danger'>{this.state.error.phone}</span>}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" className="form-control"
                                        name="email"
                                        pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$'
                                        onChange={this.handleChange}
                                        onBlur={this.handerBlur}
                                        required
                                        title="Email"
                                    />
                                    {this.state.error.email && <span className='text-danger'>{this.state.error.email}</span>}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Type</label>
                                    <select className="form-control"
                                        name="type"
                                        onChange={this.handleChange}
                                        onBlur={this.handerBlur}
                                        required
                                    >
                                        <option>Client</option>
                                        <option>Admin</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-warning mr-2">SAVE</button>
                        <button type="reset" className="btn btn-outline-dark">RESET</button>
                    </form>
                </div>
                {/* <div className="card-footer text-muted">
                    
                </div> */}
            </div>
        )
    }
}

export default connect()(RegisterForm);