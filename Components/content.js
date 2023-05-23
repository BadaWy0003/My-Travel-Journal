import React from "react"
import ReactDOM from "react-dom"

export default function Card(props){
    return(
    <div className="card-big">    
        <div className="card">
            <img src={props.imageUrl}/>
            <div className="mini-card">
                <div className="location">
                    <img src="../images/Fill-219.png"/>
                    <p className="country">{props.location}</p>
                    <a className="google-maps" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <div className="date">
                    <h4>{props.startDate} -</h4><h4>{props.endDate}</h4>
                </div>
                <p>{props.description}</p>
            </div>
            
        </div>
        <div className="line"></div>
     </div>   
    )
}