import React, { Component } from 'react';
import '../kathrynlovestravis.css';


class Wedding extends Component{
    render(){
        return(
            <div className="thebrideandgroom">
                <h1>Wedding</h1>
                <div className="container">
                 <div className="item"><h2>CEREMONY</h2>
                 <p>{this.props.wedding[2].facility}<br/>{this.props.wedding[2].facilityLocation}</p>
                 <p>{this.props.wedding[2].ceremonyDate}<br/>{this.props.wedding[2].ceremonyTimeAndLocation}</p>
                 <p>{this.props.wedding[2].ceremonyAttire}</p>
                 <p>{this.props.wedding[2].ceremonyNote}</p><div><img src={require('../img/North_Ridge_Pavilion.png')} height="100%" width="100%" alt=""/></div>
                 </div>
                 <div className="item"><h2>RECEPTION</h2>
                 <p>{this.props.wedding[2].weddingFacility}<br/>{this.props.wedding[2].weddingFacilityLocation}</p>
                 <p>{this.props.wedding[2].weddingDateFirstLine}<br/>{this.props.wedding[2].weddingDateSecondLine}</p>
                 <p>{this.props.wedding[2].weddingAttire}</p>
                 <p>{this.props.wedding[2].weddingMenu}</p>
                     <p>{this.props.wedding[2].weddingEntertainment}</p>
                 </div>
                 </div>
                </div>
        )
    }
}

export default Wedding;