import React, {Component} from 'react';
import './silder.css';
import SliderItem from './SliderItem';
import Arrow from './Arrow';
import Dots from './Dots';


export default class Silders extends Component {
    constructor() {
        super();
        this.state = {index: 0};
    }

    move = (step) => {
        let index = this.state.index + step;
        if (index > this.props.images.length) {
            this.sliders.style.transitionDuration = '0s';
            this.sliders.style.left = 0 + 'px';
            //寮鸿璁╂祻瑙堝櫒閲嶇粯
            getComputedStyle(this.sliders, null).left;
            index = 1;
            this.sliders.style.transitionDuration = this.props.speed + 's';
            return this.setState({index});
        }
        if (index < 0) {
            this.sliders.style.transitionDuration = '0s';
            this.sliders.style.left = (this.props.images.length * -300) + 'px';
            getComputedStyle(this.sliders, null).left;
            index = this.props.images.length - 1;
            this.sliders.style.transitionDuration = this.props.speed + 's';
            return this.setState({index});
        }
        this.setState({index});
    };

    setSliders = (sliders) => {
        this.sliders = sliders;
    };


    go = () => {
        this.timer = setInterval(() => this.move(1), this.props.delay * 1000);
    };

    componentDidMount() {
        if (this.props.autoPlay) return this.go();
    }

    render() {
        return (
            <div className="silderBox" onMouseOver={() => clearInterval(this.timer)} onMouseOut={() => this.go()}>
                <SliderItem
                    setSliders={this.setSliders}
                    index={this.state.index}
                    speed={this.props.speed}
                    images={this.props.images}
                />
                <Arrow move={this.move}/>
                <Dots
                    images={this.props.images}
                    index={this.state.index}
                    move={this.move}
                />
            </div>
        );
    }
}
