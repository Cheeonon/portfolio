import likedinIcon from "../../assets/icons/linkedin.png";
import emailIcon from "../../assets/icons/email.png";
import githubIcon from "../../assets/icons/github.png";

import { NavLink } from 'react-router-dom';
// import { useRef } from "react";

import './Header.scss';
import { useEffect, useState } from "react";

const Header = ({mouseCursor, handleSelect, projects, handleMoveLeft, handleMoveRight}) => {
  // const arrowLeft = useRef(null);
  // const arrowRight = useRef(null);

  // const leftArrow = document.querySelector(".header__film-arrow--left");

  // const handleMouseOver = (event, ref) => {
  //   leftArrow.classList.add("header__film-arrow--hover");
  //   const bottomPosition = ref.current.offsetTop;
  //   const leftPosition = ref.current.offsetLeft;

  //   mouseCursor.style.bottom = bottomPosition + "px";
  //   mouseCursor.style.left = leftPosition + "px";
  //   // mouseCursor.innerText = "Click to see details"
  //   event.stopPropagation();
  //   mouseCursor.style.borderWidth = "1px";

  // }

  // const handleMouseLeave = (ref) => {
  //   ref.current.classList.remove("header__film-arrow--hover");
  //   // mouseCursor.innerText = ""
  //   mouseCursor.style.borderWidth = "1.5px";

  // }

  const [isAboutPage, setIsAboutPage] = useState(false);

  const handleClick = (currentLocation) => {
    if(currentLocation === "about"){
      setIsAboutPage(true);
    } else{
      setIsAboutPage(false);
    }
  }

  return (
    <header className='header'>
      <div className="header__profile">
        <ul className="header__profile-list">
          <li className="header__profile-item">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="header__profile-link">
              <img src={likedinIcon} alt="linkedin" className="header__profile-img" />
            </a>
          </li>
          <li className="header__profile-item">
            <a href="https://gmail.com" target="_blank" rel="noreferrer" className="header__profile-link">
              <img src={emailIcon} alt="gmail" className="header__profile-img" />
            </a>
          </li>
          <li className="header__profile-item">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="header__profile-link">
              <img src={githubIcon} alt="github" className="header__profile-img" />
            </a>
          </li>
        </ul>

      </div>
 
      <div 
        className=
        {isAboutPage
                    ? "header__film--hidden" 
                    : "header__film"
        }
        >
        <div 
          className="header__film-arrow header__film-arrow--left" 
          
          onClick={handleMoveLeft} 
          // onMouseMove={(event) => handleMouseOver(event, arrowLeft)}
          // onMouseLeave={() => handleMouseLeave(arrowLeft)}
          >
          {/* <span ref={arrowLeft} > */}
            ⇜
          {/* </span> */}
        </div>
        <div 
          className="header__film-arrow header__film-arrow--right" 
          // ref={arrowRight} 
          onClick={handleMoveRight}
          // onMouseMove={() => handleMouseOver(arrowRight)}
          // onMouseLeave={() => handleMouseLeave(arrowRight)}
          >
          ⇝
        </div>

        {projects.map((project, index) => {
          const filmClassList = `header__film-project header__film-project-${project.num}`

          return (<div key={index} className={filmClassList}>
                    <span className="header__film-title"> {project.project}</span>
                    <img src={project.thumbnail} alt={project.project} className="header__film-img" />
                  </div>)
        })}
      </div>

      <div className="header__tabs">
          <ul className="header__tabs-list">
            <li className="header__tabs-item">
              <NavLink to="about" className="header__tabs-link" activeclassname="active" onClick={()=>{handleClick("about")}}>
                  About
              </NavLink>
            </li>
            <li className="header__tabs-item">
              <NavLink to="projects" className="header__tabs-link" activeclassname="active" onClick={()=>{handleClick("projects")}}>
                  Projects
              </NavLink>
            </li>
          </ul>
      </div>
    </header>
  )
}

export default Header