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
            Ever since I was young, I've really enjoyed solving tough problems like math puzzles. I would spend hours working on them, not giving up until I found the answer. The harder the problem, the more I liked it.
            </p>
            <p className="about__paragraph">
            In high school, I took a programming class and as I learned more, the concepts became more challenging. I found computers and everything related to them really fascinating because they are so complex.
            </p>
            <p className="about__paragraph">
            I graduated in computer networking and recently switched to web development. I'm really excited about this new phase of learning where I can pursue my passion for coding and keep growing as a developer!
            </p>
          </div>
        </div>
    );
};

export default About;
