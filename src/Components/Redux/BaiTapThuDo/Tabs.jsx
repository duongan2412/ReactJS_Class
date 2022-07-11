import React, { Component } from 'react';
import clothes from './../../../data/clothes.json';
import { connect } from 'react-redux';

class Tabs extends Component {
    renderTabs = () => {
        return clothes.navPills.map(ele => {
            return (
                <li onClick={() => { this.props.setSelectedType(ele.type) }} className="nav-item" key={ele.tabName}>
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

const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedType: (type) => {
            dispatch({
                type: "SET_SELECTED_TYPE",
                payload: type
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(Tabs)