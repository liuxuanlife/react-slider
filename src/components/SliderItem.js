import React, {Component} from 'react';

export default class SliderItem extends Component {
    render() {
        let style = {
            width: (this.props.images.length + 1) * 400 + 'px',
            left: this.props.index * -400 + 'px',
            transitionDuration: this.props.speed + 's'
        };
        return (
            <ul className="silders" ref={input=>this.props.setSliders(input)} style={style}>
                {
                    this.props.images.map((item, index) => (
                        <li key={index} className="slider">
                            <img src={item}/>
                        </li>
                    ))
                }
                <li key={this.props.images.length} className="slider">
                    <img src={this.props.images[0]}/>
                </li>
            </ul>
        );
    }
}
