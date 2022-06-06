import { PageSectionFragment } from '@bratislava/strapi-sdk-city-gallery';
import { isDefined } from '../../../utils/isDefined';
import CardSection from './CardSection';
import ChessboardSection from './ChessboardSection';
import FullWidthSection from './FullWidthSection';

export interface SectionProps {
  section: PageSectionFragment;
  anchor?: string;
}

const PageSectionContainer = ({ section, anchor }: SectionProps) => {
  if (section.layout === 'chessboard') {
    return (
      <ChessboardSection
        sectionItems={section.contentPages?.filter(isDefined)}
        title={section.title ?? undefined}
        anchor={anchor}
      />
    );
  }

  if (section.layout === 'cards') {
    return (
      <CardSection
        sectionItems={section.contentPages?.filter(isDefined)}
        title={section.title ?? undefined}
        anchor={anchor}
      />
    );
  }

  if (section.layout === 'fullwidth') {
    return (
      <FullWidthSection
        sectionItems={section.contentPages?.filter(isDefined)}
        title={section.title ?? undefined}
        anchor={anchor}
      />
    );
  }

  return (
    <ChessboardSection
      sectionItems={section.contentPages?.filter(isDefined)}
      title={section.title ?? undefined}
      anchor={anchor}
    />
  );
};

export default PageSectionContainer;
