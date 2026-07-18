import ProjectListItem from "./ProjectListItem";
import { projectData } from "../../data/project_data";

export default function ProjectList() {
  return (
    <div className="grid grid-cols-2 gap-3 mt-5 max-lg:grid-cols-1">
      {projectData.map((project, index) => (
        <ProjectListItem key={index} {...project} />
      ))}
    </div>
  );
}
