import mapboxgl from '!mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax
import React from 'react'

import { token } from './token.json'

mapboxgl.accessToken = token

export default function Map(ref) {
  const [map, setMap] = React.useState()

  React.useEffect(() => {
    const map = new mapboxgl.Map({
      container: ref.current,
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [2.376891589554225, 46.613696283922685],
      zoom: 5.8,
    })

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl())

    setMap(map)
    return () => map.remove()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return map
}
