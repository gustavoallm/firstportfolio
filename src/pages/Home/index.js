import "./home.css";
import "animate.css";
import profile from "../../assets/icon.webp";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";

function Home() {
    return (
        <div className="container home">
            <div className="homebox1 sethome">
                <h3 className="subtitle-home animate__animated animate__fadeInUp animate__delay-0.5s">
                    Gustavo A. Carvalho
                </h3>
                <h2 className="title-home animate__animated animate__fadeInUp animate__delay-0.5s">
                    Fullstack Developer
                </h2>
                <p className="animate__animated animate__fadeInUp animate__delay-0.5s">
                    I'm searching job on development area, currently I'm studying computer science
                    (bachelor's degree, graduation in 2023).
                </p>
                <div className="social animate__animated animate__fadeInUp animate__delay-0.5s">
                    <a href="https://github.com/gustavoallm" target="_blank" rel="noreferrer">
                        <GoMarkGithub color="#fdb827" size={40} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/gustavo-de-almeida-carvalho-266135151/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsLinkedin color="#fdb827" size={40} />
                    </a>
                </div>
            </div>
            <div className="homebox2 sethome animate__animated animate__fadeInUp animate__delay-0.9s">
                <img className="profile" src={profile} alt="Gustavo de A. Carvalho" />
            </div>
        </div>
    );
}

export default Home;
