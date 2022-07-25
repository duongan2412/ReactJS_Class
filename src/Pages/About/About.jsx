import React, { Component } from 'react'
import { withRouter } from '../../HOC/withRouter'

class About extends Component {
    render() {
        // console.log(this.props.searchParams);
        return (
            <div>
                <p>Keyword: {this.props.searchParams.get('keyword')} </p>
                <p>User ID: {this.props.searchParams.get('userID')}</p>
                <p>Movie ID: {this.props.searchParams.get('movieID')} </p>
            </div>
        )
    }
}

export default withRouter(About)