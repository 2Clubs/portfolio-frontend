import React from 'react'
import { useState, useEffect } from "react"
import 'bulma/css/bulma.min.css'
import { Card, Heading, Content } from 'react-bulma-components';

const About = (props) => {
    const [about, setAbout] = useState(null)

  // create function to make api call
  const getAboutData = async () => {
    // make api call and get response
    const response = await fetch(props.URL + "about");
    // turn response into javascript object
    const data = await response.json();
    // set the about state to the data
    setAbout(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
    getAboutData()
  }, [])

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <Card style={{width: 300, margin: 'auto'}}>
      <Card.Image src=""/>
      <Heading>{about.name}</Heading>
      <Heading subtitle size={6}>{about.email}</Heading>
      <Content>{about.bio}</Content>
    </Card>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}
export default About