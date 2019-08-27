import React from 'react';
//gatsby
import Img from "gatsby-image";

const Image = (props) => {

  let normalizedProps = props;

  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: props.fluid.presentationWidth,
        margin: normalizedProps.center ? '0 auto' : '0',
      },
    }
  };

  return (
    <Img {...normalizedProps} />
  );
};

export default Image;