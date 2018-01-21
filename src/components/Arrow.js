import React, {Component} from 'react';

export default class Arrow extends Component {
    render() {
        return (
            <div className="arrowBox">
                <span className="arr arr-left" onClick={() => this.props.move(-1)}>&lt;</span>
                <span className="arr arr-right" onClick={() => this.props.move(1)}>&gt;</span>
            </div>
        );
    }
}
