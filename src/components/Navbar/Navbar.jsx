import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="w-full flex flex-row justify-center py-10">
      <div className="w-5/12 flex flex-row gap-10 font-medium text-lg">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          projects
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          resume
        </NavLink>
        <NavLink
          to=""
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          blog
        </NavLink>
        <NavLink
          to="/email"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          email
        </NavLink>
      </div>
    </nav>
  );
}
