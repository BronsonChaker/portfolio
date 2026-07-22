import SkillsListItem from "./SkillsListItem";
import { skillsData } from "../../data/skills_data";

export default function SkillsList() {
  return (
    <div className="flex flex-wrap gap-2 w-full mt-5 gap-y-3">
      {skillsData.map((skill, index) => (
        <SkillsListItem key={index} {...skill} />
      ))}
    </div>
  );
}
