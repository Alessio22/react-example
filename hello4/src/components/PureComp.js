import React, { Component } from 'react'

class PureComp extends Component {
    render() {
        console.log("render PureComp");
        return (
            <div>
                PureComponent: {this.props.count}
            </div>
        )
    }
}

export default React.memo(PureComp)
