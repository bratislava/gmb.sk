import type { Schema, Struct } from '@strapi/strapi'

export interface BlocksContactCardItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contact_card_items'
  info: {
    displayName: 'contact card item'
    icon: 'address-card'
  }
  attributes: {
    contactCard: Schema.Attribute.Relation<'oneToOne', 'api::contact-card.contact-card'>
  }
}

export interface BlocksContentPageItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_content_page_items'
  info: {
    displayName: 'content page item'
    icon: 'file-invoice'
  }
  attributes: {
    contentPage: Schema.Attribute.Relation<'oneToOne', 'api::content-page.content-page'>
  }
}

export interface BlocksExhibitionArchive extends Struct.ComponentSchema {
  collectionName: 'components_blocks_exhibition_archives'
  info: {
    description: ''
    displayName: 'exhibition archive'
  }
  attributes: {
    color: Schema.Attribute.String
    coverMedia: Schema.Attribute.Media<'images'>
    perex: Schema.Attribute.Text
    subtitle: Schema.Attribute.String
    title: Schema.Attribute.String & Schema.Attribute.Required
    url: Schema.Attribute.String
  }
}

export interface BlocksFileItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_file_items'
  info: {
    displayName: 'file item'
    icon: 'file'
  }
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'audios'> & Schema.Attribute.Required
    title: Schema.Attribute.String
  }
}

export interface BlocksHighlightOverride extends Struct.ComponentSchema {
  collectionName: 'components_blocks_highlight_overrides'
  info: {
    displayName: 'highlight override'
    icon: 'exclamation'
  }
  attributes: {
    highlightContent: Schema.Attribute.RichText
  }
}

export interface BlocksLinkItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_link_items'
  info: {
    description: ''
    displayName: 'link item'
    icon: 'external-link-alt'
  }
  attributes: {
    newWindow: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>
    title: Schema.Attribute.String & Schema.Attribute.Required
    url: Schema.Attribute.String
  }
}

export interface BlocksLinks extends Struct.ComponentSchema {
  collectionName: 'components_blocks_links'
  info: {
    displayName: 'links'
    icon: 'list-ul'
  }
  attributes: {
    links: Schema.Attribute.Component<'blocks.link-item', true>
    title: Schema.Attribute.String
  }
}

export interface BlocksMenuLinkItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_menu_link_items'
  info: {
    description: ''
    displayName: 'menu link item'
  }
  attributes: {
    contentPage: Schema.Attribute.Relation<'oneToOne', 'api::content-page.content-page'>
    hasButtonStyle: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>
    mainPage: Schema.Attribute.Relation<'oneToOne', 'api::main-page.main-page'>
    title: Schema.Attribute.String & Schema.Attribute.Required
    url: Schema.Attribute.String
  }
}

export interface BlocksPalace extends Struct.ComponentSchema {
  collectionName: 'components_blocks_palaces'
  info: {
    displayName: 'palace'
    icon: 'building'
  }
  attributes: {
    address: Schema.Attribute.String
    city: Schema.Attribute.String
    phone: Schema.Attribute.String
    title: Schema.Attribute.String
    zip: Schema.Attribute.String
  }
}

export interface BlocksPartnerItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_partner_items'
  info: {
    displayName: 'partner item'
    icon: 'hands-helping'
  }
  attributes: {
    partner: Schema.Attribute.Relation<'oneToOne', 'api::partner.partner'>
  }
}

export interface BlocksPositionItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_position_items'
  info: {
    description: ''
    displayName: 'position item'
    icon: 'user'
  }
  attributes: {
    names: Schema.Attribute.Text
    title: Schema.Attribute.String
  }
}

export interface BlocksSeo extends Struct.ComponentSchema {
  collectionName: 'components_blocks_seos'
  info: {
    displayName: 'seo'
    icon: 'bolt'
  }
  attributes: {
    keywords: Schema.Attribute.String
    metaDescription: Schema.Attribute.Text
    metaImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false
        }
      }>
    metaTitle: Schema.Attribute.String
  }
}

