import "./Styles/app.scss";
import Tilt from "react-parallax-tilt";
//import dos icones do site
import {
  IoCodeSlashOutline,
  IoLogoLinkedin,
  IoDocumentTextOutline,
} from "react-icons/io5";
import { DiHtml5, DiCss3, DiJavascript, DiBootstrap } from "react-icons/di";
import {
  SiTypescript,
  SiGithub,
  SiGit,
  SiReact,
  SiWhatsapp,
  SiGmail,
} from "react-icons/si";
import CardProject from "./components/CardProject";
//////////////////////////cores dos icones para o componente cardproject//////////////////////////////////////////////
/*
html5:#f16524
css3:#238aed
typescript:#fdff00
bootstrap: #8a12fd
reactJS:#61dbfb
javascript: #fdff00
git:#f44d27
github:#ffffff


*/
///
function App() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <ul>
            <li>
              <IoCodeSlashOutline className="code" />
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <Tilt className="tilt-card" id="Sobre" scale={0.8} perspective={950}>
          <div className="name-card">
            <span></span>
          </div>
          <div className="tecnologias">
            <ul>
              <li>
                <DiHtml5
                  className="tec-icons icon-html "
                  alt="icone HTML5"
                  title="HTML5"
                />
              </li>
              <li>
                <DiCss3
                  className="tec-icons icon-css "
                  alt="icone CSS"
                  title="CSS3"
                />
              </li>
              <li>
                <DiJavascript
                  className="tec-icons icon-JS "
                  alt="icone JavaScript"
                  title="JavaScript"
                />
              </li>
              <li>
                <SiTypescript
                  className="tec-icons icon-type "
                  alt="icone TypeScript"
                  title="TypeScript"
                />
              </li>
              <li>
                <DiBootstrap
                  className="tec-icons icon-boot "
                  alt="icone Bootstrap"
                  title="BootStrap"
                />
              </li>
              <li>
                <SiGithub
                  className="tec-icons icon-github"
                  alt="icone Github"
                  title="GitHub"
                />
              </li>
              <li>
                <SiGit
                  className="tec-icons icon-git"
                  alt="icone Git"
                  title="Git"
                />
              </li>
              <li>
                <SiReact
                  className="tec-icons icon-react "
                  alt="icone ReactJs"
                  title="React JS"
                />
              </li>
            </ul>
          </div>
          <div className="img-card">
            <img src="/Meu-Portifolio/imgs/foto.jpg" alt="minha foto" />
          </div>
          <div className="card-info">
            <p>
              <strong>[Sobre]</strong>
            </p>
            <p className="info">
              Olá prazer! Meu nome é Guilherme Luís Camargo sou um desenvolvedor
              front-end visando futuramente ser full-stack. Atualmente tenho 22
              anos tenho grande interesse profissional e pessoal pela área da
              tecnologia e informação e busco pela minha primeira oportunidade
              profissional na área de desenvolvimento.
            </p>
          </div>
          <div className="contato">
            <ul>
              <li>
                <a
                  href="http://api.whatsapp.com/send?1=pt_BR&phone=5544984017260"
                  target="blank"
                  title="55 44 98401-7260"
                >
                  <SiWhatsapp className="whatsap" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:guilhermeluiscamargoneto@gmail.com"
                  target="blank"
                  title="guilhermeluiscamargoneto@gmail.com"
                >
                  <SiGmail className="gmail" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/GuilhermeLuiscamargo"
                  target="blank"
                  title=" Meu GitHub"
                >
                  <SiGithub className="github" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/guilherme-luis-camargo-neto-49a40b2b1/?originalSubdomain=br"
                  target="blank"
                  title=" Meu Linkedin"
                >
                  <IoLogoLinkedin className="linkedin" />
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/drive/folders/15_ZX4SBK0w4_SHlpDZ9gLNGK__OoR6PA?usp=drive_link"
                  target="blank"
                  title=" Meu Curriculo"
                >
                  <IoDocumentTextOutline className="CV" />
                </a>
              </li>
            </ul>
          </div>
        </Tilt>
        <div className="projetos" id="Projetos">
          <CardProject
            info="O intuito do projeto foi desenvolver site SPA que seria um gestor de stock com rect utilizando o react-router-dom."
            img="/Meu-Portifolio/imgs/projeto-stockReact.png"
            tecnologias={[
              <DiHtml5 color="#f16524" title="HTML5" />,
              <DiCss3 color="#238aed" title="CSS3" />,
              <DiJavascript color="#fdff00" title="JavaScript" />,
              <SiReact color="#61dbfb" title="React JS" />,
            ]}
            linkGit={
              "https://github.com/GuilhermeLuiscamargo/Projeto-Gestor-de-Stock"
            }
            linkSite={
              "https://guilhermeluiscamargo.github.io/Projeto-Gestor-de-Stock/"
            }
          />
        </div>
      </main>
    </>
  );
}

export default App;
