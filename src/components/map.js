import React, { useRef, useEffect } from "react"
import mapboxgl from "mapbox-gl"
import mapStyles from "./map.module.css"

mapboxgl.accessToken = process.env.GATSBY_MAPBOX_ACCESS_TOKEN

const Map = () => {
  const mapContainer = useRef(null)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [174.770325, -36.851982],
      zoom: 15
    })
  }, [])

  return <div className={mapStyles.mapContainer} ref={mapContainer}></div>
}

export default Map
