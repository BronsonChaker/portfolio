import { Link } from "react-router";
import csu_logo from "../src/assets/images/csu_logo.jpg";
import metricon_logo from "../src/assets/images/metricon_logo.webp";
import mjh_logo from "../src/assets/images/mjh_logo.png";
import sekisui_logo from "../src/assets/images/sekisui_logo.png";
import contractor_logo from "../src/assets/images/contractor_logo.png";
import react_logo from "../src/assets/svg/react.svg";
import django_logo from "../src/assets/svg/django_logo.svg";
import js_logo from "../src/assets/svg/js_logo.svg";
import python_logo from "../src/assets/svg/python_logo.svg";
import java_logo from "../src/assets/svg/java_logo.svg";
import tailwind_logo from "../src/assets/svg/tailwind_logo.svg";
import pgsql_logo from "../src/assets/svg/pgsql_logo.svg";
import nodejs_logo from "../src/assets/svg/nodejs_logo.svg";
import postman_logo from "../src/assets/svg/postman_logo.svg";
import ExpListItem from "./components/ExpListItem";
import SkillsListItem from "./components/SkillsListItem";

export default function App() {
  return (
    <div className="h-full w-full flex items-center justify-center mt-25">
      <title>Bronson Chaker</title>
      {/* Heading */}
      <div className="w-5/12">
        <h1 className="text-5xl font-semibold">Bronson Chaker</h1>

        <p className="mt-4 text-lg text-gray-500 font-light">
          Recent graduate from Charles Sturt Univeristy looking for a Graduate
          or Intern Software Engineering position.
          <br></br>
          <br></br>
          <span className="mt-4">
            Currently working on{" "}
            <Link to="" className="text-blue-400 underline">
              @Blueprint
            </Link>
          </span>
        </p>

        {/* About */}

        <div className="mt-10">
          <h1 className="text-xl font-bold">About</h1>
          <p className="mt-4 text-md leading-7 text-gray-500 line-off">
            Previously worked in construction management, have extensive project
            managment experience. Picked up an interest in software development
            and started coding in my spare time. Enrolled into a Bachelor of
            Computer Science @ Charles Sturt University in June 2023. Completed
            studies in June 2026.
          </p>
        </div>

        {/* Education */}

        <div className="mt-10">
          <h1 className="text-xl font-bold">Education</h1>
          <ExpListItem
            image={csu_logo}
            name={"Charles Sturt University"}
            role={"Bachelor of Computer Science"}
            grade={"GPA: 6.09 / 7.0 [Distinction]"}
            date={"June 2023 - June 2026"}
          />
        </div>

        {/* Work Experience */}

        <div className="mt-10">
          <h1 className="text-xl font-bold">Work Experience</h1>

          {/* Experience 1 */}

          <ExpListItem
            image={contractor_logo}
            name={"Self Employed"}
            role={"Construction Contractor"}
            date={"May 2025 - Present"}
          />

          {/* Experience 2 */}

          <ExpListItem
            image={sekisui_logo}
            name={"Sekisui House Australia"}
            role={"Application Support Analyst"}
            date={"Nov 2024 - Apr 2025"}
          />

          {/* Experience 3 */}

          <ExpListItem
            image={sekisui_logo}
            name={"Sekisui House Australia"}
            role={"Construction Supervisor"}
            date={"Nov 2023 - Nov 2024"}
          />

          {/* Experience 4 */}

          <ExpListItem
            image={mjh_logo}
            name={"McDonald Jones Homes"}
            role={"Construction Supervisor"}
            date={"June 2022 - June 2023"}
          />

          {/* Experience 5 */}

          <ExpListItem
            image={metricon_logo}
            name={"Metricon Homes"}
            role={"Construction Manager"}
            date={"July 2020 - June 2022"}
          />

          {/* Skills */}

          <div className="mt-10">
            <h1 className="text-xl font-bold">Skills</h1>

            <div className="flex flex-wrap gap-2 w-full mt-5 gap-y-3">
              <SkillsListItem image={django_logo} name={"Django"} />
              <SkillsListItem image={react_logo} name={"React"} />
              <SkillsListItem image={python_logo} name={"Python"} />
              <SkillsListItem image={js_logo} name={"JavaScript"} />
              <SkillsListItem image={java_logo} name={"Java"} />
              <SkillsListItem image={tailwind_logo} name={"Tailwind"} />
              <SkillsListItem image={pgsql_logo} name={"PostgreSQL"} />
              <SkillsListItem image={nodejs_logo} name={"Node.js"} />
              <SkillsListItem image={postman_logo} name={"Postman"} />
            </div>
          </div>

          {/* My Projects */}

          <div className="mt-10">
            <h1 className="text-xl font-bold">Projects</h1>
          </div>

          {/* Contact */}

          <div className="mt-10">
            <h1 className="text-xl font-bold">Contact</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
