import React, { Component } from 'react';
import dsDienThoai from "./../../../data/dataDT.json";
import ChiTietSanPham from './ChiTietSanPham/ChiTietSanPham';
// import DienThoai from './DienThoai';
import GioHang from './GioHang/GioHang';
import DanhSachDienThoai from './DanhSachDienThoai/DanhSachDienThoai';

export default class BaiTapDienThoai extends Component {
    state = {
        selectPhone: dsDienThoai[0],
        cartList: [],
    }

    selectPhone = (phone) => {
        this.setState({
            selectPhone: phone,
        })
    }

    addToCard = (phone) => {
        // this.state.cartList.push(phone);
        const data = [...this.state.cartList];

        const idx = data.findIndex(ele => ele.maSP === phone.maSP);

        if (idx !== -1) {
            data[idx].soLuong += 1;
        } else {
            data.push({ ...phone, soLuong: 1 });
        }

        this.setState({
            cartList: data,
        }, () => {
            // console.log(this.state.cartList);
        })
        // console.log(phone);
    }

    handleQuantity = (phone, isIncrease) => {
        const data = [...this.state.cartList];
        const idx = data.findIndex(ele => ele.maSP === phone.maSP);

        // if (idx === -1) {
        //     alert("Không tìm thấy sản phẩm");
        //     throw new Error("Không tìm thấy sản phẩm");
        // }

        if (isIncrease) {
            data[idx].soLuong += 1;
        } else if (data[idx].soLuong > 1) {
            data[idx].soLuong -= 1;
        } else if (window.confirm("Bạn có muốn xóa ko?")) {
            data.splice(idx, 1);
        }

        // console.log(phone);
        // console.log(isIncrease);
        this.setState({
            cartList: data,
        })
    }

    render() {
        return (
            <div className="container">
                <GioHang
                    handleQuantity={this.handleQuantity}
                    cartList={this.state.cartList}
                ></GioHang>

                <DanhSachDienThoai
                    selectPhone={this.selectPhone}
                    addToCard={this.addToCard}
                ></DanhSachDienThoai>

                <ChiTietSanPham
                    selectedPhone={this.state.selectPhone}
                ></ChiTietSanPham>
            </div >
        )
    }
}
