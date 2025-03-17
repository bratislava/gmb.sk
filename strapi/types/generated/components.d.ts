import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksContactCardItem extends Schema.Component {
  collectionName: 'components_blocks_contact_card_items';
  info: {
    displayName: 'contact card item';
    icon: 'address-card';
  };
  attributes: {
    contactCard: Attribute.Relation<
      'blocks.contact-card-item',
      'oneToOne',
      'api::contact-card.contact-card'
    >;
  };
}

export interface BlocksContentPageItem extends Schema.Component {
  collectionName: 'components_blocks_content_page_items';
  info: {
    displayName: 'content page item';
    icon: 'file-invoice';
  };
  attributes: {
    contentPage: Attribute.Relation<
      'blocks.content-page-item',
      'oneToOne',
      'api::content-page.content-page'
    >;
  };
}

export interface BlocksExhibitionArchive extends Schema.Component {
  collectionName: 'components_blocks_exhibition_archives';
  info: {
    displayName: 'exhibition archive';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    perex: Attribute.Text;
    color: Attribute.String;
    coverMedia: Attribute.Media;
  };
}

export interface BlocksFileItem extends Schema.Component {
  collectionName: 'components_blocks_file_items';
  info: {
    displayName: 'file item';
    icon: 'file';
  };
  attributes: {
    title: Attribute.String;
    file: Attribute.Media & Attribute.Required;
  };
}

export interface BlocksHighlightOverride extends Schema.Component {
  collectionName: 'components_blocks_highlight_overrides';
  info: {
    displayName: 'highlight override';
    icon: 'exclamation';
  };
  attributes: {
    highlightContent: Attribute.RichText;
  };
}

