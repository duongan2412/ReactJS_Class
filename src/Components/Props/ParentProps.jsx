import React, { Component } from 'react'
import ChildProps from './ChildProps'

export default class ParentProps extends Component {
    imgUrl1 = "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/_/i/_i_n_tho_i_en_-_24.06.2022_2.jpg"
    imgUrl2 = "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/t/o/top_gun_maverick_-_poster_28.03_1__2.jpg"

    movie1 = {
        name: 'Em va Trinh',
        imgUrl: 'https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/_/i/_i_n_tho_i_en_-_24.06.2022_2.jpg'
    }

    movie2 = {
        name: 'The gioi khung long',
        imgUrl: 'https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/t/o/top_gun_maverick_-_poster_28.03_1__2.jpg'
    }
    movie3 = {
        name: 'Nguoi moi gioi',
        imgUrl: 'https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/b/r/broker_main-poster_1_.jpg'
    }

    showName = (name) => {
        alert(name)
    }

    render() {
        return (
            <div className='row w-75 mx-auto'>
                <div className='col-4'>
                    {/* <ChildProps imgUrl={this.imgUrl1} name="Em va Trinh"></ChildProps> */}
                    <ChildProps showName={this.showName} movie={this.movie1}></ChildProps>
                </div>
                <div className='col-4'>
                    {/* <ChildProps imgUrl={this.imgUrl2} name="The gioi khung long"></ChildProps> */}
                    <ChildProps showName={this.showName} movie={this.movie2}></ChildProps>
                </div>
                <div className='col-4'>
                    {/* <ChildProps imgUrl={this.imgUrl2} name="The gioi khung long"></ChildProps> */}
                    <ChildProps showName={this.showName} movie={this.movie3}></ChildProps>
                </div>
            </div>
        )
    }
}
