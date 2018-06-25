import React, { Component } from 'react';
import '../kathrynlovestravis.css';


class SaveTheDate extends Component{
    render(){
        return(
            <div className="introtext">
                <span className="kathryn">{this.props.savethedate[0].bride}</span><span className="amp">&amp;</span><span className="travis">{this.props.savethedate[0].groom}</span>         
            <div className="date">{this.props.savethedate[0].month} {this.props.savethedate[0].day}<sup>th</sup> {this.props.savethedate[0].year}
                </div>
            </div>
       )
    }
}

export default SaveTheDate;