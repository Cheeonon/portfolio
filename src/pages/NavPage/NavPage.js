import "./NavPage.scss";
import { Link } from 'react-router-dom';

const NavPage = () => {
  return (
    <div className="nav-page">
        <div className="nav-page__container">
            <span className="nav-page__title"><b className="margin-right">Cheeon Park</b> Portfolio</span>
            <ul className="nav-page__nav">
                <li className="nav-page__item">
                    <Link to="main/about" className="nav-page__link">About</Link>
                </li>
                <li className="nav-page__item">
                    <Link to="main/projects" className="nav-page__link">Projects</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavPage