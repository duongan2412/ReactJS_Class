import React, { Component } from 'react'

export default class State extends Component {
    state = {
        isShowMess: true,
    };

    handleHiddenMess = () => {
        const newState = {
            isShowMess: false,
        }
        this.setState(newState);
        // chờ xử lý bất đồng bộ của state *** quan trọng 
        this.setState(newState, () => {
            console.log(this.state.isShowMess);
        });
    }

    handledShowMess = () => {
        // const newState = {
        //     isShowMess: true,
        // }
        this.setState({
            isShowMess: true
        });
    }

    render() {
        return (
            <div>
                <h4>State</h4>
                <p className='cyberSoftBgClr'>Hello</p>
                <div>
                    <button onClick={this.handledShowMess} className="btn btn-warning">Show</button>
                    <button onClick={this.handleHiddenMess} className="btn btn-danger ml-2">Hidden</button>
                </div>
                {
                    this.state.isShowMess && (
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quasi nihil dignissimos a autem deleniti iure odit unde, neque aspernatur!
                        </p>
                    )
                }
            </div>
        )
    }
}
