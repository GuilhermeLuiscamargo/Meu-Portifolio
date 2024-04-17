import "../Styles/cardProject.scss";
import { IoCodeSlashOutline } from "react-icons/io5";
import { SiGithub } from "react-icons/si";
export default function CardProject({
  img,
  info,
  tecnologias,
  linkSite,
  linkGit,
}) {
  const background = {
    backgroundImage: `url(${img})`,
  };
  return (
    <>
      <div className="card-project" style={background}>
        <div className="info-card">
          <p>{info}</p>
        </div>
        <div className="tecnologias">
          <ul>
            {tecnologias.map((element) => {
              return (
                <li key={Math.random().toString(36).slice(-12)}>{element}</li>
              );
            })}
          </ul>
        </div>
        <div className="links">
          <a href={linkSite} target="blank" title="Link do projeto">
            <IoCodeSlashOutline />
          </a>
          <a href={linkGit} target="blank" title="link do repositorio">
            <SiGithub />
          </a>
        </div>
      </div>
    </>
  );
}
