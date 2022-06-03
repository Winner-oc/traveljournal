import React from "react"
import Header from "./component.js/Header"
import Hero from "./component.js/Hero"
import data from "./data"

export default function App() {
   const Heros = data.map(item => {
     return (
       <Hero
          key={item.id}
          item={item}
          
       />
     )
   })
  return(
    <div>
      <Header/>
      <section>
         {Heros}
      </section>
    </div>
  )
}
