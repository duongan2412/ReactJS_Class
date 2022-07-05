import React, { Component } from 'react';
import clothes from './../../../data/clothes.json';

export default class Tabs extends Component {
    renderTabs = () => {
        return clothes.navPills.map(ele => {
            return (
                <li className="nav-item" key={ele.tabName}>
                    <a
                        className={`nav-link ${ele.active && "active"}`}
                        data-toggle="pill"
                        href={`#${ele.tabTopClothes}`}
                    >
                        {ele.showName}
                    </a>
                </li>
            )
        })
    }
    render() {
        return (
            <ul className="nav nav-pills">
                {this.renderTabs()}
            </ul>
        )
    }
}
