import React, { Component } from 'react';
import '../kathrynlovestravis.css';


class TheBrideAndGroom extends Component{ 
    render(){  
        return(
            <div className="thebrideandgroom">
                <h1>{this.props.thebrideandgroom[1].thebrideandgroom}</h1>
                <div className="container">
                 <div className="item"><h2>{this.props.thebrideandgroom[1].bride}</h2>
                <p><img src={require('../img/portrait_placeholder.jpg')} height="80px" width="80px" alt=""/>{this.props.thebrideandgroom[1].brideSummary}</p>
                </div>
                <div  className="item"><h2>{this.props.thebrideandgroom[1].groom}</h2><p><img src={require('../img/portrait_placeholder.jpg')} height="80px" width="80px" alt=""/>{this.props.thebrideandgroom[1].groomSummary}
                </p>
                </div>
                </div>
                <div className="container">
                <h2>HOW WE MET</h2>
                <div className="howWeMet">
                <p>{this.props.thebrideandgroom[1].howWeMet}</p>
                </div>
                </div>
                <div><img src={require('../img/Placeholder-Clipart-Icon.png')} height="100%" width="100%" alt=""/></div>
                <div className="container">
                <h2>THE ENGAGEMENT</h2>
                <div className="howWeMet">
                <p>{this.props.thebrideandgroom[1].theEngagement}</p>
                </div>
                </div>
             </div>
       )
    }
}

export default TheBrideAndGroom;