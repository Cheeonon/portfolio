import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

import projects from "../../json/projects.json";
import "./Main.scss";

const Main = () => {
  const [projectsState, setProjectsState] = useState(projects);
  const [currentProject, setCurrentProject] = useState(projects[0]);

  const handleMoveRight = () => {
    let newProjectsState = [...projectsState];

        projectsState.forEach((projectState, index) => {
            let newNum;
            if(projectState.num !== 1){
                newNum = projectState.num - 1
            } else{
                newNum = 5
            }

            let newProjectState = {...projectState};
            newProjectState.num = newNum;

            newProjectsState[index].num = newNum;
        })

        setProjectsState(newProjectsState);

        const newCurrentProject = projectsState.filter(project => project.num === 3);
        setCurrentProject(newCurrentProject[0]);
  }

  const handleMoveLeft = () => {
    let newProjectsState = [...projectsState];

    projectsState.forEach((projectState, index) => {
        let newNum;
        if(projectState.num !== 5){
            newNum = projectState.num + 1
        } else{
            newNum = 1
        }

        let newProjectState = {...projectState};
        newProjectState.num = newNum;

        newProjectsState[index].num = newNum;
    })

    setProjectsState(newProjectsState);

    const newCurrentProject = projectsState.filter(project => project.num === 3);
    setCurrentProject(newCurrentProject[0]);
  }

  if(!currentProject){
    setCurrentProject(projects[2]) 
  }

  const mouseCursor = document.querySelector(".cursor");

  window.addEventListener("mousemove", (event) => {
      mouseCursor.style.left = event.pageX + "px";
      mouseCursor.style.top = event.pageY + "px";
  });

  return (
    <div className='main'>
      <div class="cursor"></div>
      <Header projects={projects} handleMoveLeft={handleMoveLeft} handleMoveRight={handleMoveRight}/>
      <div className="main__body">
        <Outlet context={[currentProject, projects, handleMoveLeft, handleMoveRight]}/>
      </div>
    </div> 
  )
}


export default Main 