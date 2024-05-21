/* eslint-disable react/prop-types */
import Person from "../components/person/Person";
import PersonContent from "../components/person/PersonContent";

const PersonDetails = ({ person }) => {
  return (
    <>
      <div className="absolute">
        {person?.images?.profiles?.length === 0 ? (
          <img
            className="inset-0 h-screen w-screen bg-white object-cover object-left brightness-50 grayscale"
            src="/img/white.png"
            alt=""
          />
        ) : (
          <img
            className={`inset-0 h-screen w-screen object-cover object-left brightness-50 grayscale`}
            src={`https://image.tmdb.org/t/p/original${person?.images?.profiles?.sort((a, b) => b.width - a.width)[0]?.file_path}`}
            alt=""
          />
        )}
      </div>
      <div className="absolute h-full w-full bg-gradient-to-b from-transparent to-black pt-36">
        <Person person={person}></Person>
      </div>
      <div className="pt-[600px]">
        <PersonContent person={person}></PersonContent>
      </div>
    </>
  );
};

export default PersonDetails;