export interface BlocksLinkItem extends Schema.Component {
  collectionName: 'components_blocks_link_items';
  info: {
    displayName: 'link item';
    icon: 'external-link-alt';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    url: Attribute.String;
    newWindow: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface BlocksLinks extends Schema.Component {
  collectionName: 'components_blocks_links';
  info: {
    displayName: 'links';
    icon: 'list-ul';
  };
  attributes: {
    title: Attribute.String;
    links: Attribute.Component<'blocks.link-item', true>;
  };
}

export interface BlocksPalace extends Schema.Component {
  collectionName: 'components_blocks_palaces';
  info: {
    displayName: 'palace';
    icon: 'building';
  };
  attributes: {
    title: Attribute.String;
    address: Attribute.String;
    zip: Attribute.String;
    city: Attribute.String;
    phone: Attribute.String;
  };
}

export interface BlocksPartnerItem extends Schema.Component {
  collectionName: 'components_blocks_partner_items';
  info: {
    displayName: 'partner item';
    icon: 'hands-helping';
  };
  attributes: {
    partner: Attribute.Relation<
      'blocks.partner-item',
      'oneToOne',
      'api::partner.partner'
    >;
  };
}

export interface BlocksPositionItem extends Schema.Component {
  collectionName: 'components_blocks_position_items';
  info: {
    displayName: 'position item';
    icon: 'user';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    names: Attribute.Text;
  };
}

export interface BlocksSeo extends Schema.Component {
  collectionName: 'components_blocks_seos';
  info: {
    displayName: 'seo';
    icon: 'bolt';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    keywords: Attribute.String;
    metaImage: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
  };
}

export interface SectionsArchiveSection extends Schema.Component {
  collectionName: 'components_sections_archive_sections';
  info: {
    displayName: 'archive section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    submenuTitle: Attribute.String;
    archiveCard: Attribute.Component<'blocks.exhibition-archive'>;
  };
}

export interface SectionsAudioSection extends Schema.Component {
  collectionName: 'components_sections_audio_sections';
  info: {
    displayName: 'audio section';
    icon: 'microphone';
  };
  attributes: {
    title: Attribute.String;
    submenuTitle: Attribute.String;
    url: Attribute.String;
  };
}

export interface SectionsContactCardsSection extends Schema.Component {
  collectionName: 'components_sections_contact_cards_sections';
  info: {
    displayName: 'contact cards section';
    icon: 'address-card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    submenuTitle: Attribute.String;
    contacts: Attribute.Component<'blocks.contact-card-item', true> &
      Attribute.SetMinMax<{
        min: 1;
      }>;
  };
}

export interface SectionsDownloadSection extends Schema.Component {
  collectionName: 'components_sections_download_sections';
  info: {
    displayName: 'download section';
    icon: 'cloud-download-alt';
  };
  attributes: {
    title: Attribute.String;
    submenuTitle: Attribute.String;
    files: Attribute.Component<'blocks.file-item', true>;
  };
}

export interface SectionsGallerySection extends Schema.Component {
  collectionName: 'components_sections_gallery_sections';
  info: {
    displayName: 'gallery section';
    icon: 'images';
  };
  attributes: {
    title: Attribute.String;
    submenuTitle: Attribute.String;
    medias: Attribute.Media;
  };
}

export interface SectionsMapSection extends Schema.Component {
  collectionName: 'components_sections_map_sections';
  info: {
    displayName: 'map section';
    icon: 'map';
  };
  attributes: {
    title: Attribute.String;
    submenuTitle: Attribute.String;
  };
}

export interface SectionsNewsSection extends Schema.Component {
  collectionName: 'components_sections_news_sections';
  info: {
    displayName: 'news section';
    icon: 'newspaper';
  };
  attributes: {
    title: Attribute.String;
    submenuTitle: Attribute.String;
  };
}

export interface SectionsNewsletterSection extends Schema.Component {
  collectionName: 'components_sections_newsletter_sections';
  info: {
    displayName: 'newsletter section';
    icon: 'mail-bulk';
  };
  attributes: {
    submenuTitle: Attribute.String;
  };
}

export interface SectionsOpeningHoursSection extends Schema.Component {
  collectionName: 'components_sections_opening_hours_sections';
  info: {
    displayName: 'opening hours section';
    icon: 'clock';
  };
  attributes: {
    submenuTitle: Attribute.String;
  };
}

export interface SectionsPageSection extends Schema.Component {
  collectionName: 'components_sections_page_sections';
  info: {
    displayName: 'page section';
    icon: 'bars';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    submenuTitle: Attribute.String;
    layout: Attribute.Enumeration<['chessboard', 'cards', 'fullwidth']> &
      Attribute.DefaultTo<'chessboard'>;
    contentPages: Attribute.Component<'blocks.content-page-item', true>;
  };
}

export interface SectionsRichtextSection extends Schema.Component {
  collectionName: 'components_sections_richtext_sections';
  info: {
    displayName: 'richtext section';
    icon: 'align-center';
  };
  attributes: {
    submenuTitle: Attribute.String;
    content: Attribute.RichText;
  };
}

export interface SectionsSliderSection extends Schema.Component {
  collectionName: 'components_sections_slider_sections';
  info: {
    displayName: 'slider section';
    icon: 'arrows-alt-h';
  };
  attributes: {
    submenuTitle: Attribute.String;
    medias: Attribute.Media;
  };
}

export interface SectionsTicketsSection extends Schema.Component {
  collectionName: 'components_sections_tickets_sections';
  info: {
    displayName: 'tickets section';
    icon: 'ticket-alt';
  };
  attributes: {
    title: Attribute.String;
    submenuTitle: Attribute.String;
    text: Attribute.RichText;
  };
}

export interface SectionsVideoSection extends Schema.Component {
  collectionName: 'components_sections_video_sections';
  info: {
    displayName: 'video section';
    icon: 'play-circle';
  };
  attributes: {
    title: Attribute.String;
    submenuTitle: Attribute.String;
    url: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.contact-card-item': BlocksContactCardItem;
      'blocks.content-page-item': BlocksContentPageItem;
      'blocks.exhibition-archive': BlocksExhibitionArchive;
      'blocks.file-item': BlocksFileItem;
      'blocks.highlight-override': BlocksHighlightOverride;
      'blocks.link-item': BlocksLinkItem;
      'blocks.links': BlocksLinks;
      'blocks.palace': BlocksPalace;
      'blocks.partner-item': BlocksPartnerItem;
      'blocks.position-item': BlocksPositionItem;
      'blocks.seo': BlocksSeo;
      'sections.archive-section': SectionsArchiveSection;
      'sections.audio-section': SectionsAudioSection;
      'sections.contact-cards-section': SectionsContactCardsSection;
      'sections.download-section': SectionsDownloadSection;
      'sections.gallery-section': SectionsGallerySection;
      'sections.map-section': SectionsMapSection;
      'sections.news-section': SectionsNewsSection;
      'sections.newsletter-section': SectionsNewsletterSection;
      'sections.opening-hours-section': SectionsOpeningHoursSection;
      'sections.page-section': SectionsPageSection;
      'sections.richtext-section': SectionsRichtextSection;
      'sections.slider-section': SectionsSliderSection;
      'sections.tickets-section': SectionsTicketsSection;
      'sections.video-section': SectionsVideoSection;
    }
  }
}
