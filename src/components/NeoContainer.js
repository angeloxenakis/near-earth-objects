import React, { useEffect, useState } from 'react'
import { NeoTile } from "./NeoTile"

export const Neo = () => {
    const [currentDate, setCurrentDate] = useState("2021-08-22")
    const [neoData, setNeoData] = useState([])
    const [showNeo, setShowNeo] = useState([])

    useEffect(() => {
        formatDate()

        fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${currentDate}&end_date=${currentDate}&api_key=qrEvGYQDm5xKEgg9Yk2cUnLxKpfvXBAFqMibEJIO`)
        .then(res => res.json())
        .then(data => {
            console.log(data.near_earth_objects[`${currentDate}`])
            setNeoData(data.near_earth_objects[`${currentDate}`])
            setShowNeo(data.near_earth_objects[`${currentDate}`][0])
        })
    }, [])

    const formatDate = () => {
        const rawDate = new Date()
        let year = rawDate.getFullYear().toString()
        let month = rawDate.getMonth() + 1
        let day = rawDate.getDate()
        month.toString().length === 1 ? month = `0${month}` : month = month.toString()
        day.toString().length === 1 ? day = `0${day}` : day = day.toString()
        setCurrentDate(`${year}-${month}-${day}`)
    }

    return(
        <div>
            <h3>Number of Near Earth Objects: {neoData.length}</h3>
            <div>
                {neoData.map(neo => <NeoTile neo={neo} key={neo.id}/>)}
            </div>
        </div>
    )
}