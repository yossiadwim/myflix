/* eslint-disable react/prop-types */
import ContentInformation from "./ContentInformation";

const Information = (data, languages) => {
  return (
    <>
      <ContentInformation
       {...data}
        {...languages}
      ></ContentInformation>
    </>
  );
};

export default Information;
