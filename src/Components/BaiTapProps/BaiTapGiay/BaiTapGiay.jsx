import React, { Component } from 'react';
import dsGiay from '../../../data/data_giay.json';
import Giay from './Giay';

export default class BaiTapGiay extends Component {
    colors = ["primary", "success", "danger"];

    xemMota = (mota) => {
        alert(mota);
    }
    renderShoesList = () => {
        return dsGiay.map(ele => {
            return (
                <div className="col-4" key={ele.name}>
                    <Giay item={ele} showDes={this.xemMota}>
                        {
                            this.colors.map((item, index) => {
                                return <span key={index} className={`badge badge-${item}`}>{item}</span>
                            })
                        }
                    </Giay>
                </div>
            );
        });
    }

    render() {
        return (
            <div className='row'>
                {this.renderShoesList()};
            </div>
        )
    }
}
