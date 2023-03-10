import { useState, useRef, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

import projects from "../../json/projects.json";
import "./Main.scss";

const Main = () => {
  const [projectsState, setProjectsState] = useState(projects);
  const [currentProject, setCurrentProject] = useState(projects[2]);
  const mouseCursor = useRef(null);

  // reset num for projects(for header)
  useEffect(()=>{
    let newProjectsState = [...projectsState];
    projectsState.forEach((projectState, index) => {
        let newNum = index + 1;

        let newProjectState = {...projectState};
        newProjectState.num = newNum;

        newProjectsState[index].num = newNum;
    })

    setProjectsState(newProjectsState);

     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

  const handleMouseCursor = (event) => {
    mouseCursor.current.style.left = event.pageX + "px";
    mouseCursor.current.style.top = event.pageY + "px";
  } 

  return (
    <div className='main' onMouseMove={(event)=>{handleMouseCursor(event)}}>
      <div class="cursor" ref={mouseCursor}></div>
      <Header projects={projects} mouseCursor={mouseCursor} handleMoveLeft={handleMoveLeft} handleMoveRight={handleMoveRight}/>
      <div className="main__body">
        <Outlet context={[currentProject, projects, mouseCursor, handleMoveLeft, handleMoveRight]}/>
      </div>
    </div> 
  )
}


export default Main 