import { useEffect, useState } from "react";
import SkillList from "./SkillList";
import "./skills.scss";
import {
  frontendSkill,
  backendSkill,
  mobileSkill,
  designSkill,
  projectSkill,
  toolsSkill,
} from "../../data";

export default function Skill() {
  const [selected, setSelected] = useState("frontend");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "frontend",
      title: "Frontend Development",
    },
    {
      id: "backend",
      title: "Backend Development",
    },
    {
      id: "mobile",
      title: "Mobile Development",
    },
    {
      id: "design",
      title: "UI Design",
    },
    {
      id: "project",
      title: "Project Manager",
    },
    {
      id: "tools",
      title: "Tools",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "frontend":
        setData(frontendSkill);
        break;
      case "backend":
        setData(backendSkill);
        break;
      case "mobile":
        setData(mobileSkill);
        break;
      case "design":
        setData(designSkill);
        break;
      case "project":
        setData(projectSkill);
        break;
      case "tools":
        setData(toolsSkill);
        break;
      default:
        setData(frontendSkill);
    }
  }, [selected]);

  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <ul>
        {list.map((item) => (
          <SkillList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
