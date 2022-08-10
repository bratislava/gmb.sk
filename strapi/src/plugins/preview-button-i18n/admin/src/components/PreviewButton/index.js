import { Button } from "@strapi/design-system";
import { useQueryParams } from "@strapi/helper-plugin";
import { ExternalLink } from "@strapi/icons";
import { get } from "lodash";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { useIntl } from "react-intl";

import { PREVIEW_WINDOW_NAME } from "../../constants";
import { getTrad } from "../../utils";

const PreviewButton = ({
  isDraft,
  draftUrl,
  publishedUrl,
  localizedPublishedUrls,
}) => {
  const { formatMessage } = useIntl();
  const [{ query }] = useQueryParams();
  const currentLocale = get(query, "plugins.i18n.locale", "sk");

  const handleClick = (event) => {
    let destination;
    if (isDraft) {
      destination = draftUrl;
    } else {
      if (publishedUrl) {
        destination = publishedUrl;
      } else if (localizedPublishedUrls[currentLocale]) {
        destination = localizedPublishedUrls[currentLocale];
      } else if (localizedPublishedUrls.sk) {
        destination = localizedPublishedUrls.sk;
      }
    }

    if (!destination) {
      event.preventDefault();
      return;
    }

    window.open(destination, PREVIEW_WINDOW_NAME);
  };

  return (
    <Button
      onClick={handleClick}
      size="S"
      startIcon={<ExternalLink />}
      variant="secondary"
      style={{ width: "100%" }}
    >
      {formatMessage(
        isDraft
          ? {
              id: getTrad("label.draft"),
              defaultMessage: "Open draft preview",
            }
          : {
              id: getTrad("label.published"),
              defaultMessage: "Open live view",
            }
      )}
    </Button>
  );
};

PreviewButton.propTypes = {
  isDraft: PropTypes.bool,
  draftUrl: PropTypes.string,
  publishedUrl: PropTypes.string,
  localizedPublishedUrls: PropTypes.arrayOf(PropTypes.object),
};

export default memo(PreviewButton);
