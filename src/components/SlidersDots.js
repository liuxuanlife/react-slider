import React,{Component} from 'react';
export default class SlidersDots extends Component{
    render(){
        return (
            <div className="SlidersDots">
                {
                    this.props.imgsArr.map((item,index)=>(
                        <span key={index}></span>
                    ))
                }

            </div>
        )
    }
}