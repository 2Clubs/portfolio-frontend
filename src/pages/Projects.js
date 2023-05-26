import { useState, useEffect } from "react";
import 'bulma/css/bulma.min.css'
import { Box, Button } from "react-bulma-components";

function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  //create function to make api call
  const getProjectsData = async () => {
    //make api call and get response
    const response = await fetch(props.URL + "projects");
    // turn response into javascript object
    const data = await response.json();
    // set the projects state to the data
    setProjects(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
    getProjectsData()
  }, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return projects.map((project) => (
        <Box>
        <h1>{project.name}</h1>
        <img src={project.image} alt={project.name}/>
        <br/>
        <a href={project.git}>
          <Button color="primary">Github</Button>
        </a>{" "}
        <a href={project.live}>
          <Button color={"primary"}>Live Site</Button>
        </a>
        </Box>
    ));
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;