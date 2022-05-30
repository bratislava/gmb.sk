import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Input type for dynamic zone sections of AboutPage */
  AboutPageSectionsDynamicZoneInput: any;
  /** Input type for dynamic zone sections of CollectionsPage */
  CollectionsPageSectionsDynamicZoneInput: any;
  /** Input type for dynamic zone mainContent of ContentPage */
  ContentPageMainContentDynamicZoneInput: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** Input type for dynamic zone sections of ExplorePage */
  ExplorePageSectionsDynamicZoneInput: any;
  /** Input type for dynamic zone sections of GetInvolvedPage */
  GetInvolvedPageSectionsDynamicZoneInput: any;
  /** Input type for dynamic zone sections of Homepage */
  HomepageSectionsDynamicZoneInput: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  /** Input type for dynamic zone sections of VisitUsPage */
  VisitUsPageSectionsDynamicZoneInput: any;
};

export type AboutPage = {
  __typename?: 'AboutPage';
  created_at: Scalars['DateTime'];
  highlights?: Maybe<ComponentBlocksHighlights>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<AboutPage>>>;
  sections?: Maybe<Array<Maybe<AboutPageSectionsDynamicZone>>>;
  seo?: Maybe<ComponentBlocksSeo>;
  updated_at: Scalars['DateTime'];
};


export type AboutPageLocalizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type AboutPageInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  highlights?: InputMaybe<ComponentBlocksHighlightInput>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  sections?: InputMaybe<Array<Scalars['AboutPageSectionsDynamicZoneInput']>>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type AboutPageSectionsDynamicZone = ComponentSectionsContactSection | ComponentSectionsNewsSection | ComponentSectionsNewsletter | ComponentSectionsPageSection;

