import React, { Component } from 'react'
import dsDienThoai from "./../../../../data/dataDT.json";
import DienThoai from './../DienThoai';

export default class DanhSachDienThoai extends Component {
    renderPhoneList = () => {
        return dsDienThoai.map((ele) => {
            return (
                <DienThoai
                    key={ele.maSP}
                    phone={ele}
                    selectPhone={this.props.selectPhone}
                    addToCard={this.props.addToCard}
                ></DienThoai>
            )
        })
    }
    render() {
        return (
            <div>
                <h4>PRODUCT LIST</h4>
                <div className="row">
                    {this.renderPhoneList()}
                </div>
            </div>
        )
    }
}
