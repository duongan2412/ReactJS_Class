import React, { Component } from 'react'

export default class ChildProps extends Component {

    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.movie.imgUrl} alt="..." />
                <div className="card-body">
                    <h4 className="card-title text-center">{this.props.movie.name}</h4>
                    <div>
                        <button onClick={() => { this.props.showName(this.props.movie.name) }}
                            className='btn btn-success'>Xem chi tiet</button>
                    </div>
                </div>
            </div>

        )
    }
}
