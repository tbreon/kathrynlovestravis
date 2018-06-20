import React, { Component } from 'react';
import '../kathrynlovestravis.css';


class Wedding extends Component{
    render(){
        return(
            <div className="thebrideandgroom">
                <h1>Wedding</h1>
                <div className="container">
                 <div className="item"><h2>CEREMONY</h2>
                 <p>North Ridge Pavilion<br/>Coralville, Iowa</p>
                 <p>Friday, June 14, 2019<br/>5:00 PM at North Ridge Pavilion</p>
                 <p>Formal Attire</p>
                 <p>*Dinner to Follow Ceremony</p><div><img src={require('../img/North_Ridge_Pavilion.png')} height="100%" width="100%" alt=""/></div>
                 </div>
                 <div className="item"><h2>RECEPTION</h2>
                 <p>North Ridge Pavilion<br/>Coralville, Iowa</p>
                 <p>Saturday, June 15, 2019<br/>4:00 PM at North Ridge Pavilion</p>
                 <p>Semi-Formal Attire</p>
                 <p>Menu</p>
                     <p>Entertainment</p>
                 </div>
                 </div>
                </div>
        )
    }
}

export default Wedding;