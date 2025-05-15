import type { Attribute, Schema } from '@strapi/strapi';

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
    description: '';
    displayName: 'exhibition archive';
  };
  attributes: {
    color: Attribute.String;
    coverMedia: Attribute.Media<'images'>;
    perex: Attribute.Text;
    subtitle: Attribute.String;
    title: Attribute.String & Attribute.Required;
    url: Attribute.String;
  };
}

export interface BlocksFileItem extends Schema.Component {
  collectionName: 'components_blocks_file_items';
  info: {
    displayName: 'file item';
    icon: 'file';
  };
  attributes: {
    file: Attribute.Media<'images' | 'files' | 'audios'> & Attribute.Required;
    title: Attribute.String;
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
    description: '';
    displayName: 'link item';
    icon: 'external-link-alt';
  };
  attributes: {
    newWindow: Attribute.Boolean & Attribute.DefaultTo<true>;
    title: Attribute.String & Attribute.Required;
    url: Attribute.String;
  };
}

export interface BlocksLinks extends Schema.Component {
  collectionName: 'components_blocks_links';
  info: {
    displayName: 'links';
    icon: 'list-ul';
  };
  attributes: {
    links: Attribute.Component<'blocks.link-item', true>;
    title: Attribute.String;
  };
}

export interface BlocksMenuLinkItem extends Schema.Component {
  collectionName: 'components_blocks_menu_link_items';
  info: {
    displayName: 'menu link item';
  };
  attributes: {
    hasButtonStyle: Attribute.Boolean & Attribute.DefaultTo<false>;
    mainPage: Attribute.Relation<
      'blocks.menu-link-item',
      'oneToOne',
      'api::main-page.main-page'
    >;
    title: Attribute.String & Attribute.Required;
    url: Attribute.String;
  };
}

export interface BlocksPalace extends Schema.Component {
  collectionName: 'components_blocks_palaces';
  info: {
    displayName: 'palace';
    icon: 'building';
  };
  attributes: {
    address: Attribute.String;
    city: Attribute.String;
    phone: Attribute.String;
    title: Attribute.String;
    zip: Attribute.String;
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
    description: '';
    displayName: 'position item';
    icon: 'user';
  };
  attributes: {
    names: Attribute.Text;
    title: Attribute.String;
  };
}

export interface BlocksSeo extends Schema.Component {
  collectionName: 'components_blocks_seos';
  info: {
    displayName: 'seo';
    icon: 'bolt';
  };
  attributes: {
    keywords: Attribute.String;
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media<'images'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    metaTitle: Attribute.String;
  };
}

export interface SectionsArchiveBannerSection extends Schema.Component {
  collectionName: 'components_sections_archive_banner_sections';
  info: {
    displayName: 'archive banner section';
  };
  attributes: {
    banner: Attribute.Component<'blocks.exhibition-archive'>;
    submenuTitle: Attribute.String;
    title: Attribute.String;
  };
}

