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
  AboutUsPageSectionsDynamicZoneInput: any;
  CollectionsPageSectionsDynamicZoneInput: any;
  ContentPageMainContentDynamicZoneInput: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  GetInvolvedPageSectionsDynamicZoneInput: any;
  HomePageSectionsDynamicZoneInput: any;
  /** A string used to identify an i18n locale */
  I18NLocaleCode: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A time string with format HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  VisitUsPageSectionsDynamicZoneInput: any;
};

export type AboutUsPage = {
  __typename?: 'AboutUsPage';
  createdAt?: Maybe<Scalars['DateTime']>;
  highlights?: Maybe<ComponentSectionsHighlightsSection>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<AboutUsPageRelationResponseCollection>;
  sections?: Maybe<Array<Maybe<AboutUsPageSectionsDynamicZone>>>;
  seo?: Maybe<ComponentBlocksSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AboutUsPageEntity = {
  __typename?: 'AboutUsPageEntity';
  attributes?: Maybe<AboutUsPage>;
  id?: Maybe<Scalars['ID']>;
};

export type AboutUsPageEntityResponse = {
  __typename?: 'AboutUsPageEntityResponse';
  data?: Maybe<AboutUsPageEntity>;
};

export type AboutUsPageInput = {
  highlights?: InputMaybe<ComponentSectionsHighlightsSectionInput>;
  sections?: InputMaybe<Array<Scalars['AboutUsPageSectionsDynamicZoneInput']>>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
};

export type AboutUsPageRelationResponseCollection = {
  __typename?: 'AboutUsPageRelationResponseCollection';
  data: Array<AboutUsPageEntity>;
};

export type AboutUsPageSectionsDynamicZone = ComponentSectionsContactSection | ComponentSectionsNewsSection | ComponentSectionsNewsletterSection | ComponentSectionsPageSection | Error;

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type CollectionsPage = {
  __typename?: 'CollectionsPage';
  createdAt?: Maybe<Scalars['DateTime']>;
  highlights?: Maybe<ComponentSectionsHighlightsSection>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<CollectionsPageRelationResponseCollection>;
  sections?: Maybe<Array<Maybe<CollectionsPageSectionsDynamicZone>>>;
  seo?: Maybe<ComponentBlocksSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CollectionsPageEntity = {
  __typename?: 'CollectionsPageEntity';
  attributes?: Maybe<CollectionsPage>;
  id?: Maybe<Scalars['ID']>;
};

export type CollectionsPageEntityResponse = {
  __typename?: 'CollectionsPageEntityResponse';
  data?: Maybe<CollectionsPageEntity>;
};

export type CollectionsPageInput = {
  highlights?: InputMaybe<ComponentSectionsHighlightsSectionInput>;
  sections?: InputMaybe<Array<Scalars['CollectionsPageSectionsDynamicZoneInput']>>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
};

export type CollectionsPageRelationResponseCollection = {
  __typename?: 'CollectionsPageRelationResponseCollection';
  data: Array<CollectionsPageEntity>;
};

export type CollectionsPageSectionsDynamicZone = ComponentSectionsContactSection | ComponentSectionsNewsSection | ComponentSectionsNewsletterSection | ComponentSectionsPageSection | Error;

export type ComponentBlocksFileItem = {
  __typename?: 'ComponentBlocksFileItem';
  file: UploadFileEntityResponse;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentBlocksFileItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksFileItemFiltersInput>>>;
  not?: InputMaybe<ComponentBlocksFileItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksFileItemFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksFileItemInput = {
  file?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksHighlightOverride = {
  __typename?: 'ComponentBlocksHighlightOverride';
  highlightContent?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ComponentBlocksHighlightOverrideInput = {
  highlightContent?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentBlocksLinkItem = {
  __typename?: 'ComponentBlocksLinkItem';
  id: Scalars['ID'];
  title: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type ComponentBlocksLinkItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksLinkItemFiltersInput>>>;
  not?: InputMaybe<ComponentBlocksLinkItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksLinkItemFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksLinkItemInput = {
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksPalace = {
  __typename?: 'ComponentBlocksPalace';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  phone?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type ComponentBlocksPalaceInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  phone?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksPositionItem = {
  __typename?: 'ComponentBlocksPositionItem';
  id: Scalars['ID'];
  names?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentBlocksPositionItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksPositionItemFiltersInput>>>;
  names?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksPositionItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksPositionItemFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksPositionItemInput = {
  id?: InputMaybe<Scalars['ID']>;
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
  id?: InputMaybe<Scalars['ID']>;
  keywords?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaRobots?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
  metaViewport?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsContactSection = {
  __typename?: 'ComponentSectionsContactSection';
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
};

export type ComponentSectionsDownloadSection = {
  __typename?: 'ComponentSectionsDownloadSection';
  files?: Maybe<Array<Maybe<ComponentBlocksFileItem>>>;
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentSectionsDownloadSectionFilesArgs = {
  filters?: InputMaybe<ComponentBlocksFileItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsDownloadSectionInput = {
  files?: InputMaybe<Array<InputMaybe<ComponentBlocksFileItemInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  submenuTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsHighlightsSection = {
  __typename?: 'ComponentSectionsHighlightsSection';
  contentPages?: Maybe<ContentPageRelationResponseCollection>;
  id: Scalars['ID'];
};


export type ComponentSectionsHighlightsSectionContentPagesArgs = {
  filters?: InputMaybe<ContentPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsHighlightsSectionInput = {
  contentPages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentSectionsMapSection = {
  __typename?: 'ComponentSectionsMapSection';
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsNewsSection = {
  __typename?: 'ComponentSectionsNewsSection';
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsNewsletterSection = {
  __typename?: 'ComponentSectionsNewsletterSection';
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
};

export type ComponentSectionsPageSection = {
  __typename?: 'ComponentSectionsPageSection';
  contentPages?: Maybe<ContentPageRelationResponseCollection>;
  id: Scalars['ID'];
  layout?: Maybe<Enum_Componentsectionspagesection_Layout>;
  submenuTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentSectionsPageSectionContentPagesArgs = {
  filters?: InputMaybe<ContentPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsPartnersSection = {
  __typename?: 'ComponentSectionsPartnersSection';
  id: Scalars['ID'];
  partners?: Maybe<PartnerRelationResponseCollection>;
};


export type ComponentSectionsPartnersSectionPartnersArgs = {
  filters?: InputMaybe<PartnerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsPartnersSectionInput = {
  id?: InputMaybe<Scalars['ID']>;
  partners?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ComponentSectionsRichtextSection = {
  __typename?: 'ComponentSectionsRichtextSection';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
};

export type ComponentSectionsSliderSection = {
  __typename?: 'ComponentSectionsSliderSection';
  id: Scalars['ID'];
  medias?: Maybe<UploadFileRelationResponseCollection>;
  submenuTitle?: Maybe<Scalars['String']>;
};


export type ComponentSectionsSliderSectionMediasArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsSliderSectionInput = {
  id?: InputMaybe<Scalars['ID']>;
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

export type ComponentSectionsVideoSection = {
  __typename?: 'ComponentSectionsVideoSection';
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Contact = {
  __typename?: 'Contact';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ContactRelationResponseCollection>;
  mirbach?: Maybe<ComponentBlocksPalace>;
  name?: Maybe<Scalars['String']>;
  openingHours?: Maybe<Scalars['String']>;
  palffy?: Maybe<ComponentBlocksPalace>;
  quickLinks?: Maybe<Array<Maybe<ComponentBlocksLinkItem>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ContactQuickLinksArgs = {
  filters?: InputMaybe<ComponentBlocksLinkItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContactEntity = {
  __typename?: 'ContactEntity';
  attributes?: Maybe<Contact>;
  id?: Maybe<Scalars['ID']>;
};

export type ContactEntityResponse = {
  __typename?: 'ContactEntityResponse';
  data?: Maybe<ContactEntity>;
};

export type ContactInput = {
  email?: InputMaybe<Scalars['String']>;
  mirbach?: InputMaybe<ComponentBlocksPalaceInput>;
  name?: InputMaybe<Scalars['String']>;
  openingHours?: InputMaybe<Scalars['String']>;
  palffy?: InputMaybe<ComponentBlocksPalaceInput>;
  quickLinks?: InputMaybe<Array<InputMaybe<ComponentBlocksLinkItemInput>>>;
};

export type ContactRelationResponseCollection = {
  __typename?: 'ContactRelationResponseCollection';
  data: Array<ContactEntity>;
};

export type ContentPage = {
  __typename?: 'ContentPage';
  childPages?: Maybe<ContentPageRelationResponseCollection>;
  color?: Maybe<Scalars['String']>;
  coverMedia?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dateFrom?: Maybe<Scalars['Date']>;
  dateTo?: Maybe<Scalars['Date']>;
  downloadSection?: Maybe<ComponentSectionsDownloadSection>;
  inheritColorFromParent?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ContentPageRelationResponseCollection>;
  mainContent?: Maybe<Array<Maybe<ContentPageMainContentDynamicZone>>>;
  override?: Maybe<ComponentBlocksHighlightOverride>;
  parentPage?: Maybe<ContentPageEntityResponse>;
  partners?: Maybe<PartnerRelationResponseCollection>;
  perex?: Maybe<Scalars['String']>;
  place?: Maybe<PlaceEntityResponse>;
  placeAddress?: Maybe<Scalars['String']>;
  placeTitle?: Maybe<Scalars['String']>;
  positions?: Maybe<Array<Maybe<ComponentBlocksPositionItem>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  purchaseId?: Maybe<Scalars['String']>;
  relatedContentSubmenuTitle?: Maybe<Scalars['String']>;
  relatedContentTitle?: Maybe<Scalars['String']>;
  seo?: Maybe<ComponentBlocksSeo>;
  showRemainingTime?: Maybe<Scalars['Boolean']>;
  slider?: Maybe<ComponentSectionsSliderSection>;
  slug: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  tags?: Maybe<TagRelationResponseCollection>;
  timeFrom?: Maybe<Scalars['Time']>;
  timeTo?: Maybe<Scalars['Time']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ContentPageChildPagesArgs = {
  filters?: InputMaybe<ContentPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ContentPageLocalizationsArgs = {
  filters?: InputMaybe<ContentPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ContentPagePartnersArgs = {
  filters?: InputMaybe<PartnerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ContentPagePositionsArgs = {
  filters?: InputMaybe<ComponentBlocksPositionItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ContentPageTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContentPageEntity = {
  __typename?: 'ContentPageEntity';
  attributes?: Maybe<ContentPage>;
  id?: Maybe<Scalars['ID']>;
};

export type ContentPageEntityResponse = {
  __typename?: 'ContentPageEntityResponse';
  data?: Maybe<ContentPageEntity>;
};

export type ContentPageEntityResponseCollection = {
  __typename?: 'ContentPageEntityResponseCollection';
  data: Array<ContentPageEntity>;
  meta: ResponseCollectionMeta;
};

export type ContentPageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ContentPageFiltersInput>>>;
  childPages?: InputMaybe<ContentPageFiltersInput>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  dateFrom?: InputMaybe<DateFilterInput>;
  dateTo?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  inheritColorFromParent?: InputMaybe<BooleanFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ContentPageFiltersInput>;
  not?: InputMaybe<ContentPageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContentPageFiltersInput>>>;
  parentPage?: InputMaybe<ContentPageFiltersInput>;
  partners?: InputMaybe<PartnerFiltersInput>;
  perex?: InputMaybe<StringFilterInput>;
  place?: InputMaybe<PlaceFiltersInput>;
  placeAddress?: InputMaybe<StringFilterInput>;
  placeTitle?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  purchaseId?: InputMaybe<StringFilterInput>;
  relatedContentSubmenuTitle?: InputMaybe<StringFilterInput>;
  relatedContentTitle?: InputMaybe<StringFilterInput>;
  showRemainingTime?: InputMaybe<BooleanFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  subtitle?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  timeFrom?: InputMaybe<TimeFilterInput>;
  timeTo?: InputMaybe<TimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContentPageInput = {
  childPages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  color?: InputMaybe<Scalars['String']>;
  coverMedia?: InputMaybe<Scalars['ID']>;
  dateFrom?: InputMaybe<Scalars['Date']>;
  dateTo?: InputMaybe<Scalars['Date']>;
  downloadSection?: InputMaybe<ComponentSectionsDownloadSectionInput>;
  inheritColorFromParent?: InputMaybe<Scalars['Boolean']>;
  mainContent?: InputMaybe<Array<Scalars['ContentPageMainContentDynamicZoneInput']>>;
  override?: InputMaybe<ComponentBlocksHighlightOverrideInput>;
  parentPage?: InputMaybe<Scalars['ID']>;
  partners?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  perex?: InputMaybe<Scalars['String']>;
  place?: InputMaybe<Scalars['ID']>;
  placeAddress?: InputMaybe<Scalars['String']>;
  placeTitle?: InputMaybe<Scalars['String']>;
  positions?: InputMaybe<Array<InputMaybe<ComponentBlocksPositionItemInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  purchaseId?: InputMaybe<Scalars['String']>;
  relatedContentSubmenuTitle?: InputMaybe<Scalars['String']>;
  relatedContentTitle?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
  showRemainingTime?: InputMaybe<Scalars['Boolean']>;
  slider?: InputMaybe<ComponentSectionsSliderSectionInput>;
  slug?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  timeFrom?: InputMaybe<Scalars['Time']>;
  timeTo?: InputMaybe<Scalars['Time']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ContentPageMainContentDynamicZone = ComponentSectionsRichtextSection | ComponentSectionsVideoSection | Error;

export type ContentPageRelationResponseCollection = {
  __typename?: 'ContentPageRelationResponseCollection';
  data: Array<ContentPageEntity>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  contains?: InputMaybe<Scalars['Date']>;
  containsi?: InputMaybe<Scalars['Date']>;
  endsWith?: InputMaybe<Scalars['Date']>;
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']>;
  notContainsi?: InputMaybe<Scalars['Date']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  startsWith?: InputMaybe<Scalars['Date']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Componentsectionspagesection_Layout {
  Cards = 'cards',
  Chessboard = 'chessboard',
  Fullwidth = 'fullwidth'
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type ExhibitionsPage = {
  __typename?: 'ExhibitionsPage';
  createdAt?: Maybe<Scalars['DateTime']>;
  highlights?: Maybe<ComponentSectionsHighlightsSection>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ExhibitionsPageRelationResponseCollection>;
  seo?: Maybe<ComponentBlocksSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ExhibitionsPageEntity = {
  __typename?: 'ExhibitionsPageEntity';
  attributes?: Maybe<ExhibitionsPage>;
  id?: Maybe<Scalars['ID']>;
};

export type ExhibitionsPageEntityResponse = {
  __typename?: 'ExhibitionsPageEntityResponse';
  data?: Maybe<ExhibitionsPageEntity>;
};

export type ExhibitionsPageInput = {
  highlights?: InputMaybe<ComponentSectionsHighlightsSectionInput>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
};

export type ExhibitionsPageRelationResponseCollection = {
  __typename?: 'ExhibitionsPageRelationResponseCollection';
  data: Array<ExhibitionsPageEntity>;
};

export type ExplorePage = {
  __typename?: 'ExplorePage';
  createdAt?: Maybe<Scalars['DateTime']>;
  highlights?: Maybe<ComponentSectionsHighlightsSection>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ExplorePageRelationResponseCollection>;
  seo?: Maybe<ComponentBlocksSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ExplorePageEntity = {
  __typename?: 'ExplorePageEntity';
  attributes?: Maybe<ExplorePage>;
  id?: Maybe<Scalars['ID']>;
};

export type ExplorePageEntityResponse = {
  __typename?: 'ExplorePageEntityResponse';
  data?: Maybe<ExplorePageEntity>;
};

export type ExplorePageInput = {
  highlights?: InputMaybe<ComponentSectionsHighlightsSectionInput>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
};

export type ExplorePageRelationResponseCollection = {
  __typename?: 'ExplorePageRelationResponseCollection';
  data: Array<ExplorePageEntity>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = AboutUsPage | CollectionsPage | ComponentBlocksFileItem | ComponentBlocksHighlightOverride | ComponentBlocksLinkItem | ComponentBlocksPalace | ComponentBlocksPositionItem | ComponentBlocksSeo | ComponentSectionsContactSection | ComponentSectionsDownloadSection | ComponentSectionsHighlightsSection | ComponentSectionsMapSection | ComponentSectionsNewsSection | ComponentSectionsNewsletterSection | ComponentSectionsPageSection | ComponentSectionsPartnersSection | ComponentSectionsRichtextSection | ComponentSectionsSliderSection | ComponentSectionsTicketsSection | ComponentSectionsVideoSection | Contact | ContentPage | ExhibitionsPage | ExplorePage | GetInvolvedPage | HomePage | I18NLocale | Partner | Place | Tag | TagCategory | Ticket | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | VisitUsPage;

export type GetInvolvedPage = {
  __typename?: 'GetInvolvedPage';
  createdAt?: Maybe<Scalars['DateTime']>;
  highlights?: Maybe<ComponentSectionsHighlightsSection>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<GetInvolvedPageRelationResponseCollection>;
  sections?: Maybe<Array<Maybe<GetInvolvedPageSectionsDynamicZone>>>;
  seo?: Maybe<ComponentBlocksSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GetInvolvedPageEntity = {
  __typename?: 'GetInvolvedPageEntity';
  attributes?: Maybe<GetInvolvedPage>;
  id?: Maybe<Scalars['ID']>;
};

export type GetInvolvedPageEntityResponse = {
  __typename?: 'GetInvolvedPageEntityResponse';
  data?: Maybe<GetInvolvedPageEntity>;
};

export type GetInvolvedPageInput = {
  highlights?: InputMaybe<ComponentSectionsHighlightsSectionInput>;
  sections?: InputMaybe<Array<Scalars['GetInvolvedPageSectionsDynamicZoneInput']>>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
};

export type GetInvolvedPageRelationResponseCollection = {
  __typename?: 'GetInvolvedPageRelationResponseCollection';
  data: Array<GetInvolvedPageEntity>;
};

export type GetInvolvedPageSectionsDynamicZone = ComponentSectionsContactSection | ComponentSectionsNewsSection | ComponentSectionsNewsletterSection | ComponentSectionsPageSection | Error;

export type HomePage = {
  __typename?: 'HomePage';
  createdAt?: Maybe<Scalars['DateTime']>;
  highlights?: Maybe<ComponentSectionsHighlightsSection>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<HomePageRelationResponseCollection>;
  partnersSection?: Maybe<ComponentSectionsPartnersSection>;
  sections?: Maybe<Array<Maybe<HomePageSectionsDynamicZone>>>;
  seo?: Maybe<ComponentBlocksSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HomePageEntity = {
  __typename?: 'HomePageEntity';
  attributes?: Maybe<HomePage>;
  id?: Maybe<Scalars['ID']>;
};

export type HomePageEntityResponse = {
  __typename?: 'HomePageEntityResponse';
  data?: Maybe<HomePageEntity>;
};

export type HomePageInput = {
  highlights?: InputMaybe<ComponentSectionsHighlightsSectionInput>;
  partnersSection?: InputMaybe<ComponentSectionsPartnersSectionInput>;
  sections?: InputMaybe<Array<Scalars['HomePageSectionsDynamicZoneInput']>>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
};

export type HomePageRelationResponseCollection = {
  __typename?: 'HomePageRelationResponseCollection';
  data: Array<HomePageEntity>;
};

export type HomePageSectionsDynamicZone = ComponentSectionsContactSection | ComponentSectionsNewsSection | ComponentSectionsNewsletterSection | ComponentSectionsPageSection | Error;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAboutUsPageLocalization?: Maybe<AboutUsPageEntityResponse>;
  createCollectionsPageLocalization?: Maybe<CollectionsPageEntityResponse>;
  createContactLocalization?: Maybe<ContactEntityResponse>;
  createContentPage?: Maybe<ContentPageEntityResponse>;
  createContentPageLocalization?: Maybe<ContentPageEntityResponse>;
  createExhibitionsPageLocalization?: Maybe<ExhibitionsPageEntityResponse>;
  createExplorePageLocalization?: Maybe<ExplorePageEntityResponse>;
  createGetInvolvedPageLocalization?: Maybe<GetInvolvedPageEntityResponse>;
  createHomePageLocalization?: Maybe<HomePageEntityResponse>;
  createPartner?: Maybe<PartnerEntityResponse>;
  createPartnerLocalization?: Maybe<PartnerEntityResponse>;
  createPlace?: Maybe<PlaceEntityResponse>;
  createPlaceLocalization?: Maybe<PlaceEntityResponse>;
  createTag?: Maybe<TagEntityResponse>;
  createTagCategory?: Maybe<TagCategoryEntityResponse>;
  createTagCategoryLocalization?: Maybe<TagCategoryEntityResponse>;
  createTagLocalization?: Maybe<TagEntityResponse>;
  createTicket?: Maybe<TicketEntityResponse>;
  createTicketLocalization?: Maybe<TicketEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createVisitUsPageLocalization?: Maybe<VisitUsPageEntityResponse>;
  deleteAboutUsPage?: Maybe<AboutUsPageEntityResponse>;
  deleteCollectionsPage?: Maybe<CollectionsPageEntityResponse>;
  deleteContact?: Maybe<ContactEntityResponse>;
  deleteContentPage?: Maybe<ContentPageEntityResponse>;
  deleteExhibitionsPage?: Maybe<ExhibitionsPageEntityResponse>;
  deleteExplorePage?: Maybe<ExplorePageEntityResponse>;
  deleteGetInvolvedPage?: Maybe<GetInvolvedPageEntityResponse>;
  deleteHomePage?: Maybe<HomePageEntityResponse>;
  deletePartner?: Maybe<PartnerEntityResponse>;
  deletePlace?: Maybe<PlaceEntityResponse>;
  deleteTag?: Maybe<TagEntityResponse>;
  deleteTagCategory?: Maybe<TagCategoryEntityResponse>;
  deleteTicket?: Maybe<TicketEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteVisitUsPage?: Maybe<VisitUsPageEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAboutUsPage?: Maybe<AboutUsPageEntityResponse>;
  updateCollectionsPage?: Maybe<CollectionsPageEntityResponse>;
  updateContact?: Maybe<ContactEntityResponse>;
  updateContentPage?: Maybe<ContentPageEntityResponse>;
  updateExhibitionsPage?: Maybe<ExhibitionsPageEntityResponse>;
  updateExplorePage?: Maybe<ExplorePageEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateGetInvolvedPage?: Maybe<GetInvolvedPageEntityResponse>;
  updateHomePage?: Maybe<HomePageEntityResponse>;
  updatePartner?: Maybe<PartnerEntityResponse>;
  updatePlace?: Maybe<PlaceEntityResponse>;
  updateTag?: Maybe<TagEntityResponse>;
  updateTagCategory?: Maybe<TagCategoryEntityResponse>;
  updateTicket?: Maybe<TicketEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateVisitUsPage?: Maybe<VisitUsPageEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationCreateAboutUsPageLocalizationArgs = {
  data?: InputMaybe<AboutUsPageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateCollectionsPageLocalizationArgs = {
  data?: InputMaybe<CollectionsPageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateContactLocalizationArgs = {
  data?: InputMaybe<ContactInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateContentPageArgs = {
  data: ContentPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateContentPageLocalizationArgs = {
  data?: InputMaybe<ContentPageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateExhibitionsPageLocalizationArgs = {
  data?: InputMaybe<ExhibitionsPageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateExplorePageLocalizationArgs = {
  data?: InputMaybe<ExplorePageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateGetInvolvedPageLocalizationArgs = {
  data?: InputMaybe<GetInvolvedPageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateHomePageLocalizationArgs = {
  data?: InputMaybe<HomePageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePartnerArgs = {
  data: PartnerInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePartnerLocalizationArgs = {
  data?: InputMaybe<PartnerInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePlaceArgs = {
  data: PlaceInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePlaceLocalizationArgs = {
  data?: InputMaybe<PlaceInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateTagArgs = {
  data: TagInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateTagCategoryArgs = {
  data: TagCategoryInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateTagCategoryLocalizationArgs = {
  data?: InputMaybe<TagCategoryInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateTagLocalizationArgs = {
  data?: InputMaybe<TagInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateTicketArgs = {
  data: TicketInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateTicketLocalizationArgs = {
  data?: InputMaybe<TicketInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateVisitUsPageLocalizationArgs = {
  data?: InputMaybe<VisitUsPageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteAboutUsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteCollectionsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteContactArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteContentPageArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteExhibitionsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteExplorePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteGetInvolvedPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteHomePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeletePartnerArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeletePlaceArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteTagArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteTagCategoryArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteTicketArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteVisitUsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
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
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateAboutUsPageArgs = {
  data: AboutUsPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateCollectionsPageArgs = {
  data: CollectionsPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateContactArgs = {
  data: ContactInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateContentPageArgs = {
  data: ContentPageInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateExhibitionsPageArgs = {
  data: ExhibitionsPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateExplorePageArgs = {
  data: ExplorePageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateGetInvolvedPageArgs = {
  data: GetInvolvedPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateHomePageArgs = {
  data: HomePageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdatePartnerArgs = {
  data: PartnerInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdatePlaceArgs = {
  data: PlaceInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateTagArgs = {
  data: TagInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateTagCategoryArgs = {
  data: TagCategoryInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateTicketArgs = {
  data: TicketInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUpdateVisitUsPageArgs = {
  data: VisitUsPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Partner = {
  __typename?: 'Partner';
  contentPages?: Maybe<ContentPageRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  link?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<PartnerRelationResponseCollection>;
  logo: UploadFileEntityResponse;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PartnerContentPagesArgs = {
  filters?: InputMaybe<ContentPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PartnerLocalizationsArgs = {
  filters?: InputMaybe<PartnerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PartnerEntity = {
  __typename?: 'PartnerEntity';
  attributes?: Maybe<Partner>;
  id?: Maybe<Scalars['ID']>;
};

export type PartnerEntityResponse = {
  __typename?: 'PartnerEntityResponse';
  data?: Maybe<PartnerEntity>;
};

export type PartnerEntityResponseCollection = {
  __typename?: 'PartnerEntityResponseCollection';
  data: Array<PartnerEntity>;
  meta: ResponseCollectionMeta;
};

export type PartnerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PartnerFiltersInput>>>;
  contentPages?: InputMaybe<ContentPageFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PartnerFiltersInput>;
  not?: InputMaybe<PartnerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PartnerFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PartnerInput = {
  contentPages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  link?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PartnerRelationResponseCollection = {
  __typename?: 'PartnerRelationResponseCollection';
  data: Array<PartnerEntity>;
};

export type Place = {
  __typename?: 'Place';
  address: Scalars['String'];
  contentPages?: Maybe<ContentPageRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<PlaceRelationResponseCollection>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PlaceContentPagesArgs = {
  filters?: InputMaybe<ContentPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PlaceLocalizationsArgs = {
  filters?: InputMaybe<PlaceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PlaceEntity = {
  __typename?: 'PlaceEntity';
  attributes?: Maybe<Place>;
  id?: Maybe<Scalars['ID']>;
};

export type PlaceEntityResponse = {
  __typename?: 'PlaceEntityResponse';
  data?: Maybe<PlaceEntity>;
};

export type PlaceEntityResponseCollection = {
  __typename?: 'PlaceEntityResponseCollection';
  data: Array<PlaceEntity>;
  meta: ResponseCollectionMeta;
};

export type PlaceFiltersInput = {
  address?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<PlaceFiltersInput>>>;
  contentPages?: InputMaybe<ContentPageFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PlaceFiltersInput>;
  not?: InputMaybe<PlaceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PlaceFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PlaceInput = {
  address?: InputMaybe<Scalars['String']>;
  contentPages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PlaceRelationResponseCollection = {
  __typename?: 'PlaceRelationResponseCollection';
  data: Array<PlaceEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  aboutUsPage?: Maybe<AboutUsPageEntityResponse>;
  collectionsPage?: Maybe<CollectionsPageEntityResponse>;
  contact?: Maybe<ContactEntityResponse>;
  contentPage?: Maybe<ContentPageEntityResponse>;
  contentPageBySlug?: Maybe<ContentPageEntityResponse>;
  contentPages?: Maybe<ContentPageEntityResponseCollection>;
  exhibitionsPage?: Maybe<ExhibitionsPageEntityResponse>;
  explorePage?: Maybe<ExplorePageEntityResponse>;
  getInvolvedPage?: Maybe<GetInvolvedPageEntityResponse>;
  homePage?: Maybe<HomePageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  partner?: Maybe<PartnerEntityResponse>;
  partners?: Maybe<PartnerEntityResponseCollection>;
  place?: Maybe<PlaceEntityResponse>;
  placeBySlug?: Maybe<PlaceEntityResponse>;
  places?: Maybe<PlaceEntityResponseCollection>;
  tag?: Maybe<TagEntityResponse>;
  tagBySlug?: Maybe<TagEntityResponse>;
  tagCategories?: Maybe<TagCategoryEntityResponseCollection>;
  tagCategory?: Maybe<TagCategoryEntityResponse>;
  tagCategoryBySlug?: Maybe<TagCategoryEntityResponse>;
  tags?: Maybe<TagEntityResponseCollection>;
  ticket?: Maybe<TicketEntityResponse>;
  tickets?: Maybe<TicketEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  visitUsPage?: Maybe<VisitUsPageEntityResponse>;
};


export type QueryAboutUsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryCollectionsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryContactArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryContentPageArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryContentPageBySlugArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryContentPagesArgs = {
  filters?: InputMaybe<ContentPageFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryExhibitionsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryExplorePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryGetInvolvedPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryHomePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPartnerArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryPartnersArgs = {
  filters?: InputMaybe<PartnerFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPlaceArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryPlaceBySlugArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryPlacesArgs = {
  filters?: InputMaybe<PlaceFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTagArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryTagBySlugArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryTagCategoriesArgs = {
  filters?: InputMaybe<TagCategoryFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTagCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryTagCategoryBySlugArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTicketArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryTicketsArgs = {
  filters?: InputMaybe<TicketFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryVisitUsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  contentPages?: Maybe<ContentPageRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<TagRelationResponseCollection>;
  slug: Scalars['String'];
  tagCategory?: Maybe<TagCategoryEntityResponse>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type TagContentPagesArgs = {
  filters?: InputMaybe<ContentPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TagLocalizationsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TagCategory = {
  __typename?: 'TagCategory';
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<TagCategoryRelationResponseCollection>;
  slug: Scalars['String'];
  tags?: Maybe<TagRelationResponseCollection>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type TagCategoryLocalizationsArgs = {
  filters?: InputMaybe<TagCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TagCategoryTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TagCategoryEntity = {
  __typename?: 'TagCategoryEntity';
  attributes?: Maybe<TagCategory>;
  id?: Maybe<Scalars['ID']>;
};

export type TagCategoryEntityResponse = {
  __typename?: 'TagCategoryEntityResponse';
  data?: Maybe<TagCategoryEntity>;
};

export type TagCategoryEntityResponseCollection = {
  __typename?: 'TagCategoryEntityResponseCollection';
  data: Array<TagCategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type TagCategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TagCategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<TagCategoryFiltersInput>;
  not?: InputMaybe<TagCategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TagCategoryFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TagCategoryInput = {
  slug?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type TagCategoryRelationResponseCollection = {
  __typename?: 'TagCategoryRelationResponseCollection';
  data: Array<TagCategoryEntity>;
};

export type TagEntity = {
  __typename?: 'TagEntity';
  attributes?: Maybe<Tag>;
  id?: Maybe<Scalars['ID']>;
};

export type TagEntityResponse = {
  __typename?: 'TagEntityResponse';
  data?: Maybe<TagEntity>;
};

export type TagEntityResponseCollection = {
  __typename?: 'TagEntityResponseCollection';
  data: Array<TagEntity>;
  meta: ResponseCollectionMeta;
};

export type TagFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  contentPages?: InputMaybe<ContentPageFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<TagFiltersInput>;
  not?: InputMaybe<TagFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  tagCategory?: InputMaybe<TagCategoryFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TagInput = {
  contentPages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  slug?: InputMaybe<Scalars['String']>;
  tagCategory?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type TagRelationResponseCollection = {
  __typename?: 'TagRelationResponseCollection';
  data: Array<TagEntity>;
};

export type Ticket = {
  __typename?: 'Ticket';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<TicketRelationResponseCollection>;
  price?: Maybe<Scalars['Int']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type TicketLocalizationsArgs = {
  filters?: InputMaybe<TicketFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TicketEntity = {
  __typename?: 'TicketEntity';
  attributes?: Maybe<Ticket>;
  id?: Maybe<Scalars['ID']>;
};

export type TicketEntityResponse = {
  __typename?: 'TicketEntityResponse';
  data?: Maybe<TicketEntity>;
};

export type TicketEntityResponseCollection = {
  __typename?: 'TicketEntityResponseCollection';
  data: Array<TicketEntity>;
  meta: ResponseCollectionMeta;
};

export type TicketFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TicketFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<TicketFiltersInput>;
  not?: InputMaybe<TicketFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TicketFiltersInput>>>;
  price?: InputMaybe<IntFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TicketInput = {
  description?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type TicketRelationResponseCollection = {
  __typename?: 'TicketRelationResponseCollection';
  data: Array<TicketEntity>;
};

export type TimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  contains?: InputMaybe<Scalars['Time']>;
  containsi?: InputMaybe<Scalars['Time']>;
  endsWith?: InputMaybe<Scalars['Time']>;
  eq?: InputMaybe<Scalars['Time']>;
  gt?: InputMaybe<Scalars['Time']>;
  gte?: InputMaybe<Scalars['Time']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  lt?: InputMaybe<Scalars['Time']>;
  lte?: InputMaybe<Scalars['Time']>;
  ne?: InputMaybe<Scalars['Time']>;
  not?: InputMaybe<TimeFilterInput>;
  notContains?: InputMaybe<Scalars['Time']>;
  notContainsi?: InputMaybe<Scalars['Time']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  startsWith?: InputMaybe<Scalars['Time']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
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
  email?: Maybe<Scalars['String']>;
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

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type VisitUsPage = {
  __typename?: 'VisitUsPage';
  createdAt?: Maybe<Scalars['DateTime']>;
  highlights?: Maybe<ComponentSectionsHighlightsSection>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<VisitUsPageRelationResponseCollection>;
  sections?: Maybe<Array<Maybe<VisitUsPageSectionsDynamicZone>>>;
  seo?: Maybe<ComponentBlocksSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type VisitUsPageEntity = {
  __typename?: 'VisitUsPageEntity';
  attributes?: Maybe<VisitUsPage>;
  id?: Maybe<Scalars['ID']>;
};

export type VisitUsPageEntityResponse = {
  __typename?: 'VisitUsPageEntityResponse';
  data?: Maybe<VisitUsPageEntity>;
};

export type VisitUsPageInput = {
  highlights?: InputMaybe<ComponentSectionsHighlightsSectionInput>;
  sections?: InputMaybe<Array<Scalars['VisitUsPageSectionsDynamicZoneInput']>>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
};

export type VisitUsPageRelationResponseCollection = {
  __typename?: 'VisitUsPageRelationResponseCollection';
  data: Array<VisitUsPageEntity>;
};

export type VisitUsPageSectionsDynamicZone = ComponentSectionsContactSection | ComponentSectionsMapSection | ComponentSectionsNewsSection | ComponentSectionsNewsletterSection | ComponentSectionsPageSection | ComponentSectionsRichtextSection | ComponentSectionsTicketsSection | Error;

export type ImageEntityFragment = { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null };

export type TicketEntityFragment = { __typename?: 'TicketEntity', attributes?: { __typename?: 'Ticket', title: string, price?: number | null, link?: string | null, description?: string | null } | null };

export type PartnerEntityFragment = { __typename?: 'PartnerEntity', attributes?: { __typename?: 'Partner', title: string, link?: string | null, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null };

export type TagEntityFragment = { __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null };

export type PlaceEntityFragment = { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string } | null };

export type PositionFragment = { __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null };

export type DatetimeFragment = { __typename?: 'ContentPage', dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null };

export type ContentPagePlaceFragment = { __typename?: 'ContentPage', placeTitle?: string | null, placeAddress?: string | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string } | null } | null } | null };

export type PositionsFragment = { __typename?: 'ContentPage', positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null };

export type PartnersFragment = { __typename?: 'ContentPage', partners?: { __typename?: 'PartnerRelationResponseCollection', data: Array<{ __typename?: 'PartnerEntity', attributes?: { __typename?: 'Partner', title: string, link?: string | null, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null }> } | null };

export type SliderSectionFragment = { __typename?: 'ComponentSectionsSliderSection', id: string, submenuTitle?: string | null, medias?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null }> } | null };

export type SeoFragment = { __typename?: 'ComponentBlocksSeo', metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaRobots?: string | null, metaViewport?: string | null, canonicalUrl?: string | null };

export type ContentPageEntityFragment = { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', title: string, subtitle?: string | null, slug: string, perex?: string | null, color?: string | null, inheritColorFromParent?: boolean | null, purchaseId?: string | null, relatedContentTitle?: string | null, relatedContentSubmenuTitle?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, mainContent?: Array<{ __typename: 'ComponentSectionsRichtextSection', id: string, submenuTitle?: string | null, content?: string | null } | { __typename: 'ComponentSectionsVideoSection', id: string, title?: string | null, submenuTitle?: string | null, url?: string | null } | { __typename?: 'Error', code: string, message?: string | null } | null> | null, slider?: { __typename?: 'ComponentSectionsSliderSection', id: string, submenuTitle?: string | null, medias?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null }> } | null } | null, downloadSection?: { __typename?: 'ComponentSectionsDownloadSection', id: string, title?: string | null, submenuTitle?: string | null, files?: Array<{ __typename?: 'ComponentBlocksFileItem', id: string, title?: string | null, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, caption?: string | null, alternativeText?: string | null, ext?: string | null, size: number, url: string } | null } | null } } | null> | null } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null, childPages?: { __typename?: 'ContentPageRelationResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', perex?: string | null, dateFrom?: any | null, dateTo?: any | null, title: string, subtitle?: string | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, seo?: { __typename?: 'ComponentBlocksSeo', metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaRobots?: string | null, metaViewport?: string | null, canonicalUrl?: string | null } | null, localizations?: { __typename?: 'ContentPageRelationResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', slug: string, locale?: string | null } | null }> } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null, partners?: { __typename?: 'PartnerRelationResponseCollection', data: Array<{ __typename?: 'PartnerEntity', attributes?: { __typename?: 'Partner', title: string, link?: string | null, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null }> } | null } | null };

export type NewsItemFragment = { __typename?: 'ContentPage', title: string, subtitle?: string | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null };

export type NewsItemEntityFragment = { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', title: string, subtitle?: string | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null };

export type SectionItemFragment = { __typename?: 'ContentPage', perex?: string | null, dateFrom?: any | null, dateTo?: any | null, title: string, subtitle?: string | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null };

export type SectionItemEntityFragment = { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, dateFrom?: any | null, dateTo?: any | null, title: string, subtitle?: string | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null };

export type HighlightsItemFragment = { __typename?: 'ContentPage', purchaseId?: string | null, perex?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, title: string, subtitle?: string | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null };

export type HighlightsItemEntityFragment = { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', purchaseId?: string | null, perex?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, title: string, subtitle?: string | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null };

export type HighlightsFragment = { __typename?: 'ComponentSectionsHighlightsSection', contentPages?: { __typename?: 'ContentPageRelationResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', purchaseId?: string | null, perex?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, title: string, subtitle?: string | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null };

export type DownloadItemFragment = { __typename?: 'ComponentBlocksFileItem', id: string, title?: string | null, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, caption?: string | null, alternativeText?: string | null, ext?: string | null, size: number, url: string } | null } | null } };

export type PalaceDetailsFragment = { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null };

export type ContactEntityFragment = { __typename?: 'ContactEntity', attributes?: { __typename?: 'Contact', name?: string | null, email?: string | null, openingHours?: string | null, mirbach?: { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null } | null, palffy?: { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null } | null, quickLinks?: Array<{ __typename?: 'ComponentBlocksLinkItem', title: string, url?: string | null } | null> | null } | null };

export type ContactSectionFragment = { __typename?: 'ComponentSectionsContactSection', id: string, submenuTitle?: string | null };

export type PageSectionFragment = { __typename?: 'ComponentSectionsPageSection', id: string, title?: string | null, submenuTitle?: string | null, layout?: Enum_Componentsectionspagesection_Layout | null, contentPages?: { __typename?: 'ContentPageRelationResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', perex?: string | null, dateFrom?: any | null, dateTo?: any | null, title: string, subtitle?: string | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null };

export type NewsSectionFragment = { __typename?: 'ComponentSectionsNewsSection', id: string, title?: string | null, submenuTitle?: string | null };

export type NewsletterSectionFragment = { __typename?: 'ComponentSectionsNewsletterSection', id: string, submenuTitle?: string | null };

export type RichtextSectionFragment = { __typename?: 'ComponentSectionsRichtextSection', id: string, submenuTitle?: string | null, content?: string | null };

export type VideoSectionFragment = { __typename?: 'ComponentSectionsVideoSection', id: string, title?: string | null, submenuTitle?: string | null, url?: string | null };

export type TicketsSectionFragment = { __typename?: 'ComponentSectionsTicketsSection', id: string, title?: string | null, submenuTitle?: string | null, text?: string | null };

export type MapSectionFragment = { __typename?: 'ComponentSectionsMapSection', id: string, title?: string | null, submenuTitle?: string | null };

export type DownloadSectionFragment = { __typename?: 'ComponentSectionsDownloadSection', id: string, title?: string | null, submenuTitle?: string | null, files?: Array<{ __typename?: 'ComponentBlocksFileItem', id: string, title?: string | null, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, caption?: string | null, alternativeText?: string | null, ext?: string | null, size: number, url: string } | null } | null } } | null> | null };

type Sections_ComponentSectionsContactSection_Fragment = { __typename: 'ComponentSectionsContactSection', id: string, submenuTitle?: string | null };

type Sections_ComponentSectionsMapSection_Fragment = { __typename: 'ComponentSectionsMapSection', id: string, title?: string | null, submenuTitle?: string | null };

type Sections_ComponentSectionsNewsSection_Fragment = { __typename: 'ComponentSectionsNewsSection', id: string, title?: string | null, submenuTitle?: string | null };

type Sections_ComponentSectionsNewsletterSection_Fragment = { __typename: 'ComponentSectionsNewsletterSection', id: string, submenuTitle?: string | null };

type Sections_ComponentSectionsPageSection_Fragment = { __typename: 'ComponentSectionsPageSection', id: string, title?: string | null, submenuTitle?: string | null, layout?: Enum_Componentsectionspagesection_Layout | null, contentPages?: { __typename?: 'ContentPageRelationResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', perex?: string | null, dateFrom?: any | null, dateTo?: any | null, title: string, subtitle?: string | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null };

type Sections_ComponentSectionsRichtextSection_Fragment = { __typename: 'ComponentSectionsRichtextSection', id: string, submenuTitle?: string | null, content?: string | null };

type Sections_ComponentSectionsTicketsSection_Fragment = { __typename: 'ComponentSectionsTicketsSection', id: string, title?: string | null, submenuTitle?: string | null, text?: string | null };

type Sections_Error_Fragment = { __typename?: 'Error', code: string, message?: string | null };

export type SectionsFragment = Sections_ComponentSectionsContactSection_Fragment | Sections_ComponentSectionsMapSection_Fragment | Sections_ComponentSectionsNewsSection_Fragment | Sections_ComponentSectionsNewsletterSection_Fragment | Sections_ComponentSectionsPageSection_Fragment | Sections_ComponentSectionsRichtextSection_Fragment | Sections_ComponentSectionsTicketsSection_Fragment | Sections_Error_Fragment;

type MainContent_ComponentSectionsRichtextSection_Fragment = { __typename: 'ComponentSectionsRichtextSection', id: string, submenuTitle?: string | null, content?: string | null };

type MainContent_ComponentSectionsVideoSection_Fragment = { __typename: 'ComponentSectionsVideoSection', id: string, title?: string | null, submenuTitle?: string | null, url?: string | null };

type MainContent_Error_Fragment = { __typename?: 'Error', code: string, message?: string | null };

export type MainContentFragment = MainContent_ComponentSectionsRichtextSection_Fragment | MainContent_ComponentSectionsVideoSection_Fragment | MainContent_Error_Fragment;

export type PlacesQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type PlacesQuery = { __typename?: 'Query', places?: { __typename?: 'PlaceEntityResponseCollection', data: Array<{ __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, slug: string, address: string } | null }> } | null };

export type TagsByCategorySlugQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
  tag: Scalars['String'];
}>;


export type TagsByCategorySlugQuery = { __typename?: 'Query', tagCategoryBySlug?: { __typename?: 'TagCategoryEntityResponse', data?: { __typename?: 'TagCategoryEntity', attributes?: { __typename?: 'TagCategory', tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null } | null } | null } | null };

export type NewsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
  tag: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type NewsQuery = { __typename?: 'Query', news?: { __typename?: 'ContentPageEntityResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', title: string, subtitle?: string | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null };

export type PreviewsByTagsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  tagSlugs: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
  placesSlugs: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
}>;


export type PreviewsByTagsQuery = { __typename?: 'Query', contentPages?: { __typename?: 'ContentPageEntityResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, dateFrom?: any | null, dateTo?: any | null, title: string, subtitle?: string | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null };

export type ContentPageBySlugQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
  slug: Scalars['String'];
}>;


export type ContentPageBySlugQuery = { __typename?: 'Query', contentPageBySlug?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', title: string, subtitle?: string | null, slug: string, perex?: string | null, color?: string | null, inheritColorFromParent?: boolean | null, purchaseId?: string | null, relatedContentTitle?: string | null, relatedContentSubmenuTitle?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, mainContent?: Array<{ __typename: 'ComponentSectionsRichtextSection', id: string, submenuTitle?: string | null, content?: string | null } | { __typename: 'ComponentSectionsVideoSection', id: string, title?: string | null, submenuTitle?: string | null, url?: string | null } | { __typename?: 'Error', code: string, message?: string | null } | null> | null, slider?: { __typename?: 'ComponentSectionsSliderSection', id: string, submenuTitle?: string | null, medias?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null }> } | null } | null, downloadSection?: { __typename?: 'ComponentSectionsDownloadSection', id: string, title?: string | null, submenuTitle?: string | null, files?: Array<{ __typename?: 'ComponentBlocksFileItem', id: string, title?: string | null, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, caption?: string | null, alternativeText?: string | null, ext?: string | null, size: number, url: string } | null } | null } } | null> | null } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null, childPages?: { __typename?: 'ContentPageRelationResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', perex?: string | null, dateFrom?: any | null, dateTo?: any | null, title: string, subtitle?: string | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, seo?: { __typename?: 'ComponentBlocksSeo', metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaRobots?: string | null, metaViewport?: string | null, canonicalUrl?: string | null } | null, localizations?: { __typename?: 'ContentPageRelationResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', slug: string, locale?: string | null } | null }> } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null, partners?: { __typename?: 'PartnerRelationResponseCollection', data: Array<{ __typename?: 'PartnerEntity', attributes?: { __typename?: 'Partner', title: string, link?: string | null, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null }> } | null } | null } | null } | null, contact?: { __typename?: 'ContactEntityResponse', data?: { __typename?: 'ContactEntity', attributes?: { __typename?: 'Contact', name?: string | null, email?: string | null, openingHours?: string | null, mirbach?: { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null } | null, palffy?: { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null } | null, quickLinks?: Array<{ __typename?: 'ComponentBlocksLinkItem', title: string, url?: string | null } | null> | null } | null } | null } | null };

export type TicketPageBySlugQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
  slug: Scalars['String'];
}>;


export type TicketPageBySlugQuery = { __typename?: 'Query', contentPageBySlug?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', title: string, subtitle?: string | null, slug: string, perex?: string | null, color?: string | null, inheritColorFromParent?: boolean | null, purchaseId?: string | null, relatedContentTitle?: string | null, relatedContentSubmenuTitle?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, mainContent?: Array<{ __typename: 'ComponentSectionsRichtextSection', id: string, submenuTitle?: string | null, content?: string | null } | { __typename: 'ComponentSectionsVideoSection', id: string, title?: string | null, submenuTitle?: string | null, url?: string | null } | { __typename?: 'Error', code: string, message?: string | null } | null> | null, slider?: { __typename?: 'ComponentSectionsSliderSection', id: string, submenuTitle?: string | null, medias?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null }> } | null } | null, downloadSection?: { __typename?: 'ComponentSectionsDownloadSection', id: string, title?: string | null, submenuTitle?: string | null, files?: Array<{ __typename?: 'ComponentBlocksFileItem', id: string, title?: string | null, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, caption?: string | null, alternativeText?: string | null, ext?: string | null, size: number, url: string } | null } | null } } | null> | null } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null, childPages?: { __typename?: 'ContentPageRelationResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', perex?: string | null, dateFrom?: any | null, dateTo?: any | null, title: string, subtitle?: string | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, seo?: { __typename?: 'ComponentBlocksSeo', metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaRobots?: string | null, metaViewport?: string | null, canonicalUrl?: string | null } | null, localizations?: { __typename?: 'ContentPageRelationResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', slug: string, locale?: string | null } | null }> } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null, partners?: { __typename?: 'PartnerRelationResponseCollection', data: Array<{ __typename?: 'PartnerEntity', attributes?: { __typename?: 'Partner', title: string, link?: string | null, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null }> } | null } | null } | null } | null, contact?: { __typename?: 'ContactEntityResponse', data?: { __typename?: 'ContactEntity', attributes?: { __typename?: 'Contact', name?: string | null, email?: string | null, openingHours?: string | null, mirbach?: { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null } | null, palffy?: { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null } | null, quickLinks?: Array<{ __typename?: 'ComponentBlocksLinkItem', title: string, url?: string | null } | null> | null } | null } | null } | null };

export type ExhibitionsByPlaceQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
  slug: Scalars['String'];
  today: Scalars['Date'];
  tagExhibitions: Scalars['String'];
  tagPermanentExhibitions: Scalars['String'];
  place: Scalars['String'];
}>;


export type ExhibitionsByPlaceQuery = { __typename?: 'Query', currentEvents?: { __typename?: 'ContentPageEntityResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, dateFrom?: any | null, dateTo?: any | null, title: string, subtitle?: string | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null };

export type AboutUsPageQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type AboutUsPageQuery = { __typename?: 'Query', aboutUsPage?: { __typename?: 'AboutUsPageEntityResponse', data?: { __typename?: 'AboutUsPageEntity', attributes?: { __typename: 'AboutUsPage', highlights?: { __typename?: 'ComponentSectionsHighlightsSection', contentPages?: { __typename?: 'ContentPageRelationResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', purchaseId?: string | null, perex?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, title: string, subtitle?: string | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null } | null, sections?: Array<{ __typename: 'ComponentSectionsContactSection', id: string, submenuTitle?: string | null } | { __typename: 'ComponentSectionsNewsSection', id: string, title?: string | null, submenuTitle?: string | null } | { __typename: 'ComponentSectionsNewsletterSection', id: string, submenuTitle?: string | null } | { __typename: 'ComponentSectionsPageSection', id: string, title?: string | null, submenuTitle?: string | null, layout?: Enum_Componentsectionspagesection_Layout | null, contentPages?: { __typename?: 'ContentPageRelationResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', perex?: string | null, dateFrom?: any | null, dateTo?: any | null, title: string, subtitle?: string | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null } | { __typename: 'Error', code: string, message?: string | null } | null> | null, seo?: { __typename?: 'ComponentBlocksSeo', metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaRobots?: string | null, metaViewport?: string | null, canonicalUrl?: string | null } | null } | null } | null } | null, contact?: { __typename?: 'ContactEntityResponse', data?: { __typename?: 'ContactEntity', attributes?: { __typename?: 'Contact', name?: string | null, email?: string | null, openingHours?: string | null, mirbach?: { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null } | null, palffy?: { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null } | null, quickLinks?: Array<{ __typename?: 'ComponentBlocksLinkItem', title: string, url?: string | null } | null> | null } | null } | null } | null };

export type HomePageQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type HomePageQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', attributes?: { __typename: 'HomePage', highlights?: { __typename?: 'ComponentSectionsHighlightsSection', contentPages?: { __typename?: 'ContentPageRelationResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', purchaseId?: string | null, perex?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, title: string, subtitle?: string | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null } | null, sections?: Array<{ __typename: 'ComponentSectionsContactSection', id: string, submenuTitle?: string | null } | { __typename: 'ComponentSectionsNewsSection', id: string, title?: string | null, submenuTitle?: string | null } | { __typename: 'ComponentSectionsNewsletterSection', id: string, submenuTitle?: string | null } | { __typename: 'ComponentSectionsPageSection', id: string, title?: string | null, submenuTitle?: string | null, layout?: Enum_Componentsectionspagesection_Layout | null, contentPages?: { __typename?: 'ContentPageRelationResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', perex?: string | null, dateFrom?: any | null, dateTo?: any | null, title: string, subtitle?: string | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null } | { __typename: 'Error', code: string, message?: string | null } | null> | null, partnersSection?: { __typename?: 'ComponentSectionsPartnersSection', partners?: { __typename?: 'PartnerRelationResponseCollection', data: Array<{ __typename?: 'PartnerEntity', attributes?: { __typename?: 'Partner', title: string, link?: string | null, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null }> } | null } | null, seo?: { __typename?: 'ComponentBlocksSeo', metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaRobots?: string | null, metaViewport?: string | null, canonicalUrl?: string | null } | null } | null } | null } | null, contact?: { __typename?: 'ContactEntityResponse', data?: { __typename?: 'ContactEntity', attributes?: { __typename?: 'Contact', name?: string | null, email?: string | null, openingHours?: string | null, mirbach?: { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null } | null, palffy?: { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null } | null, quickLinks?: Array<{ __typename?: 'ComponentBlocksLinkItem', title: string, url?: string | null } | null> | null } | null } | null } | null };

export type CollectionPageQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type CollectionPageQuery = { __typename?: 'Query', collectionsPage?: { __typename?: 'CollectionsPageEntityResponse', data?: { __typename?: 'CollectionsPageEntity', attributes?: { __typename: 'CollectionsPage', highlights?: { __typename?: 'ComponentSectionsHighlightsSection', contentPages?: { __typename?: 'ContentPageRelationResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', purchaseId?: string | null, perex?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, title: string, subtitle?: string | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null } | null, sections?: Array<{ __typename: 'ComponentSectionsContactSection', id: string, submenuTitle?: string | null } | { __typename: 'ComponentSectionsNewsSection', id: string, title?: string | null, submenuTitle?: string | null } | { __typename: 'ComponentSectionsNewsletterSection', id: string, submenuTitle?: string | null } | { __typename: 'ComponentSectionsPageSection', id: string, title?: string | null, submenuTitle?: string | null, layout?: Enum_Componentsectionspagesection_Layout | null, contentPages?: { __typename?: 'ContentPageRelationResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', perex?: string | null, dateFrom?: any | null, dateTo?: any | null, title: string, subtitle?: string | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null } | { __typename: 'Error', code: string, message?: string | null } | null> | null, seo?: { __typename?: 'ComponentBlocksSeo', metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaRobots?: string | null, metaViewport?: string | null, canonicalUrl?: string | null } | null } | null } | null } | null, contact?: { __typename?: 'ContactEntityResponse', data?: { __typename?: 'ContactEntity', attributes?: { __typename?: 'Contact', name?: string | null, email?: string | null, openingHours?: string | null, mirbach?: { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null } | null, palffy?: { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null } | null, quickLinks?: Array<{ __typename?: 'ComponentBlocksLinkItem', title: string, url?: string | null } | null> | null } | null } | null } | null };

export type GetInvolvedPageQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type GetInvolvedPageQuery = { __typename?: 'Query', getInvolvedPage?: { __typename?: 'GetInvolvedPageEntityResponse', data?: { __typename?: 'GetInvolvedPageEntity', attributes?: { __typename: 'GetInvolvedPage', highlights?: { __typename?: 'ComponentSectionsHighlightsSection', contentPages?: { __typename?: 'ContentPageRelationResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', purchaseId?: string | null, perex?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, title: string, subtitle?: string | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null } | null, sections?: Array<{ __typename: 'ComponentSectionsContactSection', id: string, submenuTitle?: string | null } | { __typename: 'ComponentSectionsNewsSection', id: string, title?: string | null, submenuTitle?: string | null } | { __typename: 'ComponentSectionsNewsletterSection', id: string, submenuTitle?: string | null } | { __typename: 'ComponentSectionsPageSection', id: string, title?: string | null, submenuTitle?: string | null, layout?: Enum_Componentsectionspagesection_Layout | null, contentPages?: { __typename?: 'ContentPageRelationResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', perex?: string | null, dateFrom?: any | null, dateTo?: any | null, title: string, subtitle?: string | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null } | { __typename: 'Error', code: string, message?: string | null } | null> | null, seo?: { __typename?: 'ComponentBlocksSeo', metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaRobots?: string | null, metaViewport?: string | null, canonicalUrl?: string | null } | null } | null } | null } | null, contact?: { __typename?: 'ContactEntityResponse', data?: { __typename?: 'ContactEntity', attributes?: { __typename?: 'Contact', name?: string | null, email?: string | null, openingHours?: string | null, mirbach?: { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null } | null, palffy?: { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null } | null, quickLinks?: Array<{ __typename?: 'ComponentBlocksLinkItem', title: string, url?: string | null } | null> | null } | null } | null } | null };

export type VisitUsPageQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type VisitUsPageQuery = { __typename?: 'Query', visitUsPage?: { __typename?: 'VisitUsPageEntityResponse', data?: { __typename?: 'VisitUsPageEntity', attributes?: { __typename: 'VisitUsPage', highlights?: { __typename?: 'ComponentSectionsHighlightsSection', contentPages?: { __typename?: 'ContentPageRelationResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', purchaseId?: string | null, perex?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, title: string, subtitle?: string | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null } | null, sections?: Array<{ __typename: 'ComponentSectionsContactSection', id: string, submenuTitle?: string | null } | { __typename: 'ComponentSectionsMapSection', id: string, title?: string | null, submenuTitle?: string | null } | { __typename: 'ComponentSectionsNewsSection', id: string, title?: string | null, submenuTitle?: string | null } | { __typename: 'ComponentSectionsNewsletterSection', id: string, submenuTitle?: string | null } | { __typename: 'ComponentSectionsPageSection', id: string, title?: string | null, submenuTitle?: string | null, layout?: Enum_Componentsectionspagesection_Layout | null, contentPages?: { __typename?: 'ContentPageRelationResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', perex?: string | null, dateFrom?: any | null, dateTo?: any | null, title: string, subtitle?: string | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null } | { __typename: 'ComponentSectionsRichtextSection', id: string, submenuTitle?: string | null, content?: string | null } | { __typename: 'ComponentSectionsTicketsSection', id: string, title?: string | null, submenuTitle?: string | null, text?: string | null } | { __typename?: 'Error', code: string, message?: string | null } | null> | null, seo?: { __typename?: 'ComponentBlocksSeo', metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaRobots?: string | null, metaViewport?: string | null, canonicalUrl?: string | null } | null } | null } | null } | null, tickets?: { __typename?: 'TicketEntityResponseCollection', data: Array<{ __typename?: 'TicketEntity', attributes?: { __typename?: 'Ticket', title: string, price?: number | null, link?: string | null, description?: string | null } | null }> } | null, contact?: { __typename?: 'ContactEntityResponse', data?: { __typename?: 'ContactEntity', attributes?: { __typename?: 'Contact', name?: string | null, email?: string | null, openingHours?: string | null, mirbach?: { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null } | null, palffy?: { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null } | null, quickLinks?: Array<{ __typename?: 'ComponentBlocksLinkItem', title: string, url?: string | null } | null> | null } | null } | null } | null };

export type ExplorePageQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type ExplorePageQuery = { __typename?: 'Query', explorePage?: { __typename?: 'ExplorePageEntityResponse', data?: { __typename?: 'ExplorePageEntity', attributes?: { __typename: 'ExplorePage', highlights?: { __typename?: 'ComponentSectionsHighlightsSection', contentPages?: { __typename?: 'ContentPageRelationResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', purchaseId?: string | null, perex?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, title: string, subtitle?: string | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null } | null, seo?: { __typename?: 'ComponentBlocksSeo', metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaRobots?: string | null, metaViewport?: string | null, canonicalUrl?: string | null } | null } | null } | null } | null, contact?: { __typename?: 'ContactEntityResponse', data?: { __typename?: 'ContactEntity', attributes?: { __typename?: 'Contact', name?: string | null, email?: string | null, openingHours?: string | null, mirbach?: { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null } | null, palffy?: { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null } | null, quickLinks?: Array<{ __typename?: 'ComponentBlocksLinkItem', title: string, url?: string | null } | null> | null } | null } | null } | null };

export type ExhibitionsPageQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
  today: Scalars['Date'];
  tagExhibitions: Scalars['String'];
  tagPermanentExhibitions: Scalars['String'];
  tagsAdditionalProgram: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
}>;


export type ExhibitionsPageQuery = { __typename?: 'Query', exhibitionsPage?: { __typename?: 'ExhibitionsPageEntityResponse', data?: { __typename?: 'ExhibitionsPageEntity', attributes?: { __typename: 'ExhibitionsPage', highlights?: { __typename?: 'ComponentSectionsHighlightsSection', contentPages?: { __typename?: 'ContentPageRelationResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', purchaseId?: string | null, perex?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, title: string, subtitle?: string | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null } | null, seo?: { __typename?: 'ComponentBlocksSeo', metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaRobots?: string | null, metaViewport?: string | null, canonicalUrl?: string | null } | null } | null } | null } | null, exhibitions?: { __typename?: 'ContentPageEntityResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, dateFrom?: any | null, dateTo?: any | null, title: string, subtitle?: string | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null, permanentExhibitions?: { __typename?: 'ContentPageEntityResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, dateFrom?: any | null, dateTo?: any | null, title: string, subtitle?: string | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null, additionalProgram?: { __typename?: 'ContentPageEntityResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, dateFrom?: any | null, dateTo?: any | null, title: string, subtitle?: string | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null, contact?: { __typename?: 'ContactEntityResponse', data?: { __typename?: 'ContactEntity', attributes?: { __typename?: 'Contact', name?: string | null, email?: string | null, openingHours?: string | null, mirbach?: { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null } | null, palffy?: { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null } | null, quickLinks?: Array<{ __typename?: 'ComponentBlocksLinkItem', title: string, url?: string | null } | null> | null } | null } | null } | null };

export type ErrorPageQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type ErrorPageQuery = { __typename?: 'Query', contact?: { __typename?: 'ContactEntityResponse', data?: { __typename?: 'ContactEntity', attributes?: { __typename?: 'Contact', name?: string | null, email?: string | null, openingHours?: string | null, mirbach?: { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null } | null, palffy?: { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null } | null, quickLinks?: Array<{ __typename?: 'ComponentBlocksLinkItem', title: string, url?: string | null } | null> | null } | null } | null } | null };

export const TicketEntityFragmentDoc = gql`
    fragment TicketEntity on TicketEntity {
  attributes {
    title
    price
    link
    description
  }
}
    `;
export const ImageEntityFragmentDoc = gql`
    fragment ImageEntity on UploadFileEntity {
  attributes {
    url
    alternativeText
    width
    height
  }
}
    `;
export const DatetimeFragmentDoc = gql`
    fragment Datetime on ContentPage {
  dateFrom
  dateTo
  timeFrom
  timeTo
  showRemainingTime
}
    `;
export const PlaceEntityFragmentDoc = gql`
    fragment PlaceEntity on PlaceEntity {
  attributes {
    title
    address
    slug
  }
}
    `;
export const ContentPagePlaceFragmentDoc = gql`
    fragment ContentPagePlace on ContentPage {
  place {
    data {
      ...PlaceEntity
    }
  }
  placeTitle
  placeAddress
}
    ${PlaceEntityFragmentDoc}`;
export const PositionFragmentDoc = gql`
    fragment Position on ComponentBlocksPositionItem {
  title
  names
}
    `;
export const PositionsFragmentDoc = gql`
    fragment Positions on ContentPage {
  positions {
    ...Position
  }
}
    ${PositionFragmentDoc}`;
export const PartnerEntityFragmentDoc = gql`
    fragment PartnerEntity on PartnerEntity {
  attributes {
    title
    logo {
      data {
        ...ImageEntity
      }
    }
    link
  }
}
    ${ImageEntityFragmentDoc}`;
export const PartnersFragmentDoc = gql`
    fragment Partners on ContentPage {
  partners {
    data {
      ...PartnerEntity
    }
  }
}
    ${PartnerEntityFragmentDoc}`;
export const RichtextSectionFragmentDoc = gql`
    fragment RichtextSection on ComponentSectionsRichtextSection {
  id
  submenuTitle
  content
}
    `;
export const VideoSectionFragmentDoc = gql`
    fragment VideoSection on ComponentSectionsVideoSection {
  id
  title
  submenuTitle
  url
}
    `;
export const MainContentFragmentDoc = gql`
    fragment MainContent on ContentPageMainContentDynamicZone {
  ... on Error {
    code
    message
  }
  ... on ComponentSectionsRichtextSection {
    __typename
    ...RichtextSection
  }
  ... on ComponentSectionsVideoSection {
    __typename
    ...VideoSection
  }
}
    ${RichtextSectionFragmentDoc}
${VideoSectionFragmentDoc}`;
export const SliderSectionFragmentDoc = gql`
    fragment SliderSection on ComponentSectionsSliderSection {
  id
  submenuTitle
  medias {
    data {
      ...ImageEntity
    }
  }
}
    ${ImageEntityFragmentDoc}`;
export const DownloadItemFragmentDoc = gql`
    fragment DownloadItem on ComponentBlocksFileItem {
  id
  title
  file {
    data {
      attributes {
        name
        caption
        alternativeText
        ext
        size
        url
      }
    }
  }
}
    `;
export const DownloadSectionFragmentDoc = gql`
    fragment DownloadSection on ComponentSectionsDownloadSection {
  id
  title
  submenuTitle
  files {
    ...DownloadItem
  }
}
    ${DownloadItemFragmentDoc}`;
export const NewsItemFragmentDoc = gql`
    fragment NewsItem on ContentPage {
  title
  subtitle
  slug
  color
  inheritColorFromParent
  parentPage {
    data {
      attributes {
        color
      }
    }
  }
}
    `;
export const TagEntityFragmentDoc = gql`
    fragment TagEntity on TagEntity {
  attributes {
    title
    slug
  }
}
    `;
export const SectionItemFragmentDoc = gql`
    fragment SectionItem on ContentPage {
  ...NewsItem
  perex
  coverMedia {
    data {
      ...ImageEntity
    }
  }
  dateFrom
  dateTo
  tags {
    data {
      ...TagEntity
    }
  }
}
    ${NewsItemFragmentDoc}
${ImageEntityFragmentDoc}
${TagEntityFragmentDoc}`;
export const SeoFragmentDoc = gql`
    fragment Seo on ComponentBlocksSeo {
  metaTitle
  metaDescription
  keywords
  metaRobots
  metaViewport
  canonicalUrl
}
    `;
export const ContentPageEntityFragmentDoc = gql`
    fragment ContentPageEntity on ContentPageEntity {
  id
  attributes {
    title
    subtitle
    slug
    coverMedia {
      data {
        ...ImageEntity
      }
    }
    perex
    color
    inheritColorFromParent
    ...Datetime
    ...ContentPagePlace
    ...Positions
    ...Partners
    purchaseId
    mainContent {
      ...MainContent
    }
    slider {
      ...SliderSection
    }
    relatedContentTitle
    relatedContentSubmenuTitle
    downloadSection {
      ...DownloadSection
    }
    parentPage {
      data {
        attributes {
          color
        }
      }
    }
    childPages {
      data {
        attributes {
          ...SectionItem
        }
      }
    }
    tags {
      data {
        ...TagEntity
      }
    }
    seo {
      ...Seo
    }
    localizations {
      data {
        attributes {
          slug
          locale
        }
      }
    }
  }
}
    ${ImageEntityFragmentDoc}
${DatetimeFragmentDoc}
${ContentPagePlaceFragmentDoc}
${PositionsFragmentDoc}
${PartnersFragmentDoc}
${MainContentFragmentDoc}
${SliderSectionFragmentDoc}
${DownloadSectionFragmentDoc}
${SectionItemFragmentDoc}
${TagEntityFragmentDoc}
${SeoFragmentDoc}`;
export const NewsItemEntityFragmentDoc = gql`
    fragment NewsItemEntity on ContentPageEntity {
  id
  attributes {
    ...NewsItem
  }
}
    ${NewsItemFragmentDoc}`;
export const SectionItemEntityFragmentDoc = gql`
    fragment SectionItemEntity on ContentPageEntity {
  id
  attributes {
    ...SectionItem
  }
}
    ${SectionItemFragmentDoc}`;
export const HighlightsItemFragmentDoc = gql`
    fragment HighlightsItem on ContentPage {
  ...SectionItem
  ...Datetime
  ...ContentPagePlace
  ...Positions
  purchaseId
  override {
    highlightContent
  }
}
    ${SectionItemFragmentDoc}
${DatetimeFragmentDoc}
${ContentPagePlaceFragmentDoc}
${PositionsFragmentDoc}`;
export const HighlightsItemEntityFragmentDoc = gql`
    fragment HighlightsItemEntity on ContentPageEntity {
  id
  attributes {
    ...HighlightsItem
  }
}
    ${HighlightsItemFragmentDoc}`;
export const HighlightsFragmentDoc = gql`
    fragment Highlights on ComponentSectionsHighlightsSection {
  contentPages {
    data {
      ...HighlightsItemEntity
    }
  }
}
    ${HighlightsItemEntityFragmentDoc}`;
export const PalaceDetailsFragmentDoc = gql`
    fragment PalaceDetails on ComponentBlocksPalace {
  title
  address
  zip
  city
  phone
}
    `;
export const ContactEntityFragmentDoc = gql`
    fragment ContactEntity on ContactEntity {
  attributes {
    name
    email
    openingHours
    mirbach {
      ...PalaceDetails
    }
    palffy {
      ...PalaceDetails
    }
    quickLinks {
      title
      url
    }
  }
}
    ${PalaceDetailsFragmentDoc}`;
export const PageSectionFragmentDoc = gql`
    fragment PageSection on ComponentSectionsPageSection {
  id
  title
  submenuTitle
  layout
  contentPages {
    data {
      attributes {
        ...SectionItem
      }
    }
  }
}
    ${SectionItemFragmentDoc}`;
export const NewsSectionFragmentDoc = gql`
    fragment NewsSection on ComponentSectionsNewsSection {
  id
  title
  submenuTitle
}
    `;
export const ContactSectionFragmentDoc = gql`
    fragment ContactSection on ComponentSectionsContactSection {
  id
  submenuTitle
}
    `;
export const NewsletterSectionFragmentDoc = gql`
    fragment NewsletterSection on ComponentSectionsNewsletterSection {
  id
  submenuTitle
}
    `;
export const TicketsSectionFragmentDoc = gql`
    fragment TicketsSection on ComponentSectionsTicketsSection {
  id
  title
  submenuTitle
  text
}
    `;
export const MapSectionFragmentDoc = gql`
    fragment MapSection on ComponentSectionsMapSection {
  id
  title
  submenuTitle
}
    `;
export const SectionsFragmentDoc = gql`
    fragment Sections on VisitUsPageSectionsDynamicZone {
  ... on Error {
    code
    message
  }
  ... on ComponentSectionsPageSection {
    __typename
    ...PageSection
  }
  ... on ComponentSectionsNewsSection {
    __typename
    ...NewsSection
  }
  ... on ComponentSectionsContactSection {
    __typename
    ...ContactSection
  }
  ... on ComponentSectionsNewsletterSection {
    __typename
    ...NewsletterSection
  }
  ... on ComponentSectionsTicketsSection {
    __typename
    ...TicketsSection
  }
  ... on ComponentSectionsMapSection {
    __typename
    ...MapSection
  }
  ... on ComponentSectionsRichtextSection {
    __typename
    ...RichtextSection
  }
}
    ${PageSectionFragmentDoc}
${NewsSectionFragmentDoc}
${ContactSectionFragmentDoc}
${NewsletterSectionFragmentDoc}
${TicketsSectionFragmentDoc}
${MapSectionFragmentDoc}
${RichtextSectionFragmentDoc}`;
export const PlacesDocument = gql`
    query Places($locale: I18NLocaleCode!) {
  places(locale: $locale) {
    data {
      attributes {
        title
        slug
        address
      }
    }
  }
}
    `;
export const TagsByCategorySlugDocument = gql`
    query TagsByCategorySlug($locale: I18NLocaleCode!, $tag: String!) {
  tagCategoryBySlug(locale: $locale, slug: $tag) {
    data {
      attributes {
        tags {
          data {
            ...TagEntity
          }
        }
      }
    }
  }
}
    ${TagEntityFragmentDoc}`;
export const NewsDocument = gql`
    query News($locale: I18NLocaleCode!, $tag: String!, $limit: Int = 5, $sort: [String] = ["publishedAt:desc"]) {
  news: contentPages(
    locale: $locale
    sort: $sort
    pagination: {limit: $limit}
    filters: {tags: {slug: {eq: $tag}}}
  ) {
    data {
      ...NewsItemEntity
    }
  }
}
    ${NewsItemEntityFragmentDoc}`;
export const PreviewsByTagsDocument = gql`
    query PreviewsByTags($locale: I18NLocaleCode!, $limit: Int, $offset: Int, $tagSlugs: [String]!, $placesSlugs: [String]!) {
  contentPages(
    locale: $locale
    pagination: {start: $offset, limit: $limit}
    filters: {tags: {slug: {in: $tagSlugs}}, place: {slug: {in: $placesSlugs}}}
  ) {
    data {
      ...SectionItemEntity
    }
  }
}
    ${SectionItemEntityFragmentDoc}`;
export const ContentPageBySlugDocument = gql`
    query ContentPageBySlug($locale: I18NLocaleCode!, $slug: String!) {
  contentPageBySlug(slug: $slug, locale: $locale) {
    data {
      ...ContentPageEntity
    }
  }
  contact(locale: $locale) {
    data {
      ...ContactEntity
    }
  }
}
    ${ContentPageEntityFragmentDoc}
${ContactEntityFragmentDoc}`;
export const TicketPageBySlugDocument = gql`
    query TicketPageBySlug($locale: I18NLocaleCode!, $slug: String!) {
  contentPageBySlug(slug: $slug, locale: $locale) {
    data {
      ...ContentPageEntity
    }
  }
  contact(locale: $locale) {
    data {
      ...ContactEntity
    }
  }
}
    ${ContentPageEntityFragmentDoc}
${ContactEntityFragmentDoc}`;
export const ExhibitionsByPlaceDocument = gql`
    query ExhibitionsByPlace($locale: I18NLocaleCode!, $slug: String!, $today: Date!, $tagExhibitions: String!, $tagPermanentExhibitions: String!, $place: String!) {
  currentEvents: contentPages(
    locale: $locale
    filters: {or: [{tags: {slug: {eq: $tagPermanentExhibitions}}}, {tags: {slug: {eq: $tagExhibitions}}, or: [{dateFrom: {lte: $today}, dateTo: {gte: $today}}, {dateFrom: {eq: $today}}]}], place: {slug: {eq: $place}}, slug: {ne: $slug}}
  ) {
    data {
      ...SectionItemEntity
    }
  }
}
    ${SectionItemEntityFragmentDoc}`;
export const AboutUsPageDocument = gql`
    query AboutUsPage($locale: I18NLocaleCode!) {
  aboutUsPage(locale: $locale) {
    data {
      attributes {
        __typename
        highlights {
          ...Highlights
        }
        sections {
          ...Sections
        }
        seo {
          ...Seo
        }
      }
    }
  }
  contact(locale: $locale) {
    data {
      ...ContactEntity
    }
  }
}
    ${HighlightsFragmentDoc}
${SectionsFragmentDoc}
${SeoFragmentDoc}
${ContactEntityFragmentDoc}`;
export const HomePageDocument = gql`
    query HomePage($locale: I18NLocaleCode!) {
  homePage(locale: $locale) {
    data {
      attributes {
        __typename
        highlights {
          ...Highlights
        }
        sections {
          ...Sections
        }
        partnersSection {
          partners {
            data {
              ...PartnerEntity
            }
          }
        }
        seo {
          ...Seo
        }
      }
    }
  }
  contact(locale: $locale) {
    data {
      ...ContactEntity
    }
  }
}
    ${HighlightsFragmentDoc}
${SectionsFragmentDoc}
${PartnerEntityFragmentDoc}
${SeoFragmentDoc}
${ContactEntityFragmentDoc}`;
export const CollectionPageDocument = gql`
    query CollectionPage($locale: I18NLocaleCode!) {
  collectionsPage(locale: $locale) {
    data {
      attributes {
        __typename
        highlights {
          ...Highlights
        }
        sections {
          ...Sections
        }
        seo {
          ...Seo
        }
      }
    }
  }
  contact(locale: $locale) {
    data {
      ...ContactEntity
    }
  }
}
    ${HighlightsFragmentDoc}
${SectionsFragmentDoc}
${SeoFragmentDoc}
${ContactEntityFragmentDoc}`;
export const GetInvolvedPageDocument = gql`
    query GetInvolvedPage($locale: I18NLocaleCode!) {
  getInvolvedPage(locale: $locale) {
    data {
      attributes {
        __typename
        highlights {
          ...Highlights
        }
        sections {
          ...Sections
        }
        seo {
          ...Seo
        }
      }
    }
  }
  contact(locale: $locale) {
    data {
      ...ContactEntity
    }
  }
}
    ${HighlightsFragmentDoc}
${SectionsFragmentDoc}
${SeoFragmentDoc}
${ContactEntityFragmentDoc}`;
export const VisitUsPageDocument = gql`
    query VisitUsPage($locale: I18NLocaleCode!) {
  visitUsPage(locale: $locale) {
    data {
      attributes {
        __typename
        highlights {
          ...Highlights
        }
        sections {
          ...Sections
        }
        seo {
          ...Seo
        }
      }
    }
  }
  tickets {
    data {
      ...TicketEntity
    }
  }
  contact(locale: $locale) {
    data {
      ...ContactEntity
    }
  }
}
    ${HighlightsFragmentDoc}
${SectionsFragmentDoc}
${SeoFragmentDoc}
${TicketEntityFragmentDoc}
${ContactEntityFragmentDoc}`;
export const ExplorePageDocument = gql`
    query ExplorePage($locale: I18NLocaleCode!) {
  explorePage(locale: $locale) {
    data {
      attributes {
        __typename
        highlights {
          ...Highlights
        }
        seo {
          ...Seo
        }
      }
    }
  }
  contact(locale: $locale) {
    data {
      ...ContactEntity
    }
  }
}
    ${HighlightsFragmentDoc}
${SeoFragmentDoc}
${ContactEntityFragmentDoc}`;
export const ExhibitionsPageDocument = gql`
    query ExhibitionsPage($locale: I18NLocaleCode!, $today: Date!, $tagExhibitions: String!, $tagPermanentExhibitions: String!, $tagsAdditionalProgram: [String]!) {
  exhibitionsPage(locale: $locale) {
    data {
      attributes {
        __typename
        highlights {
          ...Highlights
        }
        seo {
          ...Seo
        }
      }
    }
  }
  exhibitions: contentPages(
    locale: $locale
    filters: {tags: {slug: {eq: $tagExhibitions}}, or: [{dateFrom: {gte: $today}}, {dateTo: {gte: $today}}]}
  ) {
    data {
      ...SectionItemEntity
    }
  }
  permanentExhibitions: contentPages(
    locale: $locale
    filters: {tags: {slug: {eq: $tagPermanentExhibitions}}, or: [{dateFrom: {gte: $today}}, {dateTo: {gte: $today}}]}
  ) {
    data {
      ...SectionItemEntity
    }
  }
  additionalProgram: contentPages(
    locale: $locale
    filters: {tags: {slug: {in: $tagsAdditionalProgram}}, or: [{dateFrom: {gte: $today}}, {dateTo: {gte: $today}}]}
  ) {
    data {
      ...SectionItemEntity
    }
  }
  contact(locale: $locale) {
    data {
      ...ContactEntity
    }
  }
}
    ${HighlightsFragmentDoc}
${SeoFragmentDoc}
${SectionItemEntityFragmentDoc}
${ContactEntityFragmentDoc}`;
export const ErrorPageDocument = gql`
    query ErrorPage($locale: I18NLocaleCode!) {
  contact(locale: $locale) {
    data {
      ...ContactEntity
    }
  }
}
    ${ContactEntityFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Places(variables: PlacesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PlacesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PlacesQuery>(PlacesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Places', 'query');
    },
    TagsByCategorySlug(variables: TagsByCategorySlugQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TagsByCategorySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TagsByCategorySlugQuery>(TagsByCategorySlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TagsByCategorySlug', 'query');
    },
    News(variables: NewsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<NewsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<NewsQuery>(NewsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'News', 'query');
    },
    PreviewsByTags(variables: PreviewsByTagsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PreviewsByTagsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PreviewsByTagsQuery>(PreviewsByTagsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PreviewsByTags', 'query');
    },
    ContentPageBySlug(variables: ContentPageBySlugQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ContentPageBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ContentPageBySlugQuery>(ContentPageBySlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ContentPageBySlug', 'query');
    },
    TicketPageBySlug(variables: TicketPageBySlugQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TicketPageBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TicketPageBySlugQuery>(TicketPageBySlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TicketPageBySlug', 'query');
    },
    ExhibitionsByPlace(variables: ExhibitionsByPlaceQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ExhibitionsByPlaceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ExhibitionsByPlaceQuery>(ExhibitionsByPlaceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ExhibitionsByPlace', 'query');
    },
    AboutUsPage(variables: AboutUsPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AboutUsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AboutUsPageQuery>(AboutUsPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AboutUsPage', 'query');
    },
    HomePage(variables: HomePageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<HomePageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<HomePageQuery>(HomePageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'HomePage', 'query');
    },
    CollectionPage(variables: CollectionPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CollectionPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CollectionPageQuery>(CollectionPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CollectionPage', 'query');
    },
    GetInvolvedPage(variables: GetInvolvedPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetInvolvedPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetInvolvedPageQuery>(GetInvolvedPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetInvolvedPage', 'query');
    },
    VisitUsPage(variables: VisitUsPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<VisitUsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<VisitUsPageQuery>(VisitUsPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'VisitUsPage', 'query');
    },
    ExplorePage(variables: ExplorePageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ExplorePageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ExplorePageQuery>(ExplorePageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ExplorePage', 'query');
    },
    ExhibitionsPage(variables: ExhibitionsPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ExhibitionsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ExhibitionsPageQuery>(ExhibitionsPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ExhibitionsPage', 'query');
    },
    ErrorPage(variables: ErrorPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ErrorPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ErrorPageQuery>(ErrorPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ErrorPage', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;