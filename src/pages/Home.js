import React, { useEffect, useState } from 'react'

const Home = (props) => {
  const [ home, setHome ] = useState(null)

  const getHomeData = async () => {
    const response = await fetch(props.URL + "about")
    const data = await response.json()
    setHome(data)
  }

  useEffect( () => {
    getHomeData()
  }, [] )

  const loaded = () => {
    <img src={home.headshot + ".jpeg"} alt='Dan Bennett'/>
  }

  return home ? loaded() : <h1>Loading...</h1>
}

export default Home