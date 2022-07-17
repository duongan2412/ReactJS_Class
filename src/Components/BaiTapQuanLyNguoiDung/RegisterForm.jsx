import React, { Component } from 'react'
import { createRef } from 'react';
import { connect } from 'react-redux/es/exports';
import { addUserAction, updateUserAction } from '../../Store/Actions/user';

const DEFAULT_VALUES = {
    id: "",
    userName: "",
    fullName: "",
    email: "",
    password: "",
    phone: "",
    type: "Client",
}

class RegisterForm extends Component {
    state = {
        values: DEFAULT_VALUES,
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

    formRef = createRef();

    static getDerivedStateFromProps(nextProps, currentState) {
        // console.log({
        //     nextProps,
        //     currentState
        // });

        if (nextProps.selectedUSer && currentState.values.id !== nextProps.selectedUSer.id) {
            currentState.values = nextProps.selectedUSer;
        }
        return currentState
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            values: {
                ...this.state.values,
                [name]: value,
            }
        }, () => {
            // console.log(this.state);
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target.checkValidity());
        // for (const key in this.state.error) {
        //     const message = this.state.error[key];
        //     if (message) {
        //         return;
        //     }
        // }
        if (!e.target.checkValidity()) {
            return;
        }

        // if (this.props.selectedUSer) {
        //     this.props.dispatch({
        //         type: 'UPDATE_USER',
        //         payload: this.state.values
        //     })
        // } else {
        //     this.props.dispatch({
        //         type: "ADD_USER",
        //         payload: this.state.values,
        //     })
        // }

        // this.props.dispatch({
        //     type: this.props.selectedUSer ? 'UPDATE_USER' : 'ADD_USER',
        //     payload: this.state.values
        // })

        // if (this.props.selectedUSer) {
        //     this.props.dispatch(updateUserAction(this.state.values))
        // } else {
        //     this.props.dispatch(addUserAction(this.state.values))
        // }

        this.props.selectedUSer ? this.props.dispatch(updateUserAction(this.state.values)) : this.props.dispatch(addUserAction(this.state.values))

        this.setState({
            values: DEFAULT_VALUES,
        }, () => {
            // force render component render lai 1 lan nua
            this.forceUpdate()
        });
    }

    handlerBlur = (e) => {
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
        const { userName, fullName, email, password, phone, type } = this.state.values || {};
        return (
            <div className="card p-0">
                <div className="card-header bg-warning text-white font-weight-bold">
                    REGISTER FORM
                </div>
                <div className="card-body">
                    <form ref={this.formRef} noValidate onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">

                                    <label>Username</label>
                                    <input type="text" className="form-control"
                                        name="userName"
                                        // onChange={(event) => {this.handleChange(event)}}
                                        // khi 2 tham số nhận vào giống nhau thì dùng rút gọn
                                        onChange={this.handleChange}
                                        onBlur={this.handlerBlur}
                                        required
                                        title="User name"
                                        value={userName}
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
                                        onBlur={this.handlerBlur}
                                        required
                                        title="Full name"
                                        value={fullName}
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
                                        onBlur={this.handlerBlur}
                                        required
                                        title="Password"
                                        value={password}
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
                                        onBlur={this.handlerBlur}
                                        required
                                        title="Phone number"
                                        value={phone}
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
                                        onBlur={this.handlerBlur}
                                        required
                                        title="Email"
                                        value={email}
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
                                        onBlur={this.handleBlur}
                                        required
                                        value={type}
                                    >
                                        <option>Client</option>
                                        <option>Admin</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button disabled={!this.formRef.current?.checkValidity()} type="submit" className="btn btn-warning mr-2">SAVE</button>
                        <button type="reset" className="btn btn-outline-dark">RESET</button>
                    </form>
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

export default connect(mapStateToProps)(RegisterForm);