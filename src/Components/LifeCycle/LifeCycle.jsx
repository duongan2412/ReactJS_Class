import React, { Component } from 'react'
import Child from './Child'

export default class LifeCycle extends Component {
    state = {
        number: 1,
        like: 0
    };

    constructor(props) {
        super(props);
        console.log("constructor parent");
    };

    static getDerivedStateFromProps(nextProps, currentState) {
        console.log("getDerivedStateFromProps parent");
        // if (true) {
        //     currentState.number = 10;
        // }
        return currentState;
    };


    render() {
        console.log("render parent");

        return (
            <div className='bg-warning w-75 text-center mx-auto p-5'>
                <h4>PARENT</h4>
                <div>
                    <button
                        onClick={() =>
                            this.setState({
                                number: this.state.number - 1,
                            })
                        }
                        className='btn btn-primary'>DECREASE</button>
                    <button
                        onClick={() =>
                            this.setState({
                                number: this.state.number + 1,
                            })
                        }
                        className='btn btn-success'>INCREASE</button>
                    <button
                        onClick={() =>
                            this.setState({
                                number: this.state.like + 1,
                            })
                        }
                        className='btn btn-danger'>LIKE</button>
                </div>
                <Child number={this.state.number}></Child>
            </div>
        );
    };

    componentDidMount() {
        // console.log("componentDidMount parent");
    };

}
