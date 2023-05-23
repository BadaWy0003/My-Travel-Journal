import React from "react"
import ReactDOM from "react-dom"
import Header from "./Components/header"
import Card from "./Components/content"
import data from "./data"

export default function App(){
    
    const cards = data.map(item => {
        return <Card 
                key={item.id}
                imageUrl={item.imageUrl}
                location= {item.location}
                googleMapsUrl= {item.googleMapsUrl}
                title={item.title}
                startDate= {item.startDate}
                endDate= {item.endDate}
                description= {item.description}
        />
    })
    return(
        <div className="page">
            <Header />
            {cards}
                
           
            
        </div>
    )
}