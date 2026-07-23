import csu_logo from "../src/assets/images/csu_logo.jpg";
import ExpListItem from "./components/Experience/ExpListItem";
import ProjectList from "./components/Projects/ProjectList";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ExperienceList from "./components/Experience/ExperienceList";
import SkillsList from "./components/Skills/SkillsList";

export default function App() {
  return (
    <main className="h-full w-full flex flex-col items-center justify-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <title>Bronson Chaker</title>

      <Navbar />
      <div className="w-5/12 max-lg:w-10/12 ">
        {/* Heading */}
        <section id="heading" className="w-full flex gap-10">
          <Header />
        </section>

        <hr className="mt-10 text-gray-200" />

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

        <hr className="mt-10 text-gray-200" />

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

        <hr className="mt-10 text-gray-200" />
        {/* My Projects */}
        <section className="mt-10">
          <h1 className="text-xl font-bold">Projects</h1>
          <ProjectList />
        </section>

        <hr className="mt-10 text-gray-200" />

        {/* Work Experience */}
        <section id="work-experience" className="mt-10">
          <h1 className="text-xl font-bold">Work Experience</h1>

          <ExperienceList />
        </section>

        <hr className="mt-10 text-gray-200" />

        {/* Skills */}
        <section className="mt-10 mb-20">
          <h1 className="text-xl font-bold">Skills</h1>
          <SkillsList />
        </section>

        {/* Contact */}
        {/* <section id="contact" className="mt-10">
          <h1 className="text-xl font-bold">Contact</h1>
        </section> */}
      </div>
    </main>
  );
}
