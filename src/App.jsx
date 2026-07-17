import { Link } from "react-router";
import csu_logo from "../src/assets/images/csu_logo.jpg";
import metricon_logo from "../src/assets/images/metricon_logo.webp";
import mjh_logo from "../src/assets/images/mjh_logo.png";
import sekisui_logo from "../src/assets/images/sekisui_logo.png";
import contractor_logo from "../src/assets/images/contractor_logo.png";

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
          <div className="flex flex-row mt-5 w-full">
            {/* Logo */}
            <div className="flex rounded-full justify-start items-center w-[10%]">
              <img
                src={csu_logo}
                alt=""
                className="rounded-full h-14 border-4 p-1.5 border-[#E5E5E5]"
              />
            </div>

            {/* Name & Degree */}
            <div className="flex flex-col items-start justify-center w-[60%]">
              <p className="font-bold">Charles Sturt University</p>
              <p>Bachelor of Computer Science</p>
              <p className="tracking-wide">GPA: 6.09 / 7.0 [Distinction]</p>
            </div>

            {/* Timeline */}
            <div className="flex justify-end w-[30%]">
              <p className="text-sm text-gray-400">June 2023 - June 2026</p>
            </div>
          </div>
        </div>

        {/* Work Experience */}

        <div className="mt-10">
          <h1 className="text-xl font-bold">Work Experience</h1>

          {/* Experience 1 */}

          <div className="flex flex-row mt-5 w-full">
            {/* Logo */}
            <div className="flex rounded-full justify-start items-center w-[10%]">
              <img
                src={contractor_logo}
                alt=""
                className="rounded-full h-14 border-4 p-1.5 border-[#E5E5E5]"
              />
            </div>

            {/* Name & Degree */}
            <div className="flex flex-col items-start justify-center w-[60%]">
              <p className="font-bold">Self Employed</p>
              <p>Construction Contractor</p>
            </div>

            {/* Timeline */}
            <div className="flex justify-end w-[30%]">
              <p className="text-sm text-gray-400">May 2025 - Present</p>
            </div>
          </div>

          {/* Experience 2 */}

          <div className="flex flex-row mt-5 w-full">
            {/* Logo */}
            <div className="flex rounded-full justify-start items-center w-[10%]">
              <img
                src={sekisui_logo}
                alt=""
                className="rounded-full h-14 border-4 p-1.5 border-[#E5E5E5]"
              />
            </div>

            {/* Name & Degree */}
            <div className="flex flex-col items-start justify-center w-[60%]">
              <p className="font-bold">Sekisui House Australia</p>
              <p>Application Support Analyst</p>
            </div>

            {/* Timeline */}
            <div className="flex justify-end w-[30%]">
              <p className="text-sm text-gray-400">Nov 2024 - Apr 2025</p>
            </div>
          </div>

          {/* Experience 3 */}

          <div className="flex flex-row mt-5 w-full">
            {/* Logo */}
            <div className="flex rounded-full justify-start items-center w-[10%]">
              <img
                src={sekisui_logo}
                alt=""
                className="rounded-full h-14 border-4 p-1.5 border-[#E5E5E5]"
              />
            </div>

            {/* Name & Degree */}
            <div className="flex flex-col items-start justify-center w-[60%]">
              <p className="font-bold">Sekisui House Australia</p>
              <p>Construction Supervisor</p>
            </div>

            {/* Timeline */}
            <div className="flex justify-end w-[30%]">
              <p className="text-sm text-gray-400">Nov 2023 - Nov 2024</p>
            </div>
          </div>

          {/* Experience 4 */}

          <div className="flex flex-row mt-5 w-full">
            {/* Logo */}
            <div className="flex rounded-full justify-start items-center w-[10%]">
              <img
                src={mjh_logo}
                alt=""
                className="rounded-full h-14 border-4 p-1.5 border-[#E5E5E5]"
              />
            </div>

            {/* Name & Degree */}
            <div className="flex flex-col items-start justify-center w-[60%]">
              <p className="font-bold">McDonald Jones Homes</p>
              <p>Construction Supervisor</p>
            </div>

            {/* Timeline */}
            <div className="flex justify-end w-[30%]">
              <p className="text-sm text-gray-400">June 2022 - June 2023</p>
            </div>
          </div>

          {/* Experience 4 */}

          <div className="flex flex-row mt-5 w-full">
            {/* Logo */}
            <div className="flex rounded-full justify-start items-center w-[10%]">
              <img
                src={metricon_logo}
                alt=""
                className="rounded-full h-14 border-4 p-1.5 border-[#E5E5E5]"
              />
            </div>

            {/* Name & Degree */}
            <div className="flex flex-col items-start justify-center w-[60%]">
              <p className="font-bold">Metricon Homes</p>
              <p>Construction Manager</p>
            </div>

            {/* Timeline */}
            <div className="flex justify-end w-[30%]">
              <p className="text-sm text-gray-400">July 2020 - June 2022</p>
            </div>
          </div>

          {/* Skills */}

          <div className="mt-10">
            <h1 className="text-xl font-bold">Skills</h1>
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