export interface SectionsAudioSection extends Schema.Component {
  collectionName: 'components_sections_audio_sections';
  info: {
    displayName: 'audio section';
    icon: 'microphone';
  };
  attributes: {
    submenuTitle: Attribute.String;
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface SectionsContactCardsSection extends Schema.Component {
  collectionName: 'components_sections_contact_cards_sections';
  info: {
    description: '';
    displayName: 'contact cards section';
    icon: 'address-card';
  };
  attributes: {
    contacts: Attribute.Component<'blocks.contact-card-item', true> &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    submenuTitle: Attribute.String;
    title: Attribute.String;
  };
}

export interface SectionsDisclosureSection extends Schema.Component {
  collectionName: 'components_sections_disclosure_sections';
  info: {
    description: '';
    displayName: 'disclosure section';
  };
  attributes: {
    submenuTitle: Attribute.String;
    title: Attribute.String;
  };
}

export interface SectionsDownloadSection extends Schema.Component {
  collectionName: 'components_sections_download_sections';
  info: {
    displayName: 'download section';
    icon: 'cloud-download-alt';
  };
  attributes: {
    files: Attribute.Component<'blocks.file-item', true>;
    submenuTitle: Attribute.String;
    title: Attribute.String;
  };
}

export interface SectionsExhibitionArchiveSection extends Schema.Component {
  collectionName: 'components_sections_exhibition_archive_sections';
  info: {
    description: '';
    displayName: 'exhibition archive section';
    icon: 'archive';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface SectionsExhibitionsSection extends Schema.Component {
  collectionName: 'components_sections_exhibitions_sections';
  info: {
    description: '';
    displayName: 'exhibitions section';
    icon: 'brush';
  };
  attributes: {
    archiveBannerSection: Attribute.Component<'sections.archive-banner-section'>;
    title: Attribute.String;
  };
}

export interface SectionsExploreSection extends Schema.Component {
  collectionName: 'components_sections_explore_sections';
  info: {
    displayName: 'explore section';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface SectionsGallerySection extends Schema.Component {
  collectionName: 'components_sections_gallery_sections';
  info: {
    displayName: 'gallery section';
    icon: 'images';
  };
  attributes: {
    medias: Attribute.Media<'images', true>;
    submenuTitle: Attribute.String;
    title: Attribute.String;
  };
}

export interface SectionsGlobalSearchSection extends Schema.Component {
  collectionName: 'components_sections_global_search_sections';
  info: {
    displayName: 'global search section';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface SectionsHighlightsSection extends Schema.Component {
  collectionName: 'components_sections_highlights_sections';
  info: {
    displayName: 'highlights section';
  };
  attributes: {
    highlights: Attribute.Component<'blocks.content-page-item', true>;
  };
}

export interface SectionsMapSection extends Schema.Component {
  collectionName: 'components_sections_map_sections';
  info: {
    displayName: 'map section';
    icon: 'map';
  };
  attributes: {
    submenuTitle: Attribute.String;
    title: Attribute.String;
  };
}

export interface SectionsNewsSection extends Schema.Component {
  collectionName: 'components_sections_news_sections';
  info: {
    displayName: 'news section';
    icon: 'newspaper';
  };
  attributes: {
    submenuTitle: Attribute.String;
    title: Attribute.String;
  };
}

export interface SectionsNewsletterSection extends Schema.Component {
  collectionName: 'components_sections_newsletter_sections';
  info: {
    description: '';
    displayName: 'newsletter section';
    icon: 'mail-bulk';
  };
  attributes: {
    submenuTitle: Attribute.String;
    subtitle: Attribute.String;
    text: Attribute.Text;
    title: Attribute.String;
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
    description: '';
    displayName: 'page section';
    icon: 'bars';
  };
  attributes: {
    contentPages: Attribute.Component<'blocks.content-page-item', true>;
    layout: Attribute.Enumeration<['chessboard', 'cards', 'fullwidth']> &
      Attribute.DefaultTo<'chessboard'>;
    submenuTitle: Attribute.String;
    title: Attribute.String;
  };
}

export interface SectionsPartnersSection extends Schema.Component {
  collectionName: 'components_sections_partners_sections';
  info: {
    description: '';
    displayName: 'partners section';
  };
  attributes: {
    partners: Attribute.Component<'blocks.partner-item', true>;
    submenuTitle: Attribute.String;
    title: Attribute.String;
  };
}

export interface SectionsRichtextSection extends Schema.Component {
  collectionName: 'components_sections_richtext_sections';
  info: {
    displayName: 'richtext section';
    icon: 'align-center';
  };
  attributes: {
    content: Attribute.RichText;
    submenuTitle: Attribute.String;
  };
}

export interface SectionsSliderSection extends Schema.Component {
  collectionName: 'components_sections_slider_sections';
  info: {
    displayName: 'slider section';
    icon: 'arrows-alt-h';
  };
  attributes: {
    medias: Attribute.Media<'images', true>;
    submenuTitle: Attribute.String;
  };
}

export interface SectionsTicketsSection extends Schema.Component {
  collectionName: 'components_sections_tickets_sections';
  info: {
    displayName: 'tickets section';
    icon: 'ticket-alt';
  };
  attributes: {
    submenuTitle: Attribute.String;
    text: Attribute.RichText;
    title: Attribute.String;
  };
}

export interface SectionsVideoSection extends Schema.Component {
  collectionName: 'components_sections_video_sections';
  info: {
    displayName: 'video section';
    icon: 'play-circle';
  };
  attributes: {
    submenuTitle: Attribute.String;
    title: Attribute.String;
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
      'blocks.menu-link-item': BlocksMenuLinkItem;
      'blocks.palace': BlocksPalace;
      'blocks.partner-item': BlocksPartnerItem;
      'blocks.position-item': BlocksPositionItem;
      'blocks.seo': BlocksSeo;
      'sections.archive-banner-section': SectionsArchiveBannerSection;
      'sections.audio-section': SectionsAudioSection;
      'sections.contact-cards-section': SectionsContactCardsSection;
      'sections.disclosure-section': SectionsDisclosureSection;
      'sections.download-section': SectionsDownloadSection;
      'sections.exhibition-archive-section': SectionsExhibitionArchiveSection;
      'sections.exhibitions-section': SectionsExhibitionsSection;
      'sections.explore-section': SectionsExploreSection;
      'sections.gallery-section': SectionsGallerySection;
      'sections.global-search-section': SectionsGlobalSearchSection;
      'sections.highlights-section': SectionsHighlightsSection;
      'sections.map-section': SectionsMapSection;
      'sections.news-section': SectionsNewsSection;
      'sections.newsletter-section': SectionsNewsletterSection;
      'sections.opening-hours-section': SectionsOpeningHoursSection;
      'sections.page-section': SectionsPageSection;
      'sections.partners-section': SectionsPartnersSection;
      'sections.richtext-section': SectionsRichtextSection;
      'sections.slider-section': SectionsSliderSection;
      'sections.tickets-section': SectionsTicketsSection;
      'sections.video-section': SectionsVideoSection;
    }
  }
}
