/* eslint-disable react/prop-types */

import ContentMedia from "./ContentMedia";

const Content = ({ data, state, languages, type, children }) => {
  return (
    <>
      <div className="container flex pb-36 pt-[900px]">
        <ContentMedia data={data} state={state} languages={languages} type={type}>
          {children}
        </ContentMedia>
      </div>
    </>
  );
};

export default Content;