export interface SectionsArchiveBannerSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_archive_banner_sections'
  info: {
    description: ''
    displayName: 'archive banner section'
  }
  attributes: {
    banner: Schema.Attribute.Component<'blocks.exhibition-archive', false> &
      Schema.Attribute.Required
    submenuTitle: Schema.Attribute.String
    title: Schema.Attribute.String
  }
}

export interface SectionsAudioSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_audio_sections'
  info: {
    displayName: 'audio section'
    icon: 'microphone'
  }
  attributes: {
    submenuTitle: Schema.Attribute.String
    title: Schema.Attribute.String
    url: Schema.Attribute.String
  }
}

export interface SectionsContactCardsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_cards_sections'
  info: {
    description: ''
    displayName: 'contact cards section'
    icon: 'address-card'
  }
  attributes: {
    contacts: Schema.Attribute.Component<'blocks.contact-card-item', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1
        },
        number
      >
    submenuTitle: Schema.Attribute.String
    title: Schema.Attribute.String
  }
}

export interface SectionsDisclosureSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_disclosure_sections'
  info: {
    description: ''
    displayName: 'disclosure section'
  }
  attributes: {
    submenuTitle: Schema.Attribute.String
    title: Schema.Attribute.String
  }
}

export interface SectionsDownloadSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_download_sections'
  info: {
    displayName: 'download section'
    icon: 'cloud-download-alt'
  }
  attributes: {
    files: Schema.Attribute.Component<'blocks.file-item', true>
    submenuTitle: Schema.Attribute.String
    title: Schema.Attribute.String
  }
}

export interface SectionsExhibitionArchiveSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_exhibition_archive_sections'
  info: {
    description: ''
    displayName: 'exhibition archive section'
    icon: 'archive'
  }
  attributes: {
    title: Schema.Attribute.String
  }
}

export interface SectionsExhibitionsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_exhibitions_sections'
  info: {
    description: ''
    displayName: 'exhibitions section'
    icon: 'brush'
  }
  attributes: {
    archiveBannerSection: Schema.Attribute.Component<'sections.archive-banner-section', false>
    title: Schema.Attribute.String
  }
}

export interface SectionsExploreSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_explore_sections'
  info: {
    displayName: 'explore section'
  }
  attributes: {
    title: Schema.Attribute.String
  }
}

export interface SectionsGallerySection extends Struct.ComponentSchema {
  collectionName: 'components_sections_gallery_sections'
  info: {
    displayName: 'gallery section'
    icon: 'images'
  }
  attributes: {
    medias: Schema.Attribute.Media<'images', true>
    submenuTitle: Schema.Attribute.String
    title: Schema.Attribute.String
  }
}

export interface SectionsGlobalSearchSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_global_search_sections'
  info: {
    displayName: 'global search section'
  }
  attributes: {
    title: Schema.Attribute.String
  }
}

export interface SectionsHighlightsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_highlights_sections'
  info: {
    displayName: 'highlights section'
  }
  attributes: {
    highlights: Schema.Attribute.Component<'blocks.content-page-item', true>
  }
}

export interface SectionsMapSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_map_sections'
  info: {
    displayName: 'map section'
    icon: 'map'
  }
  attributes: {
    submenuTitle: Schema.Attribute.String
    title: Schema.Attribute.String
  }
}

export interface SectionsNewsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_news_sections'
  info: {
    displayName: 'news section'
    icon: 'newspaper'
  }
  attributes: {
    submenuTitle: Schema.Attribute.String
    title: Schema.Attribute.String
  }
}

export interface SectionsNewsletterSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_newsletter_sections'
  info: {
    description: ''
    displayName: 'newsletter section'
    icon: 'mail-bulk'
  }
  attributes: {
    submenuTitle: Schema.Attribute.String
    subtitle: Schema.Attribute.String
    text: Schema.Attribute.Text
    title: Schema.Attribute.String
  }
}

