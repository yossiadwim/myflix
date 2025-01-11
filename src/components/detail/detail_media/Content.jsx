/* eslint-disable react/prop-types */

import ContentMedia from "./ContentMedia";

const Content = ({ data, languages, type, children }) => {
  return (
    <>
      <div className="container flex pb-36 pt-[900px]">
        <ContentMedia data={data} languages={languages} type={type}>
          {children}
        </ContentMedia>
      </div>
    </>
  );
};

export default Content;
