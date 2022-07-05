import React, { Component } from 'react'

export default class Giay extends Component {

    render() {

        const { image, name, price, description } = this.props.item;

        return (
            <div className="card">
                <img className="card-img-top" src={image} alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{price}$</p>
                    <div className='mb-2'>{this.props.children}</div>
                    <button onClick={() => {
                        this.props.showDes(description)
                    }}
                        className='btn btn-info'>XEM MO TA</button>
                </div>
            </div>
        )
    }
}
