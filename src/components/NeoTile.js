import React from "react"

export const NeoTile = ({ neo }) => {
    console.log(neo)

    return(
        <div>
            <h3>Name: {neo.name}</h3>
            <h4>Diameter: {neo.estimated_diameter.feet.estimated_diameter_min.toFixed(2)} ft - {neo.estimated_diameter.feet.estimated_diameter_max.toFixed(2)} ft</h4>
        </div>
    )
}