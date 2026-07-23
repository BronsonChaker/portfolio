import display_picture from "../../assets/images/display_picture.png";
import { Link } from "react-router";

export default function Header() {
  return (
    <div className="flex mt-5 max-lg:flex-col">
      <div className="w-[70%] max-lg:w-11/12 ">
        <h1 className="text-5xl font-medium text-headings">Bronson Chaker</h1>

        <p className="mt-4 text-lg text-gray-500 font-light ">
          Recent graduate from Charles Sturt Univeristy looking for a Graduate
          or Intern Software Engineering position.
        </p>
      </div>

      <div className="flex items-center max-lg:hidden">
        <img
          src={display_picture}
          alt=""
          className="h-38 w-38 rounded-lg shadow-sm shadow-stone-300 border-2 border-stone-300"
        />
      </div>
    </div>
  );
}
