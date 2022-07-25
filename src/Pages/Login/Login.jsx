import React, { Component } from 'react'
import { withRouter } from '../../HOC/withRouter';
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { GlobalContext } from '../../Contexts/GlobalContext';
// class Login extends Component {
//     handleLogin = () => {
//         const username = "admin";
//         const password = "admin";

//         if (username === "admin" && password === "admin") {
//             // navigate sang home
//             this.props.navigate('/home')
//         }
//     };
//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleLogin} className='btn btn-primary'>Login</button>
//             </div>
//         )
//     }
// }


// export default withRouter(Login)

const Login = () => {
    const navigate = useNavigate();

    const [globalState, setGlobalState] = useContext(GlobalContext);

    const handleLogin = () => {
        const username = "admin";
        const password = "admin";

        if (username === "admin" && password === "admin") {
            setGlobalState({
                isLogin: true
            })
            // navigate sang home
            navigate('/home')
        }
    };

    return (
        <div>
            <button onClick={handleLogin} className='btn btn-primary'>Login</button>
        </div>
    )
}

export default Login