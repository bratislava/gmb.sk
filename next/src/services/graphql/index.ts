import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
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
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  Long: any;
  MainPageSectionsDynamicZoneInput: any;
  /** A time string with format HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  VisitUsPageSectionsDynamicZoneInput: any;
};

export type AboutUsPage = {
  __typename?: 'AboutUsPage';
  createdAt?: Maybe<Scalars['DateTime']>;
  highlights?: Maybe<Array<Maybe<ComponentBlocksContentPageItem>>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<AboutUsPageRelationResponseCollection>;
  sections?: Maybe<Array<Maybe<AboutUsPageSectionsDynamicZone>>>;
  seo?: Maybe<ComponentBlocksSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type AboutUsPageHighlightsArgs = {
  filters?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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

export type AboutUsPageEntityResponseCollection = {
  __typename?: 'AboutUsPageEntityResponseCollection';
  data: Array<AboutUsPageEntity>;
  meta: ResponseCollectionMeta;
};

export type AboutUsPageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AboutUsPageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  highlights?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<AboutUsPageFiltersInput>;
  not?: InputMaybe<AboutUsPageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AboutUsPageFiltersInput>>>;
  seo?: InputMaybe<ComponentBlocksSeoFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AboutUsPageInput = {
  highlights?: InputMaybe<Array<InputMaybe<ComponentBlocksContentPageItemInput>>>;
  sections?: InputMaybe<Array<Scalars['AboutUsPageSectionsDynamicZoneInput']>>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
};

export type AboutUsPageRelationResponseCollection = {
  __typename?: 'AboutUsPageRelationResponseCollection';
  data: Array<AboutUsPageEntity>;
};

export type AboutUsPageSectionsDynamicZone = ComponentSectionsNewsSection | ComponentSectionsNewsletterSection | ComponentSectionsOpeningHoursSection | ComponentSectionsPageSection | Error;

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nei?: InputMaybe<Scalars['Boolean']>;
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
  highlights?: Maybe<Array<Maybe<ComponentBlocksContentPageItem>>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<CollectionsPageRelationResponseCollection>;
  sections?: Maybe<Array<Maybe<CollectionsPageSectionsDynamicZone>>>;
  seo?: Maybe<ComponentBlocksSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CollectionsPageHighlightsArgs = {
  filters?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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

export type CollectionsPageEntityResponseCollection = {
  __typename?: 'CollectionsPageEntityResponseCollection';
  data: Array<CollectionsPageEntity>;
  meta: ResponseCollectionMeta;
};

export type CollectionsPageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CollectionsPageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  highlights?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<CollectionsPageFiltersInput>;
  not?: InputMaybe<CollectionsPageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CollectionsPageFiltersInput>>>;
  seo?: InputMaybe<ComponentBlocksSeoFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CollectionsPageInput = {
  highlights?: InputMaybe<Array<InputMaybe<ComponentBlocksContentPageItemInput>>>;
  sections?: InputMaybe<Array<Scalars['CollectionsPageSectionsDynamicZoneInput']>>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
};

export type CollectionsPageRelationResponseCollection = {
  __typename?: 'CollectionsPageRelationResponseCollection';
  data: Array<CollectionsPageEntity>;
};

export type CollectionsPageSectionsDynamicZone = ComponentSectionsNewsSection | ComponentSectionsNewsletterSection | ComponentSectionsOpeningHoursSection | ComponentSectionsPageSection | Error;

export type ComponentBlocksContactCardItem = {
  __typename?: 'ComponentBlocksContactCardItem';
  contactCard?: Maybe<ContactCardEntityResponse>;
  id: Scalars['ID'];
};

export type ComponentBlocksContactCardItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksContactCardItemFiltersInput>>>;
  contactCard?: InputMaybe<ContactCardFiltersInput>;
  not?: InputMaybe<ComponentBlocksContactCardItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksContactCardItemFiltersInput>>>;
};

export type ComponentBlocksContactCardItemInput = {
  contactCard?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentBlocksContentPageItem = {
  __typename?: 'ComponentBlocksContentPageItem';
  contentPage?: Maybe<ContentPageEntityResponse>;
  id: Scalars['ID'];
};

export type ComponentBlocksContentPageItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksContentPageItemFiltersInput>>>;
  contentPage?: InputMaybe<ContentPageFiltersInput>;
  not?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksContentPageItemFiltersInput>>>;
};

export type ComponentBlocksContentPageItemInput = {
  contentPage?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentBlocksExhibitionArchive = {
  __typename?: 'ComponentBlocksExhibitionArchive';
  color?: Maybe<Scalars['String']>;
  coverMedia?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  perex?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type ComponentBlocksExhibitionArchiveFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksExhibitionArchiveFiltersInput>>>;
  color?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksExhibitionArchiveFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksExhibitionArchiveFiltersInput>>>;
  perex?: InputMaybe<StringFilterInput>;
  subtitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksExhibitionArchiveInput = {
  color?: InputMaybe<Scalars['String']>;
  coverMedia?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  perex?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

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

export type ComponentBlocksHighlightOverrideFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksHighlightOverrideFiltersInput>>>;
  highlightContent?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksHighlightOverrideFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksHighlightOverrideFiltersInput>>>;
};

export type ComponentBlocksHighlightOverrideInput = {
  highlightContent?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentBlocksLinkItem = {
  __typename?: 'ComponentBlocksLinkItem';
  id: Scalars['ID'];
  newWindow?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type ComponentBlocksLinkItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksLinkItemFiltersInput>>>;
  newWindow?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentBlocksLinkItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksLinkItemFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksLinkItemInput = {
  id?: InputMaybe<Scalars['ID']>;
  newWindow?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksLinks = {
  __typename?: 'ComponentBlocksLinks';
  id: Scalars['ID'];
  links?: Maybe<Array<Maybe<ComponentBlocksLinkItem>>>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentBlocksLinksLinksArgs = {
  filters?: InputMaybe<ComponentBlocksLinkItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentBlocksLinksFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksLinksFiltersInput>>>;
  links?: InputMaybe<ComponentBlocksLinkItemFiltersInput>;
  not?: InputMaybe<ComponentBlocksLinksFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksLinksFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksLinksInput = {
  id?: InputMaybe<Scalars['ID']>;
  links?: InputMaybe<Array<InputMaybe<ComponentBlocksLinkItemInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksMenuLinkItem = {
  __typename?: 'ComponentBlocksMenuLinkItem';
  hasButtonStyle?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  mainPage?: Maybe<MainPageEntityResponse>;
  title: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type ComponentBlocksMenuLinkItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksMenuLinkItemFiltersInput>>>;
  hasButtonStyle?: InputMaybe<BooleanFilterInput>;
  mainPage?: InputMaybe<MainPageFiltersInput>;
  not?: InputMaybe<ComponentBlocksMenuLinkItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksMenuLinkItemFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksMenuLinkItemInput = {
  hasButtonStyle?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  mainPage?: InputMaybe<Scalars['ID']>;
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

export type ComponentBlocksPalaceFiltersInput = {
  address?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksPalaceFiltersInput>>>;
  city?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksPalaceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksPalaceFiltersInput>>>;
  phone?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  zip?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksPalaceInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  phone?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksPartnerItem = {
  __typename?: 'ComponentBlocksPartnerItem';
  id: Scalars['ID'];
  partner?: Maybe<PartnerEntityResponse>;
};

export type ComponentBlocksPartnerItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksPartnerItemFiltersInput>>>;
  not?: InputMaybe<ComponentBlocksPartnerItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksPartnerItemFiltersInput>>>;
  partner?: InputMaybe<PartnerFiltersInput>;
};

export type ComponentBlocksPartnerItemInput = {
  id?: InputMaybe<Scalars['ID']>;
  partner?: InputMaybe<Scalars['ID']>;
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
  id: Scalars['ID'];
  keywords?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaImage?: Maybe<UploadFileEntityResponse>;
  metaTitle?: Maybe<Scalars['String']>;
};

export type ComponentBlocksSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksSeoFiltersInput>>>;
  keywords?: InputMaybe<StringFilterInput>;
  metaDescription?: InputMaybe<StringFilterInput>;
  metaTitle?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksSeoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksSeoFiltersInput>>>;
};

export type ComponentBlocksSeoInput = {
  id?: InputMaybe<Scalars['ID']>;
  keywords?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaImage?: InputMaybe<Scalars['ID']>;
  metaTitle?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsArchiveSection = {
  __typename?: 'ComponentSectionsArchiveSection';
  archiveCard?: Maybe<ComponentBlocksExhibitionArchive>;
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsArchiveSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsArchiveSectionFiltersInput>>>;
  archiveCard?: InputMaybe<ComponentBlocksExhibitionArchiveFiltersInput>;
  not?: InputMaybe<ComponentSectionsArchiveSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsArchiveSectionFiltersInput>>>;
  submenuTitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsArchiveSectionInput = {
  archiveCard?: InputMaybe<ComponentBlocksExhibitionArchiveInput>;
  id?: InputMaybe<Scalars['ID']>;
  submenuTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsAudioSection = {
  __typename?: 'ComponentSectionsAudioSection';
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentSectionsAudioSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsAudioSectionFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsAudioSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsAudioSectionFiltersInput>>>;
  submenuTitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsAudioSectionInput = {
  id?: InputMaybe<Scalars['ID']>;
  submenuTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsContactCardsSection = {
  __typename?: 'ComponentSectionsContactCardsSection';
  contacts?: Maybe<Array<Maybe<ComponentBlocksContactCardItem>>>;
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentSectionsContactCardsSectionContactsArgs = {
  filters?: InputMaybe<ComponentBlocksContactCardItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsContactCardsSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsContactCardsSectionFiltersInput>>>;
  contacts?: InputMaybe<ComponentBlocksContactCardItemFiltersInput>;
  not?: InputMaybe<ComponentSectionsContactCardsSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsContactCardsSectionFiltersInput>>>;
  submenuTitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsContactCardsSectionInput = {
  contacts?: InputMaybe<Array<InputMaybe<ComponentBlocksContactCardItemInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  submenuTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
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

export type ComponentSectionsDownloadSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsDownloadSectionFiltersInput>>>;
  files?: InputMaybe<ComponentBlocksFileItemFiltersInput>;
  not?: InputMaybe<ComponentSectionsDownloadSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsDownloadSectionFiltersInput>>>;
  submenuTitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsDownloadSectionInput = {
  files?: InputMaybe<Array<InputMaybe<ComponentBlocksFileItemInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  submenuTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsExploreSection = {
  __typename?: 'ComponentSectionsExploreSection';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsExploreSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsExploreSectionFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsExploreSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsExploreSectionFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsExploreSectionInput = {
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsGallerySection = {
  __typename?: 'ComponentSectionsGallerySection';
  id: Scalars['ID'];
  medias?: Maybe<UploadFileRelationResponseCollection>;
  submenuTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentSectionsGallerySectionMediasArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsGallerySectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsGallerySectionFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsGallerySectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsGallerySectionFiltersInput>>>;
  submenuTitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsGallerySectionInput = {
  id?: InputMaybe<Scalars['ID']>;
  medias?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  submenuTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsHighlightsSection = {
  __typename?: 'ComponentSectionsHighlightsSection';
  highlights?: Maybe<Array<Maybe<ComponentBlocksContentPageItem>>>;
  id: Scalars['ID'];
};


export type ComponentSectionsHighlightsSectionHighlightsArgs = {
  filters?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsHighlightsSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsHighlightsSectionFiltersInput>>>;
  highlights?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  not?: InputMaybe<ComponentSectionsHighlightsSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsHighlightsSectionFiltersInput>>>;
};

export type ComponentSectionsHighlightsSectionInput = {
  highlights?: InputMaybe<Array<InputMaybe<ComponentBlocksContentPageItemInput>>>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentSectionsMapSection = {
  __typename?: 'ComponentSectionsMapSection';
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsMapSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsMapSectionFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsMapSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsMapSectionFiltersInput>>>;
  submenuTitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsMapSectionInput = {
  id?: InputMaybe<Scalars['ID']>;
  submenuTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsNewsSection = {
  __typename?: 'ComponentSectionsNewsSection';
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsNewsSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsNewsSectionFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsNewsSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsNewsSectionFiltersInput>>>;
  submenuTitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsNewsSectionInput = {
  id?: InputMaybe<Scalars['ID']>;
  submenuTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsNewsletterSection = {
  __typename?: 'ComponentSectionsNewsletterSection';
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
};

export type ComponentSectionsNewsletterSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsNewsletterSectionFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsNewsletterSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsNewsletterSectionFiltersInput>>>;
  submenuTitle?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsNewsletterSectionInput = {
  id?: InputMaybe<Scalars['ID']>;
  submenuTitle?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsOpeningHoursSection = {
  __typename?: 'ComponentSectionsOpeningHoursSection';
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
};

export type ComponentSectionsOpeningHoursSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsOpeningHoursSectionFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsOpeningHoursSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsOpeningHoursSectionFiltersInput>>>;
  submenuTitle?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsOpeningHoursSectionInput = {
  id?: InputMaybe<Scalars['ID']>;
  submenuTitle?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsPageSection = {
  __typename?: 'ComponentSectionsPageSection';
  contentPages?: Maybe<Array<Maybe<ComponentBlocksContentPageItem>>>;
  id: Scalars['ID'];
  layout?: Maybe<Enum_Componentsectionspagesection_Layout>;
  submenuTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentSectionsPageSectionContentPagesArgs = {
  filters?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsPageSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsPageSectionFiltersInput>>>;
  contentPages?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  layout?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSectionsPageSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsPageSectionFiltersInput>>>;
  submenuTitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsPageSectionInput = {
  contentPages?: InputMaybe<Array<InputMaybe<ComponentBlocksContentPageItemInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  layout?: InputMaybe<Enum_Componentsectionspagesection_Layout>;
  submenuTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsPartnersSection = {
  __typename?: 'ComponentSectionsPartnersSection';
  id: Scalars['ID'];
  partners?: Maybe<Array<Maybe<ComponentBlocksPartnerItem>>>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentSectionsPartnersSectionPartnersArgs = {
  filters?: InputMaybe<ComponentBlocksPartnerItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsPartnersSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsPartnersSectionFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsPartnersSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsPartnersSectionFiltersInput>>>;
  partners?: InputMaybe<ComponentBlocksPartnerItemFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsPartnersSectionInput = {
  id?: InputMaybe<Scalars['ID']>;
  partners?: InputMaybe<Array<InputMaybe<ComponentBlocksPartnerItemInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsRichtextSection = {
  __typename?: 'ComponentSectionsRichtextSection';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
};

export type ComponentSectionsRichtextSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsRichtextSectionFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSectionsRichtextSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsRichtextSectionFiltersInput>>>;
  submenuTitle?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsRichtextSectionInput = {
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  submenuTitle?: InputMaybe<Scalars['String']>;
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

export type ComponentSectionsSliderSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsSliderSectionFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsSliderSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsSliderSectionFiltersInput>>>;
  submenuTitle?: InputMaybe<StringFilterInput>;
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

export type ComponentSectionsTicketsSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsTicketsSectionFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsTicketsSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsTicketsSectionFiltersInput>>>;
  submenuTitle?: InputMaybe<StringFilterInput>;
  text?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsTicketsSectionInput = {
  id?: InputMaybe<Scalars['ID']>;
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

export type ComponentSectionsVideoSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsVideoSectionFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsVideoSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsVideoSectionFiltersInput>>>;
  submenuTitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsVideoSectionInput = {
  id?: InputMaybe<Scalars['ID']>;
  submenuTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ContactCard = {
  __typename?: 'ContactCard';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ContactCardRelationResponseCollection>;
  name: Scalars['String'];
  phone1?: Maybe<Scalars['String']>;
  phone2?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ContactCardLocalizationsArgs = {
  filters?: InputMaybe<ContactCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContactCardEntity = {
  __typename?: 'ContactCardEntity';
  attributes?: Maybe<ContactCard>;
  id?: Maybe<Scalars['ID']>;
};

export type ContactCardEntityResponse = {
  __typename?: 'ContactCardEntityResponse';
  data?: Maybe<ContactCardEntity>;
};

export type ContactCardEntityResponseCollection = {
  __typename?: 'ContactCardEntityResponseCollection';
  data: Array<ContactCardEntity>;
  meta: ResponseCollectionMeta;
};

export type ContactCardFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ContactCardFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ContactCardFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ContactCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContactCardFiltersInput>>>;
  phone1?: InputMaybe<StringFilterInput>;
  phone2?: InputMaybe<StringFilterInput>;
  position?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContactCardInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone1?: InputMaybe<Scalars['String']>;
  phone2?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
};

export type ContactCardRelationResponseCollection = {
  __typename?: 'ContactCardRelationResponseCollection';
  data: Array<ContactCardEntity>;
};

export type ContentPage = {
  __typename?: 'ContentPage';
  addedAt?: Maybe<Scalars['DateTime']>;
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
  partners?: Maybe<Array<Maybe<ComponentBlocksPartnerItem>>>;
  perex?: Maybe<Scalars['String']>;
  place?: Maybe<PlaceEntityResponse>;
  placeAddress?: Maybe<Scalars['String']>;
  placeTitle?: Maybe<Scalars['String']>;
  positions?: Maybe<Array<Maybe<ComponentBlocksPositionItem>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  purchaseId?: Maybe<Scalars['String']>;
  relatedContentSubmenuTitle?: Maybe<Scalars['String']>;
  relatedContentTitle?: Maybe<Scalars['String']>;
  sellTickets?: Maybe<Scalars['Boolean']>;
  seo?: Maybe<ComponentBlocksSeo>;
  showRemainingTime?: Maybe<Scalars['Boolean']>;
  showShareButtons?: Maybe<Scalars['Boolean']>;
  slider?: Maybe<ComponentSectionsSliderSection>;
  slug: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  tags?: Maybe<TagRelationResponseCollection>;
  timeFrom?: Maybe<Scalars['Time']>;
  timeTo?: Maybe<Scalars['Time']>;
  title: Scalars['String'];
  titleToShow?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  useDatetimeAsSubtitle?: Maybe<Scalars['Boolean']>;
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
  filters?: InputMaybe<ComponentBlocksPartnerItemFiltersInput>;
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
  addedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ContentPageFiltersInput>>>;
  childPages?: InputMaybe<ContentPageFiltersInput>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  dateFrom?: InputMaybe<DateFilterInput>;
  dateTo?: InputMaybe<DateFilterInput>;
  downloadSection?: InputMaybe<ComponentSectionsDownloadSectionFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  inheritColorFromParent?: InputMaybe<BooleanFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ContentPageFiltersInput>;
  not?: InputMaybe<ContentPageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContentPageFiltersInput>>>;
  override?: InputMaybe<ComponentBlocksHighlightOverrideFiltersInput>;
  parentPage?: InputMaybe<ContentPageFiltersInput>;
  partners?: InputMaybe<ComponentBlocksPartnerItemFiltersInput>;
  perex?: InputMaybe<StringFilterInput>;
  place?: InputMaybe<PlaceFiltersInput>;
  placeAddress?: InputMaybe<StringFilterInput>;
  placeTitle?: InputMaybe<StringFilterInput>;
  positions?: InputMaybe<ComponentBlocksPositionItemFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  purchaseId?: InputMaybe<StringFilterInput>;
  relatedContentSubmenuTitle?: InputMaybe<StringFilterInput>;
  relatedContentTitle?: InputMaybe<StringFilterInput>;
  sellTickets?: InputMaybe<BooleanFilterInput>;
  seo?: InputMaybe<ComponentBlocksSeoFiltersInput>;
  showRemainingTime?: InputMaybe<BooleanFilterInput>;
  showShareButtons?: InputMaybe<BooleanFilterInput>;
  slider?: InputMaybe<ComponentSectionsSliderSectionFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  subtitle?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  timeFrom?: InputMaybe<TimeFilterInput>;
  timeTo?: InputMaybe<TimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  titleToShow?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  useDatetimeAsSubtitle?: InputMaybe<BooleanFilterInput>;
};

export type ContentPageInput = {
  addedAt?: InputMaybe<Scalars['DateTime']>;
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
  partners?: InputMaybe<Array<InputMaybe<ComponentBlocksPartnerItemInput>>>;
  perex?: InputMaybe<Scalars['String']>;
  place?: InputMaybe<Scalars['ID']>;
  placeAddress?: InputMaybe<Scalars['String']>;
  placeTitle?: InputMaybe<Scalars['String']>;
  positions?: InputMaybe<Array<InputMaybe<ComponentBlocksPositionItemInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  purchaseId?: InputMaybe<Scalars['String']>;
  relatedContentSubmenuTitle?: InputMaybe<Scalars['String']>;
  relatedContentTitle?: InputMaybe<Scalars['String']>;
  sellTickets?: InputMaybe<Scalars['Boolean']>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
  showRemainingTime?: InputMaybe<Scalars['Boolean']>;
  showShareButtons?: InputMaybe<Scalars['Boolean']>;
  slider?: InputMaybe<ComponentSectionsSliderSectionInput>;
  slug?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  timeFrom?: InputMaybe<Scalars['Time']>;
  timeTo?: InputMaybe<Scalars['Time']>;
  title?: InputMaybe<Scalars['String']>;
  titleToShow?: InputMaybe<Scalars['String']>;
  useDatetimeAsSubtitle?: InputMaybe<Scalars['Boolean']>;
};

export type ContentPageMainContentDynamicZone = ComponentSectionsAudioSection | ComponentSectionsContactCardsSection | ComponentSectionsGallerySection | ComponentSectionsRichtextSection | ComponentSectionsVideoSection | Error;

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
  eqi?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  nei?: InputMaybe<Scalars['Date']>;
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
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  nei?: InputMaybe<Scalars['DateTime']>;
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
  archiveSection?: Maybe<ComponentSectionsArchiveSection>;
  archiveSeo?: Maybe<ComponentBlocksSeo>;
  createdAt?: Maybe<Scalars['DateTime']>;
  highlights?: Maybe<Array<Maybe<ComponentBlocksContentPageItem>>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ExhibitionsPageRelationResponseCollection>;
  seo?: Maybe<ComponentBlocksSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ExhibitionsPageHighlightsArgs = {
  filters?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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

export type ExhibitionsPageEntityResponseCollection = {
  __typename?: 'ExhibitionsPageEntityResponseCollection';
  data: Array<ExhibitionsPageEntity>;
  meta: ResponseCollectionMeta;
};

export type ExhibitionsPageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ExhibitionsPageFiltersInput>>>;
  archiveSection?: InputMaybe<ComponentSectionsArchiveSectionFiltersInput>;
  archiveSeo?: InputMaybe<ComponentBlocksSeoFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  highlights?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ExhibitionsPageFiltersInput>;
  not?: InputMaybe<ExhibitionsPageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ExhibitionsPageFiltersInput>>>;
  seo?: InputMaybe<ComponentBlocksSeoFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ExhibitionsPageInput = {
  archiveSection?: InputMaybe<ComponentSectionsArchiveSectionInput>;
  archiveSeo?: InputMaybe<ComponentBlocksSeoInput>;
  highlights?: InputMaybe<Array<InputMaybe<ComponentBlocksContentPageItemInput>>>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
};

export type ExhibitionsPageRelationResponseCollection = {
  __typename?: 'ExhibitionsPageRelationResponseCollection';
  data: Array<ExhibitionsPageEntity>;
};

export type ExplorePage = {
  __typename?: 'ExplorePage';
  createdAt?: Maybe<Scalars['DateTime']>;
  highlights?: Maybe<Array<Maybe<ComponentBlocksContentPageItem>>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ExplorePageRelationResponseCollection>;
  seo?: Maybe<ComponentBlocksSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ExplorePageHighlightsArgs = {
  filters?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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

export type ExplorePageEntityResponseCollection = {
  __typename?: 'ExplorePageEntityResponseCollection';
  data: Array<ExplorePageEntity>;
  meta: ResponseCollectionMeta;
};

export type ExplorePageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ExplorePageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  highlights?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ExplorePageFiltersInput>;
  not?: InputMaybe<ExplorePageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ExplorePageFiltersInput>>>;
  seo?: InputMaybe<ComponentBlocksSeoFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ExplorePageInput = {
  highlights?: InputMaybe<Array<InputMaybe<ComponentBlocksContentPageItemInput>>>;
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
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nei?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type General = {
  __typename?: 'General';
  createdAt?: Maybe<Scalars['DateTime']>;
  disclosureMoreFiles?: Maybe<ComponentSectionsDownloadSection>;
  email?: Maybe<Scalars['String']>;
  footerLinks1?: Maybe<ComponentBlocksLinks>;
  footerLinks2?: Maybe<ComponentBlocksLinks>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<GeneralRelationResponseCollection>;
  mirbach?: Maybe<ComponentBlocksPalace>;
  name?: Maybe<Scalars['String']>;
  openingHours?: Maybe<Scalars['String']>;
  palffy?: Maybe<ComponentBlocksPalace>;
  socialLinks?: Maybe<ComponentBlocksLinks>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GeneralEntity = {
  __typename?: 'GeneralEntity';
  attributes?: Maybe<General>;
  id?: Maybe<Scalars['ID']>;
};

export type GeneralEntityResponse = {
  __typename?: 'GeneralEntityResponse';
  data?: Maybe<GeneralEntity>;
};

export type GeneralEntityResponseCollection = {
  __typename?: 'GeneralEntityResponseCollection';
  data: Array<GeneralEntity>;
  meta: ResponseCollectionMeta;
};

export type GeneralFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GeneralFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  disclosureMoreFiles?: InputMaybe<ComponentSectionsDownloadSectionFiltersInput>;
  email?: InputMaybe<StringFilterInput>;
  footerLinks1?: InputMaybe<ComponentBlocksLinksFiltersInput>;
  footerLinks2?: InputMaybe<ComponentBlocksLinksFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<GeneralFiltersInput>;
  mirbach?: InputMaybe<ComponentBlocksPalaceFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<GeneralFiltersInput>;
  openingHours?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<GeneralFiltersInput>>>;
  palffy?: InputMaybe<ComponentBlocksPalaceFiltersInput>;
  socialLinks?: InputMaybe<ComponentBlocksLinksFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type GeneralInput = {
  disclosureMoreFiles?: InputMaybe<ComponentSectionsDownloadSectionInput>;
  email?: InputMaybe<Scalars['String']>;
  footerLinks1?: InputMaybe<ComponentBlocksLinksInput>;
  footerLinks2?: InputMaybe<ComponentBlocksLinksInput>;
  mirbach?: InputMaybe<ComponentBlocksPalaceInput>;
  name?: InputMaybe<Scalars['String']>;
  openingHours?: InputMaybe<Scalars['String']>;
  palffy?: InputMaybe<ComponentBlocksPalaceInput>;
  socialLinks?: InputMaybe<ComponentBlocksLinksInput>;
};

export type GeneralRelationResponseCollection = {
  __typename?: 'GeneralRelationResponseCollection';
  data: Array<GeneralEntity>;
};

export type GenericMorph = AboutUsPage | CollectionsPage | ComponentBlocksContactCardItem | ComponentBlocksContentPageItem | ComponentBlocksExhibitionArchive | ComponentBlocksFileItem | ComponentBlocksHighlightOverride | ComponentBlocksLinkItem | ComponentBlocksLinks | ComponentBlocksMenuLinkItem | ComponentBlocksPalace | ComponentBlocksPartnerItem | ComponentBlocksPositionItem | ComponentBlocksSeo | ComponentSectionsArchiveSection | ComponentSectionsAudioSection | ComponentSectionsContactCardsSection | ComponentSectionsDownloadSection | ComponentSectionsExploreSection | ComponentSectionsGallerySection | ComponentSectionsHighlightsSection | ComponentSectionsMapSection | ComponentSectionsNewsSection | ComponentSectionsNewsletterSection | ComponentSectionsOpeningHoursSection | ComponentSectionsPageSection | ComponentSectionsPartnersSection | ComponentSectionsRichtextSection | ComponentSectionsSliderSection | ComponentSectionsTicketsSection | ComponentSectionsVideoSection | ContactCard | ContentPage | ExhibitionsPage | ExplorePage | General | GetInvolvedPage | HomePage | I18NLocale | MainPage | Menu | Partner | Place | Tag | TagCategory | Ticket | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | VisitUsPage;

export type GetInvolvedPage = {
  __typename?: 'GetInvolvedPage';
  createdAt?: Maybe<Scalars['DateTime']>;
  highlights?: Maybe<Array<Maybe<ComponentBlocksContentPageItem>>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<GetInvolvedPageRelationResponseCollection>;
  sections?: Maybe<Array<Maybe<GetInvolvedPageSectionsDynamicZone>>>;
  seo?: Maybe<ComponentBlocksSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type GetInvolvedPageHighlightsArgs = {
  filters?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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

export type GetInvolvedPageEntityResponseCollection = {
  __typename?: 'GetInvolvedPageEntityResponseCollection';
  data: Array<GetInvolvedPageEntity>;
  meta: ResponseCollectionMeta;
};

export type GetInvolvedPageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GetInvolvedPageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  highlights?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<GetInvolvedPageFiltersInput>;
  not?: InputMaybe<GetInvolvedPageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GetInvolvedPageFiltersInput>>>;
  seo?: InputMaybe<ComponentBlocksSeoFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type GetInvolvedPageInput = {
  highlights?: InputMaybe<Array<InputMaybe<ComponentBlocksContentPageItemInput>>>;
  sections?: InputMaybe<Array<Scalars['GetInvolvedPageSectionsDynamicZoneInput']>>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
};

export type GetInvolvedPageRelationResponseCollection = {
  __typename?: 'GetInvolvedPageRelationResponseCollection';
  data: Array<GetInvolvedPageEntity>;
};

export type GetInvolvedPageSectionsDynamicZone = ComponentSectionsNewsSection | ComponentSectionsNewsletterSection | ComponentSectionsOpeningHoursSection | ComponentSectionsPageSection | Error;

export type HomePage = {
  __typename?: 'HomePage';
  createdAt?: Maybe<Scalars['DateTime']>;
  highlights?: Maybe<Array<Maybe<ComponentBlocksContentPageItem>>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<HomePageRelationResponseCollection>;
  partners?: Maybe<Array<Maybe<ComponentBlocksPartnerItem>>>;
  sections?: Maybe<Array<Maybe<HomePageSectionsDynamicZone>>>;
  seo?: Maybe<ComponentBlocksSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type HomePageHighlightsArgs = {
  filters?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type HomePagePartnersArgs = {
  filters?: InputMaybe<ComponentBlocksPartnerItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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

export type HomePageEntityResponseCollection = {
  __typename?: 'HomePageEntityResponseCollection';
  data: Array<HomePageEntity>;
  meta: ResponseCollectionMeta;
};

export type HomePageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<HomePageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  highlights?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<HomePageFiltersInput>;
  not?: InputMaybe<HomePageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<HomePageFiltersInput>>>;
  partners?: InputMaybe<ComponentBlocksPartnerItemFiltersInput>;
  seo?: InputMaybe<ComponentBlocksSeoFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type HomePageInput = {
  highlights?: InputMaybe<Array<InputMaybe<ComponentBlocksContentPageItemInput>>>;
  partners?: InputMaybe<Array<InputMaybe<ComponentBlocksPartnerItemInput>>>;
  sections?: InputMaybe<Array<Scalars['HomePageSectionsDynamicZoneInput']>>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
};

export type HomePageRelationResponseCollection = {
  __typename?: 'HomePageRelationResponseCollection';
  data: Array<HomePageEntity>;
};

export type HomePageSectionsDynamicZone = ComponentSectionsNewsSection | ComponentSectionsNewsletterSection | ComponentSectionsOpeningHoursSection | ComponentSectionsPageSection | Error;

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

export type I18NLocaleInput = {
  code?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type I18NLocaleRelationResponseCollection = {
  __typename?: 'I18NLocaleRelationResponseCollection';
  data: Array<I18NLocaleEntity>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  nei?: InputMaybe<Scalars['ID']>;
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
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  nei?: InputMaybe<Scalars['Int']>;
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
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  nei?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type LongFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  contains?: InputMaybe<Scalars['Long']>;
  containsi?: InputMaybe<Scalars['Long']>;
  endsWith?: InputMaybe<Scalars['Long']>;
  eq?: InputMaybe<Scalars['Long']>;
  eqi?: InputMaybe<Scalars['Long']>;
  gt?: InputMaybe<Scalars['Long']>;
  gte?: InputMaybe<Scalars['Long']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  lt?: InputMaybe<Scalars['Long']>;
  lte?: InputMaybe<Scalars['Long']>;
  ne?: InputMaybe<Scalars['Long']>;
  nei?: InputMaybe<Scalars['Long']>;
  not?: InputMaybe<LongFilterInput>;
  notContains?: InputMaybe<Scalars['Long']>;
  notContainsi?: InputMaybe<Scalars['Long']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  startsWith?: InputMaybe<Scalars['Long']>;
};

export type MainPage = {
  __typename?: 'MainPage';
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<MainPageRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  sections?: Maybe<Array<Maybe<MainPageSectionsDynamicZone>>>;
  seo?: Maybe<ComponentBlocksSeo>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type MainPageLocalizationsArgs = {
  filters?: InputMaybe<MainPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MainPageEntity = {
  __typename?: 'MainPageEntity';
  attributes?: Maybe<MainPage>;
  id?: Maybe<Scalars['ID']>;
};

export type MainPageEntityResponse = {
  __typename?: 'MainPageEntityResponse';
  data?: Maybe<MainPageEntity>;
};

export type MainPageEntityResponseCollection = {
  __typename?: 'MainPageEntityResponseCollection';
  data: Array<MainPageEntity>;
  meta: ResponseCollectionMeta;
};

export type MainPageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MainPageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<MainPageFiltersInput>;
  not?: InputMaybe<MainPageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MainPageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentBlocksSeoFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MainPageInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  sections?: InputMaybe<Array<Scalars['MainPageSectionsDynamicZoneInput']>>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type MainPageRelationResponseCollection = {
  __typename?: 'MainPageRelationResponseCollection';
  data: Array<MainPageEntity>;
};

export type MainPageSectionsDynamicZone = ComponentSectionsExploreSection | ComponentSectionsHighlightsSection | ComponentSectionsMapSection | ComponentSectionsNewsSection | ComponentSectionsNewsletterSection | ComponentSectionsOpeningHoursSection | ComponentSectionsPageSection | ComponentSectionsPartnersSection | ComponentSectionsRichtextSection | ComponentSectionsTicketsSection | Error;

export type Menu = {
  __typename?: 'Menu';
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<MenuRelationResponseCollection>;
  menuLinks?: Maybe<Array<Maybe<ComponentBlocksMenuLinkItem>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type MenuMenuLinksArgs = {
  filters?: InputMaybe<ComponentBlocksMenuLinkItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MenuEntity = {
  __typename?: 'MenuEntity';
  attributes?: Maybe<Menu>;
  id?: Maybe<Scalars['ID']>;
};

export type MenuEntityResponse = {
  __typename?: 'MenuEntityResponse';
  data?: Maybe<MenuEntity>;
};

export type MenuEntityResponseCollection = {
  __typename?: 'MenuEntityResponseCollection';
  data: Array<MenuEntity>;
  meta: ResponseCollectionMeta;
};

export type MenuFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MenuFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<MenuFiltersInput>;
  menuLinks?: InputMaybe<ComponentBlocksMenuLinkItemFiltersInput>;
  not?: InputMaybe<MenuFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MenuFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MenuInput = {
  menuLinks?: InputMaybe<Array<InputMaybe<ComponentBlocksMenuLinkItemInput>>>;
};

export type MenuRelationResponseCollection = {
  __typename?: 'MenuRelationResponseCollection';
  data: Array<MenuEntity>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAboutUsPageLocalization?: Maybe<AboutUsPageEntityResponse>;
  createCollectionsPageLocalization?: Maybe<CollectionsPageEntityResponse>;
  createContactCard?: Maybe<ContactCardEntityResponse>;
  createContactCardLocalization?: Maybe<ContactCardEntityResponse>;
  createContentPage?: Maybe<ContentPageEntityResponse>;
  createContentPageLocalization?: Maybe<ContentPageEntityResponse>;
  createExhibitionsPageLocalization?: Maybe<ExhibitionsPageEntityResponse>;
  createExplorePageLocalization?: Maybe<ExplorePageEntityResponse>;
  createGeneralLocalization?: Maybe<GeneralEntityResponse>;
  createGetInvolvedPageLocalization?: Maybe<GetInvolvedPageEntityResponse>;
  createHomePageLocalization?: Maybe<HomePageEntityResponse>;
  createMainPage?: Maybe<MainPageEntityResponse>;
  createMainPageLocalization?: Maybe<MainPageEntityResponse>;
  createMenuLocalization?: Maybe<MenuEntityResponse>;
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
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createVisitUsPageLocalization?: Maybe<VisitUsPageEntityResponse>;
  deleteAboutUsPage?: Maybe<AboutUsPageEntityResponse>;
  deleteCollectionsPage?: Maybe<CollectionsPageEntityResponse>;
  deleteContactCard?: Maybe<ContactCardEntityResponse>;
  deleteContentPage?: Maybe<ContentPageEntityResponse>;
  deleteExhibitionsPage?: Maybe<ExhibitionsPageEntityResponse>;
  deleteExplorePage?: Maybe<ExplorePageEntityResponse>;
  deleteGeneral?: Maybe<GeneralEntityResponse>;
  deleteGetInvolvedPage?: Maybe<GetInvolvedPageEntityResponse>;
  deleteHomePage?: Maybe<HomePageEntityResponse>;
  deleteMainPage?: Maybe<MainPageEntityResponse>;
  deleteMenu?: Maybe<MenuEntityResponse>;
  deletePartner?: Maybe<PartnerEntityResponse>;
  deletePlace?: Maybe<PlaceEntityResponse>;
  deleteTag?: Maybe<TagEntityResponse>;
  deleteTagCategory?: Maybe<TagCategoryEntityResponse>;
  deleteTicket?: Maybe<TicketEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
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
  updateContactCard?: Maybe<ContactCardEntityResponse>;
  updateContentPage?: Maybe<ContentPageEntityResponse>;
  updateExhibitionsPage?: Maybe<ExhibitionsPageEntityResponse>;
  updateExplorePage?: Maybe<ExplorePageEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateGeneral?: Maybe<GeneralEntityResponse>;
  updateGetInvolvedPage?: Maybe<GetInvolvedPageEntityResponse>;
  updateHomePage?: Maybe<HomePageEntityResponse>;
  updateMainPage?: Maybe<MainPageEntityResponse>;
  updateMenu?: Maybe<MenuEntityResponse>;
  updatePartner?: Maybe<PartnerEntityResponse>;
  updatePlace?: Maybe<PlaceEntityResponse>;
  updateTag?: Maybe<TagEntityResponse>;
  updateTagCategory?: Maybe<TagCategoryEntityResponse>;
  updateTicket?: Maybe<TicketEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateVisitUsPage?: Maybe<VisitUsPageEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
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


export type MutationCreateContactCardArgs = {
  data: ContactCardInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateContactCardLocalizationArgs = {
  data?: InputMaybe<ContactCardInput>;
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


export type MutationCreateGeneralLocalizationArgs = {
  data?: InputMaybe<GeneralInput>;
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


export type MutationCreateMainPageArgs = {
  data: MainPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateMainPageLocalizationArgs = {
  data?: InputMaybe<MainPageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateMenuLocalizationArgs = {
  data?: InputMaybe<MenuInput>;
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


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
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


export type MutationDeleteContactCardArgs = {
  id: Scalars['ID'];
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


export type MutationDeleteGeneralArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteGetInvolvedPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteHomePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteMainPageArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteMenuArgs = {
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


export type MutationDeleteUploadFolderArgs = {
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


export type MutationUpdateContactCardArgs = {
  data: ContactCardInput;
  id: Scalars['ID'];
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


export type MutationUpdateGeneralArgs = {
  data: GeneralInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateGetInvolvedPageArgs = {
  data: GetInvolvedPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateHomePageArgs = {
  data: HomePageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateMainPageArgs = {
  data: MainPageInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateMenuArgs = {
  data: MenuInput;
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


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
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
  createdAt?: Maybe<Scalars['DateTime']>;
  link?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<PartnerRelationResponseCollection>;
  logo: UploadFileEntityResponse;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  purchaseId?: Maybe<Scalars['String']>;
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
  purchaseId?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PlaceInput = {
  address?: InputMaybe<Scalars['String']>;
  contentPages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  purchaseId?: InputMaybe<Scalars['String']>;
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
  contactCard?: Maybe<ContactCardEntityResponse>;
  contactCards?: Maybe<ContactCardEntityResponseCollection>;
  contentPage?: Maybe<ContentPageEntityResponse>;
  contentPageBySlug?: Maybe<ContentPageEntityResponse>;
  contentPages?: Maybe<ContentPageEntityResponseCollection>;
  exhibitionsPage?: Maybe<ExhibitionsPageEntityResponse>;
  explorePage?: Maybe<ExplorePageEntityResponse>;
  general?: Maybe<GeneralEntityResponse>;
  getInvolvedPage?: Maybe<GetInvolvedPageEntityResponse>;
  homePage?: Maybe<HomePageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  mainPage?: Maybe<MainPageEntityResponse>;
  mainPages?: Maybe<MainPageEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  menu?: Maybe<MenuEntityResponse>;
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
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
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


export type QueryContactCardArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryContactCardsArgs = {
  filters?: InputMaybe<ContactCardFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryContentPageArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryContentPageBySlugArgs = {
  isPublished?: InputMaybe<Scalars['Boolean']>;
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


export type QueryGeneralArgs = {
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


export type QueryMainPageArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryMainPagesArgs = {
  filters?: InputMaybe<MainPageFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryMenuArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
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
  isPublished?: InputMaybe<Scalars['Boolean']>;
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
  isPublished?: InputMaybe<Scalars['Boolean']>;
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
  isPublished?: InputMaybe<Scalars['Boolean']>;
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


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
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
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nei?: InputMaybe<Scalars['String']>;
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
  titleInternal?: Maybe<Scalars['String']>;
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
  titleInternal?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TagInput = {
  contentPages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  slug?: InputMaybe<Scalars['String']>;
  tagCategory?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  titleInternal?: InputMaybe<Scalars['String']>;
};

export type TagRelationResponseCollection = {
  __typename?: 'TagRelationResponseCollection';
  data: Array<TagEntity>;
};

export type Ticket = {
  __typename?: 'Ticket';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<TicketRelationResponseCollection>;
  price?: Maybe<Scalars['Int']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  purchaseIdGift?: Maybe<Scalars['String']>;
  purchaseIdSelf?: Maybe<Scalars['String']>;
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
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<TicketFiltersInput>;
  not?: InputMaybe<TicketFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TicketFiltersInput>>>;
  price?: InputMaybe<IntFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  purchaseIdGift?: InputMaybe<StringFilterInput>;
  purchaseIdSelf?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TicketInput = {
  description?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  purchaseIdGift?: InputMaybe<Scalars['String']>;
  purchaseIdSelf?: InputMaybe<Scalars['String']>;
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
  eqi?: InputMaybe<Scalars['Time']>;
  gt?: InputMaybe<Scalars['Time']>;
  gte?: InputMaybe<Scalars['Time']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  lt?: InputMaybe<Scalars['Time']>;
  lte?: InputMaybe<Scalars['Time']>;
  ne?: InputMaybe<Scalars['Time']>;
  nei?: InputMaybe<Scalars['Time']>;
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
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
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
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
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

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
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

export type UsersPermissionsPermissionEntityResponse = {
  __typename?: 'UsersPermissionsPermissionEntityResponse';
  data?: Maybe<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsPermissionEntityResponseCollection = {
  __typename?: 'UsersPermissionsPermissionEntityResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
  meta: ResponseCollectionMeta;
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

export type UsersPermissionsPermissionInput = {
  action?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
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

export type UsersPermissionsRoleRelationResponseCollection = {
  __typename?: 'UsersPermissionsRoleRelationResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
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
  highlights?: Maybe<Array<Maybe<ComponentBlocksContentPageItem>>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<VisitUsPageRelationResponseCollection>;
  sections?: Maybe<Array<Maybe<VisitUsPageSectionsDynamicZone>>>;
  seo?: Maybe<ComponentBlocksSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type VisitUsPageHighlightsArgs = {
  filters?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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

export type VisitUsPageEntityResponseCollection = {
  __typename?: 'VisitUsPageEntityResponseCollection';
  data: Array<VisitUsPageEntity>;
  meta: ResponseCollectionMeta;
};

export type VisitUsPageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<VisitUsPageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  highlights?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<VisitUsPageFiltersInput>;
  not?: InputMaybe<VisitUsPageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<VisitUsPageFiltersInput>>>;
  seo?: InputMaybe<ComponentBlocksSeoFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type VisitUsPageInput = {
  highlights?: InputMaybe<Array<InputMaybe<ComponentBlocksContentPageItemInput>>>;
  sections?: InputMaybe<Array<Scalars['VisitUsPageSectionsDynamicZoneInput']>>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
};

export type VisitUsPageRelationResponseCollection = {
  __typename?: 'VisitUsPageRelationResponseCollection';
  data: Array<VisitUsPageEntity>;
};

export type VisitUsPageSectionsDynamicZone = ComponentSectionsMapSection | ComponentSectionsNewsSection | ComponentSectionsNewsletterSection | ComponentSectionsOpeningHoursSection | ComponentSectionsPageSection | ComponentSectionsRichtextSection | ComponentSectionsTicketsSection | Error;

export type ImageEntityFragment = { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null };

export type ImageWithFormatsEntityFragment = { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', formats?: any | null, caption?: string | null, url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null };

export type TicketEntityFragment = { __typename?: 'TicketEntity', id?: string | null, attributes?: { __typename?: 'Ticket', title: string, price?: number | null, description?: string | null, purchaseIdSelf?: string | null, purchaseIdGift?: string | null } | null };

export type PartnerEntityFragment = { __typename?: 'PartnerEntity', id?: string | null, attributes?: { __typename?: 'Partner', title: string, link?: string | null, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null };

export type TagEntityFragment = { __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null };

export type PlaceEntityFragment = { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string, purchaseId?: string | null } | null };

export type PositionFragment = { __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null };

export type DatetimeFragment = { __typename?: 'ContentPage', dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null };

export type ContentPagePlaceFragment = { __typename?: 'ContentPage', placeTitle?: string | null, placeAddress?: string | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string, purchaseId?: string | null } | null } | null } | null };

export type PositionsFragment = { __typename?: 'ContentPage', positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null };

export type PartnersFragment = { __typename?: 'ContentPage', partners?: Array<{ __typename?: 'ComponentBlocksPartnerItem', partner?: { __typename?: 'PartnerEntityResponse', data?: { __typename?: 'PartnerEntity', id?: string | null, attributes?: { __typename?: 'Partner', title: string, link?: string | null, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null } | null } | null } | null> | null };

export type SliderSectionFragment = { __typename?: 'ComponentSectionsSliderSection', id: string, submenuTitle?: string | null, medias?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null }> } | null };

export type SeoFragment = { __typename?: 'ComponentBlocksSeo', metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null };

export type LinksFragment = { __typename?: 'ComponentBlocksLinks', title?: string | null, links?: Array<{ __typename?: 'ComponentBlocksLinkItem', title: string, url?: string | null, newWindow?: boolean | null } | null> | null };

export type MenuEntityFragment = { __typename?: 'MenuEntity', id?: string | null, attributes?: { __typename?: 'Menu', menuLinks?: Array<{ __typename?: 'ComponentBlocksMenuLinkItem', id: string, title: string, url?: string | null, hasButtonStyle?: boolean | null, mainPage?: { __typename?: 'MainPageEntityResponse', data?: { __typename?: 'MainPageEntity', id?: string | null, attributes?: { __typename?: 'MainPage', title: string, slug: string, sections?: Array<{ __typename: 'ComponentSectionsExploreSection', id: string, title?: string | null } | { __typename: 'ComponentSectionsHighlightsSection', id: string, highlights?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', titleToShow?: string | null, sellTickets?: boolean | null, purchaseId?: string | null, perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string, purchaseId?: string | null } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsMapSection', id: string, title?: string | null, submenuTitle?: string | null } | { __typename: 'ComponentSectionsNewsSection', id: string, title?: string | null, submenuTitle?: string | null } | { __typename: 'ComponentSectionsNewsletterSection', id: string, submenuTitle?: string | null } | { __typename: 'ComponentSectionsOpeningHoursSection', id: string, submenuTitle?: string | null } | { __typename: 'ComponentSectionsPageSection', id: string, title?: string | null, submenuTitle?: string | null, layout?: Enum_Componentsectionspagesection_Layout | null, contentPages?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsPartnersSection', id: string, partners?: Array<{ __typename?: 'ComponentBlocksPartnerItem', partner?: { __typename?: 'PartnerEntityResponse', data?: { __typename?: 'PartnerEntity', id?: string | null, attributes?: { __typename?: 'Partner', title: string, link?: string | null, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsRichtextSection', id: string, submenuTitle?: string | null, content?: string | null } | { __typename: 'ComponentSectionsTicketsSection', id: string, title?: string | null, submenuTitle?: string | null, text?: string | null } | { __typename?: 'Error', code: string, message?: string | null } | null> | null, seo?: { __typename?: 'ComponentBlocksSeo', metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null } | null, localizations?: { __typename?: 'MainPageRelationResponseCollection', data: Array<{ __typename?: 'MainPageEntity', attributes?: { __typename?: 'MainPage', slug: string, locale?: string | null } | null }> } | null } | null } | null } | null } | null> | null } | null };

export type MainPageEntityFragment = { __typename?: 'MainPageEntity', id?: string | null, attributes?: { __typename?: 'MainPage', title: string, slug: string, sections?: Array<{ __typename: 'ComponentSectionsExploreSection', id: string, title?: string | null } | { __typename: 'ComponentSectionsHighlightsSection', id: string, highlights?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', titleToShow?: string | null, sellTickets?: boolean | null, purchaseId?: string | null, perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string, purchaseId?: string | null } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsMapSection', id: string, title?: string | null, submenuTitle?: string | null } | { __typename: 'ComponentSectionsNewsSection', id: string, title?: string | null, submenuTitle?: string | null } | { __typename: 'ComponentSectionsNewsletterSection', id: string, submenuTitle?: string | null } | { __typename: 'ComponentSectionsOpeningHoursSection', id: string, submenuTitle?: string | null } | { __typename: 'ComponentSectionsPageSection', id: string, title?: string | null, submenuTitle?: string | null, layout?: Enum_Componentsectionspagesection_Layout | null, contentPages?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsPartnersSection', id: string, partners?: Array<{ __typename?: 'ComponentBlocksPartnerItem', partner?: { __typename?: 'PartnerEntityResponse', data?: { __typename?: 'PartnerEntity', id?: string | null, attributes?: { __typename?: 'Partner', title: string, link?: string | null, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsRichtextSection', id: string, submenuTitle?: string | null, content?: string | null } | { __typename: 'ComponentSectionsTicketsSection', id: string, title?: string | null, submenuTitle?: string | null, text?: string | null } | { __typename?: 'Error', code: string, message?: string | null } | null> | null, seo?: { __typename?: 'ComponentBlocksSeo', metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null } | null, localizations?: { __typename?: 'MainPageRelationResponseCollection', data: Array<{ __typename?: 'MainPageEntity', attributes?: { __typename?: 'MainPage', slug: string, locale?: string | null } | null }> } | null } | null };

export type ContentPageEntityFragment = { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', title: string, titleToShow?: string | null, subtitle?: string | null, useDatetimeAsSubtitle?: boolean | null, slug: string, addedAt?: any | null, perex?: string | null, color?: string | null, inheritColorFromParent?: boolean | null, sellTickets?: boolean | null, purchaseId?: string | null, showShareButtons?: boolean | null, relatedContentTitle?: string | null, relatedContentSubmenuTitle?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, mainContent?: Array<{ __typename: 'ComponentSectionsAudioSection', id: string, title?: string | null, submenuTitle?: string | null, url?: string | null } | { __typename: 'ComponentSectionsContactCardsSection', id: string, title?: string | null, submenuTitle?: string | null, contacts?: Array<{ __typename?: 'ComponentBlocksContactCardItem', contactCard?: { __typename?: 'ContactCardEntityResponse', data?: { __typename?: 'ContactCardEntity', id?: string | null, attributes?: { __typename?: 'ContactCard', name: string, position?: string | null, email?: string | null, phone1?: string | null, phone2?: string | null } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsGallerySection', id: string, title?: string | null, submenuTitle?: string | null, medias?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', formats?: any | null, caption?: string | null, url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null }> } | null } | { __typename: 'ComponentSectionsRichtextSection', id: string, submenuTitle?: string | null, content?: string | null } | { __typename: 'ComponentSectionsVideoSection', id: string, title?: string | null, submenuTitle?: string | null, url?: string | null } | { __typename?: 'Error', code: string, message?: string | null } | null> | null, slider?: { __typename?: 'ComponentSectionsSliderSection', id: string, submenuTitle?: string | null, medias?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null }> } | null } | null, downloadSection?: { __typename?: 'ComponentSectionsDownloadSection', id: string, title?: string | null, submenuTitle?: string | null, files?: Array<{ __typename?: 'ComponentBlocksFileItem', id: string, title?: string | null, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, caption?: string | null, alternativeText?: string | null, ext?: string | null, size: number, url: string } | null } | null } } | null> | null } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null, childPages?: { __typename?: 'ContentPageRelationResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, seo?: { __typename?: 'ComponentBlocksSeo', metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null } | null, localizations?: { __typename?: 'ContentPageRelationResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', slug: string, locale?: string | null } | null }> } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string, purchaseId?: string | null } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null, partners?: Array<{ __typename?: 'ComponentBlocksPartnerItem', partner?: { __typename?: 'PartnerEntityResponse', data?: { __typename?: 'PartnerEntity', id?: string | null, attributes?: { __typename?: 'Partner', title: string, link?: string | null, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null } | null } | null } | null> | null } | null };

export type CommonSearchPageEntityFragment = { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', title: string, slug: string } | null };

export type ExhibitionArchiveFragment = { __typename?: 'ComponentBlocksExhibitionArchive', title: string, subtitle?: string | null, perex?: string | null, color?: string | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null };

export type NewsItemEntityFragment = { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null };

export type SectionItemEntityFragment = { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null };

export type HighlightsItemEntityFragment = { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', titleToShow?: string | null, sellTickets?: boolean | null, purchaseId?: string | null, perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string, purchaseId?: string | null } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null } | null };

export type HighlightFragment = { __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', titleToShow?: string | null, sellTickets?: boolean | null, purchaseId?: string | null, perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string, purchaseId?: string | null } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null } | null } | null } | null };

export type PartnerFragment = { __typename?: 'ComponentBlocksPartnerItem', partner?: { __typename?: 'PartnerEntityResponse', data?: { __typename?: 'PartnerEntity', id?: string | null, attributes?: { __typename?: 'Partner', title: string, link?: string | null, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null } | null } | null };

export type MenuLinkItemFragment = { __typename?: 'ComponentBlocksMenuLinkItem', id: string, title: string, url?: string | null, hasButtonStyle?: boolean | null, mainPage?: { __typename?: 'MainPageEntityResponse', data?: { __typename?: 'MainPageEntity', id?: string | null, attributes?: { __typename?: 'MainPage', title: string, slug: string, sections?: Array<{ __typename: 'ComponentSectionsExploreSection', id: string, title?: string | null } | { __typename: 'ComponentSectionsHighlightsSection', id: string, highlights?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', titleToShow?: string | null, sellTickets?: boolean | null, purchaseId?: string | null, perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string, purchaseId?: string | null } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsMapSection', id: string, title?: string | null, submenuTitle?: string | null } | { __typename: 'ComponentSectionsNewsSection', id: string, title?: string | null, submenuTitle?: string | null } | { __typename: 'ComponentSectionsNewsletterSection', id: string, submenuTitle?: string | null } | { __typename: 'ComponentSectionsOpeningHoursSection', id: string, submenuTitle?: string | null } | { __typename: 'ComponentSectionsPageSection', id: string, title?: string | null, submenuTitle?: string | null, layout?: Enum_Componentsectionspagesection_Layout | null, contentPages?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsPartnersSection', id: string, partners?: Array<{ __typename?: 'ComponentBlocksPartnerItem', partner?: { __typename?: 'PartnerEntityResponse', data?: { __typename?: 'PartnerEntity', id?: string | null, attributes?: { __typename?: 'Partner', title: string, link?: string | null, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsRichtextSection', id: string, submenuTitle?: string | null, content?: string | null } | { __typename: 'ComponentSectionsTicketsSection', id: string, title?: string | null, submenuTitle?: string | null, text?: string | null } | { __typename?: 'Error', code: string, message?: string | null } | null> | null, seo?: { __typename?: 'ComponentBlocksSeo', metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null } | null, localizations?: { __typename?: 'MainPageRelationResponseCollection', data: Array<{ __typename?: 'MainPageEntity', attributes?: { __typename?: 'MainPage', slug: string, locale?: string | null } | null }> } | null } | null } | null } | null };

export type DownloadItemFragment = { __typename?: 'ComponentBlocksFileItem', id: string, title?: string | null, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, caption?: string | null, alternativeText?: string | null, ext?: string | null, size: number, url: string } | null } | null } };

export type PalaceDetailsFragment = { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null };

export type GeneralEntityFragment = { __typename?: 'GeneralEntity', attributes?: { __typename?: 'General', name?: string | null, email?: string | null, openingHours?: string | null, mirbach?: { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null } | null, palffy?: { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null } | null, socialLinks?: { __typename?: 'ComponentBlocksLinks', title?: string | null, links?: Array<{ __typename?: 'ComponentBlocksLinkItem', title: string, url?: string | null, newWindow?: boolean | null } | null> | null } | null, footerLinks1?: { __typename?: 'ComponentBlocksLinks', title?: string | null, links?: Array<{ __typename?: 'ComponentBlocksLinkItem', title: string, url?: string | null, newWindow?: boolean | null } | null> | null } | null, footerLinks2?: { __typename?: 'ComponentBlocksLinks', title?: string | null, links?: Array<{ __typename?: 'ComponentBlocksLinkItem', title: string, url?: string | null, newWindow?: boolean | null } | null> | null } | null } | null };

export type ContactCardEntityFragment = { __typename?: 'ContactCardEntity', id?: string | null, attributes?: { __typename?: 'ContactCard', name: string, position?: string | null, email?: string | null, phone1?: string | null, phone2?: string | null } | null };

export type OpeningHoursSectionFragment = { __typename?: 'ComponentSectionsOpeningHoursSection', id: string, submenuTitle?: string | null };

export type HighlightsSectionFragment = { __typename?: 'ComponentSectionsHighlightsSection', id: string, highlights?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', titleToShow?: string | null, sellTickets?: boolean | null, purchaseId?: string | null, perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string, purchaseId?: string | null } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null } | null } | null } | null } | null> | null };

export type PartnersSectionFragment = { __typename?: 'ComponentSectionsPartnersSection', id: string, partners?: Array<{ __typename?: 'ComponentBlocksPartnerItem', partner?: { __typename?: 'PartnerEntityResponse', data?: { __typename?: 'PartnerEntity', id?: string | null, attributes?: { __typename?: 'Partner', title: string, link?: string | null, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null } | null } | null } | null> | null };

export type ExploreSectionFragment = { __typename?: 'ComponentSectionsExploreSection', id: string, title?: string | null };

export type PageSectionFragment = { __typename?: 'ComponentSectionsPageSection', id: string, title?: string | null, submenuTitle?: string | null, layout?: Enum_Componentsectionspagesection_Layout | null, contentPages?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null } | null } | null } | null> | null };

export type NewsSectionFragment = { __typename?: 'ComponentSectionsNewsSection', id: string, title?: string | null, submenuTitle?: string | null };

export type NewsletterSectionFragment = { __typename?: 'ComponentSectionsNewsletterSection', id: string, submenuTitle?: string | null };

export type RichtextSectionFragment = { __typename?: 'ComponentSectionsRichtextSection', id: string, submenuTitle?: string | null, content?: string | null };

export type VideoSectionFragment = { __typename?: 'ComponentSectionsVideoSection', id: string, title?: string | null, submenuTitle?: string | null, url?: string | null };

export type AudioSectionFragment = { __typename?: 'ComponentSectionsAudioSection', id: string, title?: string | null, submenuTitle?: string | null, url?: string | null };

export type GallerySectionFragment = { __typename?: 'ComponentSectionsGallerySection', id: string, title?: string | null, submenuTitle?: string | null, medias?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', formats?: any | null, caption?: string | null, url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null }> } | null };

export type ContactCardsSectionFragment = { __typename?: 'ComponentSectionsContactCardsSection', id: string, title?: string | null, submenuTitle?: string | null, contacts?: Array<{ __typename?: 'ComponentBlocksContactCardItem', contactCard?: { __typename?: 'ContactCardEntityResponse', data?: { __typename?: 'ContactCardEntity', id?: string | null, attributes?: { __typename?: 'ContactCard', name: string, position?: string | null, email?: string | null, phone1?: string | null, phone2?: string | null } | null } | null } | null } | null> | null };

export type TicketsSectionFragment = { __typename?: 'ComponentSectionsTicketsSection', id: string, title?: string | null, submenuTitle?: string | null, text?: string | null };

export type MapSectionFragment = { __typename?: 'ComponentSectionsMapSection', id: string, title?: string | null, submenuTitle?: string | null };

export type DownloadSectionFragment = { __typename?: 'ComponentSectionsDownloadSection', id: string, title?: string | null, submenuTitle?: string | null, files?: Array<{ __typename?: 'ComponentBlocksFileItem', id: string, title?: string | null, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, caption?: string | null, alternativeText?: string | null, ext?: string | null, size: number, url: string } | null } | null } } | null> | null };

export type ArchiveSectionFragment = { __typename?: 'ComponentSectionsArchiveSection', id: string, title?: string | null, submenuTitle?: string | null, archiveCard?: { __typename?: 'ComponentBlocksExhibitionArchive', title: string, subtitle?: string | null, perex?: string | null, color?: string | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null } | null };

type Sections_ComponentSectionsMapSection_Fragment = { __typename: 'ComponentSectionsMapSection', id: string, title?: string | null, submenuTitle?: string | null };

type Sections_ComponentSectionsNewsSection_Fragment = { __typename: 'ComponentSectionsNewsSection', id: string, title?: string | null, submenuTitle?: string | null };

type Sections_ComponentSectionsNewsletterSection_Fragment = { __typename: 'ComponentSectionsNewsletterSection', id: string, submenuTitle?: string | null };

type Sections_ComponentSectionsOpeningHoursSection_Fragment = { __typename: 'ComponentSectionsOpeningHoursSection', id: string, submenuTitle?: string | null };

type Sections_ComponentSectionsPageSection_Fragment = { __typename: 'ComponentSectionsPageSection', id: string, title?: string | null, submenuTitle?: string | null, layout?: Enum_Componentsectionspagesection_Layout | null, contentPages?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null } | null } | null } | null> | null };

type Sections_ComponentSectionsRichtextSection_Fragment = { __typename: 'ComponentSectionsRichtextSection', id: string, submenuTitle?: string | null, content?: string | null };

type Sections_ComponentSectionsTicketsSection_Fragment = { __typename: 'ComponentSectionsTicketsSection', id: string, title?: string | null, submenuTitle?: string | null, text?: string | null };

type Sections_Error_Fragment = { __typename?: 'Error', code: string, message?: string | null };

export type SectionsFragment = Sections_ComponentSectionsMapSection_Fragment | Sections_ComponentSectionsNewsSection_Fragment | Sections_ComponentSectionsNewsletterSection_Fragment | Sections_ComponentSectionsOpeningHoursSection_Fragment | Sections_ComponentSectionsPageSection_Fragment | Sections_ComponentSectionsRichtextSection_Fragment | Sections_ComponentSectionsTicketsSection_Fragment | Sections_Error_Fragment;

type MainPageSections_ComponentSectionsExploreSection_Fragment = { __typename: 'ComponentSectionsExploreSection', id: string, title?: string | null };

type MainPageSections_ComponentSectionsHighlightsSection_Fragment = { __typename: 'ComponentSectionsHighlightsSection', id: string, highlights?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', titleToShow?: string | null, sellTickets?: boolean | null, purchaseId?: string | null, perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string, purchaseId?: string | null } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null } | null } | null } | null } | null> | null };

type MainPageSections_ComponentSectionsMapSection_Fragment = { __typename: 'ComponentSectionsMapSection', id: string, title?: string | null, submenuTitle?: string | null };

type MainPageSections_ComponentSectionsNewsSection_Fragment = { __typename: 'ComponentSectionsNewsSection', id: string, title?: string | null, submenuTitle?: string | null };

type MainPageSections_ComponentSectionsNewsletterSection_Fragment = { __typename: 'ComponentSectionsNewsletterSection', id: string, submenuTitle?: string | null };

type MainPageSections_ComponentSectionsOpeningHoursSection_Fragment = { __typename: 'ComponentSectionsOpeningHoursSection', id: string, submenuTitle?: string | null };

type MainPageSections_ComponentSectionsPageSection_Fragment = { __typename: 'ComponentSectionsPageSection', id: string, title?: string | null, submenuTitle?: string | null, layout?: Enum_Componentsectionspagesection_Layout | null, contentPages?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null } | null } | null } | null> | null };

type MainPageSections_ComponentSectionsPartnersSection_Fragment = { __typename: 'ComponentSectionsPartnersSection', id: string, partners?: Array<{ __typename?: 'ComponentBlocksPartnerItem', partner?: { __typename?: 'PartnerEntityResponse', data?: { __typename?: 'PartnerEntity', id?: string | null, attributes?: { __typename?: 'Partner', title: string, link?: string | null, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null } | null } | null } | null> | null };

type MainPageSections_ComponentSectionsRichtextSection_Fragment = { __typename: 'ComponentSectionsRichtextSection', id: string, submenuTitle?: string | null, content?: string | null };

type MainPageSections_ComponentSectionsTicketsSection_Fragment = { __typename: 'ComponentSectionsTicketsSection', id: string, title?: string | null, submenuTitle?: string | null, text?: string | null };

type MainPageSections_Error_Fragment = { __typename?: 'Error', code: string, message?: string | null };

export type MainPageSectionsFragment = MainPageSections_ComponentSectionsExploreSection_Fragment | MainPageSections_ComponentSectionsHighlightsSection_Fragment | MainPageSections_ComponentSectionsMapSection_Fragment | MainPageSections_ComponentSectionsNewsSection_Fragment | MainPageSections_ComponentSectionsNewsletterSection_Fragment | MainPageSections_ComponentSectionsOpeningHoursSection_Fragment | MainPageSections_ComponentSectionsPageSection_Fragment | MainPageSections_ComponentSectionsPartnersSection_Fragment | MainPageSections_ComponentSectionsRichtextSection_Fragment | MainPageSections_ComponentSectionsTicketsSection_Fragment | MainPageSections_Error_Fragment;

type MainContent_ComponentSectionsAudioSection_Fragment = { __typename: 'ComponentSectionsAudioSection', id: string, title?: string | null, submenuTitle?: string | null, url?: string | null };

type MainContent_ComponentSectionsContactCardsSection_Fragment = { __typename: 'ComponentSectionsContactCardsSection', id: string, title?: string | null, submenuTitle?: string | null, contacts?: Array<{ __typename?: 'ComponentBlocksContactCardItem', contactCard?: { __typename?: 'ContactCardEntityResponse', data?: { __typename?: 'ContactCardEntity', id?: string | null, attributes?: { __typename?: 'ContactCard', name: string, position?: string | null, email?: string | null, phone1?: string | null, phone2?: string | null } | null } | null } | null } | null> | null };

type MainContent_ComponentSectionsGallerySection_Fragment = { __typename: 'ComponentSectionsGallerySection', id: string, title?: string | null, submenuTitle?: string | null, medias?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', formats?: any | null, caption?: string | null, url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null }> } | null };

type MainContent_ComponentSectionsRichtextSection_Fragment = { __typename: 'ComponentSectionsRichtextSection', id: string, submenuTitle?: string | null, content?: string | null };

type MainContent_ComponentSectionsVideoSection_Fragment = { __typename: 'ComponentSectionsVideoSection', id: string, title?: string | null, submenuTitle?: string | null, url?: string | null };

type MainContent_Error_Fragment = { __typename?: 'Error', code: string, message?: string | null };

export type MainContentFragment = MainContent_ComponentSectionsAudioSection_Fragment | MainContent_ComponentSectionsContactCardsSection_Fragment | MainContent_ComponentSectionsGallerySection_Fragment | MainContent_ComponentSectionsRichtextSection_Fragment | MainContent_ComponentSectionsVideoSection_Fragment | MainContent_Error_Fragment;

export type GeneralQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type GeneralQuery = { __typename?: 'Query', general?: { __typename?: 'GeneralEntityResponse', data?: { __typename?: 'GeneralEntity', attributes?: { __typename?: 'General', name?: string | null, email?: string | null, openingHours?: string | null, mirbach?: { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null } | null, palffy?: { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null } | null, socialLinks?: { __typename?: 'ComponentBlocksLinks', title?: string | null, links?: Array<{ __typename?: 'ComponentBlocksLinkItem', title: string, url?: string | null, newWindow?: boolean | null } | null> | null } | null, footerLinks1?: { __typename?: 'ComponentBlocksLinks', title?: string | null, links?: Array<{ __typename?: 'ComponentBlocksLinkItem', title: string, url?: string | null, newWindow?: boolean | null } | null> | null } | null, footerLinks2?: { __typename?: 'ComponentBlocksLinks', title?: string | null, links?: Array<{ __typename?: 'ComponentBlocksLinkItem', title: string, url?: string | null, newWindow?: boolean | null } | null> | null } | null } | null } | null } | null };

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


export type NewsQuery = { __typename?: 'Query', news?: { __typename?: 'ContentPageEntityResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null };

export type PreviewsByTagsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  tagSlugs?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  placesSlugs?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  dateForFilteringPastEvents?: InputMaybe<Scalars['Date']>;
  dateForFilteringFutureEvents?: InputMaybe<Scalars['Date']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type PreviewsByTagsQuery = { __typename?: 'Query', contentPages?: { __typename?: 'ContentPageEntityResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null };

export type PreviewContentPageBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type PreviewContentPageBySlugQuery = { __typename?: 'Query', contentPageBySlug?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', slug: string, locale?: string | null } | null } | null } | null };

export type ContentPageBySlugQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
  slug: Scalars['String'];
  isPublished: Scalars['Boolean'];
}>;


export type ContentPageBySlugQuery = { __typename?: 'Query', contentPageBySlug?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', title: string, titleToShow?: string | null, subtitle?: string | null, useDatetimeAsSubtitle?: boolean | null, slug: string, addedAt?: any | null, perex?: string | null, color?: string | null, inheritColorFromParent?: boolean | null, sellTickets?: boolean | null, purchaseId?: string | null, showShareButtons?: boolean | null, relatedContentTitle?: string | null, relatedContentSubmenuTitle?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, mainContent?: Array<{ __typename: 'ComponentSectionsAudioSection', id: string, title?: string | null, submenuTitle?: string | null, url?: string | null } | { __typename: 'ComponentSectionsContactCardsSection', id: string, title?: string | null, submenuTitle?: string | null, contacts?: Array<{ __typename?: 'ComponentBlocksContactCardItem', contactCard?: { __typename?: 'ContactCardEntityResponse', data?: { __typename?: 'ContactCardEntity', id?: string | null, attributes?: { __typename?: 'ContactCard', name: string, position?: string | null, email?: string | null, phone1?: string | null, phone2?: string | null } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsGallerySection', id: string, title?: string | null, submenuTitle?: string | null, medias?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', formats?: any | null, caption?: string | null, url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null }> } | null } | { __typename: 'ComponentSectionsRichtextSection', id: string, submenuTitle?: string | null, content?: string | null } | { __typename: 'ComponentSectionsVideoSection', id: string, title?: string | null, submenuTitle?: string | null, url?: string | null } | { __typename?: 'Error', code: string, message?: string | null } | null> | null, slider?: { __typename?: 'ComponentSectionsSliderSection', id: string, submenuTitle?: string | null, medias?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null }> } | null } | null, downloadSection?: { __typename?: 'ComponentSectionsDownloadSection', id: string, title?: string | null, submenuTitle?: string | null, files?: Array<{ __typename?: 'ComponentBlocksFileItem', id: string, title?: string | null, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, caption?: string | null, alternativeText?: string | null, ext?: string | null, size: number, url: string } | null } | null } } | null> | null } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null, childPages?: { __typename?: 'ContentPageRelationResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, seo?: { __typename?: 'ComponentBlocksSeo', metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null } | null, localizations?: { __typename?: 'ContentPageRelationResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', slug: string, locale?: string | null } | null }> } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string, purchaseId?: string | null } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null, partners?: Array<{ __typename?: 'ComponentBlocksPartnerItem', partner?: { __typename?: 'PartnerEntityResponse', data?: { __typename?: 'PartnerEntity', id?: string | null, attributes?: { __typename?: 'Partner', title: string, link?: string | null, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null } | null } | null } | null> | null } | null } | null } | null };

export type AllContentPageSlugsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type AllContentPageSlugsQuery = { __typename?: 'Query', contentPages?: { __typename?: 'ContentPageEntityResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', slug: string, locale?: string | null } | null }> } | null };

export type MainPageBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
  locale: Scalars['I18NLocaleCode'];
}>;


export type MainPageBySlugQuery = { __typename?: 'Query', mainPages?: { __typename?: 'MainPageEntityResponseCollection', data: Array<{ __typename?: 'MainPageEntity', id?: string | null, attributes?: { __typename?: 'MainPage', title: string, slug: string, sections?: Array<{ __typename: 'ComponentSectionsExploreSection', id: string, title?: string | null } | { __typename: 'ComponentSectionsHighlightsSection', id: string, highlights?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', titleToShow?: string | null, sellTickets?: boolean | null, purchaseId?: string | null, perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string, purchaseId?: string | null } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsMapSection', id: string, title?: string | null, submenuTitle?: string | null } | { __typename: 'ComponentSectionsNewsSection', id: string, title?: string | null, submenuTitle?: string | null } | { __typename: 'ComponentSectionsNewsletterSection', id: string, submenuTitle?: string | null } | { __typename: 'ComponentSectionsOpeningHoursSection', id: string, submenuTitle?: string | null } | { __typename: 'ComponentSectionsPageSection', id: string, title?: string | null, submenuTitle?: string | null, layout?: Enum_Componentsectionspagesection_Layout | null, contentPages?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsPartnersSection', id: string, partners?: Array<{ __typename?: 'ComponentBlocksPartnerItem', partner?: { __typename?: 'PartnerEntityResponse', data?: { __typename?: 'PartnerEntity', id?: string | null, attributes?: { __typename?: 'Partner', title: string, link?: string | null, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsRichtextSection', id: string, submenuTitle?: string | null, content?: string | null } | { __typename: 'ComponentSectionsTicketsSection', id: string, title?: string | null, submenuTitle?: string | null, text?: string | null } | { __typename?: 'Error', code: string, message?: string | null } | null> | null, seo?: { __typename?: 'ComponentBlocksSeo', metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null } | null, localizations?: { __typename?: 'MainPageRelationResponseCollection', data: Array<{ __typename?: 'MainPageEntity', attributes?: { __typename?: 'MainPage', slug: string, locale?: string | null } | null }> } | null } | null }> } | null };

export type AllMainPageSlugsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type AllMainPageSlugsQuery = { __typename?: 'Query', mainPages?: { __typename?: 'MainPageEntityResponseCollection', data: Array<{ __typename?: 'MainPageEntity', attributes?: { __typename?: 'MainPage', slug: string } | null }> } | null };

export type TicketsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type TicketsQuery = { __typename?: 'Query', tickets?: { __typename?: 'TicketEntityResponseCollection', data: Array<{ __typename?: 'TicketEntity', id?: string | null, attributes?: { __typename?: 'Ticket', title: string, price?: number | null, description?: string | null, purchaseIdSelf?: string | null, purchaseIdGift?: string | null } | null }> } | null };

export type ExhibitionsByPlaceQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
  slug: Scalars['String'];
  today: Scalars['Date'];
  tagExhibitions: Scalars['String'];
  tagPermanentExhibitions: Scalars['String'];
  place: Scalars['String'];
}>;


export type ExhibitionsByPlaceQuery = { __typename?: 'Query', currentEvents?: { __typename?: 'ContentPageEntityResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null };

export type AboutUsPageQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type AboutUsPageQuery = { __typename?: 'Query', aboutUsPage?: { __typename?: 'AboutUsPageEntityResponse', data?: { __typename?: 'AboutUsPageEntity', attributes?: { __typename: 'AboutUsPage', highlights?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', titleToShow?: string | null, sellTickets?: boolean | null, purchaseId?: string | null, perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string, purchaseId?: string | null } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null } | null } | null } | null } | null> | null, sections?: Array<{ __typename: 'ComponentSectionsNewsSection', id: string, title?: string | null, submenuTitle?: string | null } | { __typename: 'ComponentSectionsNewsletterSection', id: string, submenuTitle?: string | null } | { __typename: 'ComponentSectionsOpeningHoursSection', id: string, submenuTitle?: string | null } | { __typename: 'ComponentSectionsPageSection', id: string, title?: string | null, submenuTitle?: string | null, layout?: Enum_Componentsectionspagesection_Layout | null, contentPages?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null } | null } | null } | null> | null } | { __typename: 'Error', code: string, message?: string | null } | null> | null, seo?: { __typename?: 'ComponentBlocksSeo', metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null } | null } | null } | null } | null };

export type HomePageQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type HomePageQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', attributes?: { __typename: 'HomePage', highlights?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', titleToShow?: string | null, sellTickets?: boolean | null, purchaseId?: string | null, perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string, purchaseId?: string | null } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null } | null } | null } | null } | null> | null, sections?: Array<{ __typename: 'ComponentSectionsNewsSection', id: string, title?: string | null, submenuTitle?: string | null } | { __typename: 'ComponentSectionsNewsletterSection', id: string, submenuTitle?: string | null } | { __typename: 'ComponentSectionsOpeningHoursSection', id: string, submenuTitle?: string | null } | { __typename: 'ComponentSectionsPageSection', id: string, title?: string | null, submenuTitle?: string | null, layout?: Enum_Componentsectionspagesection_Layout | null, contentPages?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null } | null } | null } | null> | null } | { __typename: 'Error', code: string, message?: string | null } | null> | null, partners?: Array<{ __typename?: 'ComponentBlocksPartnerItem', partner?: { __typename?: 'PartnerEntityResponse', data?: { __typename?: 'PartnerEntity', id?: string | null, attributes?: { __typename?: 'Partner', title: string, link?: string | null, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null } | null } | null } | null> | null, seo?: { __typename?: 'ComponentBlocksSeo', metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null } | null } | null } | null } | null };

export type CollectionPageQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type CollectionPageQuery = { __typename?: 'Query', collectionsPage?: { __typename?: 'CollectionsPageEntityResponse', data?: { __typename?: 'CollectionsPageEntity', attributes?: { __typename: 'CollectionsPage', highlights?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', titleToShow?: string | null, sellTickets?: boolean | null, purchaseId?: string | null, perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string, purchaseId?: string | null } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null } | null } | null } | null } | null> | null, sections?: Array<{ __typename: 'ComponentSectionsNewsSection', id: string, title?: string | null, submenuTitle?: string | null } | { __typename: 'ComponentSectionsNewsletterSection', id: string, submenuTitle?: string | null } | { __typename: 'ComponentSectionsOpeningHoursSection', id: string, submenuTitle?: string | null } | { __typename: 'ComponentSectionsPageSection', id: string, title?: string | null, submenuTitle?: string | null, layout?: Enum_Componentsectionspagesection_Layout | null, contentPages?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null } | null } | null } | null> | null } | { __typename: 'Error', code: string, message?: string | null } | null> | null, seo?: { __typename?: 'ComponentBlocksSeo', metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null } | null } | null } | null } | null };

export type GetInvolvedPageQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type GetInvolvedPageQuery = { __typename?: 'Query', getInvolvedPage?: { __typename?: 'GetInvolvedPageEntityResponse', data?: { __typename?: 'GetInvolvedPageEntity', attributes?: { __typename: 'GetInvolvedPage', highlights?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', titleToShow?: string | null, sellTickets?: boolean | null, purchaseId?: string | null, perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string, purchaseId?: string | null } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null } | null } | null } | null } | null> | null, sections?: Array<{ __typename: 'ComponentSectionsNewsSection', id: string, title?: string | null, submenuTitle?: string | null } | { __typename: 'ComponentSectionsNewsletterSection', id: string, submenuTitle?: string | null } | { __typename: 'ComponentSectionsOpeningHoursSection', id: string, submenuTitle?: string | null } | { __typename: 'ComponentSectionsPageSection', id: string, title?: string | null, submenuTitle?: string | null, layout?: Enum_Componentsectionspagesection_Layout | null, contentPages?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null } | null } | null } | null> | null } | { __typename: 'Error', code: string, message?: string | null } | null> | null, seo?: { __typename?: 'ComponentBlocksSeo', metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null } | null } | null } | null } | null };

export type VisitUsPageQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type VisitUsPageQuery = { __typename?: 'Query', visitUsPage?: { __typename?: 'VisitUsPageEntityResponse', data?: { __typename?: 'VisitUsPageEntity', attributes?: { __typename: 'VisitUsPage', highlights?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', titleToShow?: string | null, sellTickets?: boolean | null, purchaseId?: string | null, perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string, purchaseId?: string | null } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null } | null } | null } | null } | null> | null, sections?: Array<{ __typename: 'ComponentSectionsMapSection', id: string, title?: string | null, submenuTitle?: string | null } | { __typename: 'ComponentSectionsNewsSection', id: string, title?: string | null, submenuTitle?: string | null } | { __typename: 'ComponentSectionsNewsletterSection', id: string, submenuTitle?: string | null } | { __typename: 'ComponentSectionsOpeningHoursSection', id: string, submenuTitle?: string | null } | { __typename: 'ComponentSectionsPageSection', id: string, title?: string | null, submenuTitle?: string | null, layout?: Enum_Componentsectionspagesection_Layout | null, contentPages?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsRichtextSection', id: string, submenuTitle?: string | null, content?: string | null } | { __typename: 'ComponentSectionsTicketsSection', id: string, title?: string | null, submenuTitle?: string | null, text?: string | null } | { __typename?: 'Error', code: string, message?: string | null } | null> | null, seo?: { __typename?: 'ComponentBlocksSeo', metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null } | null } | null } | null } | null, tickets?: { __typename?: 'TicketEntityResponseCollection', data: Array<{ __typename?: 'TicketEntity', id?: string | null, attributes?: { __typename?: 'Ticket', title: string, price?: number | null, description?: string | null, purchaseIdSelf?: string | null, purchaseIdGift?: string | null } | null }> } | null };

export type ExplorePageQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type ExplorePageQuery = { __typename?: 'Query', explorePage?: { __typename?: 'ExplorePageEntityResponse', data?: { __typename?: 'ExplorePageEntity', attributes?: { __typename: 'ExplorePage', highlights?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', titleToShow?: string | null, sellTickets?: boolean | null, purchaseId?: string | null, perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string, purchaseId?: string | null } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null } | null } | null } | null } | null> | null, seo?: { __typename?: 'ComponentBlocksSeo', metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null } | null } | null } | null } | null };

export type ExhibitionsPageQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
  today: Scalars['Date'];
  tagExhibitions: Scalars['String'];
  tagPermanentExhibitions: Scalars['String'];
  tagsAdditionalProgram: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
}>;


export type ExhibitionsPageQuery = { __typename?: 'Query', exhibitionsPage?: { __typename?: 'ExhibitionsPageEntityResponse', data?: { __typename?: 'ExhibitionsPageEntity', attributes?: { __typename: 'ExhibitionsPage', highlights?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', titleToShow?: string | null, sellTickets?: boolean | null, purchaseId?: string | null, perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string, purchaseId?: string | null } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null } | null } | null } | null } | null> | null, archiveSection?: { __typename?: 'ComponentSectionsArchiveSection', id: string, title?: string | null, submenuTitle?: string | null, archiveCard?: { __typename?: 'ComponentBlocksExhibitionArchive', title: string, subtitle?: string | null, perex?: string | null, color?: string | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null } | null } | null, seo?: { __typename?: 'ComponentBlocksSeo', metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null } | null } | null } | null } | null, exhibitions?: { __typename?: 'ContentPageEntityResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null, permanentExhibitions?: { __typename?: 'ContentPageEntityResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null, additionalProgram?: { __typename?: 'ContentPageEntityResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null };

export type ArchivePageQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type ArchivePageQuery = { __typename?: 'Query', archivePage?: { __typename?: 'ExhibitionsPageEntityResponse', data?: { __typename?: 'ExhibitionsPageEntity', attributes?: { __typename: 'ExhibitionsPage', archiveSeo?: { __typename?: 'ComponentBlocksSeo', metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null } | null } | null } | null } | null };

export type DisclosureOfInformationPageQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type DisclosureOfInformationPageQuery = { __typename?: 'Query', general?: { __typename?: 'GeneralEntityResponse', data?: { __typename?: 'GeneralEntity', attributes?: { __typename?: 'General', disclosureMoreFiles?: { __typename?: 'ComponentSectionsDownloadSection', title?: string | null, submenuTitle?: string | null, files?: Array<{ __typename?: 'ComponentBlocksFileItem', id: string, title?: string | null, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, caption?: string | null, alternativeText?: string | null, ext?: string | null, size: number, url: string } | null } | null } } | null> | null } | null } | null } | null } | null };

export const TicketEntityFragmentDoc = gql`
    fragment TicketEntity on TicketEntity {
  id
  attributes {
    title
    price
    description
    purchaseIdSelf
    purchaseIdGift
  }
}
    `;
export const NewsItemEntityFragmentDoc = gql`
    fragment NewsItemEntity on ContentPageEntity {
  id
  attributes {
    title
    subtitle
    addedAt
    useDatetimeAsSubtitle
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
export const TagEntityFragmentDoc = gql`
    fragment TagEntity on TagEntity {
  attributes {
    title
    slug
  }
}
    `;
export const SectionItemEntityFragmentDoc = gql`
    fragment SectionItemEntity on ContentPageEntity {
  ...NewsItemEntity
  attributes {
    perex
    coverMedia {
      data {
        ...ImageEntity
      }
    }
    ...Datetime
    tags {
      data {
        ...TagEntity
      }
    }
  }
}
    ${NewsItemEntityFragmentDoc}
${ImageEntityFragmentDoc}
${DatetimeFragmentDoc}
${TagEntityFragmentDoc}`;
export const PageSectionFragmentDoc = gql`
    fragment PageSection on ComponentSectionsPageSection {
  id
  title
  submenuTitle
  layout
  contentPages {
    contentPage {
      data {
        ...SectionItemEntity
      }
    }
  }
}
    ${SectionItemEntityFragmentDoc}`;
export const NewsSectionFragmentDoc = gql`
    fragment NewsSection on ComponentSectionsNewsSection {
  id
  title
  submenuTitle
}
    `;
export const OpeningHoursSectionFragmentDoc = gql`
    fragment OpeningHoursSection on ComponentSectionsOpeningHoursSection {
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
export const RichtextSectionFragmentDoc = gql`
    fragment RichtextSection on ComponentSectionsRichtextSection {
  id
  submenuTitle
  content
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
  ... on ComponentSectionsOpeningHoursSection {
    __typename
    ...OpeningHoursSection
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
${OpeningHoursSectionFragmentDoc}
${NewsletterSectionFragmentDoc}
${TicketsSectionFragmentDoc}
${MapSectionFragmentDoc}
${RichtextSectionFragmentDoc}`;
export const PlaceEntityFragmentDoc = gql`
    fragment PlaceEntity on PlaceEntity {
  attributes {
    title
    address
    slug
    purchaseId
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
export const HighlightsItemEntityFragmentDoc = gql`
    fragment HighlightsItemEntity on ContentPageEntity {
  ...SectionItemEntity
  attributes {
    titleToShow
    ...ContentPagePlace
    ...Positions
    sellTickets
    purchaseId
    override {
      highlightContent
    }
  }
}
    ${SectionItemEntityFragmentDoc}
${ContentPagePlaceFragmentDoc}
${PositionsFragmentDoc}`;
export const HighlightFragmentDoc = gql`
    fragment Highlight on ComponentBlocksContentPageItem {
  contentPage {
    data {
      ...HighlightsItemEntity
    }
  }
}
    ${HighlightsItemEntityFragmentDoc}`;
export const HighlightsSectionFragmentDoc = gql`
    fragment HighlightsSection on ComponentSectionsHighlightsSection {
  id
  highlights {
    ...Highlight
  }
}
    ${HighlightFragmentDoc}`;
export const PartnerEntityFragmentDoc = gql`
    fragment PartnerEntity on PartnerEntity {
  id
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
export const PartnerFragmentDoc = gql`
    fragment Partner on ComponentBlocksPartnerItem {
  partner {
    data {
      ...PartnerEntity
    }
  }
}
    ${PartnerEntityFragmentDoc}`;
export const PartnersSectionFragmentDoc = gql`
    fragment PartnersSection on ComponentSectionsPartnersSection {
  id
  partners {
    ...Partner
  }
}
    ${PartnerFragmentDoc}`;
export const ExploreSectionFragmentDoc = gql`
    fragment ExploreSection on ComponentSectionsExploreSection {
  id
  title
}
    `;
export const MainPageSectionsFragmentDoc = gql`
    fragment MainPageSections on MainPageSectionsDynamicZone {
  ...Sections
  ... on ComponentSectionsHighlightsSection {
    __typename
    ...HighlightsSection
  }
  ... on ComponentSectionsPartnersSection {
    __typename
    ...PartnersSection
  }
  ... on ComponentSectionsExploreSection {
    __typename
    ...ExploreSection
  }
}
    ${SectionsFragmentDoc}
${HighlightsSectionFragmentDoc}
${PartnersSectionFragmentDoc}
${ExploreSectionFragmentDoc}`;
export const SeoFragmentDoc = gql`
    fragment Seo on ComponentBlocksSeo {
  metaTitle
  metaDescription
  keywords
  metaImage {
    data {
      ...ImageEntity
    }
  }
}
    ${ImageEntityFragmentDoc}`;
export const MainPageEntityFragmentDoc = gql`
    fragment MainPageEntity on MainPageEntity {
  id
  attributes {
    title
    slug
    sections {
      ...MainPageSections
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
    ${MainPageSectionsFragmentDoc}
${SeoFragmentDoc}`;
export const MenuLinkItemFragmentDoc = gql`
    fragment MenuLinkItem on ComponentBlocksMenuLinkItem {
  id
  title
  url
  mainPage {
    data {
      ...MainPageEntity
    }
  }
  hasButtonStyle
}
    ${MainPageEntityFragmentDoc}`;
export const MenuEntityFragmentDoc = gql`
    fragment MenuEntity on MenuEntity {
  id
  attributes {
    menuLinks {
      ...MenuLinkItem
    }
  }
}
    ${MenuLinkItemFragmentDoc}`;
export const PartnersFragmentDoc = gql`
    fragment Partners on ContentPage {
  partners(pagination: {limit: 100}) {
    partner {
      data {
        ...PartnerEntity
      }
    }
  }
}
    ${PartnerEntityFragmentDoc}`;
export const VideoSectionFragmentDoc = gql`
    fragment VideoSection on ComponentSectionsVideoSection {
  id
  title
  submenuTitle
  url
}
    `;
export const AudioSectionFragmentDoc = gql`
    fragment AudioSection on ComponentSectionsAudioSection {
  id
  title
  submenuTitle
  url
}
    `;
export const ImageWithFormatsEntityFragmentDoc = gql`
    fragment ImageWithFormatsEntity on UploadFileEntity {
  ...ImageEntity
  attributes {
    formats
    caption
  }
}
    ${ImageEntityFragmentDoc}`;
export const GallerySectionFragmentDoc = gql`
    fragment GallerySection on ComponentSectionsGallerySection {
  id
  title
  submenuTitle
  medias {
    data {
      ...ImageWithFormatsEntity
    }
  }
}
    ${ImageWithFormatsEntityFragmentDoc}`;
export const ContactCardEntityFragmentDoc = gql`
    fragment ContactCardEntity on ContactCardEntity {
  id
  attributes {
    name
    position
    email
    phone1
    phone2
  }
}
    `;
export const ContactCardsSectionFragmentDoc = gql`
    fragment ContactCardsSection on ComponentSectionsContactCardsSection {
  id
  title
  submenuTitle
  contacts {
    contactCard {
      data {
        ...ContactCardEntity
      }
    }
  }
}
    ${ContactCardEntityFragmentDoc}`;
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
  ... on ComponentSectionsAudioSection {
    __typename
    ...AudioSection
  }
  ... on ComponentSectionsGallerySection {
    __typename
    ...GallerySection
  }
  ... on ComponentSectionsContactCardsSection {
    __typename
    ...ContactCardsSection
  }
}
    ${RichtextSectionFragmentDoc}
${VideoSectionFragmentDoc}
${AudioSectionFragmentDoc}
${GallerySectionFragmentDoc}
${ContactCardsSectionFragmentDoc}`;
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
export const ContentPageEntityFragmentDoc = gql`
    fragment ContentPageEntity on ContentPageEntity {
  id
  attributes {
    title
    titleToShow
    subtitle
    useDatetimeAsSubtitle
    slug
    addedAt
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
    sellTickets
    purchaseId
    showShareButtons
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
        ...SectionItemEntity
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
${SectionItemEntityFragmentDoc}
${TagEntityFragmentDoc}
${SeoFragmentDoc}`;
export const CommonSearchPageEntityFragmentDoc = gql`
    fragment CommonSearchPageEntity on ContentPageEntity {
  id
  attributes {
    title
    slug
  }
}
    `;
export const PalaceDetailsFragmentDoc = gql`
    fragment PalaceDetails on ComponentBlocksPalace {
  title
  address
  zip
  city
  phone
}
    `;
export const LinksFragmentDoc = gql`
    fragment Links on ComponentBlocksLinks {
  title
  links {
    title
    url
    newWindow
  }
}
    `;
export const GeneralEntityFragmentDoc = gql`
    fragment GeneralEntity on GeneralEntity {
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
    socialLinks {
      ...Links
    }
    footerLinks1 {
      ...Links
    }
    footerLinks2 {
      ...Links
    }
  }
}
    ${PalaceDetailsFragmentDoc}
${LinksFragmentDoc}`;
export const ExhibitionArchiveFragmentDoc = gql`
    fragment ExhibitionArchive on ComponentBlocksExhibitionArchive {
  title
  subtitle
  perex
  color
  coverMedia {
    data {
      ...ImageEntity
    }
  }
}
    ${ImageEntityFragmentDoc}`;
export const ArchiveSectionFragmentDoc = gql`
    fragment ArchiveSection on ComponentSectionsArchiveSection {
  id
  title
  submenuTitle
  archiveCard {
    ...ExhibitionArchive
  }
}
    ${ExhibitionArchiveFragmentDoc}`;
export const GeneralDocument = gql`
    query General($locale: I18NLocaleCode!) {
  general(locale: $locale) {
    data {
      ...GeneralEntity
    }
  }
}
    ${GeneralEntityFragmentDoc}`;
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
        tags(sort: "id:asc", pagination: {limit: 100}) {
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
    query PreviewsByTags($locale: I18NLocaleCode!, $limit: Int, $offset: Int, $tagSlugs: [String], $placesSlugs: [String], $dateForFilteringPastEvents: Date, $dateForFilteringFutureEvents: Date, $sort: [String] = ["dateFrom:desc", "publishedAt:desc"]) {
  contentPages(
    locale: $locale
    pagination: {start: $offset, limit: $limit}
    filters: {tags: {slug: {in: $tagSlugs}}, place: {slug: {in: $placesSlugs}}, or: [{dateTo: {lt: $dateForFilteringPastEvents, null: true}}, {dateTo: {lt: $dateForFilteringPastEvents, gt: $dateForFilteringFutureEvents}}]}
    sort: $sort
  ) {
    data {
      ...SectionItemEntity
    }
  }
}
    ${SectionItemEntityFragmentDoc}`;
export const PreviewContentPageBySlugDocument = gql`
    query PreviewContentPageBySlug($slug: String!) {
  contentPageBySlug(slug: $slug, locale: "all") {
    data {
      attributes {
        slug
        locale
      }
    }
  }
}
    `;
export const ContentPageBySlugDocument = gql`
    query ContentPageBySlug($locale: I18NLocaleCode!, $slug: String!, $isPublished: Boolean!) {
  contentPageBySlug(slug: $slug, locale: $locale, isPublished: $isPublished) {
    data {
      ...ContentPageEntity
    }
  }
}
    ${ContentPageEntityFragmentDoc}`;
export const AllContentPageSlugsDocument = gql`
    query AllContentPageSlugs($locale: I18NLocaleCode!) {
  contentPages(locale: $locale) {
    data {
      attributes {
        slug
        locale
      }
    }
  }
}
    `;
export const MainPageBySlugDocument = gql`
    query MainPageBySlug($slug: String!, $locale: I18NLocaleCode!) {
  mainPages(filters: {slug: {eq: $slug}}, locale: $locale) {
    data {
      ...MainPageEntity
    }
  }
}
    ${MainPageEntityFragmentDoc}`;
export const AllMainPageSlugsDocument = gql`
    query AllMainPageSlugs($locale: I18NLocaleCode!) {
  mainPages(locale: $locale) {
    data {
      attributes {
        slug
      }
    }
  }
}
    `;
export const TicketsDocument = gql`
    query Tickets($locale: I18NLocaleCode!) {
  tickets(locale: $locale) {
    data {
      ...TicketEntity
    }
  }
}
    ${TicketEntityFragmentDoc}`;
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
          ...Highlight
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
}
    ${HighlightFragmentDoc}
${SectionsFragmentDoc}
${SeoFragmentDoc}`;
export const HomePageDocument = gql`
    query HomePage($locale: I18NLocaleCode!) {
  homePage(locale: $locale) {
    data {
      attributes {
        __typename
        highlights {
          ...Highlight
        }
        sections {
          ...Sections
        }
        partners {
          partner {
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
}
    ${HighlightFragmentDoc}
${SectionsFragmentDoc}
${PartnerEntityFragmentDoc}
${SeoFragmentDoc}`;
export const CollectionPageDocument = gql`
    query CollectionPage($locale: I18NLocaleCode!) {
  collectionsPage(locale: $locale) {
    data {
      attributes {
        __typename
        highlights {
          ...Highlight
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
}
    ${HighlightFragmentDoc}
${SectionsFragmentDoc}
${SeoFragmentDoc}`;
export const GetInvolvedPageDocument = gql`
    query GetInvolvedPage($locale: I18NLocaleCode!) {
  getInvolvedPage(locale: $locale) {
    data {
      attributes {
        __typename
        highlights {
          ...Highlight
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
}
    ${HighlightFragmentDoc}
${SectionsFragmentDoc}
${SeoFragmentDoc}`;
export const VisitUsPageDocument = gql`
    query VisitUsPage($locale: I18NLocaleCode!) {
  visitUsPage(locale: $locale) {
    data {
      attributes {
        __typename
        highlights {
          ...Highlight
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
  tickets(locale: $locale) {
    data {
      ...TicketEntity
    }
  }
}
    ${HighlightFragmentDoc}
${SectionsFragmentDoc}
${SeoFragmentDoc}
${TicketEntityFragmentDoc}`;
export const ExplorePageDocument = gql`
    query ExplorePage($locale: I18NLocaleCode!) {
  explorePage(locale: $locale) {
    data {
      attributes {
        __typename
        highlights {
          ...Highlight
        }
        seo {
          ...Seo
        }
      }
    }
  }
}
    ${HighlightFragmentDoc}
${SeoFragmentDoc}`;
export const ExhibitionsPageDocument = gql`
    query ExhibitionsPage($locale: I18NLocaleCode!, $today: Date!, $tagExhibitions: String!, $tagPermanentExhibitions: String!, $tagsAdditionalProgram: [String]!) {
  exhibitionsPage(locale: $locale) {
    data {
      attributes {
        __typename
        highlights {
          ...Highlight
        }
        archiveSection {
          ...ArchiveSection
        }
        seo {
          ...Seo
        }
      }
    }
  }
  exhibitions: contentPages(
    locale: $locale
    filters: {tags: {slug: {eq: $tagExhibitions}}, dateTo: {gte: $today}}
  ) {
    data {
      ...SectionItemEntity
    }
  }
  permanentExhibitions: contentPages(
    locale: $locale
    filters: {tags: {slug: {eq: $tagPermanentExhibitions}}, dateFrom: {lte: $today}}
  ) {
    data {
      ...SectionItemEntity
    }
  }
  additionalProgram: contentPages(
    locale: $locale
    filters: {tags: {slug: {in: $tagsAdditionalProgram}}, dateTo: {gte: $today}}
    sort: ["dateFrom:asc"]
  ) {
    data {
      ...SectionItemEntity
    }
  }
}
    ${HighlightFragmentDoc}
${ArchiveSectionFragmentDoc}
${SeoFragmentDoc}
${SectionItemEntityFragmentDoc}`;
export const ArchivePageDocument = gql`
    query ArchivePage($locale: I18NLocaleCode!) {
  archivePage: exhibitionsPage(locale: $locale) {
    data {
      attributes {
        __typename
        archiveSeo {
          ...Seo
        }
      }
    }
  }
}
    ${SeoFragmentDoc}`;
export const DisclosureOfInformationPageDocument = gql`
    query DisclosureOfInformationPage($locale: I18NLocaleCode!) {
  general(locale: $locale) {
    data {
      attributes {
        disclosureMoreFiles {
          title
          submenuTitle
          files {
            ...DownloadItem
          }
        }
      }
    }
  }
}
    ${DownloadItemFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    General(variables: GeneralQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GeneralQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GeneralQuery>(GeneralDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'General', 'query', variables);
    },
    Places(variables: PlacesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PlacesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PlacesQuery>(PlacesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Places', 'query', variables);
    },
    TagsByCategorySlug(variables: TagsByCategorySlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<TagsByCategorySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TagsByCategorySlugQuery>(TagsByCategorySlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TagsByCategorySlug', 'query', variables);
    },
    News(variables: NewsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<NewsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<NewsQuery>(NewsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'News', 'query', variables);
    },
    PreviewsByTags(variables: PreviewsByTagsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PreviewsByTagsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PreviewsByTagsQuery>(PreviewsByTagsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PreviewsByTags', 'query', variables);
    },
    PreviewContentPageBySlug(variables: PreviewContentPageBySlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PreviewContentPageBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PreviewContentPageBySlugQuery>(PreviewContentPageBySlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PreviewContentPageBySlug', 'query', variables);
    },
    ContentPageBySlug(variables: ContentPageBySlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ContentPageBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ContentPageBySlugQuery>(ContentPageBySlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ContentPageBySlug', 'query', variables);
    },
    AllContentPageSlugs(variables: AllContentPageSlugsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AllContentPageSlugsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllContentPageSlugsQuery>(AllContentPageSlugsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllContentPageSlugs', 'query', variables);
    },
    MainPageBySlug(variables: MainPageBySlugQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MainPageBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MainPageBySlugQuery>(MainPageBySlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MainPageBySlug', 'query');
    },
    AllMainPageSlugs(variables: AllMainPageSlugsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AllMainPageSlugsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllMainPageSlugsQuery>(AllMainPageSlugsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllMainPageSlugs', 'query');
    },
    Tickets(variables: TicketsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TicketsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TicketsQuery>(TicketsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Tickets', 'query');
    },
    ExhibitionsByPlace(variables: ExhibitionsByPlaceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ExhibitionsByPlaceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ExhibitionsByPlaceQuery>(ExhibitionsByPlaceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ExhibitionsByPlace', 'query', variables);
    },
    AboutUsPage(variables: AboutUsPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AboutUsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AboutUsPageQuery>(AboutUsPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AboutUsPage', 'query', variables);
    },
    HomePage(variables: HomePageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<HomePageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<HomePageQuery>(HomePageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'HomePage', 'query', variables);
    },
    CollectionPage(variables: CollectionPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CollectionPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CollectionPageQuery>(CollectionPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CollectionPage', 'query', variables);
    },
    GetInvolvedPage(variables: GetInvolvedPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetInvolvedPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetInvolvedPageQuery>(GetInvolvedPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetInvolvedPage', 'query', variables);
    },
    VisitUsPage(variables: VisitUsPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<VisitUsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<VisitUsPageQuery>(VisitUsPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'VisitUsPage', 'query', variables);
    },
    ExplorePage(variables: ExplorePageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ExplorePageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ExplorePageQuery>(ExplorePageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ExplorePage', 'query', variables);
    },
    ExhibitionsPage(variables: ExhibitionsPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ExhibitionsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ExhibitionsPageQuery>(ExhibitionsPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ExhibitionsPage', 'query', variables);
    },
    ArchivePage(variables: ArchivePageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ArchivePageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ArchivePageQuery>(ArchivePageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ArchivePage', 'query', variables);
    },
    DisclosureOfInformationPage(variables: DisclosureOfInformationPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DisclosureOfInformationPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DisclosureOfInformationPageQuery>(DisclosureOfInformationPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DisclosureOfInformationPage', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
