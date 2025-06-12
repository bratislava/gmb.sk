import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ContentPageMainContentDynamicZoneInput: { input: any; output: any; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  HomePageSectionsDynamicZoneInput: { input: any; output: any; }
  /** A string used to identify an i18n locale */
  I18NLocaleCode: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  Long: { input: any; output: any; }
  MainPageSectionsDynamicZoneInput: { input: any; output: any; }
  /** A time string with format HH:mm:ss.SSS */
  Time: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentBlocksContactCardItem = {
  __typename?: 'ComponentBlocksContactCardItem';
  contactCard?: Maybe<ContactCardEntityResponse>;
  id: Scalars['ID']['output'];
};

export type ComponentBlocksContactCardItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksContactCardItemFiltersInput>>>;
  contactCard?: InputMaybe<ContactCardFiltersInput>;
  not?: InputMaybe<ComponentBlocksContactCardItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksContactCardItemFiltersInput>>>;
};

export type ComponentBlocksContactCardItemInput = {
  contactCard?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentBlocksContentPageItem = {
  __typename?: 'ComponentBlocksContentPageItem';
  contentPage?: Maybe<ContentPageEntityResponse>;
  id: Scalars['ID']['output'];
};

export type ComponentBlocksContentPageItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksContentPageItemFiltersInput>>>;
  contentPage?: InputMaybe<ContentPageFiltersInput>;
  not?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksContentPageItemFiltersInput>>>;
};

