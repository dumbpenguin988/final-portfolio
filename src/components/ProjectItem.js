import "./ProjectItem.css";
import { useNavigate } from "react-router-dom";

export default function ProjectItem({image, title, description, tags, url}) {

  const navigate = useNavigate();

  return (
      <div className="project-item" onClick={()=>navigate(url)}>
      <a>
        <div className="project-item-img">
          <img src={image} alt=""></img>
        </div>
        <div className="project-item-text">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
          <div className="tags">{tags.map((tag) => <div className="tag"><p>{tag}</p></div>)}</div>
        </div>
      </a>
      </div>
      
  )

}