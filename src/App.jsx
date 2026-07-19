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
import ExpListItem from "./components/Experience/ExpListItem";
import SkillsListItem from "./components/Skills/SkillsListItem";
import ProjectList from "./components/Projects/ProjectList";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <main className="h-full w-full flex flex-col items-center justify-center">
      <title>Bronson Chaker</title>

      <Navbar />
      <div className="w-5/12 max-lg:w-10/12 ">
        {/* Heading */}
        <section id="heading" className="w-full flex gap-10">
          <Header />
        </section>

        {/* About */}

        <section id="about" className="mt-10">
          <h1 className="text-xl font-bold">About</h1>
          <p className="mt-4 text-md leading-7 text-gray-500 line-off">
            Previously worked in construction management, have extensive project
            managment experience. Picked up an interest in software development
            and started coding in my spare time which led me to enrolling into a
            Bachelor of Computer Science at Charles Sturt University in June
            2023. Completed my studies at Charles Sturt University in June 2026.
          </p>
        </section>

        {/* Education */}

        <section id="education" className="mt-10">
          <h1 className="text-xl font-bold">Education</h1>
          <ExpListItem
            image={csu_logo}
            name={"Charles Sturt University"}
            role={"Bachelor of Computer Science"}
            grade={"GPA: 6.09 / 7.0 [Distinction]"}
            date={"June 2023 - June 2026"}
          />
        </section>

        {/* My Projects */}

        <section className="mt-10">
          <h1 className="text-xl font-bold">Projects</h1>
          <ProjectList />
        </section>

        {/* Work Experience */}

        <section id="work-experience" className="mt-10">
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
        </section>

        {/* Skills */}

        <section className="mt-10">
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
        </section>

        {/* Contact */}

        <section id="contact" className="mt-10">
          <h1 className="text-xl font-bold">Contact</h1>
        </section>
      </div>
    </main>
  );
}
