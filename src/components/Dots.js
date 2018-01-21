import React, {Component} from 'react';

export default class Dots extends Component {
    render() {
        return (
            <div className="dots">

                {
                    this.props.images.map((item, index) => (
                        <span onClick={() => this.props.move(index - this.props.index)} key={index}
                              className={(index === this.props.index || this.props.index === this.props.images.length && index === 0) ? 'active' : ''}>
                        </span>
                    ))
                }
            </div>
        );
    }
}
