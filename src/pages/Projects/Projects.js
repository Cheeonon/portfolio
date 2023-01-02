import './Projects.scss';
import {useOutletContext} from 'react-router-dom';
import { useState } from 'react';

const Projects = () => {

  let [currentProject, projects] = useOutletContext();
  let currentProjectTitle = currentProject.project;

  const [hidden, setHidden] = useState(true);
  const handleHidden = () => {
    setHidden(!hidden);
  }

  return (
    <div className="projects"> 
      
      <div className="projects__lens">
        {projects.map((project) => {
          if(project.project === currentProjectTitle){
            return (
            <>
              <div className="projects__project">
                <img src={project.coverImg} alt={project.project} className="projects__project-img" />
              </div>
              <div className="projects__project-cover" onClick={handleHidden}>
                <span className="projects__project-title">{project.project}</span>
                <span className="projects__project-desc">{project.description}</span>
                <ul className="projects__project-tech">
                  {project.techStack.map(tech => (<li className="projects__project-tech--item">{tech}</li>))}
                </ul>
              </div>
            </>
            )
          }
          return(<></>)
        })}
      </div>

      {!hidden ? projects.map((project) => {
          if(project.project === currentProjectTitle){
            return (
            <>
              <div className="projects__detail" onClick={handleHidden}>
                <div className="projects__detail-container">
                  <h1 className="projects__detail-title">{project.project}</h1>
                  <span className="projects__detail-desc">{project.description}</span>
                  <img src={project.detailImg} alt={project.project} className="projects__detail-img" />
                  <h3 className="projects__detail-subtitle">About</h3>
                  <div className="projects__detail-detail projects__detail-desc">{project.detail}</div>
                  <h3 className="projects__detail-subtitle">Technologies</h3>
                  <ul className="projects__detail-tech projects__detail-desc">
                    {project.techStack.map(tech => (<li className="projects__detail-tech--item">{tech}</li>))}
                  </ul>
                  <h3 className="projects__detail-subtitle">🌐 Website</h3>
                  <a href={project.link} target="_blank" rel="noreferrer" className="projects__detail-link">{project.link}</a>
                  <h3 className="projects__detail-subtitle">Github</h3>
                  <a href={project.link} target="_blank" rel="noreferrer" className="projects__detail-link">{project.github}</a>
                </div>
              </div>
            </>
            )
          }
          return(<></>)
      })
      : null
    }

      
    </div>
     
  )
}


export default Projects 