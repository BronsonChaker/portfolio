import ExpListItem from "./ExpListItem";
import { experienceData } from "../../data/experience_data";

export default function ExperienceList() {
  return (
    <div>
      {experienceData.map((experience, index) => (
        <ExpListItem key={index} {...experience} />
      ))}
    </div>
  );
}
