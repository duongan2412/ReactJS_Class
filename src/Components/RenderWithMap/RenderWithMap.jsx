import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    carList = [
        { id: 1, name: "Black", price: 1000, imgUrl: "./img/products/black-car.jpg" },
        { id: 2, name: "Steel", price: 2000, imgUrl: "./img/products/steel-car.jpg" },
        { id: 3, name: "Silver", price: 3000, imgUrl: "./img/products/silver-car.jpg" },
        { id: 4, name: "Red", price: 4000, imgUrl: "./img/products/red-car.jpg" }
    ]

    renderCarList = () => {
        const content = this.carList.map(ele => {
            return (
                <tr key={ele.id}>
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.price}</td>
                    <td>
                        <img width={70} src={ele.imgUrl} alt="img" />
                    </td>
                </tr>
            );
        });
        return content;
    }

    render() {
        return (
            <div>
                <h4>RenderWithMap</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderCarList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
