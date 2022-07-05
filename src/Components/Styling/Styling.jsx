import React, { Component } from 'react'
// Cach 1
// import "./style.css"
// Cach 2
import style from "./style.module.css";
// Cach 3
// tao truc tiep trong the
// 3 cách 
// style sheets => tao 1 file style.css thông thường

// Tạo dưới dạn module => tạo 1 file css [ten].module.css

export default class Styling extends Component {
    state = {
        fontSize: 50,
    };

    handleFontInc = () => {
        const newState = {
            fontSize: this.state.fontSize + 10,
        }
        this.setState(newState)
    }

    handleFontDec = () => {
        this.setState({
            fontSize: this.state.fontSize - 10,
        })
    }

    render() {
        return (
            <div>
                <h4 className='cyberSoftBgClr'>Styling</h4>

                {/* <p className={style.cyberSoftClr}>Module</p> */}
                <p className={`${style.cyberSoftClr} ${style["cyber-color"]}`}>Module</p>

                <div className='mb-2'>
                    <button onClick={this.handleFontInc} className='btn btn-warning'>Increase</button>
                    <button onClick={this.handleFontDec} className='btn btn-danger'>Decrease</button>
                </div>

                <p style={{ background: "blue", fontSize: this.state.fontSize }}>Inline </p>
            </div >
        )
    }
}
