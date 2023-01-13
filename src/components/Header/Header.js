import likedinIcon from "../../assets/icons/linkedin.png";
import emailIcon from "../../assets/icons/email.png";
import githubIcon from "../../assets/icons/github.png";

import { NavLink } from "react-router-dom";

import "./Header.scss";
import { useEffect, useState } from "react";
const Header = ({ mouseCursor, projects, handleMoveLeft, handleMoveRight}) => {

    const handleMouseOver = () => {
      mouseCursor.current.style.width = "3rem";
      mouseCursor.current.style.height = "3rem";
      mouseCursor.current.style.backdropFilter = "sepia(100%)"

    };

    const handleMouseLeave = () => {
      mouseCursor.current.style.width = "1.5rem";
      mouseCursor.current.style.height = "1.5rem";
      mouseCursor.current.style.backdropFilter = "sepia(0)"

    };

    const [currentLocation, setCurrentLocation] = useState(
        window.location.href.split("/").at(-1)
    );
    const [isAboutPage, setIsAboutPage] = useState(true);

    useEffect(() => {
        if (currentLocation === "about") {
            setIsAboutPage(true);
        } else {
            setIsAboutPage(false);
        }
    }, [currentLocation]);

    return (
        <header className="header">
            <div className="header__profile">
                <ul className="header__profile-list">
                    <li className="header__profile-item" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            className="header__profile-link"
                        >
                            <img
                                src={likedinIcon}
                                alt="linkedin"
                                className="header__profile-img"
                            />
                        </a>
                    </li>
                    <li className="header__profile-item" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                        <a
                            href="https://gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="header__profile-link"
                        >
                            <img
                                src={emailIcon}
                                alt="gmail"
                                className="header__profile-img"
                            />
                        </a>
                    </li>
                    <li className="header__profile-item" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                            className="header__profile-link"
                        >
                            <img
                                src={githubIcon}
                                alt="github"
                                className="header__profile-img"
                            />
                        </a>
                    </li>
                </ul>
            </div>

            <div
                className={
                    isAboutPage ? "header__film--hidden" : "header__film"
                }
            >

              <div className="header__film-container">
                <div className="header__film-arrow" onClick={handleMoveLeft} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}> ⇜ </div>

                  <div className="header__film-box">
                    {projects.map((project, index) => {

                        const filmClassList = `header__film-project header__film-project-${project.num}`;
                        return (
                            <div key={index} className={filmClassList}>
                                <span className="header__film-title">
                                    {" "}
                                    {project.project}
                                </span>
                                <img
                                    src={project.thumbnail}
                                    alt={project.project}
                                    className="header__film-img"
                                />
                            </div>
                        );
                    })}
                  </div>
                  
              <div className="header__film-arrow" onClick={handleMoveRight} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}> ⇝ </div>
              </div>

            </div>

            <div className="header__tabs">
                <ul className="header__tabs-list">
                    <li className="header__tabs-item" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                        <NavLink
                            to="/"
                            className="header__tabs-link"
                            activeclassname="active"
                            onClick={() => {
                                setCurrentLocation("home");
                            }}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="header__tabs-item" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                        <NavLink
                            to="about"
                            className="header__tabs-link"
                            activeclassname="active"
                            onClick={() => {
                                setCurrentLocation("about");
                            }}
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="header__tabs-item" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                        <NavLink
                            to="projects"
                            className="header__tabs-link"
                            activeclassname="active"
                            onClick={() => {
                                setCurrentLocation("projects");
                            }}
                        >
                            Projects
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
