import { Link } from "react-router";

export default function App() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      {/* Heading */}
      <div className="w-5/12">
        <h1 className="text-3xl font-semibold">Bronson Chaker</h1>

        <p className="mt-4">
          Currently building{" "}
          <Link to="/" className="text-blue-800 underline underline-offset-2">
            Blueprint
          </Link>
        </p>

        {/* Description */}
        <p className="mt-4">
          Recently completed my studies at Charles Sturt University achieving a
          Distinction average over the course of my degree. Passionate developer
          looking for graduate and internship roles.
        </p>
      </div>
    </div>
  );
}
