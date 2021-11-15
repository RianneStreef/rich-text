import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const index = (props) => {
  console.log(props);

  const document = props.data.contentfulRichText.introText.raw;

  // documentToReactComponents(document);
  console.log(document);

  return (
    <div>
      <h1>Rich Text</h1>
      <div>{document}</div>
    </div>
  );
};

export const Query = graphql`
  query MyQuery {
    contentfulRichText {
      introText {
        raw
      }
    }
  }
`;

export default index;
