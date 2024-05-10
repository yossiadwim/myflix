/* eslint-disable react/prop-types */
import ContentInformation from "./ContentInformation";

const Information = ({ movie, tv, state }) => {

  return (
    <>
      <ContentInformation
        status={movie.status}
        original_language={movie.original_language}
        budget={movie.budget}
        revenue={movie.revenue}
        keywords={movie.keywords}
        tv={tv}
        state={state}
      ></ContentInformation>
    </>
  );
};

export default Information;
