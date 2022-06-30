/* eslint-disable react/no-danger */
/**
 *
 * PreviewWysiwyg
 *
 */

import PropTypes from "prop-types";
import React, { memo, useMemo } from "react";

import md from "./utils/mdRenderer";
import sanitizeHtml from "./utils/satinizeHtml";
import Wrapper from "./Wrapper";

const PreviewWysiwyg = ({ data }) => {
  React;
  const html = useMemo(() => sanitizeHtml(md.render(data || "")), [data]);

  return (
    <Wrapper>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Wrapper>
  );
};

PreviewWysiwyg.defaultProps = {
  data: "",
};

PreviewWysiwyg.propTypes = {
  data: PropTypes.string,
};

export default memo(PreviewWysiwyg);
