import "./about.css";
import "animate.css";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiReact, DiGit, DiMsqlServer, DiFirebase, DiPhotoshop } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiMysql, SiBootstrap, SiPhp, SiCsharp } from "react-icons/si";

function About() {
    return (
        <div className="container about">
            <div className="content">
                <h1 className="title mtop-title animate__animated animate__fadeInLeft animate__delay-0.5s">
                    About me...
                </h1>
                <p className="text animate__animated animate__fadeInLeftBig animate__delay-0.5s">
                    My name is Gustavo de Almeida Carvalho, I like technology since I was a child
                    and I started to be interested in programming in high school when I had my first
                    contact programming in C++, I am on my last year of the computer science
                    college, I am studying studying DevOps tools, docker and linux. I started my
                    studies in the coding area on beginning of 2022 and now I'm sure I can do a
                    great work with my experience and knowledge.
                </p>
                <br />
                <br />
                <h2 className="animate__animated animate__fadeInUp animate__delay-0.5s">Skills</h2>
                <span className="animate__animated animate__fadeInUp animate__delay-0.5s">
                    Click on icons to see my projects with the technologies
                </span>
                <br />
                <div className="social-about animate__animated animate__fadeInUp animate__delay-0.5s">
                    <a
                        href="https://www.w3schools.com/html/html_intro.asp"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AiFillHtml5 color="#fdb827" size={40} />
                    </a>
                    <a
                        href="https://www.w3schools.com/css/css_intro.asp"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <DiCss3 color="#fdb827" size={40} />
                    </a>
                    <a href="https://www.javascript.com/" target="_blank" rel="noreferrer">
                        <IoLogoJavascript color="#fdb827" size={40} />
                    </a>
                    <a href="https://projeto-prime.netlify.app/" target="_blank" rel="noreferrer">
                        <DiReact color="#fdb827" size={40} />
                    </a>
                    <a
                        href="https://www.linkedin.com/feed/update/urn:li:activity:6988553983535534081/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <SiBootstrap color="#fdb827" size={40} />
                    </a>
                    <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                        <DiGit color="#fdb827" size={40} />
                    </a>
                    <a href="https://github.com/gustavoallm" target="_blank" rel="noreferrer">
                        <AiFillGithub color="#fdb827" size={40} />
                    </a>
                    <a
                        href="https://www.linkedin.com/feed/update/urn:li:activity:6947887723525324800/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <SiCsharp color="#fdb827" size={40} />
                    </a>
                    <a
                        href="https://www.linkedin.com/feed/update/urn:li:activity:6988553983535534081/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <SiPhp color="#fdb827" size={40} />
                    </a>
                    <a
                        href="https://www.linkedin.com/feed/update/urn:li:activity:6947887723525324800/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <DiMsqlServer color="#fdb827" size={40} />
                    </a>
                    <a
                        href="https://github.com/gustavoallm/crudphp"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <SiMysql color="#fdb827" size={40} />
                    </a>
                    <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
                        <DiFirebase color="#fdb827" size={40} />
                    </a>
                    <a
                        href="https://www.adobe.com/br/products/photoshop.html"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <DiPhotoshop color="#fdb827" size={40} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
