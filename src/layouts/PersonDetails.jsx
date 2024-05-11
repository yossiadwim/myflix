/* eslint-disable react/prop-types */
import Person from "../components/person/Person";
import Navbar from "./Navbar";

const PersonDetails = ({ person }) => {

  return (
    <>
      <Navbar></Navbar>
      <div className="absolute">
        <img
          className="inset-0 h-screen w-screen object-cover object-left brightness-50 grayscale"
          // src={`https://image.tmdb.org/t/p/original${
          //   person?.movie_credits?.cast?.sort((a, b) => b.popularity - a.popularity)[Math.floor(Math.random() * 10)].backdrop_path
          // }`}
          src={`https://image.tmdb.org/t/p/original${person?.images?.profiles?.sort((a, b) => b.width - a.width)[0].file_path}`}
          alt=""
        />
        
      </div>
      <div className="absolute h-full w-full bg-gradient-to-b from-transparent to-black pt-36">
        <Person person={person}></Person>
      </div>
      {/* <div className="absolute h-full w-full bg-opacity-50 bg-gradient-to-b from-transparent to-black pt-36">
        <Person person={person}></Person>
      </div> */}
    </>
  );
};

export default PersonDetails;
