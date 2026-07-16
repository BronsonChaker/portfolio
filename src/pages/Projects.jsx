import northendHome from "../assets/images/northend_home.png";

export default function Projects() {
  return (
    <div className="h-screen w-full flex justify-center">
      <title>Projects</title>
      <div className="w-5/12">
        <ol className="relative border-s border-default">
          {/* Blueprint */}
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
            <h3 className="text-lg font-semibold text-heading my-2">
              Blueprint - Project Management Suite
            </h3>

            {/* Blueprint - Project Images */}

            {/* Blueprint - Project Stack */}

            {/* Blueprint - Website & Github Link */}

            {/* Blueprint - Project Description */}
            <ul className="list-inside list-disc">
              <li>
                Developing a full-stack project management suite for residential
                and commercial construction companies, allowing management of
                workflow and tasks for projects from pre-site to handover
              </li>
              <li>
                Developing a Django REST API backend that handles
                authentication, business logic, data validation, and
                functionality of the application and serves data to React
                frontend
              </li>
              <li>
                Developing a responsive and mobile-friendly UI and UX using
                React and Tailwind CSS that fetches required user data from
                Django REST API endpoints
              </li>
              <li>
                Django REST API endpoints functionality and usage tested
                throughout development using Postman
              </li>
            </ul>
          </li>

          {/* Melior */}
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -start-1.5 border border-buffer"></div>

            <h3 className="text-lg font-semibold text-heading my-2">
              Melior - Free Invoice Generator
            </h3>

            {/* Melior - Project Images */}

            {/* Melior - Project Stack */}

            {/* Melior - Website & Github Link */}

            <ul className="list-inside list-disc">
              <li>
                Created a free online invoice generator which can be used by
                individuals and businesses to instantly download professionally
                templated invoices, no registration or subscription required
              </li>
              <li>
                Functionality and logic of application created solely in vanilla
                JavaScript which includes form handling, monetary calculations,
                and PDF generation with html2pdf.js library, allowing invoices
                to be generated through the client locally without requirement
                of a backend
              </li>
              <li>
                Designed in Figma and Developed with HTML, CSS, and JavaScript
              </li>
            </ul>
          </li>

          {/* Yates Roofing Website */}
          <li className="ms-4">
            <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
            <h3 className="text-lg font-semibold text-heading my-2">
              Yates Roofing Website
            </h3>

            {/* Yates Roofing Website - Project Images */}

            {/* Yates Roofing Website - Project Stack */}

            {/* Yates Roofing Website - Website & Github Link */}

            <ul className="list-inside list-disc">
              <li>
                Designed and developed responsive and mobile-friendly website
                for local roofing company, features a photo gallery, contact
                page, and roofing options for potential customers
              </li>
              <li>
                Delivered full workflow from design to deployment which includes
                consultation, Figma design mockups, HTML and CSS build, and
                Netlify deployment
              </li>
            </ul>
          </li>

          {/* Northend Boxing Website */}
          <li className="ms-4">
            <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5 border border-buffer"></div>

            <h3 className="text-lg font-semibold text-heading my-2">
              Northend Boxing Website
            </h3>

            {/* Northend Boxing Website - Project Images */}

            {/* Northend Boxing Website - Project Stack */}

            {/* Northend Boxing Website - Website & Github Link */}

            <ul className="list-inside list-disc">
              <li>
                Designed and developed a responsive website for local boxing gym
                business, mainly used by customers to view class timetables and
                sign up for memberships
              </li>
              <li>
                Gathered client requirements and used them to create the design
                and layout for the website using Figma prior to development and
                developed using HTML, and CSS.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}
