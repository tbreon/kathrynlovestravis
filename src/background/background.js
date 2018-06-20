
import React, { Component } from 'react';
import './background.css';

class Background extends Component {
    render(){
        return(
            <img className="background" alt="" src={require('../img/background.jpg')} />
        );
    }
}

export default Background;
