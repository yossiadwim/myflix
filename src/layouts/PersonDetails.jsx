/* eslint-disable react/prop-types */
import Person from "../components/person/Person";
import Navbar from "./Navbar";

const PersonDetails = ({ person }) => {
  return (
    <>
      <Navbar></Navbar>
      <div className="z[-10]">
        <img
          className="absolute inset-0 h-screen w-screen object-cover brightness-50"
          src={`https://image.tmdb.org/t/p/original${
            person?.movie_credits?.cast?.sort((a, b) => b.popularity - a.popularity)[Math.floor(Math.random() * 10)].backdrop_path
          }`}
          alt=""
        />
      </div>
      <div className="absolute h-full w-full bg-opacity-50 bg-gradient-to-b from-transparent to-black pt-36">
        <Person person={person}></Person>
      </div>
    </>
  );
};

export default PersonDetails;
