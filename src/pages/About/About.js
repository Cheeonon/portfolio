import "./About.scss";
import profileImg from '../../assets/img/profile.jpg';

const About = () => {
    return (
        <div className="about">
          <div className="about__container">
            <div className="about__greetings">
              <img src={profileImg} alt="profile" className="about__img"/>
              <div className="about__greetings-container">
                <p className="about__greetings-text">Hello! My name is Cheeon Park.</p>
                <p className="about__greetings-text">And I’m a Full Stack Web Developer.</p>
              </div>
            </div>
            <p className="about__paragraph">
              Since I was young, I have enjoyed solving hard problems such as math
              or puzzle in one sitting, for hours. Whenever I got stuck on one
              difficult problem, I spend times as much as I need until I get the
              answer. The harder the problem is, the more I enjoyed it.
            </p>
            <p className="about__paragraph">
              I took a programming course in high school. The more I learned to code, the
              more concepts got harder and it could be as deeper as it can be. I
              found computers and the world that resides in computers very
              fascinating and beautiful because of their complexity.
            </p>
            <p className="about__paragraph">
              I am a graduate of computer networking and recently transitioned into web
              development. I am really excited about the next phase of my learning
              where I can pursue my passion for coding and continue to grow as a
              developer!
            </p>
          </div>
        </div>
    );
};

export default About;