export type AdminUser = {
  __typename?: 'AdminUser';
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type CollectionsPage = {
  __typename?: 'CollectionsPage';
  created_at: Scalars['DateTime'];
  highlights?: Maybe<ComponentBlocksHighlights>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<CollectionsPage>>>;
  sections?: Maybe<Array<Maybe<CollectionsPageSectionsDynamicZone>>>;
  seo?: Maybe<ComponentBlocksSeo>;
  updated_at: Scalars['DateTime'];
};


export type CollectionsPageLocalizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type CollectionsPageInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  highlights?: InputMaybe<ComponentBlocksHighlightInput>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  sections?: InputMaybe<Array<Scalars['CollectionsPageSectionsDynamicZoneInput']>>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type CollectionsPageSectionsDynamicZone = ComponentSectionsContactSection | ComponentSectionsNewsSection | ComponentSectionsNewsletter | ComponentSectionsPageSection;

export type ComponentBlocksColor = {
  __typename?: 'ComponentBlocksColor';
  hexCode?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  inheritFrom?: Maybe<ContentPage>;
};

export type ComponentBlocksColorInput = {
  hexCode?: InputMaybe<Scalars['String']>;
  inheritFrom?: InputMaybe<Scalars['ID']>;
};

export type ComponentBlocksDatetime = {
  __typename?: 'ComponentBlocksDatetime';
  dateFrom?: Maybe<Scalars['Date']>;
  dateTo?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  showRemainingTime?: Maybe<Scalars['Boolean']>;
  timeFrom?: Maybe<Scalars['Time']>;
  timeTo?: Maybe<Scalars['Time']>;
};

export type ComponentBlocksDatetimeInput = {
  dateFrom?: InputMaybe<Scalars['Date']>;
  dateTo?: InputMaybe<Scalars['Date']>;
  showRemainingTime?: InputMaybe<Scalars['Boolean']>;
  timeFrom?: InputMaybe<Scalars['Time']>;
  timeTo?: InputMaybe<Scalars['Time']>;
};

export type ComponentBlocksFileItem = {
  __typename?: 'ComponentBlocksFileItem';
  file?: Maybe<UploadFile>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentBlocksFileItemInput = {
  file?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksHighlightInput = {
  contentPages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ComponentBlocksHighlightOverride = {
  __typename?: 'ComponentBlocksHighlightOverride';
  highlightContent?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ComponentBlocksHighlightOverrideInput = {
  highlightContent?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksHighlights = {
  __typename?: 'ComponentBlocksHighlights';
  contentPages?: Maybe<Array<Maybe<ContentPage>>>;
  id: Scalars['ID'];
};


export type ComponentBlocksHighlightsContentPagesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ComponentBlocksPartnerInput = {
  partners?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ComponentBlocksPartners = {
  __typename?: 'ComponentBlocksPartners';
  id: Scalars['ID'];
  partners?: Maybe<Array<Maybe<Partners>>>;
};


export type ComponentBlocksPartnersPartnersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ComponentBlocksPlace = {
  __typename?: 'ComponentBlocksPlace';
  address?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  placeSelect?: Maybe<Places>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentBlocksPlaceInput = {
  address?: InputMaybe<Scalars['String']>;
  placeSelect?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksPositionItem = {
  __typename?: 'ComponentBlocksPositionItem';
  id: Scalars['ID'];
  names?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentBlocksPositionItemInput = {
  names?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksSeo = {
  __typename?: 'ComponentBlocksSeo';
  canonicalUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  keywords?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaRobots?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaViewport?: Maybe<Scalars['String']>;
};

export type ComponentBlocksSeoInput = {
  canonicalUrl?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaRobots?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
  metaViewport?: InputMaybe<Scalars['String']>;
};

export type ComponentComposedBlocksEventDetailInput = {
  datetime?: InputMaybe<ComponentBlocksDatetimeInput>;
  partners?: InputMaybe<ComponentBlocksPartnerInput>;
  place?: InputMaybe<ComponentBlocksPlaceInput>;
  positions?: InputMaybe<Array<InputMaybe<ComponentBlocksPositionItemInput>>>;
};

export type ComponentComposedBlocksEventDetails = {
  __typename?: 'ComponentComposedBlocksEventDetails';
  datetime?: Maybe<ComponentBlocksDatetime>;
  id: Scalars['ID'];
  partners?: Maybe<ComponentBlocksPartners>;
  place?: Maybe<ComponentBlocksPlace>;
  positions?: Maybe<Array<Maybe<ComponentBlocksPositionItem>>>;
};

export type ComponentContactLink = {
  __typename?: 'ComponentContactLink';
  id: Scalars['ID'];
  title: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type ComponentContactLinkInput = {
  title: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentContactPalace = {
  __typename?: 'ComponentContactPalace';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  phone?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type ComponentContactPalaceInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsContactSection = {
  __typename?: 'ComponentSectionsContactSection';
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
};

export type ComponentSectionsContactSectionInput = {
  submenuTitle?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsDownloadSection = {
  __typename?: 'ComponentSectionsDownloadSection';
  files?: Maybe<Array<Maybe<ComponentBlocksFileItem>>>;
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsDownloadSectionInput = {
  files?: InputMaybe<Array<InputMaybe<ComponentBlocksFileItemInput>>>;
  submenuTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsMapSection = {
  __typename?: 'ComponentSectionsMapSection';
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsMapSectionInput = {
  submenuTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsNewsSection = {
  __typename?: 'ComponentSectionsNewsSection';
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsNewsSectionInput = {
  submenuTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsNewsletter = {
  __typename?: 'ComponentSectionsNewsletter';
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
};

export type ComponentSectionsNewsletterInput = {
  submenuTitle?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsPageSection = {
  __typename?: 'ComponentSectionsPageSection';
  contentPages?: Maybe<Array<Maybe<ContentPage>>>;
  id: Scalars['ID'];
  layout?: Maybe<Enum_Componentsectionspagesection_Layout>;
  submenuTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentSectionsPageSectionContentPagesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ComponentSectionsPageSectionInput = {
  contentPages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  layout?: InputMaybe<Enum_Componentsectionspagesection_Layout>;
  submenuTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsRichtextSection = {
  __typename?: 'ComponentSectionsRichtextSection';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
};

export type ComponentSectionsRichtextSectionInput = {
  content?: InputMaybe<Scalars['String']>;
  submenuTitle?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsSliderSection = {
  __typename?: 'ComponentSectionsSliderSection';
  id: Scalars['ID'];
  medias?: Maybe<Array<Maybe<UploadFile>>>;
  submenuTitle?: Maybe<Scalars['String']>;
};


export type ComponentSectionsSliderSectionMediasArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ComponentSectionsSliderSectionInput = {
  medias?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  submenuTitle?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsTicketsSection = {
  __typename?: 'ComponentSectionsTicketsSection';
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsTicketsSectionInput = {
  submenuTitle?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsVideoSection = {
  __typename?: 'ComponentSectionsVideoSection';
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentSectionsVideoSectionInput = {
  submenuTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type Contact = {
  __typename?: 'Contact';
  created_at: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Contact>>>;
  mirbach?: Maybe<ComponentContactPalace>;
  name?: Maybe<Scalars['String']>;
  openingHours?: Maybe<Scalars['String']>;
  palffy?: Maybe<ComponentContactPalace>;
  quickLinks?: Maybe<Array<Maybe<ComponentContactLink>>>;
  updated_at: Scalars['DateTime'];
};


export type ContactLocalizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ContactInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  mirbach?: InputMaybe<ComponentContactPalaceInput>;
  name?: InputMaybe<Scalars['String']>;
  openingHours?: InputMaybe<Scalars['String']>;
  palffy?: InputMaybe<ComponentContactPalaceInput>;
  quickLinks?: InputMaybe<Array<InputMaybe<ComponentContactLinkInput>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type ContentPage = {
  __typename?: 'ContentPage';
  childPages?: Maybe<Array<Maybe<ContentPage>>>;
  color?: Maybe<Scalars['String']>;
  coverMedia?: Maybe<UploadFile>;
  created_at: Scalars['DateTime'];
  dateFrom?: Maybe<Scalars['Date']>;
  dateTo?: Maybe<Scalars['Date']>;
  downloadSection?: Maybe<ComponentSectionsDownloadSection>;
  id: Scalars['ID'];
  inheritColorFromParent?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<ContentPage>>>;
  mainContent?: Maybe<Array<Maybe<ContentPageMainContentDynamicZone>>>;
  override?: Maybe<ComponentBlocksHighlightOverride>;
  parentPage?: Maybe<ContentPage>;
  partners?: Maybe<Array<Maybe<Partners>>>;
  perex?: Maybe<Scalars['String']>;
  place?: Maybe<Places>;
  placeAddress?: Maybe<Scalars['String']>;
  placeTitle?: Maybe<Scalars['String']>;
  positions?: Maybe<Array<Maybe<ComponentBlocksPositionItem>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  purchaseId?: Maybe<Scalars['String']>;
  relatedContentSubmenuTitle?: Maybe<Scalars['String']>;
  relatedContentTitle?: Maybe<Scalars['String']>;
  seo?: Maybe<ComponentBlocksSeo>;
  showRemainingTime?: Maybe<Scalars['Boolean']>;
  slider?: Maybe<ComponentSectionsSliderSection>;
  slug: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  timeFrom?: Maybe<Scalars['Time']>;
  timeTo?: Maybe<Scalars['Time']>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};


export type ContentPageChildPagesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type ContentPageLocalizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type ContentPagePartnersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type ContentPageTagsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ContentPageAggregator = {
  __typename?: 'ContentPageAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ContentPageConnection = {
  __typename?: 'ContentPageConnection';
  aggregate?: Maybe<ContentPageAggregator>;
  groupBy?: Maybe<ContentPageGroupBy>;
  values?: Maybe<Array<Maybe<ContentPage>>>;
};

export type ContentPageConnectionColor = {
  __typename?: 'ContentPageConnectionColor';
  connection?: Maybe<ContentPageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ContentPageConnectionCoverMedia = {
  __typename?: 'ContentPageConnectionCoverMedia';
  connection?: Maybe<ContentPageConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ContentPageConnectionCreated_At = {
  __typename?: 'ContentPageConnectionCreated_at';
  connection?: Maybe<ContentPageConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ContentPageConnectionDateFrom = {
  __typename?: 'ContentPageConnectionDateFrom';
  connection?: Maybe<ContentPageConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ContentPageConnectionDateTo = {
  __typename?: 'ContentPageConnectionDateTo';
  connection?: Maybe<ContentPageConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ContentPageConnectionDownloadSection = {
  __typename?: 'ContentPageConnectionDownloadSection';
  connection?: Maybe<ContentPageConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ContentPageConnectionId = {
  __typename?: 'ContentPageConnectionId';
  connection?: Maybe<ContentPageConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ContentPageConnectionInheritColorFromParent = {
  __typename?: 'ContentPageConnectionInheritColorFromParent';
  connection?: Maybe<ContentPageConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type ContentPageConnectionLocale = {
  __typename?: 'ContentPageConnectionLocale';
  connection?: Maybe<ContentPageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ContentPageConnectionOverride = {
  __typename?: 'ContentPageConnectionOverride';
  connection?: Maybe<ContentPageConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ContentPageConnectionParentPage = {
  __typename?: 'ContentPageConnectionParentPage';
  connection?: Maybe<ContentPageConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ContentPageConnectionPerex = {
  __typename?: 'ContentPageConnectionPerex';
  connection?: Maybe<ContentPageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ContentPageConnectionPlace = {
  __typename?: 'ContentPageConnectionPlace';
  connection?: Maybe<ContentPageConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ContentPageConnectionPlaceAddress = {
  __typename?: 'ContentPageConnectionPlaceAddress';
  connection?: Maybe<ContentPageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ContentPageConnectionPlaceTitle = {
  __typename?: 'ContentPageConnectionPlaceTitle';
  connection?: Maybe<ContentPageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ContentPageConnectionPublished_At = {
  __typename?: 'ContentPageConnectionPublished_at';
  connection?: Maybe<ContentPageConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ContentPageConnectionPurchaseId = {
  __typename?: 'ContentPageConnectionPurchaseId';
  connection?: Maybe<ContentPageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ContentPageConnectionRelatedContentSubmenuTitle = {
  __typename?: 'ContentPageConnectionRelatedContentSubmenuTitle';
  connection?: Maybe<ContentPageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ContentPageConnectionRelatedContentTitle = {
  __typename?: 'ContentPageConnectionRelatedContentTitle';
  connection?: Maybe<ContentPageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ContentPageConnectionSeo = {
  __typename?: 'ContentPageConnectionSeo';
  connection?: Maybe<ContentPageConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ContentPageConnectionShowRemainingTime = {
  __typename?: 'ContentPageConnectionShowRemainingTime';
  connection?: Maybe<ContentPageConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type ContentPageConnectionSlider = {
  __typename?: 'ContentPageConnectionSlider';
  connection?: Maybe<ContentPageConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ContentPageConnectionSlug = {
  __typename?: 'ContentPageConnectionSlug';
  connection?: Maybe<ContentPageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ContentPageConnectionSubtitle = {
  __typename?: 'ContentPageConnectionSubtitle';
  connection?: Maybe<ContentPageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ContentPageConnectionTimeFrom = {
  __typename?: 'ContentPageConnectionTimeFrom';
  connection?: Maybe<ContentPageConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ContentPageConnectionTimeTo = {
  __typename?: 'ContentPageConnectionTimeTo';
  connection?: Maybe<ContentPageConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ContentPageConnectionTitle = {
  __typename?: 'ContentPageConnectionTitle';
  connection?: Maybe<ContentPageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ContentPageConnectionUpdated_At = {
  __typename?: 'ContentPageConnectionUpdated_at';
  connection?: Maybe<ContentPageConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ContentPageGroupBy = {
  __typename?: 'ContentPageGroupBy';
  color?: Maybe<Array<Maybe<ContentPageConnectionColor>>>;
  coverMedia?: Maybe<Array<Maybe<ContentPageConnectionCoverMedia>>>;
  created_at?: Maybe<Array<Maybe<ContentPageConnectionCreated_At>>>;
  dateFrom?: Maybe<Array<Maybe<ContentPageConnectionDateFrom>>>;
  dateTo?: Maybe<Array<Maybe<ContentPageConnectionDateTo>>>;
  downloadSection?: Maybe<Array<Maybe<ContentPageConnectionDownloadSection>>>;
  id?: Maybe<Array<Maybe<ContentPageConnectionId>>>;
  inheritColorFromParent?: Maybe<Array<Maybe<ContentPageConnectionInheritColorFromParent>>>;
  locale?: Maybe<Array<Maybe<ContentPageConnectionLocale>>>;
  override?: Maybe<Array<Maybe<ContentPageConnectionOverride>>>;
  parentPage?: Maybe<Array<Maybe<ContentPageConnectionParentPage>>>;
  perex?: Maybe<Array<Maybe<ContentPageConnectionPerex>>>;
  place?: Maybe<Array<Maybe<ContentPageConnectionPlace>>>;
  placeAddress?: Maybe<Array<Maybe<ContentPageConnectionPlaceAddress>>>;
  placeTitle?: Maybe<Array<Maybe<ContentPageConnectionPlaceTitle>>>;
  published_at?: Maybe<Array<Maybe<ContentPageConnectionPublished_At>>>;
  purchaseId?: Maybe<Array<Maybe<ContentPageConnectionPurchaseId>>>;
  relatedContentSubmenuTitle?: Maybe<Array<Maybe<ContentPageConnectionRelatedContentSubmenuTitle>>>;
  relatedContentTitle?: Maybe<Array<Maybe<ContentPageConnectionRelatedContentTitle>>>;
  seo?: Maybe<Array<Maybe<ContentPageConnectionSeo>>>;
  showRemainingTime?: Maybe<Array<Maybe<ContentPageConnectionShowRemainingTime>>>;
  slider?: Maybe<Array<Maybe<ContentPageConnectionSlider>>>;
  slug?: Maybe<Array<Maybe<ContentPageConnectionSlug>>>;
  subtitle?: Maybe<Array<Maybe<ContentPageConnectionSubtitle>>>;
  timeFrom?: Maybe<Array<Maybe<ContentPageConnectionTimeFrom>>>;
  timeTo?: Maybe<Array<Maybe<ContentPageConnectionTimeTo>>>;
  title?: Maybe<Array<Maybe<ContentPageConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<ContentPageConnectionUpdated_At>>>;
};

export type ContentPageInput = {
  childPages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  color?: InputMaybe<Scalars['String']>;
  coverMedia?: InputMaybe<Scalars['ID']>;
  created_by?: InputMaybe<Scalars['ID']>;
  dateFrom?: InputMaybe<Scalars['Date']>;
  dateTo?: InputMaybe<Scalars['Date']>;
  downloadSection?: InputMaybe<ComponentSectionsDownloadSectionInput>;
  inheritColorFromParent?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  mainContent?: InputMaybe<Array<Scalars['ContentPageMainContentDynamicZoneInput']>>;
  override?: InputMaybe<ComponentBlocksHighlightOverrideInput>;
  parentPage?: InputMaybe<Scalars['ID']>;
  partners?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  perex?: InputMaybe<Scalars['String']>;
  place?: InputMaybe<Scalars['ID']>;
  placeAddress?: InputMaybe<Scalars['String']>;
  placeTitle?: InputMaybe<Scalars['String']>;
  positions?: InputMaybe<Array<InputMaybe<ComponentBlocksPositionItemInput>>>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  purchaseId?: InputMaybe<Scalars['String']>;
  relatedContentSubmenuTitle?: InputMaybe<Scalars['String']>;
  relatedContentTitle?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
  showRemainingTime?: InputMaybe<Scalars['Boolean']>;
  slider?: InputMaybe<ComponentSectionsSliderSectionInput>;
  slug: Scalars['String'];
  subtitle?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  timeFrom?: InputMaybe<Scalars['Time']>;
  timeTo?: InputMaybe<Scalars['Time']>;
  title: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type ContentPageMainContentDynamicZone = ComponentSectionsRichtextSection | ComponentSectionsVideoSection;

export enum Enum_Componentsectionspagesection_Layout {
  Cards = 'cards',
  Chessboard = 'chessboard',
  Fullwidth = 'fullwidth'
}

export type ExhibitionsPage = {
  __typename?: 'ExhibitionsPage';
  created_at: Scalars['DateTime'];
  highlights?: Maybe<ComponentBlocksHighlights>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<ExhibitionsPage>>>;
  seo?: Maybe<ComponentBlocksSeo>;
  updated_at: Scalars['DateTime'];
};


export type ExhibitionsPageLocalizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ExhibitionsPageInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  highlights?: InputMaybe<ComponentBlocksHighlightInput>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type ExplorePage = {
  __typename?: 'ExplorePage';
  created_at: Scalars['DateTime'];
  highlights?: Maybe<ComponentBlocksHighlights>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<ExplorePage>>>;
  sections?: Maybe<Array<Maybe<ExplorePageSectionsDynamicZone>>>;
  seo?: Maybe<ComponentBlocksSeo>;
  updated_at: Scalars['DateTime'];
};


export type ExplorePageLocalizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ExplorePageInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  highlights?: InputMaybe<ComponentBlocksHighlightInput>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  sections?: InputMaybe<Array<Scalars['ExplorePageSectionsDynamicZoneInput']>>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type ExplorePageSectionsDynamicZone = ComponentSectionsContactSection | ComponentSectionsNewsSection | ComponentSectionsNewsletter | ComponentSectionsPageSection;

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size: Scalars['Float'];
  updated_by?: InputMaybe<Scalars['ID']>;
  url: Scalars['String'];
  width?: InputMaybe<Scalars['Int']>;
};

export type GetInvolvedPage = {
  __typename?: 'GetInvolvedPage';
  created_at: Scalars['DateTime'];
  highlights?: Maybe<ComponentBlocksHighlights>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<GetInvolvedPage>>>;
  sections?: Maybe<Array<Maybe<GetInvolvedPageSectionsDynamicZone>>>;
  seo?: Maybe<ComponentBlocksSeo>;
  updated_at: Scalars['DateTime'];
};


export type GetInvolvedPageLocalizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type GetInvolvedPageInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  highlights?: InputMaybe<ComponentBlocksHighlightInput>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  sections?: InputMaybe<Array<Scalars['GetInvolvedPageSectionsDynamicZoneInput']>>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type GetInvolvedPageSectionsDynamicZone = ComponentSectionsContactSection | ComponentSectionsNewsSection | ComponentSectionsNewsletter | ComponentSectionsPageSection;

export type Homepage = {
  __typename?: 'Homepage';
  created_at: Scalars['DateTime'];
  highlights?: Maybe<ComponentBlocksHighlights>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Homepage>>>;
  partnersSection?: Maybe<ComponentBlocksPartners>;
  sections?: Maybe<Array<Maybe<HomepageSectionsDynamicZone>>>;
  seo?: Maybe<ComponentBlocksSeo>;
  updated_at: Scalars['DateTime'];
};


export type HomepageLocalizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type HomepageInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  highlights?: InputMaybe<ComponentBlocksHighlightInput>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  partnersSection?: InputMaybe<ComponentBlocksPartnerInput>;
  sections?: InputMaybe<Array<Scalars['HomepageSectionsDynamicZoneInput']>>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type HomepageSectionsDynamicZone = ComponentSectionsContactSection | ComponentSectionsNewsSection | ComponentSectionsNewsletter | ComponentSectionsPageSection;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type InputId = {
  id: Scalars['ID'];
};

export type LocaleInput = {
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Morph = AboutPage | CollectionsPage | ComponentBlocksColor | ComponentBlocksDatetime | ComponentBlocksFileItem | ComponentBlocksHighlightOverride | ComponentBlocksHighlights | ComponentBlocksPartners | ComponentBlocksPlace | ComponentBlocksPositionItem | ComponentBlocksSeo | ComponentComposedBlocksEventDetails | ComponentContactLink | ComponentContactPalace | ComponentSectionsContactSection | ComponentSectionsDownloadSection | ComponentSectionsMapSection | ComponentSectionsNewsSection | ComponentSectionsNewsletter | ComponentSectionsPageSection | ComponentSectionsRichtextSection | ComponentSectionsSliderSection | ComponentSectionsTicketsSection | ComponentSectionsVideoSection | Contact | ContentPage | ContentPageAggregator | ContentPageConnection | ContentPageConnectionColor | ContentPageConnectionCoverMedia | ContentPageConnectionCreated_At | ContentPageConnectionDateFrom | ContentPageConnectionDateTo | ContentPageConnectionDownloadSection | ContentPageConnectionId | ContentPageConnectionInheritColorFromParent | ContentPageConnectionLocale | ContentPageConnectionOverride | ContentPageConnectionParentPage | ContentPageConnectionPerex | ContentPageConnectionPlace | ContentPageConnectionPlaceAddress | ContentPageConnectionPlaceTitle | ContentPageConnectionPublished_At | ContentPageConnectionPurchaseId | ContentPageConnectionRelatedContentSubmenuTitle | ContentPageConnectionRelatedContentTitle | ContentPageConnectionSeo | ContentPageConnectionShowRemainingTime | ContentPageConnectionSlider | ContentPageConnectionSlug | ContentPageConnectionSubtitle | ContentPageConnectionTimeFrom | ContentPageConnectionTimeTo | ContentPageConnectionTitle | ContentPageConnectionUpdated_At | ContentPageGroupBy | ExhibitionsPage | ExplorePage | GetInvolvedPage | Homepage | I18NLocale | Partners | PartnersAggregator | PartnersConnection | PartnersConnectionCreated_At | PartnersConnectionId | PartnersConnectionLink | PartnersConnectionLogo | PartnersConnectionTitle | PartnersConnectionUpdated_At | PartnersGroupBy | Places | PlacesAggregator | PlacesConnection | PlacesConnectionAddress | PlacesConnectionCreated_At | PlacesConnectionId | PlacesConnectionLocale | PlacesConnectionSlug | PlacesConnectionTitle | PlacesConnectionUpdated_At | PlacesGroupBy | Tag | TagAggregator | TagCategory | TagCategoryAggregator | TagCategoryConnection | TagCategoryConnectionCreated_At | TagCategoryConnectionId | TagCategoryConnectionLocale | TagCategoryConnectionSlug | TagCategoryConnectionTitle | TagCategoryConnectionUpdated_At | TagCategoryGroupBy | TagConnection | TagConnectionCategory | TagConnectionCreated_At | TagConnectionId | TagConnectionLocale | TagConnectionSlug | TagConnectionTitle | TagConnectionUpdated_At | TagGroupBy | Ticket | TicketAggregator | TicketAggregatorAvg | TicketAggregatorMax | TicketAggregatorMin | TicketAggregatorSum | TicketConnection | TicketConnectionCreated_At | TicketConnectionDescription | TicketConnectionId | TicketConnectionLink | TicketConnectionLocale | TicketConnectionPrice | TicketConnectionPublished_At | TicketConnectionTitle | TicketConnectionUpdated_At | TicketGroupBy | UploadFile | UploadFileAggregator | UploadFileAggregatorAvg | UploadFileAggregatorMax | UploadFileAggregatorMin | UploadFileAggregatorSum | UploadFileConnection | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionCreated_At | UploadFileConnectionExt | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionHeight | UploadFileConnectionId | UploadFileConnectionMime | UploadFileConnectionName | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionSize | UploadFileConnectionUpdated_At | UploadFileConnectionUrl | UploadFileConnectionWidth | UploadFileGroupBy | UserPermissionsPasswordPayload | UsersPermissionsLoginPayload | UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleAggregator | UsersPermissionsRoleConnection | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionType | UsersPermissionsRoleGroupBy | UsersPermissionsUser | UsersPermissionsUserAggregator | UsersPermissionsUserConnection | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserGroupBy | VisitUsPage | CreateContentPagePayload | CreatePartnerPayload | CreatePlacePayload | CreateRolePayload | CreateTagCategoryPayload | CreateTagPayload | CreateTicketPayload | CreateUserPayload | DeleteAboutPagePayload | DeleteCollectionsPagePayload | DeleteContactPayload | DeleteContentPagePayload | DeleteExhibitionsPagePayload | DeleteExplorePagePayload | DeleteFilePayload | DeleteGetInvolvedPagePayload | DeleteHomepagePayload | DeletePartnerPayload | DeletePlacePayload | DeleteRolePayload | DeleteTagCategoryPayload | DeleteTagPayload | DeleteTicketPayload | DeleteUserPayload | DeleteVisitUsPagePayload | UpdateAboutPagePayload | UpdateCollectionsPagePayload | UpdateContactPayload | UpdateContentPagePayload | UpdateExhibitionsPagePayload | UpdateExplorePagePayload | UpdateGetInvolvedPagePayload | UpdateHomepagePayload | UpdatePartnerPayload | UpdatePlacePayload | UpdateRolePayload | UpdateTagCategoryPayload | UpdateTagPayload | UpdateTicketPayload | UpdateUserPayload | UpdateVisitUsPagePayload;

export type Mutation = {
  __typename?: 'Mutation';
  createAboutPageLocalization: AboutPage;
  createCollectionsPageLocalization: CollectionsPage;
  createContactLocalization: Contact;
  createContentPage?: Maybe<CreateContentPagePayload>;
  createContentPageLocalization: ContentPage;
  createExhibitionsPageLocalization: ExhibitionsPage;
  createExplorePageLocalization: ExplorePage;
  createGetInvolvedPageLocalization: GetInvolvedPage;
  createHomepageLocalization: Homepage;
  createPartner?: Maybe<CreatePartnerPayload>;
  createPlace?: Maybe<CreatePlacePayload>;
  createPlaceLocalization: Places;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  createTag?: Maybe<CreateTagPayload>;
  createTagCategory?: Maybe<CreateTagCategoryPayload>;
  createTagCategoryLocalization: TagCategory;
  createTagLocalization: Tag;
  createTicket?: Maybe<CreateTicketPayload>;
  createTicketLocalization: Ticket;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  createVisitUsPageLocalization: VisitUsPage;
  deleteAboutPage?: Maybe<DeleteAboutPagePayload>;
  deleteCollectionsPage?: Maybe<DeleteCollectionsPagePayload>;
  deleteContact?: Maybe<DeleteContactPayload>;
  deleteContentPage?: Maybe<DeleteContentPagePayload>;
  deleteExhibitionsPage?: Maybe<DeleteExhibitionsPagePayload>;
  deleteExplorePage?: Maybe<DeleteExplorePagePayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  deleteGetInvolvedPage?: Maybe<DeleteGetInvolvedPagePayload>;
  deleteHomepage?: Maybe<DeleteHomepagePayload>;
  deletePartner?: Maybe<DeletePartnerPayload>;
  deletePlace?: Maybe<DeletePlacePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  deleteTag?: Maybe<DeleteTagPayload>;
  deleteTagCategory?: Maybe<DeleteTagCategoryPayload>;
  deleteTicket?: Maybe<DeleteTicketPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  deleteVisitUsPage?: Maybe<DeleteVisitUsPagePayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFile>>;
  register: UsersPermissionsLoginPayload;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAboutPage?: Maybe<UpdateAboutPagePayload>;
  updateCollectionsPage?: Maybe<UpdateCollectionsPagePayload>;
  updateContact?: Maybe<UpdateContactPayload>;
  updateContentPage?: Maybe<UpdateContentPagePayload>;
  updateExhibitionsPage?: Maybe<UpdateExhibitionsPagePayload>;
  updateExplorePage?: Maybe<UpdateExplorePagePayload>;
  updateFileInfo: UploadFile;
  updateGetInvolvedPage?: Maybe<UpdateGetInvolvedPagePayload>;
  updateHomepage?: Maybe<UpdateHomepagePayload>;
  updatePartner?: Maybe<UpdatePartnerPayload>;
  updatePlace?: Maybe<UpdatePlacePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  updateTag?: Maybe<UpdateTagPayload>;
  updateTagCategory?: Maybe<UpdateTagCategoryPayload>;
  updateTicket?: Maybe<UpdateTicketPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  updateVisitUsPage?: Maybe<UpdateVisitUsPagePayload>;
  upload: UploadFile;
};


export type MutationCreateAboutPageLocalizationArgs = {
  input: UpdateAboutPageInput;
};


export type MutationCreateCollectionsPageLocalizationArgs = {
  input: UpdateCollectionsPageInput;
};


export type MutationCreateContactLocalizationArgs = {
  input: UpdateContactInput;
};


export type MutationCreateContentPageArgs = {
  input?: InputMaybe<CreateContentPageInput>;
};


export type MutationCreateContentPageLocalizationArgs = {
  input: UpdateContentPageInput;
};


export type MutationCreateExhibitionsPageLocalizationArgs = {
  input: UpdateExhibitionsPageInput;
};


export type MutationCreateExplorePageLocalizationArgs = {
  input: UpdateExplorePageInput;
};


export type MutationCreateGetInvolvedPageLocalizationArgs = {
  input: UpdateGetInvolvedPageInput;
};


export type MutationCreateHomepageLocalizationArgs = {
  input: UpdateHomepageInput;
};


export type MutationCreatePartnerArgs = {
  input?: InputMaybe<CreatePartnerInput>;
};


export type MutationCreatePlaceArgs = {
  input?: InputMaybe<CreatePlaceInput>;
};


export type MutationCreatePlaceLocalizationArgs = {
  input: UpdatePlaceInput;
};


export type MutationCreateRoleArgs = {
  input?: InputMaybe<CreateRoleInput>;
};


export type MutationCreateTagArgs = {
  input?: InputMaybe<CreateTagInput>;
};


export type MutationCreateTagCategoryArgs = {
  input?: InputMaybe<CreateTagCategoryInput>;
};


export type MutationCreateTagCategoryLocalizationArgs = {
  input: UpdateTagCategoryInput;
};


export type MutationCreateTagLocalizationArgs = {
  input: UpdateTagInput;
};


export type MutationCreateTicketArgs = {
  input?: InputMaybe<CreateTicketInput>;
};


export type MutationCreateTicketLocalizationArgs = {
  input: UpdateTicketInput;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationCreateVisitUsPageLocalizationArgs = {
  input: UpdateVisitUsPageInput;
};


export type MutationDeleteAboutPageArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteCollectionsPageArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteContactArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteContentPageArgs = {
  input?: InputMaybe<DeleteContentPageInput>;
};


export type MutationDeleteExhibitionsPageArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteExplorePageArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteFileArgs = {
  input?: InputMaybe<DeleteFileInput>;
};


export type MutationDeleteGetInvolvedPageArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteHomepageArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationDeletePartnerArgs = {
  input?: InputMaybe<DeletePartnerInput>;
};


export type MutationDeletePlaceArgs = {
  input?: InputMaybe<DeletePlaceInput>;
};


export type MutationDeleteRoleArgs = {
  input?: InputMaybe<DeleteRoleInput>;
};


export type MutationDeleteTagArgs = {
  input?: InputMaybe<DeleteTagInput>;
};


export type MutationDeleteTagCategoryArgs = {
  input?: InputMaybe<DeleteTagCategoryInput>;
};


export type MutationDeleteTicketArgs = {
  input?: InputMaybe<DeleteTicketInput>;
};


export type MutationDeleteUserArgs = {
  input?: InputMaybe<DeleteUserInput>;
};


export type MutationDeleteVisitUsPageArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateAboutPageArgs = {
  input?: InputMaybe<UpdateAboutPageInput>;
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateCollectionsPageArgs = {
  input?: InputMaybe<UpdateCollectionsPageInput>;
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateContactArgs = {
  input?: InputMaybe<UpdateContactInput>;
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateContentPageArgs = {
  input?: InputMaybe<UpdateContentPageInput>;
};


export type MutationUpdateExhibitionsPageArgs = {
  input?: InputMaybe<UpdateExhibitionsPageInput>;
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateExplorePageArgs = {
  input?: InputMaybe<UpdateExplorePageInput>;
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationUpdateGetInvolvedPageArgs = {
  input?: InputMaybe<UpdateGetInvolvedPageInput>;
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateHomepageArgs = {
  input?: InputMaybe<UpdateHomepageInput>;
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePartnerArgs = {
  input?: InputMaybe<UpdatePartnerInput>;
};


export type MutationUpdatePlaceArgs = {
  input?: InputMaybe<UpdatePlaceInput>;
};


export type MutationUpdateRoleArgs = {
  input?: InputMaybe<UpdateRoleInput>;
};


export type MutationUpdateTagArgs = {
  input?: InputMaybe<UpdateTagInput>;
};


export type MutationUpdateTagCategoryArgs = {
  input?: InputMaybe<UpdateTagCategoryInput>;
};


export type MutationUpdateTicketArgs = {
  input?: InputMaybe<UpdateTicketInput>;
};


export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>;
};


export type MutationUpdateVisitUsPageArgs = {
  input?: InputMaybe<UpdateVisitUsPageInput>;
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};

export type PartnerInput = {
  contentPages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['ID']>;
  title: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Partners = {
  __typename?: 'Partners';
  contentPages?: Maybe<Array<Maybe<ContentPage>>>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  logo?: Maybe<UploadFile>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};


export type PartnersContentPagesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type PartnersAggregator = {
  __typename?: 'PartnersAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PartnersConnection = {
  __typename?: 'PartnersConnection';
  aggregate?: Maybe<PartnersAggregator>;
  groupBy?: Maybe<PartnersGroupBy>;
  values?: Maybe<Array<Maybe<Partners>>>;
};

export type PartnersConnectionCreated_At = {
  __typename?: 'PartnersConnectionCreated_at';
  connection?: Maybe<PartnersConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PartnersConnectionId = {
  __typename?: 'PartnersConnectionId';
  connection?: Maybe<PartnersConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type PartnersConnectionLink = {
  __typename?: 'PartnersConnectionLink';
  connection?: Maybe<PartnersConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PartnersConnectionLogo = {
  __typename?: 'PartnersConnectionLogo';
  connection?: Maybe<PartnersConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type PartnersConnectionTitle = {
  __typename?: 'PartnersConnectionTitle';
  connection?: Maybe<PartnersConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PartnersConnectionUpdated_At = {
  __typename?: 'PartnersConnectionUpdated_at';
  connection?: Maybe<PartnersConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PartnersGroupBy = {
  __typename?: 'PartnersGroupBy';
  created_at?: Maybe<Array<Maybe<PartnersConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<PartnersConnectionId>>>;
  link?: Maybe<Array<Maybe<PartnersConnectionLink>>>;
  logo?: Maybe<Array<Maybe<PartnersConnectionLogo>>>;
  title?: Maybe<Array<Maybe<PartnersConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<PartnersConnectionUpdated_At>>>;
};

export type PlaceInput = {
  address: Scalars['String'];
  contentPages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Places = {
  __typename?: 'Places';
  address: Scalars['String'];
  contentPages?: Maybe<Array<Maybe<ContentPage>>>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Places>>>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};


export type PlacesContentPagesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type PlacesLocalizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type PlacesAggregator = {
  __typename?: 'PlacesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PlacesConnection = {
  __typename?: 'PlacesConnection';
  aggregate?: Maybe<PlacesAggregator>;
  groupBy?: Maybe<PlacesGroupBy>;
  values?: Maybe<Array<Maybe<Places>>>;
};

export type PlacesConnectionAddress = {
  __typename?: 'PlacesConnectionAddress';
  connection?: Maybe<PlacesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PlacesConnectionCreated_At = {
  __typename?: 'PlacesConnectionCreated_at';
  connection?: Maybe<PlacesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PlacesConnectionId = {
  __typename?: 'PlacesConnectionId';
  connection?: Maybe<PlacesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type PlacesConnectionLocale = {
  __typename?: 'PlacesConnectionLocale';
  connection?: Maybe<PlacesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PlacesConnectionSlug = {
  __typename?: 'PlacesConnectionSlug';
  connection?: Maybe<PlacesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PlacesConnectionTitle = {
  __typename?: 'PlacesConnectionTitle';
  connection?: Maybe<PlacesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PlacesConnectionUpdated_At = {
  __typename?: 'PlacesConnectionUpdated_at';
  connection?: Maybe<PlacesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PlacesGroupBy = {
  __typename?: 'PlacesGroupBy';
  address?: Maybe<Array<Maybe<PlacesConnectionAddress>>>;
  created_at?: Maybe<Array<Maybe<PlacesConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<PlacesConnectionId>>>;
  locale?: Maybe<Array<Maybe<PlacesConnectionLocale>>>;
  slug?: Maybe<Array<Maybe<PlacesConnectionSlug>>>;
  title?: Maybe<Array<Maybe<PlacesConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<PlacesConnectionUpdated_At>>>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  aboutPage?: Maybe<AboutPage>;
  collectionsPage?: Maybe<CollectionsPage>;
  contact?: Maybe<Contact>;
  contentPage?: Maybe<ContentPage>;
  contentPageBySlug?: Maybe<ContentPage>;
  contentPages?: Maybe<Array<Maybe<ContentPage>>>;
  contentPagesConnection?: Maybe<ContentPageConnection>;
  exhibitionsPage?: Maybe<ExhibitionsPage>;
  explorePage?: Maybe<ExplorePage>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  getInvolvedPage?: Maybe<GetInvolvedPage>;
  homepage?: Maybe<Homepage>;
  me?: Maybe<UsersPermissionsMe>;
  partner?: Maybe<Partners>;
  partners?: Maybe<Array<Maybe<Partners>>>;
  partnersConnection?: Maybe<PartnersConnection>;
  place?: Maybe<Places>;
  placeBySlug?: Maybe<Places>;
  places?: Maybe<Array<Maybe<Places>>>;
  placesConnection?: Maybe<PlacesConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  tag?: Maybe<Tag>;
  tagBySlug?: Maybe<Tag>;
  tagCategories?: Maybe<Array<Maybe<TagCategory>>>;
  tagCategoriesConnection?: Maybe<TagCategoryConnection>;
  tagCategory?: Maybe<TagCategory>;
  tagCategoryBySlug?: Maybe<TagCategory>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  tagsConnection?: Maybe<TagConnection>;
  ticket?: Maybe<Ticket>;
  tickets?: Maybe<Array<Maybe<Ticket>>>;
  ticketsConnection?: Maybe<TicketConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  visitUsPage?: Maybe<VisitUsPage>;
};


export type QueryAboutPageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryCollectionsPageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryContactArgs = {
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryContentPageArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryContentPageBySlugArgs = {
  locale: Scalars['String'];
  slug: Scalars['String'];
};


export type QueryContentPagesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryContentPagesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryExhibitionsPageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryExplorePageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryFilesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFilesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryGetInvolvedPageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryHomepageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryPartnerArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryPartnersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryPartnersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryPlaceArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryPlaceBySlugArgs = {
  locale: Scalars['String'];
  slug: Scalars['String'];
};


export type QueryPlacesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryPlacesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryRolesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTagArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTagBySlugArgs = {
  locale: Scalars['String'];
  slug: Scalars['String'];
};


export type QueryTagCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTagCategoriesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTagCategoryArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTagCategoryBySlugArgs = {
  locale: Scalars['String'];
  slug: Scalars['String'];
};


export type QueryTagsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTagsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTicketArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTicketsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTicketsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUsersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryVisitUsPageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<PublicationState>;
};

export type RoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type Tag = {
  __typename?: 'Tag';
  category?: Maybe<TagCategory>;
  contentPages?: Maybe<Array<Maybe<ContentPage>>>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Tag>>>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};


export type TagContentPagesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type TagLocalizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type TagAggregator = {
  __typename?: 'TagAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TagCategory = {
  __typename?: 'TagCategory';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<TagCategory>>>;
  slug: Scalars['String'];
  tags?: Maybe<Array<Maybe<Tag>>>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};


export type TagCategoryLocalizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type TagCategoryTagsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type TagCategoryAggregator = {
  __typename?: 'TagCategoryAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TagCategoryConnection = {
  __typename?: 'TagCategoryConnection';
  aggregate?: Maybe<TagCategoryAggregator>;
  groupBy?: Maybe<TagCategoryGroupBy>;
  values?: Maybe<Array<Maybe<TagCategory>>>;
};

export type TagCategoryConnectionCreated_At = {
  __typename?: 'TagCategoryConnectionCreated_at';
  connection?: Maybe<TagCategoryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TagCategoryConnectionId = {
  __typename?: 'TagCategoryConnectionId';
  connection?: Maybe<TagCategoryConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TagCategoryConnectionLocale = {
  __typename?: 'TagCategoryConnectionLocale';
  connection?: Maybe<TagCategoryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TagCategoryConnectionSlug = {
  __typename?: 'TagCategoryConnectionSlug';
  connection?: Maybe<TagCategoryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TagCategoryConnectionTitle = {
  __typename?: 'TagCategoryConnectionTitle';
  connection?: Maybe<TagCategoryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TagCategoryConnectionUpdated_At = {
  __typename?: 'TagCategoryConnectionUpdated_at';
  connection?: Maybe<TagCategoryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TagCategoryGroupBy = {
  __typename?: 'TagCategoryGroupBy';
  created_at?: Maybe<Array<Maybe<TagCategoryConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<TagCategoryConnectionId>>>;
  locale?: Maybe<Array<Maybe<TagCategoryConnectionLocale>>>;
  slug?: Maybe<Array<Maybe<TagCategoryConnectionSlug>>>;
  title?: Maybe<Array<Maybe<TagCategoryConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<TagCategoryConnectionUpdated_At>>>;
};

export type TagCategoryInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  slug: Scalars['String'];
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  title: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type TagConnection = {
  __typename?: 'TagConnection';
  aggregate?: Maybe<TagAggregator>;
  groupBy?: Maybe<TagGroupBy>;
  values?: Maybe<Array<Maybe<Tag>>>;
};

export type TagConnectionCategory = {
  __typename?: 'TagConnectionCategory';
  connection?: Maybe<TagConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TagConnectionCreated_At = {
  __typename?: 'TagConnectionCreated_at';
  connection?: Maybe<TagConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TagConnectionId = {
  __typename?: 'TagConnectionId';
  connection?: Maybe<TagConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TagConnectionLocale = {
  __typename?: 'TagConnectionLocale';
  connection?: Maybe<TagConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TagConnectionSlug = {
  __typename?: 'TagConnectionSlug';
  connection?: Maybe<TagConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TagConnectionTitle = {
  __typename?: 'TagConnectionTitle';
  connection?: Maybe<TagConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TagConnectionUpdated_At = {
  __typename?: 'TagConnectionUpdated_at';
  connection?: Maybe<TagConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TagGroupBy = {
  __typename?: 'TagGroupBy';
  category?: Maybe<Array<Maybe<TagConnectionCategory>>>;
  created_at?: Maybe<Array<Maybe<TagConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<TagConnectionId>>>;
  locale?: Maybe<Array<Maybe<TagConnectionLocale>>>;
  slug?: Maybe<Array<Maybe<TagConnectionSlug>>>;
  title?: Maybe<Array<Maybe<TagConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<TagConnectionUpdated_At>>>;
};

export type TagInput = {
  category?: InputMaybe<Scalars['ID']>;
  contentPages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Ticket = {
  __typename?: 'Ticket';
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Ticket>>>;
  price?: Maybe<Scalars['Float']>;
  published_at?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};


export type TicketLocalizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type TicketAggregator = {
  __typename?: 'TicketAggregator';
  avg?: Maybe<TicketAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<TicketAggregatorMax>;
  min?: Maybe<TicketAggregatorMin>;
  sum?: Maybe<TicketAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TicketAggregatorAvg = {
  __typename?: 'TicketAggregatorAvg';
  price?: Maybe<Scalars['Float']>;
};

export type TicketAggregatorMax = {
  __typename?: 'TicketAggregatorMax';
  price?: Maybe<Scalars['Float']>;
};

export type TicketAggregatorMin = {
  __typename?: 'TicketAggregatorMin';
  price?: Maybe<Scalars['Float']>;
};

export type TicketAggregatorSum = {
  __typename?: 'TicketAggregatorSum';
  price?: Maybe<Scalars['Float']>;
};

export type TicketConnection = {
  __typename?: 'TicketConnection';
  aggregate?: Maybe<TicketAggregator>;
  groupBy?: Maybe<TicketGroupBy>;
  values?: Maybe<Array<Maybe<Ticket>>>;
};

export type TicketConnectionCreated_At = {
  __typename?: 'TicketConnectionCreated_at';
  connection?: Maybe<TicketConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TicketConnectionDescription = {
  __typename?: 'TicketConnectionDescription';
  connection?: Maybe<TicketConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TicketConnectionId = {
  __typename?: 'TicketConnectionId';
  connection?: Maybe<TicketConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TicketConnectionLink = {
  __typename?: 'TicketConnectionLink';
  connection?: Maybe<TicketConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TicketConnectionLocale = {
  __typename?: 'TicketConnectionLocale';
  connection?: Maybe<TicketConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TicketConnectionPrice = {
  __typename?: 'TicketConnectionPrice';
  connection?: Maybe<TicketConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type TicketConnectionPublished_At = {
  __typename?: 'TicketConnectionPublished_at';
  connection?: Maybe<TicketConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TicketConnectionTitle = {
  __typename?: 'TicketConnectionTitle';
  connection?: Maybe<TicketConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TicketConnectionUpdated_At = {
  __typename?: 'TicketConnectionUpdated_at';
  connection?: Maybe<TicketConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TicketGroupBy = {
  __typename?: 'TicketGroupBy';
  created_at?: Maybe<Array<Maybe<TicketConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<TicketConnectionDescription>>>;
  id?: Maybe<Array<Maybe<TicketConnectionId>>>;
  link?: Maybe<Array<Maybe<TicketConnectionLink>>>;
  locale?: Maybe<Array<Maybe<TicketConnectionLocale>>>;
  price?: Maybe<Array<Maybe<TicketConnectionPrice>>>;
  published_at?: Maybe<Array<Maybe<TicketConnectionPublished_At>>>;
  title?: Maybe<Array<Maybe<TicketConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<TicketConnectionUpdated_At>>>;
};

export type TicketInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  price?: InputMaybe<Scalars['Float']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
  size: Scalars['Float'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};


export type UploadFileRelatedArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  avg?: Maybe<UploadFileAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UploadFileAggregatorMax>;
  min?: Maybe<UploadFileAggregatorMin>;
  sum?: Maybe<UploadFileAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  aggregate?: Maybe<UploadFileAggregator>;
  groupBy?: Maybe<UploadFileGroupBy>;
  values?: Maybe<Array<Maybe<UploadFile>>>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
};

export type UserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  username: Scalars['String'];
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  controller: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  type: Scalars['String'];
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  type?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
};

export type VisitUsPage = {
  __typename?: 'VisitUsPage';
  created_at: Scalars['DateTime'];
  highlights?: Maybe<ComponentBlocksHighlights>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<VisitUsPage>>>;
  sections?: Maybe<Array<Maybe<VisitUsPageSectionsDynamicZone>>>;
  seo?: Maybe<ComponentBlocksSeo>;
  updated_at: Scalars['DateTime'];
};


export type VisitUsPageLocalizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type VisitUsPageInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  highlights?: InputMaybe<ComponentBlocksHighlightInput>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  sections?: InputMaybe<Array<Scalars['VisitUsPageSectionsDynamicZoneInput']>>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type VisitUsPageSectionsDynamicZone = ComponentSectionsContactSection | ComponentSectionsMapSection | ComponentSectionsNewsSection | ComponentSectionsNewsletter | ComponentSectionsPageSection | ComponentSectionsRichtextSection | ComponentSectionsTicketsSection;

export type CreateContentPageInput = {
  data?: InputMaybe<ContentPageInput>;
};

export type CreateContentPagePayload = {
  __typename?: 'createContentPagePayload';
  contentPage?: Maybe<ContentPage>;
};

export type CreatePartnerInput = {
  data?: InputMaybe<PartnerInput>;
};

export type CreatePartnerPayload = {
  __typename?: 'createPartnerPayload';
  partner?: Maybe<Partners>;
};

export type CreatePlaceInput = {
  data?: InputMaybe<PlaceInput>;
};

export type CreatePlacePayload = {
  __typename?: 'createPlacePayload';
  place?: Maybe<Places>;
};

export type CreateRoleInput = {
  data?: InputMaybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateTagCategoryInput = {
  data?: InputMaybe<TagCategoryInput>;
};

export type CreateTagCategoryPayload = {
  __typename?: 'createTagCategoryPayload';
  tagCategory?: Maybe<TagCategory>;
};

export type CreateTagInput = {
  data?: InputMaybe<TagInput>;
};

export type CreateTagPayload = {
  __typename?: 'createTagPayload';
  tag?: Maybe<Tag>;
};

export type CreateTicketInput = {
  data?: InputMaybe<TicketInput>;
};

export type CreateTicketPayload = {
  __typename?: 'createTicketPayload';
  ticket?: Maybe<Ticket>;
};

export type CreateUserInput = {
  data?: InputMaybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteAboutPagePayload = {
  __typename?: 'deleteAboutPagePayload';
  aboutPage?: Maybe<AboutPage>;
};

export type DeleteCollectionsPagePayload = {
  __typename?: 'deleteCollectionsPagePayload';
  collectionsPage?: Maybe<CollectionsPage>;
};

export type DeleteContactPayload = {
  __typename?: 'deleteContactPayload';
  contact?: Maybe<Contact>;
};

export type DeleteContentPageInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteContentPagePayload = {
  __typename?: 'deleteContentPagePayload';
  contentPage?: Maybe<ContentPage>;
};

export type DeleteExhibitionsPagePayload = {
  __typename?: 'deleteExhibitionsPagePayload';
  exhibitionsPage?: Maybe<ExhibitionsPage>;
};

export type DeleteExplorePagePayload = {
  __typename?: 'deleteExplorePagePayload';
  explorePage?: Maybe<ExplorePage>;
};

export type DeleteFileInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteGetInvolvedPagePayload = {
  __typename?: 'deleteGetInvolvedPagePayload';
  getInvolvedPage?: Maybe<GetInvolvedPage>;
};

export type DeleteHomepagePayload = {
  __typename?: 'deleteHomepagePayload';
  homepage?: Maybe<Homepage>;
};

export type DeletePartnerInput = {
  where?: InputMaybe<InputId>;
};

export type DeletePartnerPayload = {
  __typename?: 'deletePartnerPayload';
  partner?: Maybe<Partners>;
};

export type DeletePlaceInput = {
  where?: InputMaybe<InputId>;
};

export type DeletePlacePayload = {
  __typename?: 'deletePlacePayload';
  place?: Maybe<Places>;
};

export type DeleteRoleInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteTagCategoryInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteTagCategoryPayload = {
  __typename?: 'deleteTagCategoryPayload';
  tagCategory?: Maybe<TagCategory>;
};

export type DeleteTagInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteTagPayload = {
  __typename?: 'deleteTagPayload';
  tag?: Maybe<Tag>;
};

export type DeleteTicketInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteTicketPayload = {
  __typename?: 'deleteTicketPayload';
  ticket?: Maybe<Ticket>;
};

export type DeleteUserInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteVisitUsPagePayload = {
  __typename?: 'deleteVisitUsPagePayload';
  visitUsPage?: Maybe<VisitUsPage>;
};

export type EditAboutPageInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  highlights?: InputMaybe<EditComponentBlocksHighlightInput>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  sections?: InputMaybe<Array<Scalars['AboutPageSectionsDynamicZoneInput']>>;
  seo?: InputMaybe<EditComponentBlocksSeoInput>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditCollectionsPageInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  highlights?: InputMaybe<EditComponentBlocksHighlightInput>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  sections?: InputMaybe<Array<Scalars['CollectionsPageSectionsDynamicZoneInput']>>;
  seo?: InputMaybe<EditComponentBlocksSeoInput>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditComponentBlocksColorInput = {
  hexCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  inheritFrom?: InputMaybe<Scalars['ID']>;
};

export type EditComponentBlocksDatetimeInput = {
  dateFrom?: InputMaybe<Scalars['Date']>;
  dateTo?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  showRemainingTime?: InputMaybe<Scalars['Boolean']>;
  timeFrom?: InputMaybe<Scalars['Time']>;
  timeTo?: InputMaybe<Scalars['Time']>;
};

export type EditComponentBlocksFileItemInput = {
  file?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentBlocksHighlightInput = {
  contentPages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
};

export type EditComponentBlocksHighlightOverrideInput = {
  highlightContent?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type EditComponentBlocksPartnerInput = {
  id?: InputMaybe<Scalars['ID']>;
  partners?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type EditComponentBlocksPlaceInput = {
  address?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  placeSelect?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentBlocksPositionItemInput = {
  id?: InputMaybe<Scalars['ID']>;
  names?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentBlocksSeoInput = {
  canonicalUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  keywords?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaRobots?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
  metaViewport?: InputMaybe<Scalars['String']>;
};

export type EditComponentComposedBlocksEventDetailInput = {
  datetime?: InputMaybe<EditComponentBlocksDatetimeInput>;
  id?: InputMaybe<Scalars['ID']>;
  partners?: InputMaybe<EditComponentBlocksPartnerInput>;
  place?: InputMaybe<EditComponentBlocksPlaceInput>;
  positions?: InputMaybe<Array<InputMaybe<EditComponentBlocksPositionItemInput>>>;
};

export type EditComponentContactLinkInput = {
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type EditComponentContactPalaceInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  phone?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type EditComponentSectionsContactSectionInput = {
  id?: InputMaybe<Scalars['ID']>;
  submenuTitle?: InputMaybe<Scalars['String']>;
};

export type EditComponentSectionsDownloadSectionInput = {
  files?: InputMaybe<Array<InputMaybe<EditComponentBlocksFileItemInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  submenuTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentSectionsMapSectionInput = {
  id?: InputMaybe<Scalars['ID']>;
  submenuTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentSectionsNewsSectionInput = {
  id?: InputMaybe<Scalars['ID']>;
  submenuTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentSectionsNewsletterInput = {
  id?: InputMaybe<Scalars['ID']>;
  submenuTitle?: InputMaybe<Scalars['String']>;
};

export type EditComponentSectionsPageSectionInput = {
  contentPages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  layout?: InputMaybe<Enum_Componentsectionspagesection_Layout>;
  submenuTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentSectionsRichtextSectionInput = {
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  submenuTitle?: InputMaybe<Scalars['String']>;
};

export type EditComponentSectionsSliderSectionInput = {
  id?: InputMaybe<Scalars['ID']>;
  medias?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  submenuTitle?: InputMaybe<Scalars['String']>;
};

export type EditComponentSectionsTicketsSectionInput = {
  id?: InputMaybe<Scalars['ID']>;
  submenuTitle?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentSectionsVideoSectionInput = {
  id?: InputMaybe<Scalars['ID']>;
  submenuTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type EditContactInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  mirbach?: InputMaybe<EditComponentContactPalaceInput>;
  name?: InputMaybe<Scalars['String']>;
  openingHours?: InputMaybe<Scalars['String']>;
  palffy?: InputMaybe<EditComponentContactPalaceInput>;
  quickLinks?: InputMaybe<Array<InputMaybe<EditComponentContactLinkInput>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditContentPageInput = {
  childPages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  color?: InputMaybe<Scalars['String']>;
  coverMedia?: InputMaybe<Scalars['ID']>;
  created_by?: InputMaybe<Scalars['ID']>;
  dateFrom?: InputMaybe<Scalars['Date']>;
  dateTo?: InputMaybe<Scalars['Date']>;
  downloadSection?: InputMaybe<EditComponentSectionsDownloadSectionInput>;
  inheritColorFromParent?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  mainContent?: InputMaybe<Array<Scalars['ContentPageMainContentDynamicZoneInput']>>;
  override?: InputMaybe<EditComponentBlocksHighlightOverrideInput>;
  parentPage?: InputMaybe<Scalars['ID']>;
  partners?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  perex?: InputMaybe<Scalars['String']>;
  place?: InputMaybe<Scalars['ID']>;
  placeAddress?: InputMaybe<Scalars['String']>;
  placeTitle?: InputMaybe<Scalars['String']>;
  positions?: InputMaybe<Array<InputMaybe<EditComponentBlocksPositionItemInput>>>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  purchaseId?: InputMaybe<Scalars['String']>;
  relatedContentSubmenuTitle?: InputMaybe<Scalars['String']>;
  relatedContentTitle?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<EditComponentBlocksSeoInput>;
  showRemainingTime?: InputMaybe<Scalars['Boolean']>;
  slider?: InputMaybe<EditComponentSectionsSliderSectionInput>;
  slug?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  timeFrom?: InputMaybe<Scalars['Time']>;
  timeTo?: InputMaybe<Scalars['Time']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditExhibitionsPageInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  highlights?: InputMaybe<EditComponentBlocksHighlightInput>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  seo?: InputMaybe<EditComponentBlocksSeoInput>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditExplorePageInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  highlights?: InputMaybe<EditComponentBlocksHighlightInput>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  sections?: InputMaybe<Array<Scalars['ExplorePageSectionsDynamicZoneInput']>>;
  seo?: InputMaybe<EditComponentBlocksSeoInput>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size?: InputMaybe<Scalars['Float']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type EditGetInvolvedPageInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  highlights?: InputMaybe<EditComponentBlocksHighlightInput>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  sections?: InputMaybe<Array<Scalars['GetInvolvedPageSectionsDynamicZoneInput']>>;
  seo?: InputMaybe<EditComponentBlocksSeoInput>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditHomepageInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  highlights?: InputMaybe<EditComponentBlocksHighlightInput>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  partnersSection?: InputMaybe<EditComponentBlocksPartnerInput>;
  sections?: InputMaybe<Array<Scalars['HomepageSectionsDynamicZoneInput']>>;
  seo?: InputMaybe<EditComponentBlocksSeoInput>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditPartnerInput = {
  contentPages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditPlaceInput = {
  address?: InputMaybe<Scalars['String']>;
  contentPages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditRoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type EditTagCategoryInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  slug?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditTagInput = {
  category?: InputMaybe<Scalars['ID']>;
  contentPages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditTicketInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  price?: InputMaybe<Scalars['Float']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type EditVisitUsPageInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  highlights?: InputMaybe<EditComponentBlocksHighlightInput>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  sections?: InputMaybe<Array<Scalars['VisitUsPageSectionsDynamicZoneInput']>>;
  seo?: InputMaybe<EditComponentBlocksSeoInput>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type UpdateAboutPageInput = {
  data?: InputMaybe<EditAboutPageInput>;
};

export type UpdateAboutPagePayload = {
  __typename?: 'updateAboutPagePayload';
  aboutPage?: Maybe<AboutPage>;
};

export type UpdateCollectionsPageInput = {
  data?: InputMaybe<EditCollectionsPageInput>;
};

export type UpdateCollectionsPagePayload = {
  __typename?: 'updateCollectionsPagePayload';
  collectionsPage?: Maybe<CollectionsPage>;
};

export type UpdateContactInput = {
  data?: InputMaybe<EditContactInput>;
};

export type UpdateContactPayload = {
  __typename?: 'updateContactPayload';
  contact?: Maybe<Contact>;
};

export type UpdateContentPageInput = {
  data?: InputMaybe<EditContentPageInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateContentPagePayload = {
  __typename?: 'updateContentPagePayload';
  contentPage?: Maybe<ContentPage>;
};

export type UpdateExhibitionsPageInput = {
  data?: InputMaybe<EditExhibitionsPageInput>;
};

export type UpdateExhibitionsPagePayload = {
  __typename?: 'updateExhibitionsPagePayload';
  exhibitionsPage?: Maybe<ExhibitionsPage>;
};

export type UpdateExplorePageInput = {
  data?: InputMaybe<EditExplorePageInput>;
};

export type UpdateExplorePagePayload = {
  __typename?: 'updateExplorePagePayload';
  explorePage?: Maybe<ExplorePage>;
};

export type UpdateGetInvolvedPageInput = {
  data?: InputMaybe<EditGetInvolvedPageInput>;
};

export type UpdateGetInvolvedPagePayload = {
  __typename?: 'updateGetInvolvedPagePayload';
  getInvolvedPage?: Maybe<GetInvolvedPage>;
};

export type UpdateHomepageInput = {
  data?: InputMaybe<EditHomepageInput>;
};

export type UpdateHomepagePayload = {
  __typename?: 'updateHomepagePayload';
  homepage?: Maybe<Homepage>;
};

export type UpdatePartnerInput = {
  data?: InputMaybe<EditPartnerInput>;
  where?: InputMaybe<InputId>;
};

export type UpdatePartnerPayload = {
  __typename?: 'updatePartnerPayload';
  partner?: Maybe<Partners>;
};

export type UpdatePlaceInput = {
  data?: InputMaybe<EditPlaceInput>;
  where?: InputMaybe<InputId>;
};

export type UpdatePlacePayload = {
  __typename?: 'updatePlacePayload';
  place?: Maybe<Places>;
};

export type UpdateRoleInput = {
  data?: InputMaybe<EditRoleInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateTagCategoryInput = {
  data?: InputMaybe<EditTagCategoryInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateTagCategoryPayload = {
  __typename?: 'updateTagCategoryPayload';
  tagCategory?: Maybe<TagCategory>;
};

export type UpdateTagInput = {
  data?: InputMaybe<EditTagInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateTagPayload = {
  __typename?: 'updateTagPayload';
  tag?: Maybe<Tag>;
};

export type UpdateTicketInput = {
  data?: InputMaybe<EditTicketInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateTicketPayload = {
  __typename?: 'updateTicketPayload';
  ticket?: Maybe<Ticket>;
};

export type UpdateUserInput = {
  data?: InputMaybe<EditUserInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateVisitUsPageInput = {
  data?: InputMaybe<EditVisitUsPageInput>;
};

export type UpdateVisitUsPagePayload = {
  __typename?: 'updateVisitUsPagePayload';
  visitUsPage?: Maybe<VisitUsPage>;
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'UsersPermissionsMe', blocked?: boolean | null } | null };


export const MeDocument = gql`
    query Me {
  me {
    blocked
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Me(variables?: MeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MeQuery>(MeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Me', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;