export interface SectionsOpeningHoursSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_opening_hours_sections'
  info: {
    displayName: 'opening hours section'
    icon: 'clock'
  }
  attributes: {
    submenuTitle: Schema.Attribute.String
  }
}

export interface SectionsPageSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_page_sections'
  info: {
    description: ''
    displayName: 'page section'
    icon: 'bars'
  }
  attributes: {
    contentPages: Schema.Attribute.Component<'blocks.content-page-item', true>
    layout: Schema.Attribute.Enumeration<['chessboard', 'cards', 'fullwidth']> &
      Schema.Attribute.DefaultTo<'chessboard'>
    submenuTitle: Schema.Attribute.String
    title: Schema.Attribute.String
  }
}

export interface SectionsPartnersSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_partners_sections'
  info: {
    description: ''
    displayName: 'partners section'
  }
  attributes: {
    partners: Schema.Attribute.Component<'blocks.partner-item', true>
    submenuTitle: Schema.Attribute.String
    title: Schema.Attribute.String
  }
}

export interface SectionsRichtextSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_richtext_sections'
  info: {
    displayName: 'richtext section'
    icon: 'align-center'
  }
  attributes: {
    content: Schema.Attribute.RichText
    submenuTitle: Schema.Attribute.String
  }
}

export interface SectionsSliderSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_slider_sections'
  info: {
    displayName: 'slider section'
    icon: 'arrows-alt-h'
  }
  attributes: {
    medias: Schema.Attribute.Media<'images', true>
    submenuTitle: Schema.Attribute.String
  }
}

export interface SectionsTicketsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_tickets_sections'
  info: {
    displayName: 'tickets section'
    icon: 'ticket-alt'
  }
  attributes: {
    submenuTitle: Schema.Attribute.String
    text: Schema.Attribute.RichText
    title: Schema.Attribute.String
  }
}

export interface SectionsVideoSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_video_sections'
  info: {
    displayName: 'video section'
    icon: 'play-circle'
  }
  attributes: {
    submenuTitle: Schema.Attribute.String
    title: Schema.Attribute.String
    url: Schema.Attribute.String
  }
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.contact-card-item': BlocksContactCardItem
      'blocks.content-page-item': BlocksContentPageItem
      'blocks.exhibition-archive': BlocksExhibitionArchive
      'blocks.file-item': BlocksFileItem
      'blocks.highlight-override': BlocksHighlightOverride
      'blocks.link-item': BlocksLinkItem
      'blocks.links': BlocksLinks
      'blocks.menu-link-item': BlocksMenuLinkItem
      'blocks.palace': BlocksPalace
      'blocks.partner-item': BlocksPartnerItem
      'blocks.position-item': BlocksPositionItem
      'blocks.seo': BlocksSeo
      'sections.archive-banner-section': SectionsArchiveBannerSection
      'sections.audio-section': SectionsAudioSection
      'sections.contact-cards-section': SectionsContactCardsSection
      'sections.disclosure-section': SectionsDisclosureSection
      'sections.download-section': SectionsDownloadSection
      'sections.exhibition-archive-section': SectionsExhibitionArchiveSection
      'sections.exhibitions-section': SectionsExhibitionsSection
      'sections.explore-section': SectionsExploreSection
      'sections.gallery-section': SectionsGallerySection
      'sections.global-search-section': SectionsGlobalSearchSection
      'sections.highlights-section': SectionsHighlightsSection
      'sections.map-section': SectionsMapSection
      'sections.news-section': SectionsNewsSection
      'sections.newsletter-section': SectionsNewsletterSection
      'sections.opening-hours-section': SectionsOpeningHoursSection
      'sections.page-section': SectionsPageSection
      'sections.partners-section': SectionsPartnersSection
      'sections.richtext-section': SectionsRichtextSection
      'sections.slider-section': SectionsSliderSection
      'sections.tickets-section': SectionsTicketsSection
      'sections.video-section': SectionsVideoSection
    }
  }
}