export type ComponentBlocksContentPageItemInput = {
  contentPage?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentBlocksExhibitionArchive = {
  __typename?: 'ComponentBlocksExhibitionArchive';
  color?: Maybe<Scalars['String']['output']>;
  coverMedia?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID']['output'];
  perex?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentBlocksExhibitionArchiveFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksExhibitionArchiveFiltersInput>>>;
  color?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksExhibitionArchiveFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksExhibitionArchiveFiltersInput>>>;
  perex?: InputMaybe<StringFilterInput>;
  subtitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksExhibitionArchiveInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  coverMedia?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  perex?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentBlocksFileItem = {
  __typename?: 'ComponentBlocksFileItem';
  file: UploadFileEntityResponse;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentBlocksFileItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksFileItemFiltersInput>>>;
  not?: InputMaybe<ComponentBlocksFileItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksFileItemFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksFileItemInput = {
  file?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentBlocksHighlightOverride = {
  __typename?: 'ComponentBlocksHighlightOverride';
  highlightContent?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentBlocksHighlightOverrideFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksHighlightOverrideFiltersInput>>>;
  highlightContent?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksHighlightOverrideFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksHighlightOverrideFiltersInput>>>;
};

export type ComponentBlocksHighlightOverrideInput = {
  highlightContent?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentBlocksLinkItem = {
  __typename?: 'ComponentBlocksLinkItem';
  id: Scalars['ID']['output'];
  newWindow?: Maybe<Scalars['Boolean']['output']>;
  title: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
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
  id?: InputMaybe<Scalars['ID']['input']>;
  newWindow?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentBlocksLinks = {
  __typename?: 'ComponentBlocksLinks';
  id: Scalars['ID']['output'];
  links?: Maybe<Array<Maybe<ComponentBlocksLinkItem>>>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ComponentBlocksLinksLinksArgs = {
  filters?: InputMaybe<ComponentBlocksLinkItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentBlocksLinksFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksLinksFiltersInput>>>;
  links?: InputMaybe<ComponentBlocksLinkItemFiltersInput>;
  not?: InputMaybe<ComponentBlocksLinksFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksLinksFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksLinksInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  links?: InputMaybe<Array<InputMaybe<ComponentBlocksLinkItemInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentBlocksMenuLinkItem = {
  __typename?: 'ComponentBlocksMenuLinkItem';
  contentPage?: Maybe<ContentPageEntityResponse>;
  hasButtonStyle?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  mainPage?: Maybe<MainPageEntityResponse>;
  title: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentBlocksMenuLinkItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksMenuLinkItemFiltersInput>>>;
  contentPage?: InputMaybe<ContentPageFiltersInput>;
  hasButtonStyle?: InputMaybe<BooleanFilterInput>;
  mainPage?: InputMaybe<MainPageFiltersInput>;
  not?: InputMaybe<ComponentBlocksMenuLinkItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksMenuLinkItemFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksMenuLinkItemInput = {
  contentPage?: InputMaybe<Scalars['ID']['input']>;
  hasButtonStyle?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  mainPage?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentBlocksPalace = {
  __typename?: 'ComponentBlocksPalace';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  zip?: Maybe<Scalars['String']['output']>;
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
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentBlocksPartnerItem = {
  __typename?: 'ComponentBlocksPartnerItem';
  id: Scalars['ID']['output'];
  partner?: Maybe<PartnerEntityResponse>;
};

export type ComponentBlocksPartnerItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksPartnerItemFiltersInput>>>;
  not?: InputMaybe<ComponentBlocksPartnerItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksPartnerItemFiltersInput>>>;
  partner?: InputMaybe<PartnerFiltersInput>;
};

export type ComponentBlocksPartnerItemInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  partner?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentBlocksPositionItem = {
  __typename?: 'ComponentBlocksPositionItem';
  id: Scalars['ID']['output'];
  names?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentBlocksPositionItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksPositionItemFiltersInput>>>;
  names?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksPositionItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksPositionItemFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksPositionItemInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  names?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentBlocksSeo = {
  __typename?: 'ComponentBlocksSeo';
  id: Scalars['ID']['output'];
  keywords?: Maybe<Scalars['String']['output']>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaImage?: Maybe<UploadFileEntityResponse>;
  metaTitle?: Maybe<Scalars['String']['output']>;
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
  id?: InputMaybe<Scalars['ID']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaImage?: InputMaybe<Scalars['ID']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSectionsArchiveBannerSection = {
  __typename?: 'ComponentSectionsArchiveBannerSection';
  banner: ComponentBlocksExhibitionArchive;
  id: Scalars['ID']['output'];
  submenuTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSectionsArchiveBannerSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsArchiveBannerSectionFiltersInput>>>;
  banner?: InputMaybe<ComponentBlocksExhibitionArchiveFiltersInput>;
  not?: InputMaybe<ComponentSectionsArchiveBannerSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsArchiveBannerSectionFiltersInput>>>;
  submenuTitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsArchiveBannerSectionInput = {
  banner?: InputMaybe<ComponentBlocksExhibitionArchiveInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  submenuTitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSectionsAudioSection = {
  __typename?: 'ComponentSectionsAudioSection';
  id: Scalars['ID']['output'];
  submenuTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
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
  id?: InputMaybe<Scalars['ID']['input']>;
  submenuTitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSectionsContactCardsSection = {
  __typename?: 'ComponentSectionsContactCardsSection';
  contacts?: Maybe<Array<Maybe<ComponentBlocksContactCardItem>>>;
  id: Scalars['ID']['output'];
  submenuTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ComponentSectionsContactCardsSectionContactsArgs = {
  filters?: InputMaybe<ComponentBlocksContactCardItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  id?: InputMaybe<Scalars['ID']['input']>;
  submenuTitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSectionsDisclosureSection = {
  __typename?: 'ComponentSectionsDisclosureSection';
  id: Scalars['ID']['output'];
  submenuTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSectionsDisclosureSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsDisclosureSectionFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsDisclosureSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsDisclosureSectionFiltersInput>>>;
  submenuTitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsDisclosureSectionInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  submenuTitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSectionsDownloadSection = {
  __typename?: 'ComponentSectionsDownloadSection';
  files?: Maybe<Array<Maybe<ComponentBlocksFileItem>>>;
  id: Scalars['ID']['output'];
  submenuTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ComponentSectionsDownloadSectionFilesArgs = {
  filters?: InputMaybe<ComponentBlocksFileItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  id?: InputMaybe<Scalars['ID']['input']>;
  submenuTitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSectionsExhibitionArchiveSection = {
  __typename?: 'ComponentSectionsExhibitionArchiveSection';
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSectionsExhibitionArchiveSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsExhibitionArchiveSectionFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsExhibitionArchiveSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsExhibitionArchiveSectionFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsExhibitionArchiveSectionInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSectionsExhibitionsSection = {
  __typename?: 'ComponentSectionsExhibitionsSection';
  archiveBannerSection?: Maybe<ComponentSectionsArchiveBannerSection>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSectionsExhibitionsSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsExhibitionsSectionFiltersInput>>>;
  archiveBannerSection?: InputMaybe<ComponentSectionsArchiveBannerSectionFiltersInput>;
  not?: InputMaybe<ComponentSectionsExhibitionsSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsExhibitionsSectionFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsExhibitionsSectionInput = {
  archiveBannerSection?: InputMaybe<ComponentSectionsArchiveBannerSectionInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSectionsExploreSection = {
  __typename?: 'ComponentSectionsExploreSection';
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSectionsExploreSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsExploreSectionFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsExploreSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsExploreSectionFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsExploreSectionInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSectionsGallerySection = {
  __typename?: 'ComponentSectionsGallerySection';
  id: Scalars['ID']['output'];
  medias?: Maybe<UploadFileRelationResponseCollection>;
  submenuTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ComponentSectionsGallerySectionMediasArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsGallerySectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsGallerySectionFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsGallerySectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsGallerySectionFiltersInput>>>;
  submenuTitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsGallerySectionInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  medias?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  submenuTitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSectionsGlobalSearchSection = {
  __typename?: 'ComponentSectionsGlobalSearchSection';
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSectionsGlobalSearchSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsGlobalSearchSectionFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsGlobalSearchSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsGlobalSearchSectionFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsGlobalSearchSectionInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSectionsHighlightsSection = {
  __typename?: 'ComponentSectionsHighlightsSection';
  highlights?: Maybe<Array<Maybe<ComponentBlocksContentPageItem>>>;
  id: Scalars['ID']['output'];
};


export type ComponentSectionsHighlightsSectionHighlightsArgs = {
  filters?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsHighlightsSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsHighlightsSectionFiltersInput>>>;
  highlights?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  not?: InputMaybe<ComponentSectionsHighlightsSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsHighlightsSectionFiltersInput>>>;
};

export type ComponentSectionsHighlightsSectionInput = {
  highlights?: InputMaybe<Array<InputMaybe<ComponentBlocksContentPageItemInput>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentSectionsMapSection = {
  __typename?: 'ComponentSectionsMapSection';
  id: Scalars['ID']['output'];
  submenuTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSectionsMapSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsMapSectionFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsMapSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsMapSectionFiltersInput>>>;
  submenuTitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsMapSectionInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  submenuTitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSectionsNewsSection = {
  __typename?: 'ComponentSectionsNewsSection';
  id: Scalars['ID']['output'];
  submenuTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSectionsNewsSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsNewsSectionFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsNewsSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsNewsSectionFiltersInput>>>;
  submenuTitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsNewsSectionInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  submenuTitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSectionsNewsletterSection = {
  __typename?: 'ComponentSectionsNewsletterSection';
  id: Scalars['ID']['output'];
  submenuTitle?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSectionsNewsletterSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsNewsletterSectionFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsNewsletterSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsNewsletterSectionFiltersInput>>>;
  submenuTitle?: InputMaybe<StringFilterInput>;
  subtitle?: InputMaybe<StringFilterInput>;
  text?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsNewsletterSectionInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  submenuTitle?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSectionsOpeningHoursSection = {
  __typename?: 'ComponentSectionsOpeningHoursSection';
  id: Scalars['ID']['output'];
  submenuTitle?: Maybe<Scalars['String']['output']>;
};

export type ComponentSectionsOpeningHoursSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsOpeningHoursSectionFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsOpeningHoursSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsOpeningHoursSectionFiltersInput>>>;
  submenuTitle?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsOpeningHoursSectionInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  submenuTitle?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSectionsPageSection = {
  __typename?: 'ComponentSectionsPageSection';
  contentPages?: Maybe<Array<Maybe<ComponentBlocksContentPageItem>>>;
  id: Scalars['ID']['output'];
  layout?: Maybe<Enum_Componentsectionspagesection_Layout>;
  submenuTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ComponentSectionsPageSectionContentPagesArgs = {
  filters?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  id?: InputMaybe<Scalars['ID']['input']>;
  layout?: InputMaybe<Enum_Componentsectionspagesection_Layout>;
  submenuTitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSectionsPartnersSection = {
  __typename?: 'ComponentSectionsPartnersSection';
  id: Scalars['ID']['output'];
  partners?: Maybe<Array<Maybe<ComponentBlocksPartnerItem>>>;
  submenuTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ComponentSectionsPartnersSectionPartnersArgs = {
  filters?: InputMaybe<ComponentBlocksPartnerItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsPartnersSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsPartnersSectionFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsPartnersSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsPartnersSectionFiltersInput>>>;
  partners?: InputMaybe<ComponentBlocksPartnerItemFiltersInput>;
  submenuTitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsPartnersSectionInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  partners?: InputMaybe<Array<InputMaybe<ComponentBlocksPartnerItemInput>>>;
  submenuTitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSectionsRichtextSection = {
  __typename?: 'ComponentSectionsRichtextSection';
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  submenuTitle?: Maybe<Scalars['String']['output']>;
};

export type ComponentSectionsRichtextSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsRichtextSectionFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSectionsRichtextSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsRichtextSectionFiltersInput>>>;
  submenuTitle?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsRichtextSectionInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  submenuTitle?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSectionsSliderSection = {
  __typename?: 'ComponentSectionsSliderSection';
  id: Scalars['ID']['output'];
  medias?: Maybe<UploadFileRelationResponseCollection>;
  submenuTitle?: Maybe<Scalars['String']['output']>;
};


export type ComponentSectionsSliderSectionMediasArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsSliderSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsSliderSectionFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsSliderSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsSliderSectionFiltersInput>>>;
  submenuTitle?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsSliderSectionInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  medias?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  submenuTitle?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSectionsTicketsSection = {
  __typename?: 'ComponentSectionsTicketsSection';
  id: Scalars['ID']['output'];
  submenuTitle?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
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
  id?: InputMaybe<Scalars['ID']['input']>;
  submenuTitle?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSectionsVideoSection = {
  __typename?: 'ComponentSectionsVideoSection';
  id: Scalars['ID']['output'];
  submenuTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
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
  id?: InputMaybe<Scalars['ID']['input']>;
  submenuTitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ContactCard = {
  __typename?: 'ContactCard';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<ContactCardRelationResponseCollection>;
  name: Scalars['String']['output'];
  phone1?: Maybe<Scalars['String']['output']>;
  phone2?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ContactCardLocalizationsArgs = {
  filters?: InputMaybe<ContactCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContactCardEntity = {
  __typename?: 'ContactCardEntity';
  attributes?: Maybe<ContactCard>;
  id?: Maybe<Scalars['ID']['output']>;
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
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone1?: InputMaybe<Scalars['String']['input']>;
  phone2?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
};

export type ContactCardRelationResponseCollection = {
  __typename?: 'ContactCardRelationResponseCollection';
  data: Array<ContactCardEntity>;
};

export type ContentPage = {
  __typename?: 'ContentPage';
  addedAt?: Maybe<Scalars['DateTime']['output']>;
  childPages?: Maybe<ContentPageRelationResponseCollection>;
  color?: Maybe<Scalars['String']['output']>;
  coverMedia?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dateFrom?: Maybe<Scalars['Date']['output']>;
  dateTo?: Maybe<Scalars['Date']['output']>;
  downloadSection?: Maybe<ComponentSectionsDownloadSection>;
  inheritColorFromParent?: Maybe<Scalars['Boolean']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<ContentPageRelationResponseCollection>;
  mainContent?: Maybe<Array<Maybe<ContentPageMainContentDynamicZone>>>;
  override?: Maybe<ComponentBlocksHighlightOverride>;
  parentPage?: Maybe<ContentPageEntityResponse>;
  partners?: Maybe<Array<Maybe<ComponentBlocksPartnerItem>>>;
  perex?: Maybe<Scalars['String']['output']>;
  place?: Maybe<PlaceEntityResponse>;
  placeAddress?: Maybe<Scalars['String']['output']>;
  placeTitle?: Maybe<Scalars['String']['output']>;
  positions?: Maybe<Array<Maybe<ComponentBlocksPositionItem>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  purchaseId?: Maybe<Scalars['String']['output']>;
  relatedContentSubmenuTitle?: Maybe<Scalars['String']['output']>;
  relatedContentTitle?: Maybe<Scalars['String']['output']>;
  sellTickets?: Maybe<Scalars['Boolean']['output']>;
  seo?: Maybe<ComponentBlocksSeo>;
  showRemainingTime?: Maybe<Scalars['Boolean']['output']>;
  showShareButtons?: Maybe<Scalars['Boolean']['output']>;
  slider?: Maybe<ComponentSectionsSliderSection>;
  slug: Scalars['String']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<TagRelationResponseCollection>;
  timeFrom?: Maybe<Scalars['Time']['output']>;
  timeTo?: Maybe<Scalars['Time']['output']>;
  title: Scalars['String']['output'];
  titleToShow?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  useDatetimeAsSubtitle?: Maybe<Scalars['Boolean']['output']>;
};


export type ContentPageChildPagesArgs = {
  filters?: InputMaybe<ContentPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ContentPageLocalizationsArgs = {
  filters?: InputMaybe<ContentPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ContentPagePartnersArgs = {
  filters?: InputMaybe<ComponentBlocksPartnerItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ContentPagePositionsArgs = {
  filters?: InputMaybe<ComponentBlocksPositionItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ContentPageTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentPageEntity = {
  __typename?: 'ContentPageEntity';
  attributes?: Maybe<ContentPage>;
  id?: Maybe<Scalars['ID']['output']>;
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
  addedAt?: InputMaybe<Scalars['DateTime']['input']>;
  childPages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  color?: InputMaybe<Scalars['String']['input']>;
  coverMedia?: InputMaybe<Scalars['ID']['input']>;
  dateFrom?: InputMaybe<Scalars['Date']['input']>;
  dateTo?: InputMaybe<Scalars['Date']['input']>;
  downloadSection?: InputMaybe<ComponentSectionsDownloadSectionInput>;
  inheritColorFromParent?: InputMaybe<Scalars['Boolean']['input']>;
  mainContent?: InputMaybe<Array<Scalars['ContentPageMainContentDynamicZoneInput']['input']>>;
  override?: InputMaybe<ComponentBlocksHighlightOverrideInput>;
  parentPage?: InputMaybe<Scalars['ID']['input']>;
  partners?: InputMaybe<Array<InputMaybe<ComponentBlocksPartnerItemInput>>>;
  perex?: InputMaybe<Scalars['String']['input']>;
  place?: InputMaybe<Scalars['ID']['input']>;
  placeAddress?: InputMaybe<Scalars['String']['input']>;
  placeTitle?: InputMaybe<Scalars['String']['input']>;
  positions?: InputMaybe<Array<InputMaybe<ComponentBlocksPositionItemInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  purchaseId?: InputMaybe<Scalars['String']['input']>;
  relatedContentSubmenuTitle?: InputMaybe<Scalars['String']['input']>;
  relatedContentTitle?: InputMaybe<Scalars['String']['input']>;
  sellTickets?: InputMaybe<Scalars['Boolean']['input']>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
  showRemainingTime?: InputMaybe<Scalars['Boolean']['input']>;
  showShareButtons?: InputMaybe<Scalars['Boolean']['input']>;
  slider?: InputMaybe<ComponentSectionsSliderSectionInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  timeFrom?: InputMaybe<Scalars['Time']['input']>;
  timeTo?: InputMaybe<Scalars['Time']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  titleToShow?: InputMaybe<Scalars['String']['input']>;
  useDatetimeAsSubtitle?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentPageMainContentDynamicZone = ComponentSectionsAudioSection | ComponentSectionsContactCardsSection | ComponentSectionsGallerySection | ComponentSectionsRichtextSection | ComponentSectionsVideoSection | Error;

export type ContentPageRelationResponseCollection = {
  __typename?: 'ContentPageRelationResponseCollection';
  data: Array<ContentPageEntity>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  contains?: InputMaybe<Scalars['Date']['input']>;
  containsi?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  eq?: InputMaybe<Scalars['Date']['input']>;
  eqi?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nei?: InputMaybe<Scalars['Date']['input']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Componentsectionspagesection_Layout {
  Cards = 'cards',
  Chessboard = 'chessboard',
  Fullwidth = 'fullwidth'
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type General = {
  __typename?: 'General';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  footerLinks1?: Maybe<ComponentBlocksLinks>;
  footerLinks2?: Maybe<ComponentBlocksLinks>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<GeneralRelationResponseCollection>;
  mirbach?: Maybe<ComponentBlocksPalace>;
  name?: Maybe<Scalars['String']['output']>;
  openingHours?: Maybe<Scalars['String']['output']>;
  palffy?: Maybe<ComponentBlocksPalace>;
  socialLinks?: Maybe<ComponentBlocksLinks>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GeneralEntity = {
  __typename?: 'GeneralEntity';
  attributes?: Maybe<General>;
  id?: Maybe<Scalars['ID']['output']>;
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
  email?: InputMaybe<Scalars['String']['input']>;
  footerLinks1?: InputMaybe<ComponentBlocksLinksInput>;
  footerLinks2?: InputMaybe<ComponentBlocksLinksInput>;
  mirbach?: InputMaybe<ComponentBlocksPalaceInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  openingHours?: InputMaybe<Scalars['String']['input']>;
  palffy?: InputMaybe<ComponentBlocksPalaceInput>;
  socialLinks?: InputMaybe<ComponentBlocksLinksInput>;
};

export type GeneralRelationResponseCollection = {
  __typename?: 'GeneralRelationResponseCollection';
  data: Array<GeneralEntity>;
};

export type GenericMorph = ComponentBlocksContactCardItem | ComponentBlocksContentPageItem | ComponentBlocksExhibitionArchive | ComponentBlocksFileItem | ComponentBlocksHighlightOverride | ComponentBlocksLinkItem | ComponentBlocksLinks | ComponentBlocksMenuLinkItem | ComponentBlocksPalace | ComponentBlocksPartnerItem | ComponentBlocksPositionItem | ComponentBlocksSeo | ComponentSectionsArchiveBannerSection | ComponentSectionsAudioSection | ComponentSectionsContactCardsSection | ComponentSectionsDisclosureSection | ComponentSectionsDownloadSection | ComponentSectionsExhibitionArchiveSection | ComponentSectionsExhibitionsSection | ComponentSectionsExploreSection | ComponentSectionsGallerySection | ComponentSectionsGlobalSearchSection | ComponentSectionsHighlightsSection | ComponentSectionsMapSection | ComponentSectionsNewsSection | ComponentSectionsNewsletterSection | ComponentSectionsOpeningHoursSection | ComponentSectionsPageSection | ComponentSectionsPartnersSection | ComponentSectionsRichtextSection | ComponentSectionsSliderSection | ComponentSectionsTicketsSection | ComponentSectionsVideoSection | ContactCard | ContentPage | General | HomePage | I18NLocale | MainPage | Menu | Partner | Place | Tag | TagCategory | Ticket | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type HomePage = {
  __typename?: 'HomePage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  highlights?: Maybe<Array<Maybe<ComponentBlocksContentPageItem>>>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<HomePageRelationResponseCollection>;
  sections?: Maybe<Array<Maybe<HomePageSectionsDynamicZone>>>;
  seo?: Maybe<ComponentBlocksSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type HomePageHighlightsArgs = {
  filters?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomePageEntity = {
  __typename?: 'HomePageEntity';
  attributes?: Maybe<HomePage>;
  id?: Maybe<Scalars['ID']['output']>;
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
  seo?: InputMaybe<ComponentBlocksSeoFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type HomePageInput = {
  highlights?: InputMaybe<Array<InputMaybe<ComponentBlocksContentPageItemInput>>>;
  sections?: InputMaybe<Array<Scalars['HomePageSectionsDynamicZoneInput']['input']>>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
};

export type HomePageRelationResponseCollection = {
  __typename?: 'HomePageRelationResponseCollection';
  data: Array<HomePageEntity>;
};

export type HomePageSectionsDynamicZone = ComponentSectionsNewsSection | ComponentSectionsNewsletterSection | ComponentSectionsOpeningHoursSection | ComponentSectionsPageSection | ComponentSectionsPartnersSection | ComponentSectionsRichtextSection | Error;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
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
  code?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type I18NLocaleRelationResponseCollection = {
  __typename?: 'I18NLocaleRelationResponseCollection';
  data: Array<I18NLocaleEntity>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type LongFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  contains?: InputMaybe<Scalars['Long']['input']>;
  containsi?: InputMaybe<Scalars['Long']['input']>;
  endsWith?: InputMaybe<Scalars['Long']['input']>;
  eq?: InputMaybe<Scalars['Long']['input']>;
  eqi?: InputMaybe<Scalars['Long']['input']>;
  gt?: InputMaybe<Scalars['Long']['input']>;
  gte?: InputMaybe<Scalars['Long']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  lt?: InputMaybe<Scalars['Long']['input']>;
  lte?: InputMaybe<Scalars['Long']['input']>;
  ne?: InputMaybe<Scalars['Long']['input']>;
  nei?: InputMaybe<Scalars['Long']['input']>;
  not?: InputMaybe<LongFilterInput>;
  notContains?: InputMaybe<Scalars['Long']['input']>;
  notContainsi?: InputMaybe<Scalars['Long']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  startsWith?: InputMaybe<Scalars['Long']['input']>;
};

export type MainPage = {
  __typename?: 'MainPage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<MainPageRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  sections?: Maybe<Array<Maybe<MainPageSectionsDynamicZone>>>;
  seo?: Maybe<ComponentBlocksSeo>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type MainPageLocalizationsArgs = {
  filters?: InputMaybe<MainPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MainPageEntity = {
  __typename?: 'MainPageEntity';
  attributes?: Maybe<MainPage>;
  id?: Maybe<Scalars['ID']['output']>;
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
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sections?: InputMaybe<Array<Scalars['MainPageSectionsDynamicZoneInput']['input']>>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MainPageRelationResponseCollection = {
  __typename?: 'MainPageRelationResponseCollection';
  data: Array<MainPageEntity>;
};

export type MainPageSectionsDynamicZone = ComponentSectionsDisclosureSection | ComponentSectionsDownloadSection | ComponentSectionsExhibitionArchiveSection | ComponentSectionsExhibitionsSection | ComponentSectionsExploreSection | ComponentSectionsGlobalSearchSection | ComponentSectionsHighlightsSection | ComponentSectionsMapSection | ComponentSectionsNewsSection | ComponentSectionsNewsletterSection | ComponentSectionsOpeningHoursSection | ComponentSectionsPageSection | ComponentSectionsPartnersSection | ComponentSectionsRichtextSection | ComponentSectionsTicketsSection | Error;

export type Menu = {
  __typename?: 'Menu';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<MenuRelationResponseCollection>;
  menuLinks?: Maybe<Array<Maybe<ComponentBlocksMenuLinkItem>>>;
  searchLink?: Maybe<ComponentBlocksMenuLinkItem>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type MenuMenuLinksArgs = {
  filters?: InputMaybe<ComponentBlocksMenuLinkItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MenuEntity = {
  __typename?: 'MenuEntity';
  attributes?: Maybe<Menu>;
  id?: Maybe<Scalars['ID']['output']>;
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
  searchLink?: InputMaybe<ComponentBlocksMenuLinkItemFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MenuInput = {
  menuLinks?: InputMaybe<Array<InputMaybe<ComponentBlocksMenuLinkItemInput>>>;
  searchLink?: InputMaybe<ComponentBlocksMenuLinkItemInput>;
};

export type MenuRelationResponseCollection = {
  __typename?: 'MenuRelationResponseCollection';
  data: Array<MenuEntity>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createContactCard?: Maybe<ContactCardEntityResponse>;
  createContactCardLocalization?: Maybe<ContactCardEntityResponse>;
  createContentPage?: Maybe<ContentPageEntityResponse>;
  createContentPageLocalization?: Maybe<ContentPageEntityResponse>;
  createGeneralLocalization?: Maybe<GeneralEntityResponse>;
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
  deleteContactCard?: Maybe<ContactCardEntityResponse>;
  deleteContentPage?: Maybe<ContentPageEntityResponse>;
  deleteGeneral?: Maybe<GeneralEntityResponse>;
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
  updateContactCard?: Maybe<ContactCardEntityResponse>;
  updateContentPage?: Maybe<ContentPageEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateGeneral?: Maybe<GeneralEntityResponse>;
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
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateContactCardArgs = {
  data: ContactCardInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateContactCardLocalizationArgs = {
  data?: InputMaybe<ContactCardInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateContentPageArgs = {
  data: ContentPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateContentPageLocalizationArgs = {
  data?: InputMaybe<ContentPageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateGeneralLocalizationArgs = {
  data?: InputMaybe<GeneralInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateHomePageLocalizationArgs = {
  data?: InputMaybe<HomePageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateMainPageArgs = {
  data: MainPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateMainPageLocalizationArgs = {
  data?: InputMaybe<MainPageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateMenuLocalizationArgs = {
  data?: InputMaybe<MenuInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreatePartnerArgs = {
  data: PartnerInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreatePartnerLocalizationArgs = {
  data?: InputMaybe<PartnerInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreatePlaceArgs = {
  data: PlaceInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreatePlaceLocalizationArgs = {
  data?: InputMaybe<PlaceInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateTagArgs = {
  data: TagInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateTagCategoryArgs = {
  data: TagCategoryInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateTagCategoryLocalizationArgs = {
  data?: InputMaybe<TagCategoryInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateTagLocalizationArgs = {
  data?: InputMaybe<TagInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateTicketArgs = {
  data: TicketInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateTicketLocalizationArgs = {
  data?: InputMaybe<TicketInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
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


export type MutationDeleteContactCardArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteContentPageArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteGeneralArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteHomePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteMainPageArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteMenuArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeletePartnerArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeletePlaceArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteTagArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteTagCategoryArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteTicketArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateContactCardArgs = {
  data: ContactCardInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateContentPageArgs = {
  data: ContentPageInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateGeneralArgs = {
  data: GeneralInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateHomePageArgs = {
  data: HomePageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateMainPageArgs = {
  data: MainPageInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateMenuArgs = {
  data: MenuInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdatePartnerArgs = {
  data: PartnerInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdatePlaceArgs = {
  data: PlaceInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateTagArgs = {
  data: TagInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateTagCategoryArgs = {
  data: TagCategoryInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateTicketArgs = {
  data: TicketInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Partner = {
  __typename?: 'Partner';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<PartnerRelationResponseCollection>;
  logo: UploadFileEntityResponse;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PartnerLocalizationsArgs = {
  filters?: InputMaybe<PartnerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PartnerEntity = {
  __typename?: 'PartnerEntity';
  attributes?: Maybe<Partner>;
  id?: Maybe<Scalars['ID']['output']>;
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
  link?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PartnerRelationResponseCollection = {
  __typename?: 'PartnerRelationResponseCollection';
  data: Array<PartnerEntity>;
};

export type Place = {
  __typename?: 'Place';
  address: Scalars['String']['output'];
  contentPages?: Maybe<ContentPageRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<PlaceRelationResponseCollection>;
  purchaseId?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PlaceContentPagesArgs = {
  filters?: InputMaybe<ContentPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PlaceLocalizationsArgs = {
  filters?: InputMaybe<PlaceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PlaceEntity = {
  __typename?: 'PlaceEntity';
  attributes?: Maybe<Place>;
  id?: Maybe<Scalars['ID']['output']>;
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
  address?: InputMaybe<Scalars['String']['input']>;
  contentPages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  purchaseId?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
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
  contactCard?: Maybe<ContactCardEntityResponse>;
  contactCards?: Maybe<ContactCardEntityResponseCollection>;
  contentPage?: Maybe<ContentPageEntityResponse>;
  contentPageBySlug?: Maybe<ContentPageEntityResponse>;
  contentPages?: Maybe<ContentPageEntityResponseCollection>;
  general?: Maybe<GeneralEntityResponse>;
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
};


export type QueryContactCardArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryContactCardsArgs = {
  filters?: InputMaybe<ContactCardFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContentPageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryContentPageBySlugArgs = {
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryContentPagesArgs = {
  filters?: InputMaybe<ContentPageFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGeneralArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryHomePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMainPageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryMainPagesArgs = {
  filters?: InputMaybe<MainPageFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMenuArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryPartnerArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryPartnersArgs = {
  filters?: InputMaybe<PartnerFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPlaceArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryPlaceBySlugArgs = {
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPlacesArgs = {
  filters?: InputMaybe<PlaceFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTagArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryTagBySlugArgs = {
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTagCategoriesArgs = {
  filters?: InputMaybe<TagCategoryFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTagCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryTagCategoryBySlugArgs = {
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTicketArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryTicketsArgs = {
  filters?: InputMaybe<TicketFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  contentPages?: Maybe<ContentPageRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<TagRelationResponseCollection>;
  slug: Scalars['String']['output'];
  tagCategory?: Maybe<TagCategoryEntityResponse>;
  title: Scalars['String']['output'];
  titleInternal?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type TagContentPagesArgs = {
  filters?: InputMaybe<ContentPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TagLocalizationsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TagCategory = {
  __typename?: 'TagCategory';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<TagCategoryRelationResponseCollection>;
  slug: Scalars['String']['output'];
  tags?: Maybe<TagRelationResponseCollection>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type TagCategoryLocalizationsArgs = {
  filters?: InputMaybe<TagCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TagCategoryTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TagCategoryEntity = {
  __typename?: 'TagCategoryEntity';
  attributes?: Maybe<TagCategory>;
  id?: Maybe<Scalars['ID']['output']>;
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
  slug?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TagCategoryRelationResponseCollection = {
  __typename?: 'TagCategoryRelationResponseCollection';
  data: Array<TagCategoryEntity>;
};

export type TagEntity = {
  __typename?: 'TagEntity';
  attributes?: Maybe<Tag>;
  id?: Maybe<Scalars['ID']['output']>;
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
  contentPages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tagCategory?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  titleInternal?: InputMaybe<Scalars['String']['input']>;
};

export type TagRelationResponseCollection = {
  __typename?: 'TagRelationResponseCollection';
  data: Array<TagEntity>;
};

export type Ticket = {
  __typename?: 'Ticket';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<TicketRelationResponseCollection>;
  price?: Maybe<Scalars['Int']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  purchaseIdGift?: Maybe<Scalars['String']['output']>;
  purchaseIdSelf?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type TicketLocalizationsArgs = {
  filters?: InputMaybe<TicketFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TicketEntity = {
  __typename?: 'TicketEntity';
  attributes?: Maybe<Ticket>;
  id?: Maybe<Scalars['ID']['output']>;
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
  description?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  purchaseIdGift?: InputMaybe<Scalars['String']['input']>;
  purchaseIdSelf?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TicketRelationResponseCollection = {
  __typename?: 'TicketRelationResponseCollection';
  data: Array<TicketEntity>;
};

export type TimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  contains?: InputMaybe<Scalars['Time']['input']>;
  containsi?: InputMaybe<Scalars['Time']['input']>;
  endsWith?: InputMaybe<Scalars['Time']['input']>;
  eq?: InputMaybe<Scalars['Time']['input']>;
  eqi?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  ne?: InputMaybe<Scalars['Time']['input']>;
  nei?: InputMaybe<Scalars['Time']['input']>;
  not?: InputMaybe<TimeFilterInput>;
  notContains?: InputMaybe<Scalars['Time']['input']>;
  notContainsi?: InputMaybe<Scalars['Time']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  startsWith?: InputMaybe<Scalars['Time']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
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
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
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
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
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
  action?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
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
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsRoleRelationResponseCollection = {
  __typename?: 'UsersPermissionsRoleRelationResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
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
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

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

export type MenuEntityFragment = { __typename?: 'MenuEntity', attributes?: { __typename?: 'Menu', menuLinks?: Array<{ __typename?: 'ComponentBlocksMenuLinkItem', id: string, title: string, url?: string | null, hasButtonStyle?: boolean | null, mainPage?: { __typename?: 'MainPageEntityResponse', data?: { __typename?: 'MainPageEntity', id?: string | null, attributes?: { __typename?: 'MainPage', title: string, slug: string } | null } | null } | null, contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', title: string, slug: string } | null } | null } | null } | null> | null, searchLink?: { __typename?: 'ComponentBlocksMenuLinkItem', id: string, title: string, url?: string | null, hasButtonStyle?: boolean | null, mainPage?: { __typename?: 'MainPageEntityResponse', data?: { __typename?: 'MainPageEntity', id?: string | null, attributes?: { __typename?: 'MainPage', title: string, slug: string } | null } | null } | null, contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', title: string, slug: string } | null } | null } | null } | null } | null };

export type MainPageSlugEntityFragment = { __typename?: 'MainPageEntity', id?: string | null, attributes?: { __typename?: 'MainPage', title: string, slug: string } | null };

export type MainPageEntityFragment = { __typename: 'MainPageEntity', id?: string | null, attributes?: { __typename?: 'MainPage', title: string, slug: string, sections?: Array<{ __typename: 'ComponentSectionsDisclosureSection', id: string, title?: string | null, submenuTitle?: string | null } | { __typename: 'ComponentSectionsDownloadSection', id: string, title?: string | null, submenuTitle?: string | null, files?: Array<{ __typename?: 'ComponentBlocksFileItem', id: string, title?: string | null, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, caption?: string | null, alternativeText?: string | null, ext?: string | null, size: number, url: string } | null } | null } } | null> | null } | { __typename: 'ComponentSectionsExhibitionArchiveSection', id: string, title?: string | null } | { __typename: 'ComponentSectionsExhibitionsSection', id: string, title?: string | null, archiveBannerSection?: { __typename?: 'ComponentSectionsArchiveBannerSection', id: string, title?: string | null, submenuTitle?: string | null, banner: { __typename?: 'ComponentBlocksExhibitionArchive', title: string, subtitle?: string | null, perex?: string | null, color?: string | null, url?: string | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null } } | null } | { __typename: 'ComponentSectionsExploreSection', id: string, title?: string | null } | { __typename: 'ComponentSectionsGlobalSearchSection', id: string, title?: string | null } | { __typename: 'ComponentSectionsHighlightsSection', id: string, highlights?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', titleToShow?: string | null, sellTickets?: boolean | null, purchaseId?: string | null, perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string, purchaseId?: string | null } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsMapSection', id: string, title?: string | null, submenuTitle?: string | null } | { __typename: 'ComponentSectionsNewsSection', id: string, title?: string | null, submenuTitle?: string | null } | { __typename: 'ComponentSectionsNewsletterSection', id: string, title?: string | null, subtitle?: string | null, submenuTitle?: string | null, text?: string | null } | { __typename: 'ComponentSectionsOpeningHoursSection', id: string, submenuTitle?: string | null } | { __typename: 'ComponentSectionsPageSection', id: string, title?: string | null, submenuTitle?: string | null, layout?: Enum_Componentsectionspagesection_Layout | null, contentPages?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsPartnersSection', id: string, title?: string | null, submenuTitle?: string | null, partners?: Array<{ __typename?: 'ComponentBlocksPartnerItem', partner?: { __typename?: 'PartnerEntityResponse', data?: { __typename?: 'PartnerEntity', id?: string | null, attributes?: { __typename?: 'Partner', title: string, link?: string | null, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsRichtextSection', id: string, submenuTitle?: string | null, content?: string | null } | { __typename: 'ComponentSectionsTicketsSection', id: string, title?: string | null, submenuTitle?: string | null, text?: string | null } | { __typename?: 'Error', code: string, message?: string | null } | null> | null, seo?: { __typename?: 'ComponentBlocksSeo', metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null } | null, localizations?: { __typename?: 'MainPageRelationResponseCollection', data: Array<{ __typename?: 'MainPageEntity', attributes?: { __typename?: 'MainPage', slug: string, locale?: string | null } | null }> } | null } | null };

export type ContentPageSlugEntityFragment = { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', title: string, slug: string } | null };

export type ContentPageEntityFragment = { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', title: string, titleToShow?: string | null, subtitle?: string | null, useDatetimeAsSubtitle?: boolean | null, slug: string, addedAt?: any | null, perex?: string | null, color?: string | null, inheritColorFromParent?: boolean | null, sellTickets?: boolean | null, purchaseId?: string | null, showShareButtons?: boolean | null, relatedContentTitle?: string | null, relatedContentSubmenuTitle?: string | null, publishedAt?: any | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, mainContent?: Array<{ __typename: 'ComponentSectionsAudioSection', id: string, title?: string | null, submenuTitle?: string | null, url?: string | null } | { __typename: 'ComponentSectionsContactCardsSection', id: string, title?: string | null, submenuTitle?: string | null, contacts?: Array<{ __typename?: 'ComponentBlocksContactCardItem', contactCard?: { __typename?: 'ContactCardEntityResponse', data?: { __typename?: 'ContactCardEntity', id?: string | null, attributes?: { __typename?: 'ContactCard', name: string, position?: string | null, email?: string | null, phone1?: string | null, phone2?: string | null } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsGallerySection', id: string, title?: string | null, submenuTitle?: string | null, medias?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', formats?: any | null, caption?: string | null, url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null }> } | null } | { __typename: 'ComponentSectionsRichtextSection', id: string, submenuTitle?: string | null, content?: string | null } | { __typename: 'ComponentSectionsVideoSection', id: string, title?: string | null, submenuTitle?: string | null, url?: string | null } | { __typename?: 'Error', code: string, message?: string | null } | null> | null, slider?: { __typename?: 'ComponentSectionsSliderSection', id: string, submenuTitle?: string | null, medias?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null }> } | null } | null, downloadSection?: { __typename?: 'ComponentSectionsDownloadSection', id: string, title?: string | null, submenuTitle?: string | null, files?: Array<{ __typename?: 'ComponentBlocksFileItem', id: string, title?: string | null, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, caption?: string | null, alternativeText?: string | null, ext?: string | null, size: number, url: string } | null } | null } } | null> | null } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null, childPages?: { __typename?: 'ContentPageRelationResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, seo?: { __typename?: 'ComponentBlocksSeo', metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null } | null, localizations?: { __typename?: 'ContentPageRelationResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', slug: string, locale?: string | null } | null }> } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string, purchaseId?: string | null } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null, partners?: Array<{ __typename?: 'ComponentBlocksPartnerItem', partner?: { __typename?: 'PartnerEntityResponse', data?: { __typename?: 'PartnerEntity', id?: string | null, attributes?: { __typename?: 'Partner', title: string, link?: string | null, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null } | null } | null } | null> | null } | null };

export type GlobalSearchPageEntityFragment = { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', title: string, slug: string, subtitle?: string | null, perex?: string | null, publishedAt?: any | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null } | null };

export type ExhibitionArchiveFragment = { __typename?: 'ComponentBlocksExhibitionArchive', title: string, subtitle?: string | null, perex?: string | null, color?: string | null, url?: string | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null };

export type NewsItemEntityFragment = { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null };

export type SectionItemEntityFragment = { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null };

export type HighlightsItemEntityFragment = { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', titleToShow?: string | null, sellTickets?: boolean | null, purchaseId?: string | null, perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string, purchaseId?: string | null } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null } | null };

export type HighlightFragment = { __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', titleToShow?: string | null, sellTickets?: boolean | null, purchaseId?: string | null, perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string, purchaseId?: string | null } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null } | null } | null } | null };

export type PartnerFragment = { __typename?: 'ComponentBlocksPartnerItem', partner?: { __typename?: 'PartnerEntityResponse', data?: { __typename?: 'PartnerEntity', id?: string | null, attributes?: { __typename?: 'Partner', title: string, link?: string | null, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null } | null } | null };

export type MenuLinkItemFragment = { __typename?: 'ComponentBlocksMenuLinkItem', id: string, title: string, url?: string | null, hasButtonStyle?: boolean | null, mainPage?: { __typename?: 'MainPageEntityResponse', data?: { __typename?: 'MainPageEntity', id?: string | null, attributes?: { __typename?: 'MainPage', title: string, slug: string } | null } | null } | null, contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', title: string, slug: string } | null } | null } | null };

export type DownloadItemFragment = { __typename?: 'ComponentBlocksFileItem', id: string, title?: string | null, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, caption?: string | null, alternativeText?: string | null, ext?: string | null, size: number, url: string } | null } | null } };

export type PalaceDetailsFragment = { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null };

export type GeneralEntityFragment = { __typename?: 'GeneralEntity', attributes?: { __typename?: 'General', name?: string | null, email?: string | null, openingHours?: string | null, mirbach?: { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null } | null, palffy?: { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null } | null, socialLinks?: { __typename?: 'ComponentBlocksLinks', title?: string | null, links?: Array<{ __typename?: 'ComponentBlocksLinkItem', title: string, url?: string | null, newWindow?: boolean | null } | null> | null } | null, footerLinks1?: { __typename?: 'ComponentBlocksLinks', title?: string | null, links?: Array<{ __typename?: 'ComponentBlocksLinkItem', title: string, url?: string | null, newWindow?: boolean | null } | null> | null } | null, footerLinks2?: { __typename?: 'ComponentBlocksLinks', title?: string | null, links?: Array<{ __typename?: 'ComponentBlocksLinkItem', title: string, url?: string | null, newWindow?: boolean | null } | null> | null } | null } | null };

export type ContactCardEntityFragment = { __typename?: 'ContactCardEntity', id?: string | null, attributes?: { __typename?: 'ContactCard', name: string, position?: string | null, email?: string | null, phone1?: string | null, phone2?: string | null } | null };

export type OpeningHoursSectionFragment = { __typename?: 'ComponentSectionsOpeningHoursSection', id: string, submenuTitle?: string | null };

export type HighlightsSectionFragment = { __typename?: 'ComponentSectionsHighlightsSection', id: string, highlights?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', titleToShow?: string | null, sellTickets?: boolean | null, purchaseId?: string | null, perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string, purchaseId?: string | null } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null } | null } | null } | null } | null> | null };

export type ExhibitionArchiveSectionFragment = { __typename?: 'ComponentSectionsExhibitionArchiveSection', id: string, title?: string | null };

export type PartnersSectionFragment = { __typename?: 'ComponentSectionsPartnersSection', id: string, title?: string | null, submenuTitle?: string | null, partners?: Array<{ __typename?: 'ComponentBlocksPartnerItem', partner?: { __typename?: 'PartnerEntityResponse', data?: { __typename?: 'PartnerEntity', id?: string | null, attributes?: { __typename?: 'Partner', title: string, link?: string | null, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null } | null } | null } | null> | null };

export type ExploreSectionFragment = { __typename?: 'ComponentSectionsExploreSection', id: string, title?: string | null };

export type DisclosureSectionFragment = { __typename?: 'ComponentSectionsDisclosureSection', id: string, title?: string | null, submenuTitle?: string | null };

export type PageSectionFragment = { __typename?: 'ComponentSectionsPageSection', id: string, title?: string | null, submenuTitle?: string | null, layout?: Enum_Componentsectionspagesection_Layout | null, contentPages?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null } | null } | null } | null> | null };

export type NewsSectionFragment = { __typename?: 'ComponentSectionsNewsSection', id: string, title?: string | null, submenuTitle?: string | null };

export type NewsletterSectionFragment = { __typename?: 'ComponentSectionsNewsletterSection', id: string, title?: string | null, subtitle?: string | null, submenuTitle?: string | null, text?: string | null };

export type RichtextSectionFragment = { __typename?: 'ComponentSectionsRichtextSection', id: string, submenuTitle?: string | null, content?: string | null };

export type VideoSectionFragment = { __typename?: 'ComponentSectionsVideoSection', id: string, title?: string | null, submenuTitle?: string | null, url?: string | null };

export type AudioSectionFragment = { __typename?: 'ComponentSectionsAudioSection', id: string, title?: string | null, submenuTitle?: string | null, url?: string | null };

export type GallerySectionFragment = { __typename?: 'ComponentSectionsGallerySection', id: string, title?: string | null, submenuTitle?: string | null, medias?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', formats?: any | null, caption?: string | null, url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null }> } | null };

export type ContactCardsSectionFragment = { __typename?: 'ComponentSectionsContactCardsSection', id: string, title?: string | null, submenuTitle?: string | null, contacts?: Array<{ __typename?: 'ComponentBlocksContactCardItem', contactCard?: { __typename?: 'ContactCardEntityResponse', data?: { __typename?: 'ContactCardEntity', id?: string | null, attributes?: { __typename?: 'ContactCard', name: string, position?: string | null, email?: string | null, phone1?: string | null, phone2?: string | null } | null } | null } | null } | null> | null };

export type TicketsSectionFragment = { __typename?: 'ComponentSectionsTicketsSection', id: string, title?: string | null, submenuTitle?: string | null, text?: string | null };

export type MapSectionFragment = { __typename?: 'ComponentSectionsMapSection', id: string, title?: string | null, submenuTitle?: string | null };

export type DownloadSectionFragment = { __typename?: 'ComponentSectionsDownloadSection', id: string, title?: string | null, submenuTitle?: string | null, files?: Array<{ __typename?: 'ComponentBlocksFileItem', id: string, title?: string | null, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, caption?: string | null, alternativeText?: string | null, ext?: string | null, size: number, url: string } | null } | null } } | null> | null };

export type ArchiveBannerSectionFragment = { __typename?: 'ComponentSectionsArchiveBannerSection', id: string, title?: string | null, submenuTitle?: string | null, banner: { __typename?: 'ComponentBlocksExhibitionArchive', title: string, subtitle?: string | null, perex?: string | null, color?: string | null, url?: string | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null } };

export type ExhibitionsSectionFragment = { __typename?: 'ComponentSectionsExhibitionsSection', id: string, title?: string | null, archiveBannerSection?: { __typename?: 'ComponentSectionsArchiveBannerSection', id: string, title?: string | null, submenuTitle?: string | null, banner: { __typename?: 'ComponentBlocksExhibitionArchive', title: string, subtitle?: string | null, perex?: string | null, color?: string | null, url?: string | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null } } | null };

export type GlobalSearchSectionFragment = { __typename?: 'ComponentSectionsGlobalSearchSection', id: string, title?: string | null };

type Sections_ComponentSectionsAudioSection_Fragment = { __typename?: 'ComponentSectionsAudioSection' };

type Sections_ComponentSectionsContactCardsSection_Fragment = { __typename?: 'ComponentSectionsContactCardsSection' };

type Sections_ComponentSectionsGallerySection_Fragment = { __typename?: 'ComponentSectionsGallerySection' };

type Sections_ComponentSectionsRichtextSection_Fragment = { __typename: 'ComponentSectionsRichtextSection', id: string, submenuTitle?: string | null, content?: string | null };

type Sections_ComponentSectionsVideoSection_Fragment = { __typename?: 'ComponentSectionsVideoSection' };

type Sections_Error_Fragment = { __typename?: 'Error', code: string, message?: string | null };

export type SectionsFragment = Sections_ComponentSectionsAudioSection_Fragment | Sections_ComponentSectionsContactCardsSection_Fragment | Sections_ComponentSectionsGallerySection_Fragment | Sections_ComponentSectionsRichtextSection_Fragment | Sections_ComponentSectionsVideoSection_Fragment | Sections_Error_Fragment;

type MainPageSections_ComponentSectionsDisclosureSection_Fragment = { __typename: 'ComponentSectionsDisclosureSection', id: string, title?: string | null, submenuTitle?: string | null };

type MainPageSections_ComponentSectionsDownloadSection_Fragment = { __typename: 'ComponentSectionsDownloadSection', id: string, title?: string | null, submenuTitle?: string | null, files?: Array<{ __typename?: 'ComponentBlocksFileItem', id: string, title?: string | null, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, caption?: string | null, alternativeText?: string | null, ext?: string | null, size: number, url: string } | null } | null } } | null> | null };

type MainPageSections_ComponentSectionsExhibitionArchiveSection_Fragment = { __typename: 'ComponentSectionsExhibitionArchiveSection', id: string, title?: string | null };

type MainPageSections_ComponentSectionsExhibitionsSection_Fragment = { __typename: 'ComponentSectionsExhibitionsSection', id: string, title?: string | null, archiveBannerSection?: { __typename?: 'ComponentSectionsArchiveBannerSection', id: string, title?: string | null, submenuTitle?: string | null, banner: { __typename?: 'ComponentBlocksExhibitionArchive', title: string, subtitle?: string | null, perex?: string | null, color?: string | null, url?: string | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null } } | null };

type MainPageSections_ComponentSectionsExploreSection_Fragment = { __typename: 'ComponentSectionsExploreSection', id: string, title?: string | null };

type MainPageSections_ComponentSectionsGlobalSearchSection_Fragment = { __typename: 'ComponentSectionsGlobalSearchSection', id: string, title?: string | null };

type MainPageSections_ComponentSectionsHighlightsSection_Fragment = { __typename: 'ComponentSectionsHighlightsSection', id: string, highlights?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', titleToShow?: string | null, sellTickets?: boolean | null, purchaseId?: string | null, perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string, purchaseId?: string | null } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null } | null } | null } | null } | null> | null };

type MainPageSections_ComponentSectionsMapSection_Fragment = { __typename: 'ComponentSectionsMapSection', id: string, title?: string | null, submenuTitle?: string | null };

type MainPageSections_ComponentSectionsNewsSection_Fragment = { __typename: 'ComponentSectionsNewsSection', id: string, title?: string | null, submenuTitle?: string | null };

type MainPageSections_ComponentSectionsNewsletterSection_Fragment = { __typename: 'ComponentSectionsNewsletterSection', id: string, title?: string | null, subtitle?: string | null, submenuTitle?: string | null, text?: string | null };

type MainPageSections_ComponentSectionsOpeningHoursSection_Fragment = { __typename: 'ComponentSectionsOpeningHoursSection', id: string, submenuTitle?: string | null };

type MainPageSections_ComponentSectionsPageSection_Fragment = { __typename: 'ComponentSectionsPageSection', id: string, title?: string | null, submenuTitle?: string | null, layout?: Enum_Componentsectionspagesection_Layout | null, contentPages?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null } | null } | null } | null> | null };

type MainPageSections_ComponentSectionsPartnersSection_Fragment = { __typename: 'ComponentSectionsPartnersSection', id: string, title?: string | null, submenuTitle?: string | null, partners?: Array<{ __typename?: 'ComponentBlocksPartnerItem', partner?: { __typename?: 'PartnerEntityResponse', data?: { __typename?: 'PartnerEntity', id?: string | null, attributes?: { __typename?: 'Partner', title: string, link?: string | null, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null } | null } | null } | null> | null };

type MainPageSections_ComponentSectionsRichtextSection_Fragment = { __typename: 'ComponentSectionsRichtextSection', id: string, submenuTitle?: string | null, content?: string | null };

type MainPageSections_ComponentSectionsTicketsSection_Fragment = { __typename: 'ComponentSectionsTicketsSection', id: string, title?: string | null, submenuTitle?: string | null, text?: string | null };

type MainPageSections_Error_Fragment = { __typename?: 'Error', code: string, message?: string | null };

export type MainPageSectionsFragment = MainPageSections_ComponentSectionsDisclosureSection_Fragment | MainPageSections_ComponentSectionsDownloadSection_Fragment | MainPageSections_ComponentSectionsExhibitionArchiveSection_Fragment | MainPageSections_ComponentSectionsExhibitionsSection_Fragment | MainPageSections_ComponentSectionsExploreSection_Fragment | MainPageSections_ComponentSectionsGlobalSearchSection_Fragment | MainPageSections_ComponentSectionsHighlightsSection_Fragment | MainPageSections_ComponentSectionsMapSection_Fragment | MainPageSections_ComponentSectionsNewsSection_Fragment | MainPageSections_ComponentSectionsNewsletterSection_Fragment | MainPageSections_ComponentSectionsOpeningHoursSection_Fragment | MainPageSections_ComponentSectionsPageSection_Fragment | MainPageSections_ComponentSectionsPartnersSection_Fragment | MainPageSections_ComponentSectionsRichtextSection_Fragment | MainPageSections_ComponentSectionsTicketsSection_Fragment | MainPageSections_Error_Fragment;

type MainContent_ComponentSectionsAudioSection_Fragment = { __typename: 'ComponentSectionsAudioSection', id: string, title?: string | null, submenuTitle?: string | null, url?: string | null };

type MainContent_ComponentSectionsContactCardsSection_Fragment = { __typename: 'ComponentSectionsContactCardsSection', id: string, title?: string | null, submenuTitle?: string | null, contacts?: Array<{ __typename?: 'ComponentBlocksContactCardItem', contactCard?: { __typename?: 'ContactCardEntityResponse', data?: { __typename?: 'ContactCardEntity', id?: string | null, attributes?: { __typename?: 'ContactCard', name: string, position?: string | null, email?: string | null, phone1?: string | null, phone2?: string | null } | null } | null } | null } | null> | null };

type MainContent_ComponentSectionsGallerySection_Fragment = { __typename: 'ComponentSectionsGallerySection', id: string, title?: string | null, submenuTitle?: string | null, medias?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', formats?: any | null, caption?: string | null, url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null }> } | null };

type MainContent_ComponentSectionsRichtextSection_Fragment = { __typename: 'ComponentSectionsRichtextSection', id: string, submenuTitle?: string | null, content?: string | null };

type MainContent_ComponentSectionsVideoSection_Fragment = { __typename: 'ComponentSectionsVideoSection', id: string, title?: string | null, submenuTitle?: string | null, url?: string | null };

type MainContent_Error_Fragment = { __typename?: 'Error', code: string, message?: string | null };

export type MainContentFragment = MainContent_ComponentSectionsAudioSection_Fragment | MainContent_ComponentSectionsContactCardsSection_Fragment | MainContent_ComponentSectionsGallerySection_Fragment | MainContent_ComponentSectionsRichtextSection_Fragment | MainContent_ComponentSectionsVideoSection_Fragment | MainContent_Error_Fragment;

type HomePageSections_ComponentSectionsNewsSection_Fragment = { __typename: 'ComponentSectionsNewsSection', id: string, title?: string | null, submenuTitle?: string | null };

type HomePageSections_ComponentSectionsNewsletterSection_Fragment = { __typename: 'ComponentSectionsNewsletterSection', id: string, title?: string | null, subtitle?: string | null, submenuTitle?: string | null, text?: string | null };

type HomePageSections_ComponentSectionsOpeningHoursSection_Fragment = { __typename: 'ComponentSectionsOpeningHoursSection', id: string, submenuTitle?: string | null };

type HomePageSections_ComponentSectionsPageSection_Fragment = { __typename: 'ComponentSectionsPageSection', id: string, title?: string | null, submenuTitle?: string | null, layout?: Enum_Componentsectionspagesection_Layout | null, contentPages?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null } | null } | null } | null> | null };

type HomePageSections_ComponentSectionsPartnersSection_Fragment = { __typename: 'ComponentSectionsPartnersSection', id: string, title?: string | null, submenuTitle?: string | null, partners?: Array<{ __typename?: 'ComponentBlocksPartnerItem', partner?: { __typename?: 'PartnerEntityResponse', data?: { __typename?: 'PartnerEntity', id?: string | null, attributes?: { __typename?: 'Partner', title: string, link?: string | null, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null } | null } | null } | null> | null };

type HomePageSections_ComponentSectionsRichtextSection_Fragment = { __typename: 'ComponentSectionsRichtextSection', id: string, submenuTitle?: string | null, content?: string | null };

type HomePageSections_Error_Fragment = { __typename?: 'Error', code: string, message?: string | null };

export type HomePageSectionsFragment = HomePageSections_ComponentSectionsNewsSection_Fragment | HomePageSections_ComponentSectionsNewsletterSection_Fragment | HomePageSections_ComponentSectionsOpeningHoursSection_Fragment | HomePageSections_ComponentSectionsPageSection_Fragment | HomePageSections_ComponentSectionsPartnersSection_Fragment | HomePageSections_ComponentSectionsRichtextSection_Fragment | HomePageSections_Error_Fragment;

export type GeneralQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type GeneralQuery = { __typename?: 'Query', general?: { __typename?: 'GeneralEntityResponse', data?: { __typename?: 'GeneralEntity', attributes?: { __typename?: 'General', name?: string | null, email?: string | null, openingHours?: string | null, mirbach?: { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null } | null, palffy?: { __typename?: 'ComponentBlocksPalace', title?: string | null, address?: string | null, zip?: string | null, city?: string | null, phone?: string | null } | null, socialLinks?: { __typename?: 'ComponentBlocksLinks', title?: string | null, links?: Array<{ __typename?: 'ComponentBlocksLinkItem', title: string, url?: string | null, newWindow?: boolean | null } | null> | null } | null, footerLinks1?: { __typename?: 'ComponentBlocksLinks', title?: string | null, links?: Array<{ __typename?: 'ComponentBlocksLinkItem', title: string, url?: string | null, newWindow?: boolean | null } | null> | null } | null, footerLinks2?: { __typename?: 'ComponentBlocksLinks', title?: string | null, links?: Array<{ __typename?: 'ComponentBlocksLinkItem', title: string, url?: string | null, newWindow?: boolean | null } | null> | null } | null } | null } | null } | null, menu?: { __typename?: 'MenuEntityResponse', data?: { __typename?: 'MenuEntity', attributes?: { __typename?: 'Menu', menuLinks?: Array<{ __typename?: 'ComponentBlocksMenuLinkItem', id: string, title: string, url?: string | null, hasButtonStyle?: boolean | null, mainPage?: { __typename?: 'MainPageEntityResponse', data?: { __typename?: 'MainPageEntity', id?: string | null, attributes?: { __typename?: 'MainPage', title: string, slug: string } | null } | null } | null, contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', title: string, slug: string } | null } | null } | null } | null> | null, searchLink?: { __typename?: 'ComponentBlocksMenuLinkItem', id: string, title: string, url?: string | null, hasButtonStyle?: boolean | null, mainPage?: { __typename?: 'MainPageEntityResponse', data?: { __typename?: 'MainPageEntity', id?: string | null, attributes?: { __typename?: 'MainPage', title: string, slug: string } | null } | null } | null, contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', title: string, slug: string } | null } | null } | null } | null } | null } | null } | null };

export type PlacesQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type PlacesQuery = { __typename?: 'Query', places?: { __typename?: 'PlaceEntityResponseCollection', data: Array<{ __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, slug: string, address: string } | null }> } | null };

export type TagsByCategorySlugQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  tag: Scalars['String']['input'];
}>;


export type TagsByCategorySlugQuery = { __typename?: 'Query', tagCategoryBySlug?: { __typename?: 'TagCategoryEntityResponse', data?: { __typename?: 'TagCategoryEntity', attributes?: { __typename?: 'TagCategory', tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null } | null } | null } | null };

export type NewsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  tag: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type NewsQuery = { __typename?: 'Query', news?: { __typename?: 'ContentPageEntityResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null };

export type PreviewsByTagsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  tagSlugs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  placesSlugs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  dateForFilteringPastEvents?: InputMaybe<Scalars['Date']['input']>;
  dateForFilteringFutureEvents?: InputMaybe<Scalars['Date']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type PreviewsByTagsQuery = { __typename?: 'Query', contentPages?: { __typename?: 'ContentPageEntityResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null };

export type PreviewContentPageBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type PreviewContentPageBySlugQuery = { __typename?: 'Query', contentPageBySlug?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', slug: string, locale?: string | null } | null } | null } | null };

export type ContentPageBySlugQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  slug: Scalars['String']['input'];
  isPublished: Scalars['Boolean']['input'];
}>;


export type ContentPageBySlugQuery = { __typename?: 'Query', contentPageBySlug?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', title: string, titleToShow?: string | null, subtitle?: string | null, useDatetimeAsSubtitle?: boolean | null, slug: string, addedAt?: any | null, perex?: string | null, color?: string | null, inheritColorFromParent?: boolean | null, sellTickets?: boolean | null, purchaseId?: string | null, showShareButtons?: boolean | null, relatedContentTitle?: string | null, relatedContentSubmenuTitle?: string | null, publishedAt?: any | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, mainContent?: Array<{ __typename: 'ComponentSectionsAudioSection', id: string, title?: string | null, submenuTitle?: string | null, url?: string | null } | { __typename: 'ComponentSectionsContactCardsSection', id: string, title?: string | null, submenuTitle?: string | null, contacts?: Array<{ __typename?: 'ComponentBlocksContactCardItem', contactCard?: { __typename?: 'ContactCardEntityResponse', data?: { __typename?: 'ContactCardEntity', id?: string | null, attributes?: { __typename?: 'ContactCard', name: string, position?: string | null, email?: string | null, phone1?: string | null, phone2?: string | null } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsGallerySection', id: string, title?: string | null, submenuTitle?: string | null, medias?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', formats?: any | null, caption?: string | null, url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null }> } | null } | { __typename: 'ComponentSectionsRichtextSection', id: string, submenuTitle?: string | null, content?: string | null } | { __typename: 'ComponentSectionsVideoSection', id: string, title?: string | null, submenuTitle?: string | null, url?: string | null } | { __typename?: 'Error', code: string, message?: string | null } | null> | null, slider?: { __typename?: 'ComponentSectionsSliderSection', id: string, submenuTitle?: string | null, medias?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null }> } | null } | null, downloadSection?: { __typename?: 'ComponentSectionsDownloadSection', id: string, title?: string | null, submenuTitle?: string | null, files?: Array<{ __typename?: 'ComponentBlocksFileItem', id: string, title?: string | null, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, caption?: string | null, alternativeText?: string | null, ext?: string | null, size: number, url: string } | null } | null } } | null> | null } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null, childPages?: { __typename?: 'ContentPageRelationResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, seo?: { __typename?: 'ComponentBlocksSeo', metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null } | null, localizations?: { __typename?: 'ContentPageRelationResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', slug: string, locale?: string | null } | null }> } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string, purchaseId?: string | null } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null, partners?: Array<{ __typename?: 'ComponentBlocksPartnerItem', partner?: { __typename?: 'PartnerEntityResponse', data?: { __typename?: 'PartnerEntity', id?: string | null, attributes?: { __typename?: 'Partner', title: string, link?: string | null, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null } | null } | null } | null> | null } | null } | null } | null };

export type AllContentPageSlugsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type AllContentPageSlugsQuery = { __typename?: 'Query', contentPages?: { __typename?: 'ContentPageEntityResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', slug: string, locale?: string | null } | null }> } | null };

export type MainPageBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type MainPageBySlugQuery = { __typename?: 'Query', mainPages?: { __typename?: 'MainPageEntityResponseCollection', data: Array<{ __typename: 'MainPageEntity', id?: string | null, attributes?: { __typename?: 'MainPage', title: string, slug: string, sections?: Array<{ __typename: 'ComponentSectionsDisclosureSection', id: string, title?: string | null, submenuTitle?: string | null } | { __typename: 'ComponentSectionsDownloadSection', id: string, title?: string | null, submenuTitle?: string | null, files?: Array<{ __typename?: 'ComponentBlocksFileItem', id: string, title?: string | null, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, caption?: string | null, alternativeText?: string | null, ext?: string | null, size: number, url: string } | null } | null } } | null> | null } | { __typename: 'ComponentSectionsExhibitionArchiveSection', id: string, title?: string | null } | { __typename: 'ComponentSectionsExhibitionsSection', id: string, title?: string | null, archiveBannerSection?: { __typename?: 'ComponentSectionsArchiveBannerSection', id: string, title?: string | null, submenuTitle?: string | null, banner: { __typename?: 'ComponentBlocksExhibitionArchive', title: string, subtitle?: string | null, perex?: string | null, color?: string | null, url?: string | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null } } | null } | { __typename: 'ComponentSectionsExploreSection', id: string, title?: string | null } | { __typename: 'ComponentSectionsGlobalSearchSection', id: string, title?: string | null } | { __typename: 'ComponentSectionsHighlightsSection', id: string, highlights?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', titleToShow?: string | null, sellTickets?: boolean | null, purchaseId?: string | null, perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string, purchaseId?: string | null } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsMapSection', id: string, title?: string | null, submenuTitle?: string | null } | { __typename: 'ComponentSectionsNewsSection', id: string, title?: string | null, submenuTitle?: string | null } | { __typename: 'ComponentSectionsNewsletterSection', id: string, title?: string | null, subtitle?: string | null, submenuTitle?: string | null, text?: string | null } | { __typename: 'ComponentSectionsOpeningHoursSection', id: string, submenuTitle?: string | null } | { __typename: 'ComponentSectionsPageSection', id: string, title?: string | null, submenuTitle?: string | null, layout?: Enum_Componentsectionspagesection_Layout | null, contentPages?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsPartnersSection', id: string, title?: string | null, submenuTitle?: string | null, partners?: Array<{ __typename?: 'ComponentBlocksPartnerItem', partner?: { __typename?: 'PartnerEntityResponse', data?: { __typename?: 'PartnerEntity', id?: string | null, attributes?: { __typename?: 'Partner', title: string, link?: string | null, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsRichtextSection', id: string, submenuTitle?: string | null, content?: string | null } | { __typename: 'ComponentSectionsTicketsSection', id: string, title?: string | null, submenuTitle?: string | null, text?: string | null } | { __typename?: 'Error', code: string, message?: string | null } | null> | null, seo?: { __typename?: 'ComponentBlocksSeo', metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null } | null, localizations?: { __typename?: 'MainPageRelationResponseCollection', data: Array<{ __typename?: 'MainPageEntity', attributes?: { __typename?: 'MainPage', slug: string, locale?: string | null } | null }> } | null } | null }> } | null };

export type AllMainPageSlugsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type AllMainPageSlugsQuery = { __typename?: 'Query', mainPages?: { __typename?: 'MainPageEntityResponseCollection', data: Array<{ __typename?: 'MainPageEntity', attributes?: { __typename?: 'MainPage', slug: string, locale?: string | null } | null }> } | null };

export type TicketsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type TicketsQuery = { __typename?: 'Query', tickets?: { __typename?: 'TicketEntityResponseCollection', data: Array<{ __typename?: 'TicketEntity', id?: string | null, attributes?: { __typename?: 'Ticket', title: string, price?: number | null, description?: string | null, purchaseIdSelf?: string | null, purchaseIdGift?: string | null } | null }> } | null };

export type ExhibitionsByPlaceQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  slug: Scalars['String']['input'];
  today: Scalars['Date']['input'];
  tagExhibitions: Scalars['String']['input'];
  tagPermanentExhibitions: Scalars['String']['input'];
  place: Scalars['String']['input'];
}>;


export type ExhibitionsByPlaceQuery = { __typename?: 'Query', currentEvents?: { __typename?: 'ContentPageEntityResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null };

export type HomePageQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
}>;


export type HomePageQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', attributes?: { __typename: 'HomePage', highlights?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', titleToShow?: string | null, sellTickets?: boolean | null, purchaseId?: string | null, perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, placeTitle?: string | null, placeAddress?: string | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, override?: { __typename?: 'ComponentBlocksHighlightOverride', highlightContent?: string | null } | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null, place?: { __typename?: 'PlaceEntityResponse', data?: { __typename?: 'PlaceEntity', attributes?: { __typename?: 'Place', title: string, address: string, slug: string, purchaseId?: string | null } | null } | null } | null, positions?: Array<{ __typename?: 'ComponentBlocksPositionItem', title?: string | null, names?: string | null } | null> | null } | null } | null } | null } | null> | null, sections?: Array<{ __typename: 'ComponentSectionsNewsSection', id: string, title?: string | null, submenuTitle?: string | null } | { __typename: 'ComponentSectionsNewsletterSection', id: string, title?: string | null, subtitle?: string | null, submenuTitle?: string | null, text?: string | null } | { __typename: 'ComponentSectionsOpeningHoursSection', id: string, submenuTitle?: string | null } | { __typename: 'ComponentSectionsPageSection', id: string, title?: string | null, submenuTitle?: string | null, layout?: Enum_Componentsectionspagesection_Layout | null, contentPages?: Array<{ __typename?: 'ComponentBlocksContentPageItem', contentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsPartnersSection', id: string, title?: string | null, submenuTitle?: string | null, partners?: Array<{ __typename?: 'ComponentBlocksPartnerItem', partner?: { __typename?: 'PartnerEntityResponse', data?: { __typename?: 'PartnerEntity', id?: string | null, attributes?: { __typename?: 'Partner', title: string, link?: string | null, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null } | null } | null } | null> | null } | { __typename: 'ComponentSectionsRichtextSection', id: string, submenuTitle?: string | null, content?: string | null } | { __typename?: 'Error', code: string, message?: string | null } | null> | null, seo?: { __typename?: 'ComponentBlocksSeo', metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null } | null } | null } | null } | null };

export type ExhibitionsAndEventsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']['input'];
  today: Scalars['Date']['input'];
  tagExhibitions: Scalars['String']['input'];
  tagPermanentExhibitions: Scalars['String']['input'];
  tagsAdditionalProgram: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
}>;


export type ExhibitionsAndEventsQuery = { __typename?: 'Query', exhibitions?: { __typename?: 'ContentPageEntityResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null, permanentExhibitions?: { __typename?: 'ContentPageEntityResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null, additionalProgram?: { __typename?: 'ContentPageEntityResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', perex?: string | null, title: string, subtitle?: string | null, addedAt?: any | null, useDatetimeAsSubtitle?: boolean | null, slug: string, color?: string | null, inheritColorFromParent?: boolean | null, dateFrom?: any | null, dateTo?: any | null, timeFrom?: any | null, timeTo?: any | null, showRemainingTime?: boolean | null, coverMedia?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null, parentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', attributes?: { __typename?: 'ContentPage', color?: string | null } | null } | null } | null } | null }> } | null };

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
export const MainPageSlugEntityFragmentDoc = gql`
    fragment MainPageSlugEntity on MainPageEntity {
  id
  attributes {
    title
    slug
  }
}
    `;
export const ContentPageSlugEntityFragmentDoc = gql`
    fragment ContentPageSlugEntity on ContentPageEntity {
  id
  attributes {
    title
    slug
  }
}
    `;
export const MenuLinkItemFragmentDoc = gql`
    fragment MenuLinkItem on ComponentBlocksMenuLinkItem {
  id
  title
  url
  mainPage {
    data {
      ...MainPageSlugEntity
    }
  }
  contentPage {
    data {
      ...ContentPageSlugEntity
    }
  }
  hasButtonStyle
}
    ${MainPageSlugEntityFragmentDoc}
${ContentPageSlugEntityFragmentDoc}`;
export const MenuEntityFragmentDoc = gql`
    fragment MenuEntity on MenuEntity {
  attributes {
    menuLinks {
      ...MenuLinkItem
    }
    searchLink {
      ...MenuLinkItem
    }
  }
}
    ${MenuLinkItemFragmentDoc}`;
export const RichtextSectionFragmentDoc = gql`
    fragment RichtextSection on ComponentSectionsRichtextSection {
  id
  submenuTitle
  content
}
    `;
export const SectionsFragmentDoc = gql`
    fragment Sections on ContentPageMainContentDynamicZone {
  ... on Error {
    code
    message
  }
  ... on ComponentSectionsRichtextSection {
    __typename
    ...RichtextSection
  }
}
    ${RichtextSectionFragmentDoc}`;
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
  title
  subtitle
  submenuTitle
  text
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
  title
  submenuTitle
  partners {
    ...Partner
  }
}
    ${PartnerFragmentDoc}`;
export const ExhibitionArchiveSectionFragmentDoc = gql`
    fragment ExhibitionArchiveSection on ComponentSectionsExhibitionArchiveSection {
  id
  title
}
    `;
export const ExploreSectionFragmentDoc = gql`
    fragment ExploreSection on ComponentSectionsExploreSection {
  id
  title
}
    `;
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
  url
}
    ${ImageEntityFragmentDoc}`;
export const ArchiveBannerSectionFragmentDoc = gql`
    fragment ArchiveBannerSection on ComponentSectionsArchiveBannerSection {
  id
  title
  submenuTitle
  banner {
    ...ExhibitionArchive
  }
}
    ${ExhibitionArchiveFragmentDoc}`;
export const ExhibitionsSectionFragmentDoc = gql`
    fragment ExhibitionsSection on ComponentSectionsExhibitionsSection {
  id
  title
  archiveBannerSection {
    ...ArchiveBannerSection
  }
}
    ${ArchiveBannerSectionFragmentDoc}`;
export const DisclosureSectionFragmentDoc = gql`
    fragment DisclosureSection on ComponentSectionsDisclosureSection {
  id
  title
  submenuTitle
}
    `;
export const GlobalSearchSectionFragmentDoc = gql`
    fragment GlobalSearchSection on ComponentSectionsGlobalSearchSection {
  id
  title
}
    `;
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
export const MainPageSectionsFragmentDoc = gql`
    fragment MainPageSections on MainPageSectionsDynamicZone {
  ...Sections
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
  ... on ComponentSectionsHighlightsSection {
    __typename
    ...HighlightsSection
  }
  ... on ComponentSectionsPartnersSection {
    __typename
    ...PartnersSection
  }
  ... on ComponentSectionsExhibitionArchiveSection {
    __typename
    ...ExhibitionArchiveSection
  }
  ... on ComponentSectionsExploreSection {
    __typename
    ...ExploreSection
  }
  ... on ComponentSectionsExhibitionsSection {
    __typename
    ...ExhibitionsSection
  }
  ... on ComponentSectionsDisclosureSection {
    __typename
    ...DisclosureSection
  }
  ... on ComponentSectionsGlobalSearchSection {
    __typename
    ...GlobalSearchSection
  }
  ... on ComponentSectionsDownloadSection {
    __typename
    ...DownloadSection
  }
}
    ${SectionsFragmentDoc}
${PageSectionFragmentDoc}
${NewsSectionFragmentDoc}
${OpeningHoursSectionFragmentDoc}
${NewsletterSectionFragmentDoc}
${TicketsSectionFragmentDoc}
${MapSectionFragmentDoc}
${HighlightsSectionFragmentDoc}
${PartnersSectionFragmentDoc}
${ExhibitionArchiveSectionFragmentDoc}
${ExploreSectionFragmentDoc}
${ExhibitionsSectionFragmentDoc}
${DisclosureSectionFragmentDoc}
${GlobalSearchSectionFragmentDoc}
${DownloadSectionFragmentDoc}`;
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
  __typename
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
  ...Sections
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
    ${SectionsFragmentDoc}
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
    publishedAt
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
export const GlobalSearchPageEntityFragmentDoc = gql`
    fragment GlobalSearchPageEntity on ContentPageEntity {
  id
  attributes {
    title
    slug
    subtitle
    perex
    coverMedia {
      data {
        ...ImageEntity
      }
    }
    tags {
      data {
        ...TagEntity
      }
    }
    publishedAt
  }
}
    ${ImageEntityFragmentDoc}
${TagEntityFragmentDoc}`;
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
export const HomePageSectionsFragmentDoc = gql`
    fragment HomePageSections on HomePageSectionsDynamicZone {
  ...Sections
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
  ... on ComponentSectionsPartnersSection {
    __typename
    ...PartnersSection
  }
}
    ${SectionsFragmentDoc}
${PageSectionFragmentDoc}
${NewsSectionFragmentDoc}
${OpeningHoursSectionFragmentDoc}
${NewsletterSectionFragmentDoc}
${PartnersSectionFragmentDoc}`;
export const GeneralDocument = gql`
    query General($locale: I18NLocaleCode!) {
  general(locale: $locale) {
    data {
      ...GeneralEntity
    }
  }
  menu(locale: $locale) {
    data {
      ...MenuEntity
    }
  }
}
    ${GeneralEntityFragmentDoc}
${MenuEntityFragmentDoc}`;
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
        locale
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
          ...HomePageSections
        }
        seo {
          ...Seo
        }
      }
    }
  }
}
    ${HighlightFragmentDoc}
${HomePageSectionsFragmentDoc}
${SeoFragmentDoc}`;
export const ExhibitionsAndEventsDocument = gql`
    query ExhibitionsAndEvents($locale: I18NLocaleCode!, $today: Date!, $tagExhibitions: String!, $tagPermanentExhibitions: String!, $tagsAdditionalProgram: [String]!) {
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
    ${SectionItemEntityFragmentDoc}`;

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
    MainPageBySlug(variables: MainPageBySlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<MainPageBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MainPageBySlugQuery>(MainPageBySlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MainPageBySlug', 'query', variables);
    },
    AllMainPageSlugs(variables: AllMainPageSlugsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AllMainPageSlugsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllMainPageSlugsQuery>(AllMainPageSlugsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllMainPageSlugs', 'query', variables);
    },
    Tickets(variables: TicketsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<TicketsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TicketsQuery>(TicketsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Tickets', 'query', variables);
    },
    ExhibitionsByPlace(variables: ExhibitionsByPlaceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ExhibitionsByPlaceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ExhibitionsByPlaceQuery>(ExhibitionsByPlaceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ExhibitionsByPlace', 'query', variables);
    },
    HomePage(variables: HomePageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<HomePageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<HomePageQuery>(HomePageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'HomePage', 'query', variables);
    },
    ExhibitionsAndEvents(variables: ExhibitionsAndEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ExhibitionsAndEventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ExhibitionsAndEventsQuery>(ExhibitionsAndEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ExhibitionsAndEvents', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;