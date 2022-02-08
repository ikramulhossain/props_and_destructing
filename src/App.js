import React from "react";
import Card from "./Components/Card";
function App(){
    return <div>
        <h1 className="heading">
        TO DO APP
        </h1>
        <div>
            <Card TodoTittel="Calling all family" tododesc="This is a Description 1"/>
            <Card TodoTittel="Calling all family" tododesc="This is a Description 2"/>
            <Card TodoTittel="Calling all family" tododesc="This is a Description 3"/>
            <Card TodoTittel="Calling all family" tododesc="This is a Description 4"/>
            <Card TodoTittel="Calling all family" tododesc="This is a Description 5"/>
            <Card TodoTittel="Calling all family" tododesc="This is a Description 6"/>
            
        </div>
    </div>
}


export default App;