import "./NavPage.scss";
import { Link } from 'react-router-dom';
import { useState } from "react";

const NavPage = () => {

    const [displayAbout, setDisplayAbout] = useState(false); 
    const [displayProjects, setDisplayProjects] = useState(false); 


    const handleDisplayAbout = () =>{
        setDisplayAbout(true);
    }

    const handleDisplayProjects = () =>{
        setDisplayProjects(true);
    }


  return (
    <div className="nav-page">
        <div className="nav-page__container">
            <div className="nav-page__title">
                <span className="margin-right bold" onMouseOver={handleDisplayAbout}>Cheeon Park</span> 
                <span onMouseOver={handleDisplayProjects}>Portfolio</span>   
            </div>
            <ul className="nav-page__nav">
                {displayAbout && 
                    <li className="nav-page__item nav-page__item--left">
                        <Link to="main/about" className="nav-page__link">About</Link>
                    </li>
                }

                {displayProjects &&
                    <li className="nav-page__item nav-page__item--right">
                        <Link to="main/projects" className="nav-page__link">Projects</Link>
                    </li>
                }
            </ul>
        </div>
    </div>
  )
}

export default NavPage