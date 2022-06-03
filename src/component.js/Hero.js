import React from "react"

export default function Hero (props) {
    return (
        <div className="hero-container">
            <div className="box-shadow">
           <img src={props.item.CoverImage} alt=""/>
           </div>
           <div className="write-up-container">
           <i id="icon" className="fas fa-map-marker-alt"> <small className="location">{props.item.Location}</small></i>
           <a className="link" target="_blank" href={props.item.Link}>  View on Google Maps</a>
           <h1>{props.item.Title}</h1>
           <small className="date">{props.item.StartDate} - {props.item.EndDate}</small>
           <p>{props.item.Description}<br/>{props.item.DescriptionTwo}<br/>{props.item.DescriptionThree}</p>
           </div>
        </div>
    )
}