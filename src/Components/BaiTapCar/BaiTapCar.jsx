import React, { Component } from 'react'

export default class BaiTapCar extends Component {
    state = {
        imgUrl: "./img/products/black-car.jpg",
    }

    handleChangeClr = (clr) => {
        this.setState({
            imgUrl: `./img/products/${clr}-car.jpg`,
        })
    }
    render() {
        return (
            <div>
                <h4 className='text-center'>Bài Tập Car</h4>
                <div className="row">
                    <div className="col-7">
                        <img className='img-fluid' src={this.state.imgUrl} alt="black_car" />
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-header">Color</div>
                            <div className="card-body">
                                <div onClick={() => { this.handleChangeClr("black") }}>
                                    <img width={70} src="./img/icons/icon-black.jpg" alt="black_icon" />
                                    <span>BLACK</span>
                                </div>
                                <div onClick={() => { this.handleChangeClr("steel") }}>
                                    <img width={70} src="./img/icons/icon-steel.jpg" alt="black_icon" />
                                    <span>STEEL</span>
                                </div>
                                <div onClick={() => { this.handleChangeClr("silver") }}>
                                    <img width={70} src="./img/icons/icon-silver.jpg" alt="black_icon" />
                                    <span>SILVER</span>
                                </div>
                                <div onClick={() => { this.handleChangeClr("red") }}>
                                    <img width={70} src="./img/icons/icon-red.jpg" alt="black_icon" />
                                    <span>RED</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
