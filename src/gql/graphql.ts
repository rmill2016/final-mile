/* eslint-disable */
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
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  componentCardCollection?: Maybe<ComponentCardCollection>;
  componentSidebarCollection?: Maybe<ComponentSidebarCollection>;
  componentTripCollection?: Maybe<ComponentTripCollection>;
  entryCollection?: Maybe<EntryCollection>;
  footerCollection?: Maybe<FooterCollection>;
  headerCollection?: Maybe<HeaderCollection>;
  homepageCollection?: Maybe<HomepageCollection>;
  seoMetadataCollection?: Maybe<SeoMetadataCollection>;
  tripsCollection?: Maybe<TripsCollection>;
};


export type AssetLinkingCollectionsComponentCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsComponentSidebarCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsComponentTripCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsHomepageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsSeoMetadataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsTripsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** This is content type for anything that needs to be a button [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentButton) */
export type ComponentButton = Entry & {
  __typename?: 'ComponentButton';
  buttonText?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ComponentButtonLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** This is content type for anything that needs to be a button [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentButton) */
export type ComponentButtonButtonTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is content type for anything that needs to be a button [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentButton) */
export type ComponentButtonLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is content type for anything that needs to be a button [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentButton) */
export type ComponentButtonTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentButtonCollection = {
  __typename?: 'ComponentButtonCollection';
  items: Array<Maybe<ComponentButton>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentButtonFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentButtonFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentButtonFilter>>>;
  buttonText?: InputMaybe<Scalars['String']>;
  buttonText_contains?: InputMaybe<Scalars['String']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonText_not?: InputMaybe<Scalars['String']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentButtonLinkingCollections = {
  __typename?: 'ComponentButtonLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ComponentButtonLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentButtonOrder {
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** This is the content type for Cards. Cards include a Title, Image, and Description. Optionally a link for more information [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentCard) */
export type ComponentCard = Entry & {
  __typename?: 'ComponentCard';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  label?: Maybe<Scalars['String']>;
  link?: Maybe<ComponentCardLink>;
  linkedFrom?: Maybe<ComponentCardLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** This is the content type for Cards. Cards include a Title, Image, and Description. Optionally a link for more information [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentCard) */
export type ComponentCardDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for Cards. Cards include a Title, Image, and Description. Optionally a link for more information [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentCard) */
export type ComponentCardImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** This is the content type for Cards. Cards include a Title, Image, and Description. Optionally a link for more information [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentCard) */
export type ComponentCardLabelArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for Cards. Cards include a Title, Image, and Description. Optionally a link for more information [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentCard) */
export type ComponentCardLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for Cards. Cards include a Title, Image, and Description. Optionally a link for more information [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentCard) */
export type ComponentCardLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is the content type for Cards. Cards include a Title, Image, and Description. Optionally a link for more information [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentCard) */
export type ComponentCardTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentCardCollection = {
  __typename?: 'ComponentCardCollection';
  items: Array<Maybe<ComponentCard>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentCardFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentCardFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentCardFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  label?: InputMaybe<Scalars['String']>;
  label_contains?: InputMaybe<Scalars['String']>;
  label_exists?: InputMaybe<Scalars['Boolean']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label_not?: InputMaybe<Scalars['String']>;
  label_not_contains?: InputMaybe<Scalars['String']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_contains?: InputMaybe<Scalars['String']>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  link_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentCardLink = {
  __typename?: 'ComponentCardLink';
  json: Scalars['JSON'];
  links: ComponentCardLinkLinks;
};

export type ComponentCardLinkAssets = {
  __typename?: 'ComponentCardLinkAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentCardLinkEntries = {
  __typename?: 'ComponentCardLinkEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentCardLinkLinks = {
  __typename?: 'ComponentCardLinkLinks';
  assets: ComponentCardLinkAssets;
  entries: ComponentCardLinkEntries;
};

export type ComponentCardLinkingCollections = {
  __typename?: 'ComponentCardLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ComponentCardLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentCardOrder {
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** This is the content type for Dropdowns [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentDropdown) */
export type ComponentDropdown = Entry & {
  __typename?: 'ComponentDropdown';
  body?: Maybe<ComponentDropdownBody>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ComponentDropdownLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** This is the content type for Dropdowns [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentDropdown) */
export type ComponentDropdownBodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for Dropdowns [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentDropdown) */
export type ComponentDropdownLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is the content type for Dropdowns [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentDropdown) */
export type ComponentDropdownTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentDropdownBody = {
  __typename?: 'ComponentDropdownBody';
  json: Scalars['JSON'];
  links: ComponentDropdownBodyLinks;
};

export type ComponentDropdownBodyAssets = {
  __typename?: 'ComponentDropdownBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentDropdownBodyEntries = {
  __typename?: 'ComponentDropdownBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentDropdownBodyLinks = {
  __typename?: 'ComponentDropdownBodyLinks';
  assets: ComponentDropdownBodyAssets;
  entries: ComponentDropdownBodyEntries;
};

export type ComponentDropdownCollection = {
  __typename?: 'ComponentDropdownCollection';
  items: Array<Maybe<ComponentDropdown>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentDropdownFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentDropdownFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentDropdownFilter>>>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentDropdownLinkingCollections = {
  __typename?: 'ComponentDropdownLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ComponentDropdownLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentDropdownOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentSidebar) */
export type ComponentSidebar = Entry & {
  __typename?: 'ComponentSidebar';
  contentfulMetadata: ContentfulMetadata;
  guarantee?: Maybe<Asset>;
  linkedFrom?: Maybe<ComponentSidebarLinkingCollections>;
  links?: Maybe<Array<Maybe<Scalars['String']>>>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentSidebar) */
export type ComponentSidebarGuaranteeArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentSidebar) */
export type ComponentSidebarLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentSidebar) */
export type ComponentSidebarLinksArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentSidebar) */
export type ComponentSidebarTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentSidebarCollection = {
  __typename?: 'ComponentSidebarCollection';
  items: Array<Maybe<ComponentSidebar>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentSidebarFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentSidebarFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentSidebarFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  guarantee_exists?: InputMaybe<Scalars['Boolean']>;
  links_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  links_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  links_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  links_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSidebarLinkingCollections = {
  __typename?: 'ComponentSidebarLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homepageCollection?: Maybe<HomepageCollection>;
};


export type ComponentSidebarLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentSidebarLinkingCollectionsHomepageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentSidebarOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** This is the content type for anything that requires a Table. Tables include a Header, the table data, and a Description [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentTable) */
export type ComponentTable = Entry & {
  __typename?: 'ComponentTable';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentTableLinkingCollections>;
  sys: Sys;
  table?: Maybe<ComponentTableTable>;
  title?: Maybe<Scalars['String']>;
};


/** This is the content type for anything that requires a Table. Tables include a Header, the table data, and a Description [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentTable) */
export type ComponentTableDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for anything that requires a Table. Tables include a Header, the table data, and a Description [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentTable) */
export type ComponentTableLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is the content type for anything that requires a Table. Tables include a Header, the table data, and a Description [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentTable) */
export type ComponentTableTableArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for anything that requires a Table. Tables include a Header, the table data, and a Description [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentTable) */
export type ComponentTableTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentTableCollection = {
  __typename?: 'ComponentTableCollection';
  items: Array<Maybe<ComponentTable>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentTableFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentTableFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentTableFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  table_contains?: InputMaybe<Scalars['String']>;
  table_exists?: InputMaybe<Scalars['Boolean']>;
  table_not_contains?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentTableLinkingCollections = {
  __typename?: 'ComponentTableLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ComponentTableLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentTableOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ComponentTableTable = {
  __typename?: 'ComponentTableTable';
  json: Scalars['JSON'];
  links: ComponentTableTableLinks;
};

export type ComponentTableTableAssets = {
  __typename?: 'ComponentTableTableAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentTableTableEntries = {
  __typename?: 'ComponentTableTableEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentTableTableLinks = {
  __typename?: 'ComponentTableTableLinks';
  assets: ComponentTableTableAssets;
  entries: ComponentTableTableEntries;
};

/** This is the content type for the section of Trips with two tabs. The first tab being the Current "upcoming" Trip which is the focus. There images of what will be seen on the trip along with a link to that page will exist. The second tab is the Previous tab. Previous tab includes (Cards) tied to trips in the past. Clicking the button on the card will link to the specified page [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentTrip) */
export type ComponentTrip = Entry & {
  __typename?: 'ComponentTrip';
  contentfulMetadata: ContentfulMetadata;
  currentTripHeadline?: Maybe<Scalars['String']>;
  link?: Maybe<ComponentTripLink>;
  linkedFrom?: Maybe<ComponentTripLinkingCollections>;
  listofCardsCollection?: Maybe<AssetCollection>;
  listofImagesCollection?: Maybe<AssetCollection>;
  sys: Sys;
  tabName1?: Maybe<Scalars['String']>;
  tabName2?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


/** This is the content type for the section of Trips with two tabs. The first tab being the Current "upcoming" Trip which is the focus. There images of what will be seen on the trip along with a link to that page will exist. The second tab is the Previous tab. Previous tab includes (Cards) tied to trips in the past. Clicking the button on the card will link to the specified page [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentTrip) */
export type ComponentTripCurrentTripHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for the section of Trips with two tabs. The first tab being the Current "upcoming" Trip which is the focus. There images of what will be seen on the trip along with a link to that page will exist. The second tab is the Previous tab. Previous tab includes (Cards) tied to trips in the past. Clicking the button on the card will link to the specified page [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentTrip) */
export type ComponentTripLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for the section of Trips with two tabs. The first tab being the Current "upcoming" Trip which is the focus. There images of what will be seen on the trip along with a link to that page will exist. The second tab is the Previous tab. Previous tab includes (Cards) tied to trips in the past. Clicking the button on the card will link to the specified page [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentTrip) */
export type ComponentTripLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is the content type for the section of Trips with two tabs. The first tab being the Current "upcoming" Trip which is the focus. There images of what will be seen on the trip along with a link to that page will exist. The second tab is the Previous tab. Previous tab includes (Cards) tied to trips in the past. Clicking the button on the card will link to the specified page [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentTrip) */
export type ComponentTripListofCardsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** This is the content type for the section of Trips with two tabs. The first tab being the Current "upcoming" Trip which is the focus. There images of what will be seen on the trip along with a link to that page will exist. The second tab is the Previous tab. Previous tab includes (Cards) tied to trips in the past. Clicking the button on the card will link to the specified page [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentTrip) */
export type ComponentTripListofImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** This is the content type for the section of Trips with two tabs. The first tab being the Current "upcoming" Trip which is the focus. There images of what will be seen on the trip along with a link to that page will exist. The second tab is the Previous tab. Previous tab includes (Cards) tied to trips in the past. Clicking the button on the card will link to the specified page [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentTrip) */
export type ComponentTripTabName1Args = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for the section of Trips with two tabs. The first tab being the Current "upcoming" Trip which is the focus. There images of what will be seen on the trip along with a link to that page will exist. The second tab is the Previous tab. Previous tab includes (Cards) tied to trips in the past. Clicking the button on the card will link to the specified page [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentTrip) */
export type ComponentTripTabName2Args = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for the section of Trips with two tabs. The first tab being the Current "upcoming" Trip which is the focus. There images of what will be seen on the trip along with a link to that page will exist. The second tab is the Previous tab. Previous tab includes (Cards) tied to trips in the past. Clicking the button on the card will link to the specified page [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentTrip) */
export type ComponentTripTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentTripCollection = {
  __typename?: 'ComponentTripCollection';
  items: Array<Maybe<ComponentTrip>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentTripFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentTripFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentTripFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  currentTripHeadline?: InputMaybe<Scalars['String']>;
  currentTripHeadline_contains?: InputMaybe<Scalars['String']>;
  currentTripHeadline_exists?: InputMaybe<Scalars['Boolean']>;
  currentTripHeadline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  currentTripHeadline_not?: InputMaybe<Scalars['String']>;
  currentTripHeadline_not_contains?: InputMaybe<Scalars['String']>;
  currentTripHeadline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_contains?: InputMaybe<Scalars['String']>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  link_not_contains?: InputMaybe<Scalars['String']>;
  listofCardsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  listofImagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  tabName1?: InputMaybe<Scalars['String']>;
  tabName1_contains?: InputMaybe<Scalars['String']>;
  tabName1_exists?: InputMaybe<Scalars['Boolean']>;
  tabName1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tabName1_not?: InputMaybe<Scalars['String']>;
  tabName1_not_contains?: InputMaybe<Scalars['String']>;
  tabName1_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tabName2?: InputMaybe<Scalars['String']>;
  tabName2_contains?: InputMaybe<Scalars['String']>;
  tabName2_exists?: InputMaybe<Scalars['Boolean']>;
  tabName2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tabName2_not?: InputMaybe<Scalars['String']>;
  tabName2_not_contains?: InputMaybe<Scalars['String']>;
  tabName2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentTripLink = {
  __typename?: 'ComponentTripLink';
  json: Scalars['JSON'];
  links: ComponentTripLinkLinks;
};

export type ComponentTripLinkAssets = {
  __typename?: 'ComponentTripLinkAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentTripLinkEntries = {
  __typename?: 'ComponentTripLinkEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentTripLinkLinks = {
  __typename?: 'ComponentTripLinkLinks';
  assets: ComponentTripLinkAssets;
  entries: ComponentTripLinkEntries;
};

export type ComponentTripLinkingCollections = {
  __typename?: 'ComponentTripLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  tripPageCollection?: Maybe<TripPageCollection>;
};


export type ComponentTripLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentTripLinkingCollectionsTripPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentTripOrder {
  CurrentTripHeadlineAsc = 'currentTripHeadline_ASC',
  CurrentTripHeadlineDesc = 'currentTripHeadline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TabName1Asc = 'tabName1_ASC',
  TabName1Desc = 'tabName1_DESC',
  TabName2Asc = 'tabName2_ASC',
  TabName2Desc = 'tabName2_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** This is the content type for ANY text. Please include formatted text based on needs such as: bullet lists, spaced text, colored text etc. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/richText) */
export type ContentTypeRichText = Entry & {
  __typename?: 'ContentTypeRichText';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ContentTypeRichTextLinkingCollections>;
  richText?: Maybe<ContentTypeRichTextRichText>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** This is the content type for ANY text. Please include formatted text based on needs such as: bullet lists, spaced text, colored text etc. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/richText) */
export type ContentTypeRichTextLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is the content type for ANY text. Please include formatted text based on needs such as: bullet lists, spaced text, colored text etc. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/richText) */
export type ContentTypeRichTextRichTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for ANY text. Please include formatted text based on needs such as: bullet lists, spaced text, colored text etc. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/richText) */
export type ContentTypeRichTextTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentTypeRichTextCollection = {
  __typename?: 'ContentTypeRichTextCollection';
  items: Array<Maybe<ContentTypeRichText>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ContentTypeRichTextFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentTypeRichTextFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentTypeRichTextFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  richText_contains?: InputMaybe<Scalars['String']>;
  richText_exists?: InputMaybe<Scalars['Boolean']>;
  richText_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContentTypeRichTextLinkingCollections = {
  __typename?: 'ContentTypeRichTextLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homepageCollection?: Maybe<HomepageCollection>;
  tripsCollection?: Maybe<TripsCollection>;
};


export type ContentTypeRichTextLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentTypeRichTextLinkingCollectionsHomepageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentTypeRichTextLinkingCollectionsTripsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ContentTypeRichTextOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ContentTypeRichTextRichText = {
  __typename?: 'ContentTypeRichTextRichText';
  json: Scalars['JSON'];
  links: ContentTypeRichTextRichTextLinks;
};

export type ContentTypeRichTextRichTextAssets = {
  __typename?: 'ContentTypeRichTextRichTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ContentTypeRichTextRichTextEntries = {
  __typename?: 'ContentTypeRichTextRichTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ContentTypeRichTextRichTextLinks = {
  __typename?: 'ContentTypeRichTextRichTextLinks';
  assets: ContentTypeRichTextRichTextAssets;
  entries: ContentTypeRichTextRichTextEntries;
};

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** This is the content for Footer, only one entry may exist [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/footer) */
export type Footer = Entry & {
  __typename?: 'Footer';
  contentfulMetadata: ContentfulMetadata;
  emailAddress?: Maybe<Scalars['String']>;
  emailIcon?: Maybe<Asset>;
  linkedFrom?: Maybe<FooterLinkingCollections>;
  logo?: Maybe<Asset>;
  phoneIcon?: Maybe<Asset>;
  phoneNumber?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** This is the content for Footer, only one entry may exist [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/footer) */
export type FooterEmailAddressArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content for Footer, only one entry may exist [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/footer) */
export type FooterEmailIconArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** This is the content for Footer, only one entry may exist [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/footer) */
export type FooterLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is the content for Footer, only one entry may exist [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/footer) */
export type FooterLogoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** This is the content for Footer, only one entry may exist [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/footer) */
export type FooterPhoneIconArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** This is the content for Footer, only one entry may exist [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/footer) */
export type FooterPhoneNumberArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content for Footer, only one entry may exist [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/footer) */
export type FooterTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type FooterCollection = {
  __typename?: 'FooterCollection';
  items: Array<Maybe<Footer>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FooterFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  emailAddress?: InputMaybe<Scalars['String']>;
  emailAddress_contains?: InputMaybe<Scalars['String']>;
  emailAddress_exists?: InputMaybe<Scalars['Boolean']>;
  emailAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  emailAddress_not?: InputMaybe<Scalars['String']>;
  emailAddress_not_contains?: InputMaybe<Scalars['String']>;
  emailAddress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  emailIcon_exists?: InputMaybe<Scalars['Boolean']>;
  logo_exists?: InputMaybe<Scalars['Boolean']>;
  phoneIcon_exists?: InputMaybe<Scalars['Boolean']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumber_contains?: InputMaybe<Scalars['String']>;
  phoneNumber_exists?: InputMaybe<Scalars['Boolean']>;
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneNumber_not?: InputMaybe<Scalars['String']>;
  phoneNumber_not_contains?: InputMaybe<Scalars['String']>;
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FooterLinkingCollections = {
  __typename?: 'FooterLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homepageCollection?: Maybe<HomepageCollection>;
  tripPageCollection?: Maybe<TripPageCollection>;
  tripsCollection?: Maybe<TripsCollection>;
};


export type FooterLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type FooterLinkingCollectionsHomepageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type FooterLinkingCollectionsTripPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type FooterLinkingCollectionsTripsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum FooterOrder {
  EmailAddressAsc = 'emailAddress_ASC',
  EmailAddressDesc = 'emailAddress_DESC',
  PhoneNumberAsc = 'phoneNumber_ASC',
  PhoneNumberDesc = 'phoneNumber_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** This is the content for Header, there may exist only one entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/header) */
export type Header = Entry & {
  __typename?: 'Header';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<HeaderLinkingCollections>;
  links?: Maybe<Array<Maybe<Scalars['String']>>>;
  logo?: Maybe<Asset>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** This is the content for Header, there may exist only one entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/header) */
export type HeaderLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is the content for Header, there may exist only one entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/header) */
export type HeaderLinksArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content for Header, there may exist only one entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/header) */
export type HeaderLogoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** This is the content for Header, there may exist only one entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/header) */
export type HeaderTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type HeaderCollection = {
  __typename?: 'HeaderCollection';
  items: Array<Maybe<Header>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type HeaderFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeaderFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeaderFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  links_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  links_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  links_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  links_exists?: InputMaybe<Scalars['Boolean']>;
  logo_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HeaderLinkingCollections = {
  __typename?: 'HeaderLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homepageCollection?: Maybe<HomepageCollection>;
  tripPageCollection?: Maybe<TripPageCollection>;
  tripsCollection?: Maybe<TripsCollection>;
};


export type HeaderLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type HeaderLinkingCollectionsHomepageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type HeaderLinkingCollectionsTripPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type HeaderLinkingCollectionsTripsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum HeaderOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** This is the content type for Headlines for sections [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/headline) */
export type Headline = Entry & {
  __typename?: 'Headline';
  contentfulMetadata: ContentfulMetadata;
  headline?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<HeadlineLinkingCollections>;
  subtitle?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** This is the content type for Headlines for sections [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/headline) */
export type HeadlineHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for Headlines for sections [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/headline) */
export type HeadlineLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is the content type for Headlines for sections [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/headline) */
export type HeadlineSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for Headlines for sections [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/headline) */
export type HeadlineTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type HeadlineCollection = {
  __typename?: 'HeadlineCollection';
  items: Array<Maybe<Headline>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type HeadlineFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeadlineFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeadlineFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headline?: InputMaybe<Scalars['String']>;
  headline_contains?: InputMaybe<Scalars['String']>;
  headline_exists?: InputMaybe<Scalars['Boolean']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headline_not?: InputMaybe<Scalars['String']>;
  headline_not_contains?: InputMaybe<Scalars['String']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  subtitle_contains?: InputMaybe<Scalars['String']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle_not?: InputMaybe<Scalars['String']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HeadlineLinkingCollections = {
  __typename?: 'HeadlineLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homepageCollection?: Maybe<HomepageCollection>;
  tripPageCollection?: Maybe<TripPageCollection>;
  tripsCollection?: Maybe<TripsCollection>;
};


export type HeadlineLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type HeadlineLinkingCollectionsHomepageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type HeadlineLinkingCollectionsTripPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type HeadlineLinkingCollectionsTripsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum HeadlineOrder {
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/**
 * This is the content type for the Layout of a Page, EXCLUDING TRIPS.
 * When adding an entry, upload a Title, Background, Header, Footer, all Headlines, all Text, all Media [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/homepage)
 */
export type Homepage = Entry & {
  __typename?: 'Homepage';
  background?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  footer?: Maybe<Footer>;
  header?: Maybe<Header>;
  headlinesCollection?: Maybe<HomepageHeadlinesCollection>;
  homepage?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<HomepageLinkingCollections>;
  mediaCollection?: Maybe<AssetCollection>;
  sidebar?: Maybe<ComponentSidebar>;
  sys: Sys;
  textCollection?: Maybe<HomepageTextCollection>;
};


/**
 * This is the content type for the Layout of a Page, EXCLUDING TRIPS.
 * When adding an entry, upload a Title, Background, Header, Footer, all Headlines, all Text, all Media [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/homepage)
 */
export type HomepageBackgroundArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/**
 * This is the content type for the Layout of a Page, EXCLUDING TRIPS.
 * When adding an entry, upload a Title, Background, Header, Footer, all Headlines, all Text, all Media [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/homepage)
 */
export type HomepageFooterArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/**
 * This is the content type for the Layout of a Page, EXCLUDING TRIPS.
 * When adding an entry, upload a Title, Background, Header, Footer, all Headlines, all Text, all Media [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/homepage)
 */
export type HomepageHeaderArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/**
 * This is the content type for the Layout of a Page, EXCLUDING TRIPS.
 * When adding an entry, upload a Title, Background, Header, Footer, all Headlines, all Text, all Media [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/homepage)
 */
export type HomepageHeadlinesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/**
 * This is the content type for the Layout of a Page, EXCLUDING TRIPS.
 * When adding an entry, upload a Title, Background, Header, Footer, all Headlines, all Text, all Media [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/homepage)
 */
export type HomepageHomepageArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/**
 * This is the content type for the Layout of a Page, EXCLUDING TRIPS.
 * When adding an entry, upload a Title, Background, Header, Footer, all Headlines, all Text, all Media [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/homepage)
 */
export type HomepageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/**
 * This is the content type for the Layout of a Page, EXCLUDING TRIPS.
 * When adding an entry, upload a Title, Background, Header, Footer, all Headlines, all Text, all Media [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/homepage)
 */
export type HomepageMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/**
 * This is the content type for the Layout of a Page, EXCLUDING TRIPS.
 * When adding an entry, upload a Title, Background, Header, Footer, all Headlines, all Text, all Media [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/homepage)
 */
export type HomepageSidebarArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/**
 * This is the content type for the Layout of a Page, EXCLUDING TRIPS.
 * When adding an entry, upload a Title, Background, Header, Footer, all Headlines, all Text, all Media [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/homepage)
 */
export type HomepageTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type HomepageCollection = {
  __typename?: 'HomepageCollection';
  items: Array<Maybe<Homepage>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type HomepageFilter = {
  AND?: InputMaybe<Array<InputMaybe<HomepageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HomepageFilter>>>;
  background_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  footer?: InputMaybe<CfFooterNestedFilter>;
  footer_exists?: InputMaybe<Scalars['Boolean']>;
  header?: InputMaybe<CfHeaderNestedFilter>;
  header_exists?: InputMaybe<Scalars['Boolean']>;
  headlinesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  homepage?: InputMaybe<Scalars['String']>;
  homepage_contains?: InputMaybe<Scalars['String']>;
  homepage_exists?: InputMaybe<Scalars['Boolean']>;
  homepage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  homepage_not?: InputMaybe<Scalars['String']>;
  homepage_not_contains?: InputMaybe<Scalars['String']>;
  homepage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mediaCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sidebar?: InputMaybe<CfComponentSidebarNestedFilter>;
  sidebar_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  textCollection_exists?: InputMaybe<Scalars['Boolean']>;
};

export type HomepageHeadlinesCollection = {
  __typename?: 'HomepageHeadlinesCollection';
  items: Array<Maybe<Headline>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type HomepageLinkingCollections = {
  __typename?: 'HomepageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type HomepageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum HomepageOrder {
  HomepageAsc = 'homepage_ASC',
  HomepageDesc = 'homepage_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type HomepageTextCollection = {
  __typename?: 'HomepageTextCollection';
  items: Array<Maybe<ContentTypeRichText>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  componentButton?: Maybe<ComponentButton>;
  componentButtonCollection?: Maybe<ComponentButtonCollection>;
  componentCard?: Maybe<ComponentCard>;
  componentCardCollection?: Maybe<ComponentCardCollection>;
  componentDropdown?: Maybe<ComponentDropdown>;
  componentDropdownCollection?: Maybe<ComponentDropdownCollection>;
  componentSidebar?: Maybe<ComponentSidebar>;
  componentSidebarCollection?: Maybe<ComponentSidebarCollection>;
  componentTable?: Maybe<ComponentTable>;
  componentTableCollection?: Maybe<ComponentTableCollection>;
  componentTrip?: Maybe<ComponentTrip>;
  componentTripCollection?: Maybe<ComponentTripCollection>;
  contentTypeRichText?: Maybe<ContentTypeRichText>;
  contentTypeRichTextCollection?: Maybe<ContentTypeRichTextCollection>;
  entryCollection?: Maybe<EntryCollection>;
  footer?: Maybe<Footer>;
  footerCollection?: Maybe<FooterCollection>;
  header?: Maybe<Header>;
  headerCollection?: Maybe<HeaderCollection>;
  headline?: Maybe<Headline>;
  headlineCollection?: Maybe<HeadlineCollection>;
  homepage?: Maybe<Homepage>;
  homepageCollection?: Maybe<HomepageCollection>;
  seoMetadata?: Maybe<SeoMetadata>;
  seoMetadataCollection?: Maybe<SeoMetadataCollection>;
  testimonials?: Maybe<Testimonials>;
  testimonialsCollection?: Maybe<TestimonialsCollection>;
  tripPage?: Maybe<TripPage>;
  tripPageCollection?: Maybe<TripPageCollection>;
  trips?: Maybe<Trips>;
  tripsCollection?: Maybe<TripsCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryComponentButtonArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentButtonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentButtonOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentButtonFilter>;
};


export type QueryComponentCardArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentCardOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentCardFilter>;
};


export type QueryComponentDropdownArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentDropdownCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentDropdownOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentDropdownFilter>;
};


export type QueryComponentSidebarArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentSidebarCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSidebarOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentSidebarFilter>;
};


export type QueryComponentTableArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentTableCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentTableOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentTableFilter>;
};


export type QueryComponentTripArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentTripCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentTripOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentTripFilter>;
};


export type QueryContentTypeRichTextArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryContentTypeRichTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ContentTypeRichTextOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentTypeRichTextFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryFooterArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FooterFilter>;
};


export type QueryHeaderArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<HeaderOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HeaderFilter>;
};


export type QueryHeadlineArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryHeadlineCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<HeadlineOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HeadlineFilter>;
};


export type QueryHomepageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryHomepageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<HomepageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HomepageFilter>;
};


export type QuerySeoMetadataArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySeoMetadataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SeoMetadataOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SeoMetadataFilter>;
};


export type QueryTestimonialsArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTestimonialsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TestimonialsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TestimonialsFilter>;
};


export type QueryTripPageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTripPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TripPageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TripPageFilter>;
};


export type QueryTripsArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTripsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TripsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TripsFilter>;
};

/** This is the content type for SEO Metadata, please only edit the entry and only one max entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/seoMetadata) */
export type SeoMetadata = Entry & {
  __typename?: 'SeoMetadata';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<SeoMetadataLinkingCollections>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  ogDescription?: Maybe<Scalars['String']>;
  ogImage?: Maybe<Asset>;
  ogTitle?: Maybe<Scalars['String']>;
  ogType?: Maybe<Scalars['String']>;
  ogUrl?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  twitterCard?: Maybe<Scalars['String']>;
  twitterDescription?: Maybe<Scalars['String']>;
  twitterImage?: Maybe<Asset>;
  twitterTitle?: Maybe<Scalars['String']>;
  twitterUrl?: Maybe<Scalars['String']>;
};


/** This is the content type for SEO Metadata, please only edit the entry and only one max entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/seoMetadata) */
export type SeoMetadataLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is the content type for SEO Metadata, please only edit the entry and only one max entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/seoMetadata) */
export type SeoMetadataMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for SEO Metadata, please only edit the entry and only one max entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/seoMetadata) */
export type SeoMetadataMetaTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for SEO Metadata, please only edit the entry and only one max entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/seoMetadata) */
export type SeoMetadataOgDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for SEO Metadata, please only edit the entry and only one max entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/seoMetadata) */
export type SeoMetadataOgImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** This is the content type for SEO Metadata, please only edit the entry and only one max entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/seoMetadata) */
export type SeoMetadataOgTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for SEO Metadata, please only edit the entry and only one max entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/seoMetadata) */
export type SeoMetadataOgTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for SEO Metadata, please only edit the entry and only one max entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/seoMetadata) */
export type SeoMetadataOgUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for SEO Metadata, please only edit the entry and only one max entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/seoMetadata) */
export type SeoMetadataTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for SEO Metadata, please only edit the entry and only one max entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/seoMetadata) */
export type SeoMetadataTwitterCardArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for SEO Metadata, please only edit the entry and only one max entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/seoMetadata) */
export type SeoMetadataTwitterDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for SEO Metadata, please only edit the entry and only one max entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/seoMetadata) */
export type SeoMetadataTwitterImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** This is the content type for SEO Metadata, please only edit the entry and only one max entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/seoMetadata) */
export type SeoMetadataTwitterTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for SEO Metadata, please only edit the entry and only one max entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/seoMetadata) */
export type SeoMetadataTwitterUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SeoMetadataCollection = {
  __typename?: 'SeoMetadataCollection';
  items: Array<Maybe<SeoMetadata>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SeoMetadataFilter = {
  AND?: InputMaybe<Array<InputMaybe<SeoMetadataFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SeoMetadataFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaDescription_contains?: InputMaybe<Scalars['String']>;
  metaDescription_exists?: InputMaybe<Scalars['Boolean']>;
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metaDescription_not?: InputMaybe<Scalars['String']>;
  metaDescription_not_contains?: InputMaybe<Scalars['String']>;
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metaTitle?: InputMaybe<Scalars['String']>;
  metaTitle_contains?: InputMaybe<Scalars['String']>;
  metaTitle_exists?: InputMaybe<Scalars['Boolean']>;
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metaTitle_not?: InputMaybe<Scalars['String']>;
  metaTitle_not_contains?: InputMaybe<Scalars['String']>;
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ogDescription?: InputMaybe<Scalars['String']>;
  ogDescription_contains?: InputMaybe<Scalars['String']>;
  ogDescription_exists?: InputMaybe<Scalars['Boolean']>;
  ogDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ogDescription_not?: InputMaybe<Scalars['String']>;
  ogDescription_not_contains?: InputMaybe<Scalars['String']>;
  ogDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ogImage_exists?: InputMaybe<Scalars['Boolean']>;
  ogTitle?: InputMaybe<Scalars['String']>;
  ogTitle_contains?: InputMaybe<Scalars['String']>;
  ogTitle_exists?: InputMaybe<Scalars['Boolean']>;
  ogTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ogTitle_not?: InputMaybe<Scalars['String']>;
  ogTitle_not_contains?: InputMaybe<Scalars['String']>;
  ogTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ogType?: InputMaybe<Scalars['String']>;
  ogType_contains?: InputMaybe<Scalars['String']>;
  ogType_exists?: InputMaybe<Scalars['Boolean']>;
  ogType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ogType_not?: InputMaybe<Scalars['String']>;
  ogType_not_contains?: InputMaybe<Scalars['String']>;
  ogType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ogUrl?: InputMaybe<Scalars['String']>;
  ogUrl_contains?: InputMaybe<Scalars['String']>;
  ogUrl_exists?: InputMaybe<Scalars['Boolean']>;
  ogUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ogUrl_not?: InputMaybe<Scalars['String']>;
  ogUrl_not_contains?: InputMaybe<Scalars['String']>;
  ogUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitterCard?: InputMaybe<Scalars['String']>;
  twitterCard_contains?: InputMaybe<Scalars['String']>;
  twitterCard_exists?: InputMaybe<Scalars['Boolean']>;
  twitterCard_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitterCard_not?: InputMaybe<Scalars['String']>;
  twitterCard_not_contains?: InputMaybe<Scalars['String']>;
  twitterCard_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitterDescription?: InputMaybe<Scalars['String']>;
  twitterDescription_contains?: InputMaybe<Scalars['String']>;
  twitterDescription_exists?: InputMaybe<Scalars['Boolean']>;
  twitterDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitterDescription_not?: InputMaybe<Scalars['String']>;
  twitterDescription_not_contains?: InputMaybe<Scalars['String']>;
  twitterDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitterImage_exists?: InputMaybe<Scalars['Boolean']>;
  twitterTitle?: InputMaybe<Scalars['String']>;
  twitterTitle_contains?: InputMaybe<Scalars['String']>;
  twitterTitle_exists?: InputMaybe<Scalars['Boolean']>;
  twitterTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitterTitle_not?: InputMaybe<Scalars['String']>;
  twitterTitle_not_contains?: InputMaybe<Scalars['String']>;
  twitterTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitterUrl?: InputMaybe<Scalars['String']>;
  twitterUrl_contains?: InputMaybe<Scalars['String']>;
  twitterUrl_exists?: InputMaybe<Scalars['Boolean']>;
  twitterUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitterUrl_not?: InputMaybe<Scalars['String']>;
  twitterUrl_not_contains?: InputMaybe<Scalars['String']>;
  twitterUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SeoMetadataLinkingCollections = {
  __typename?: 'SeoMetadataLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type SeoMetadataLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SeoMetadataOrder {
  MetaDescriptionAsc = 'metaDescription_ASC',
  MetaDescriptionDesc = 'metaDescription_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  OgDescriptionAsc = 'ogDescription_ASC',
  OgDescriptionDesc = 'ogDescription_DESC',
  OgTitleAsc = 'ogTitle_ASC',
  OgTitleDesc = 'ogTitle_DESC',
  OgTypeAsc = 'ogType_ASC',
  OgTypeDesc = 'ogType_DESC',
  OgUrlAsc = 'ogUrl_ASC',
  OgUrlDesc = 'ogUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TwitterCardAsc = 'twitterCard_ASC',
  TwitterCardDesc = 'twitterCard_DESC',
  TwitterDescriptionAsc = 'twitterDescription_ASC',
  TwitterDescriptionDesc = 'twitterDescription_DESC',
  TwitterTitleAsc = 'twitterTitle_ASC',
  TwitterTitleDesc = 'twitterTitle_DESC',
  TwitterUrlAsc = 'twitterUrl_ASC',
  TwitterUrlDesc = 'twitterUrl_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** content type for testimonials, one entry = one testimonials [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/testimonials) */
export type Testimonials = Entry & {
  __typename?: 'Testimonials';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<TestimonialsDescription>;
  linkedFrom?: Maybe<TestimonialsLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** content type for testimonials, one entry = one testimonials [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/testimonials) */
export type TestimonialsDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** content type for testimonials, one entry = one testimonials [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/testimonials) */
export type TestimonialsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** content type for testimonials, one entry = one testimonials [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/testimonials) */
export type TestimonialsNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TestimonialsCollection = {
  __typename?: 'TestimonialsCollection';
  items: Array<Maybe<Testimonials>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TestimonialsDescription = {
  __typename?: 'TestimonialsDescription';
  json: Scalars['JSON'];
  links: TestimonialsDescriptionLinks;
};

export type TestimonialsDescriptionAssets = {
  __typename?: 'TestimonialsDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TestimonialsDescriptionEntries = {
  __typename?: 'TestimonialsDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TestimonialsDescriptionLinks = {
  __typename?: 'TestimonialsDescriptionLinks';
  assets: TestimonialsDescriptionAssets;
  entries: TestimonialsDescriptionEntries;
};

export type TestimonialsFilter = {
  AND?: InputMaybe<Array<InputMaybe<TestimonialsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TestimonialsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type TestimonialsLinkingCollections = {
  __typename?: 'TestimonialsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type TestimonialsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TestimonialsOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Specifically for Trip Page Collection! There may only be one entry! [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/tripPage) */
export type TripPage = Entry & {
  __typename?: 'TripPage';
  contentfulMetadata: ContentfulMetadata;
  footer?: Maybe<Footer>;
  header?: Maybe<Header>;
  headline?: Maybe<Headline>;
  linkedFrom?: Maybe<TripPageLinkingCollections>;
  sys: Sys;
  tabSection?: Maybe<ComponentTrip>;
  title?: Maybe<Scalars['String']>;
};


/** Specifically for Trip Page Collection! There may only be one entry! [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/tripPage) */
export type TripPageFooterArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Specifically for Trip Page Collection! There may only be one entry! [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/tripPage) */
export type TripPageHeaderArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Specifically for Trip Page Collection! There may only be one entry! [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/tripPage) */
export type TripPageHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Specifically for Trip Page Collection! There may only be one entry! [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/tripPage) */
export type TripPageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Specifically for Trip Page Collection! There may only be one entry! [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/tripPage) */
export type TripPageTabSectionArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Specifically for Trip Page Collection! There may only be one entry! [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/tripPage) */
export type TripPageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TripPageCollection = {
  __typename?: 'TripPageCollection';
  items: Array<Maybe<TripPage>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TripPageFilter = {
  AND?: InputMaybe<Array<InputMaybe<TripPageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TripPageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  footer?: InputMaybe<CfFooterNestedFilter>;
  footer_exists?: InputMaybe<Scalars['Boolean']>;
  header?: InputMaybe<CfHeaderNestedFilter>;
  header_exists?: InputMaybe<Scalars['Boolean']>;
  headline?: InputMaybe<CfHeadlineNestedFilter>;
  headline_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  tabSection?: InputMaybe<CfComponentTripNestedFilter>;
  tabSection_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TripPageLinkingCollections = {
  __typename?: 'TripPageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type TripPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TripPageOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/**
 * This is the content type for the INDIVIDUAL TRIP PAGES such as Costa Rica, Panema etc.
 * For Slug, please enter the preferred name in the format of: costa-rica-2023 or panema-2024. All lowercase with hyphen between words. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/trips)
 */
export type Trips = Entry & {
  __typename?: 'Trips';
  background?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  footer?: Maybe<Footer>;
  header?: Maybe<Header>;
  headline?: Maybe<Headline>;
  imagesGalleryCollection?: Maybe<AssetCollection>;
  imagesMidCollection?: Maybe<AssetCollection>;
  linkedFrom?: Maybe<TripsLinkingCollections>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  textCollection?: Maybe<TripsTextCollection>;
  title?: Maybe<Scalars['String']>;
};


/**
 * This is the content type for the INDIVIDUAL TRIP PAGES such as Costa Rica, Panema etc.
 * For Slug, please enter the preferred name in the format of: costa-rica-2023 or panema-2024. All lowercase with hyphen between words. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/trips)
 */
export type TripsBackgroundArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/**
 * This is the content type for the INDIVIDUAL TRIP PAGES such as Costa Rica, Panema etc.
 * For Slug, please enter the preferred name in the format of: costa-rica-2023 or panema-2024. All lowercase with hyphen between words. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/trips)
 */
export type TripsFooterArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/**
 * This is the content type for the INDIVIDUAL TRIP PAGES such as Costa Rica, Panema etc.
 * For Slug, please enter the preferred name in the format of: costa-rica-2023 or panema-2024. All lowercase with hyphen between words. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/trips)
 */
export type TripsHeaderArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/**
 * This is the content type for the INDIVIDUAL TRIP PAGES such as Costa Rica, Panema etc.
 * For Slug, please enter the preferred name in the format of: costa-rica-2023 or panema-2024. All lowercase with hyphen between words. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/trips)
 */
export type TripsHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/**
 * This is the content type for the INDIVIDUAL TRIP PAGES such as Costa Rica, Panema etc.
 * For Slug, please enter the preferred name in the format of: costa-rica-2023 or panema-2024. All lowercase with hyphen between words. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/trips)
 */
export type TripsImagesGalleryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/**
 * This is the content type for the INDIVIDUAL TRIP PAGES such as Costa Rica, Panema etc.
 * For Slug, please enter the preferred name in the format of: costa-rica-2023 or panema-2024. All lowercase with hyphen between words. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/trips)
 */
export type TripsImagesMidCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/**
 * This is the content type for the INDIVIDUAL TRIP PAGES such as Costa Rica, Panema etc.
 * For Slug, please enter the preferred name in the format of: costa-rica-2023 or panema-2024. All lowercase with hyphen between words. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/trips)
 */
export type TripsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/**
 * This is the content type for the INDIVIDUAL TRIP PAGES such as Costa Rica, Panema etc.
 * For Slug, please enter the preferred name in the format of: costa-rica-2023 or panema-2024. All lowercase with hyphen between words. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/trips)
 */
export type TripsSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/**
 * This is the content type for the INDIVIDUAL TRIP PAGES such as Costa Rica, Panema etc.
 * For Slug, please enter the preferred name in the format of: costa-rica-2023 or panema-2024. All lowercase with hyphen between words. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/trips)
 */
export type TripsTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/**
 * This is the content type for the INDIVIDUAL TRIP PAGES such as Costa Rica, Panema etc.
 * For Slug, please enter the preferred name in the format of: costa-rica-2023 or panema-2024. All lowercase with hyphen between words. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/trips)
 */
export type TripsTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TripsCollection = {
  __typename?: 'TripsCollection';
  items: Array<Maybe<Trips>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TripsFilter = {
  AND?: InputMaybe<Array<InputMaybe<TripsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TripsFilter>>>;
  background_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  footer?: InputMaybe<CfFooterNestedFilter>;
  footer_exists?: InputMaybe<Scalars['Boolean']>;
  header?: InputMaybe<CfHeaderNestedFilter>;
  header_exists?: InputMaybe<Scalars['Boolean']>;
  headline?: InputMaybe<CfHeadlineNestedFilter>;
  headline_exists?: InputMaybe<Scalars['Boolean']>;
  imagesGalleryCollection_exists?: InputMaybe<Scalars['Boolean']>;
  imagesMidCollection_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  textCollection_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TripsLinkingCollections = {
  __typename?: 'TripsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type TripsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TripsOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type TripsTextCollection = {
  __typename?: 'TripsTextCollection';
  items: Array<Maybe<ContentTypeRichText>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CfComponentSidebarNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentSidebarNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentSidebarNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  guarantee_exists?: InputMaybe<Scalars['Boolean']>;
  links_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  links_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  links_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  links_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfComponentTripNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentTripNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentTripNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  currentTripHeadline?: InputMaybe<Scalars['String']>;
  currentTripHeadline_contains?: InputMaybe<Scalars['String']>;
  currentTripHeadline_exists?: InputMaybe<Scalars['Boolean']>;
  currentTripHeadline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  currentTripHeadline_not?: InputMaybe<Scalars['String']>;
  currentTripHeadline_not_contains?: InputMaybe<Scalars['String']>;
  currentTripHeadline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_contains?: InputMaybe<Scalars['String']>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  link_not_contains?: InputMaybe<Scalars['String']>;
  listofCardsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  listofImagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  tabName1?: InputMaybe<Scalars['String']>;
  tabName1_contains?: InputMaybe<Scalars['String']>;
  tabName1_exists?: InputMaybe<Scalars['Boolean']>;
  tabName1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tabName1_not?: InputMaybe<Scalars['String']>;
  tabName1_not_contains?: InputMaybe<Scalars['String']>;
  tabName1_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tabName2?: InputMaybe<Scalars['String']>;
  tabName2_contains?: InputMaybe<Scalars['String']>;
  tabName2_exists?: InputMaybe<Scalars['Boolean']>;
  tabName2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tabName2_not?: InputMaybe<Scalars['String']>;
  tabName2_not_contains?: InputMaybe<Scalars['String']>;
  tabName2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfFooterNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfFooterNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfFooterNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  emailAddress?: InputMaybe<Scalars['String']>;
  emailAddress_contains?: InputMaybe<Scalars['String']>;
  emailAddress_exists?: InputMaybe<Scalars['Boolean']>;
  emailAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  emailAddress_not?: InputMaybe<Scalars['String']>;
  emailAddress_not_contains?: InputMaybe<Scalars['String']>;
  emailAddress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  emailIcon_exists?: InputMaybe<Scalars['Boolean']>;
  logo_exists?: InputMaybe<Scalars['Boolean']>;
  phoneIcon_exists?: InputMaybe<Scalars['Boolean']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumber_contains?: InputMaybe<Scalars['String']>;
  phoneNumber_exists?: InputMaybe<Scalars['Boolean']>;
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneNumber_not?: InputMaybe<Scalars['String']>;
  phoneNumber_not_contains?: InputMaybe<Scalars['String']>;
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfHeaderNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfHeaderNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfHeaderNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  links_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  links_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  links_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  links_exists?: InputMaybe<Scalars['Boolean']>;
  logo_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfHeadlineNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfHeadlineNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfHeadlineNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headline?: InputMaybe<Scalars['String']>;
  headline_contains?: InputMaybe<Scalars['String']>;
  headline_exists?: InputMaybe<Scalars['Boolean']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headline_not?: InputMaybe<Scalars['String']>;
  headline_not_contains?: InputMaybe<Scalars['String']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  subtitle_contains?: InputMaybe<Scalars['String']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle_not?: InputMaybe<Scalars['String']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  componentCardCollection?: Maybe<ComponentCardCollection>;
  componentSidebarCollection?: Maybe<ComponentSidebarCollection>;
  componentTripCollection?: Maybe<ComponentTripCollection>;
  entryCollection?: Maybe<EntryCollection>;
  footerCollection?: Maybe<FooterCollection>;
  headerCollection?: Maybe<HeaderCollection>;
  homepageCollection?: Maybe<HomepageCollection>;
  seoMetadataCollection?: Maybe<SeoMetadataCollection>;
  tripsCollection?: Maybe<TripsCollection>;
};


export type AssetLinkingCollectionsComponentCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsComponentSidebarCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsComponentTripCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsHomepageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsSeoMetadataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsTripsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** This is content type for anything that needs to be a button [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentButton) */
export type ComponentButton = Entry & {
  __typename?: 'ComponentButton';
  buttonText?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ComponentButtonLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** This is content type for anything that needs to be a button [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentButton) */
export type ComponentButtonButtonTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is content type for anything that needs to be a button [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentButton) */
export type ComponentButtonLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is content type for anything that needs to be a button [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentButton) */
export type ComponentButtonTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentButtonCollection = {
  __typename?: 'ComponentButtonCollection';
  items: Array<Maybe<ComponentButton>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentButtonFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentButtonFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentButtonFilter>>>;
  buttonText?: InputMaybe<Scalars['String']>;
  buttonText_contains?: InputMaybe<Scalars['String']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonText_not?: InputMaybe<Scalars['String']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentButtonLinkingCollections = {
  __typename?: 'ComponentButtonLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ComponentButtonLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentButtonOrder {
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** This is the content type for Cards. Cards include a Title, Image, and Description. Optionally a link for more information [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentCard) */
export type ComponentCard = Entry & {
  __typename?: 'ComponentCard';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  label?: Maybe<Scalars['String']>;
  link?: Maybe<ComponentCardLink>;
  linkedFrom?: Maybe<ComponentCardLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** This is the content type for Cards. Cards include a Title, Image, and Description. Optionally a link for more information [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentCard) */
export type ComponentCardDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for Cards. Cards include a Title, Image, and Description. Optionally a link for more information [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentCard) */
export type ComponentCardImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** This is the content type for Cards. Cards include a Title, Image, and Description. Optionally a link for more information [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentCard) */
export type ComponentCardLabelArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for Cards. Cards include a Title, Image, and Description. Optionally a link for more information [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentCard) */
export type ComponentCardLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for Cards. Cards include a Title, Image, and Description. Optionally a link for more information [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentCard) */
export type ComponentCardLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is the content type for Cards. Cards include a Title, Image, and Description. Optionally a link for more information [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentCard) */
export type ComponentCardTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentCardCollection = {
  __typename?: 'ComponentCardCollection';
  items: Array<Maybe<ComponentCard>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentCardFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentCardFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentCardFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  label?: InputMaybe<Scalars['String']>;
  label_contains?: InputMaybe<Scalars['String']>;
  label_exists?: InputMaybe<Scalars['Boolean']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  label_not?: InputMaybe<Scalars['String']>;
  label_not_contains?: InputMaybe<Scalars['String']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_contains?: InputMaybe<Scalars['String']>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  link_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentCardLink = {
  __typename?: 'ComponentCardLink';
  json: Scalars['JSON'];
  links: ComponentCardLinkLinks;
};

export type ComponentCardLinkAssets = {
  __typename?: 'ComponentCardLinkAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentCardLinkEntries = {
  __typename?: 'ComponentCardLinkEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentCardLinkLinks = {
  __typename?: 'ComponentCardLinkLinks';
  assets: ComponentCardLinkAssets;
  entries: ComponentCardLinkEntries;
};

export type ComponentCardLinkingCollections = {
  __typename?: 'ComponentCardLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ComponentCardLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentCardOrder {
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** This is the content type for Dropdowns [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentDropdown) */
export type ComponentDropdown = Entry & {
  __typename?: 'ComponentDropdown';
  body?: Maybe<ComponentDropdownBody>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ComponentDropdownLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** This is the content type for Dropdowns [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentDropdown) */
export type ComponentDropdownBodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for Dropdowns [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentDropdown) */
export type ComponentDropdownLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is the content type for Dropdowns [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentDropdown) */
export type ComponentDropdownTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentDropdownBody = {
  __typename?: 'ComponentDropdownBody';
  json: Scalars['JSON'];
  links: ComponentDropdownBodyLinks;
};

export type ComponentDropdownBodyAssets = {
  __typename?: 'ComponentDropdownBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentDropdownBodyEntries = {
  __typename?: 'ComponentDropdownBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentDropdownBodyLinks = {
  __typename?: 'ComponentDropdownBodyLinks';
  assets: ComponentDropdownBodyAssets;
  entries: ComponentDropdownBodyEntries;
};

export type ComponentDropdownCollection = {
  __typename?: 'ComponentDropdownCollection';
  items: Array<Maybe<ComponentDropdown>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentDropdownFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentDropdownFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentDropdownFilter>>>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentDropdownLinkingCollections = {
  __typename?: 'ComponentDropdownLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ComponentDropdownLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentDropdownOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentSidebar) */
export type ComponentSidebar = Entry & {
  __typename?: 'ComponentSidebar';
  contentfulMetadata: ContentfulMetadata;
  guarantee?: Maybe<Asset>;
  linkedFrom?: Maybe<ComponentSidebarLinkingCollections>;
  links?: Maybe<Array<Maybe<Scalars['String']>>>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentSidebar) */
export type ComponentSidebarGuaranteeArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentSidebar) */
export type ComponentSidebarLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentSidebar) */
export type ComponentSidebarLinksArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentSidebar) */
export type ComponentSidebarTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentSidebarCollection = {
  __typename?: 'ComponentSidebarCollection';
  items: Array<Maybe<ComponentSidebar>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentSidebarFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentSidebarFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentSidebarFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  guarantee_exists?: InputMaybe<Scalars['Boolean']>;
  links_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  links_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  links_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  links_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSidebarLinkingCollections = {
  __typename?: 'ComponentSidebarLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homepageCollection?: Maybe<HomepageCollection>;
};


export type ComponentSidebarLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentSidebarLinkingCollectionsHomepageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentSidebarOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** This is the content type for anything that requires a Table. Tables include a Header, the table data, and a Description [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentTable) */
export type ComponentTable = Entry & {
  __typename?: 'ComponentTable';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentTableLinkingCollections>;
  sys: Sys;
  table?: Maybe<ComponentTableTable>;
  title?: Maybe<Scalars['String']>;
};


/** This is the content type for anything that requires a Table. Tables include a Header, the table data, and a Description [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentTable) */
export type ComponentTableDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for anything that requires a Table. Tables include a Header, the table data, and a Description [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentTable) */
export type ComponentTableLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is the content type for anything that requires a Table. Tables include a Header, the table data, and a Description [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentTable) */
export type ComponentTableTableArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for anything that requires a Table. Tables include a Header, the table data, and a Description [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentTable) */
export type ComponentTableTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentTableCollection = {
  __typename?: 'ComponentTableCollection';
  items: Array<Maybe<ComponentTable>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentTableFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentTableFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentTableFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  table_contains?: InputMaybe<Scalars['String']>;
  table_exists?: InputMaybe<Scalars['Boolean']>;
  table_not_contains?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentTableLinkingCollections = {
  __typename?: 'ComponentTableLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ComponentTableLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentTableOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ComponentTableTable = {
  __typename?: 'ComponentTableTable';
  json: Scalars['JSON'];
  links: ComponentTableTableLinks;
};

export type ComponentTableTableAssets = {
  __typename?: 'ComponentTableTableAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentTableTableEntries = {
  __typename?: 'ComponentTableTableEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentTableTableLinks = {
  __typename?: 'ComponentTableTableLinks';
  assets: ComponentTableTableAssets;
  entries: ComponentTableTableEntries;
};

/** This is the content type for the section of Trips with two tabs. The first tab being the Current "upcoming" Trip which is the focus. There images of what will be seen on the trip along with a link to that page will exist. The second tab is the Previous tab. Previous tab includes (Cards) tied to trips in the past. Clicking the button on the card will link to the specified page [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentTrip) */
export type ComponentTrip = Entry & {
  __typename?: 'ComponentTrip';
  contentfulMetadata: ContentfulMetadata;
  currentTripHeadline?: Maybe<Scalars['String']>;
  link?: Maybe<ComponentTripLink>;
  linkedFrom?: Maybe<ComponentTripLinkingCollections>;
  listofCardsCollection?: Maybe<AssetCollection>;
  listofImagesCollection?: Maybe<AssetCollection>;
  sys: Sys;
  tabName1?: Maybe<Scalars['String']>;
  tabName2?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


/** This is the content type for the section of Trips with two tabs. The first tab being the Current "upcoming" Trip which is the focus. There images of what will be seen on the trip along with a link to that page will exist. The second tab is the Previous tab. Previous tab includes (Cards) tied to trips in the past. Clicking the button on the card will link to the specified page [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentTrip) */
export type ComponentTripCurrentTripHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for the section of Trips with two tabs. The first tab being the Current "upcoming" Trip which is the focus. There images of what will be seen on the trip along with a link to that page will exist. The second tab is the Previous tab. Previous tab includes (Cards) tied to trips in the past. Clicking the button on the card will link to the specified page [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentTrip) */
export type ComponentTripLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for the section of Trips with two tabs. The first tab being the Current "upcoming" Trip which is the focus. There images of what will be seen on the trip along with a link to that page will exist. The second tab is the Previous tab. Previous tab includes (Cards) tied to trips in the past. Clicking the button on the card will link to the specified page [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentTrip) */
export type ComponentTripLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is the content type for the section of Trips with two tabs. The first tab being the Current "upcoming" Trip which is the focus. There images of what will be seen on the trip along with a link to that page will exist. The second tab is the Previous tab. Previous tab includes (Cards) tied to trips in the past. Clicking the button on the card will link to the specified page [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentTrip) */
export type ComponentTripListofCardsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** This is the content type for the section of Trips with two tabs. The first tab being the Current "upcoming" Trip which is the focus. There images of what will be seen on the trip along with a link to that page will exist. The second tab is the Previous tab. Previous tab includes (Cards) tied to trips in the past. Clicking the button on the card will link to the specified page [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentTrip) */
export type ComponentTripListofImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** This is the content type for the section of Trips with two tabs. The first tab being the Current "upcoming" Trip which is the focus. There images of what will be seen on the trip along with a link to that page will exist. The second tab is the Previous tab. Previous tab includes (Cards) tied to trips in the past. Clicking the button on the card will link to the specified page [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentTrip) */
export type ComponentTripTabName1Args = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for the section of Trips with two tabs. The first tab being the Current "upcoming" Trip which is the focus. There images of what will be seen on the trip along with a link to that page will exist. The second tab is the Previous tab. Previous tab includes (Cards) tied to trips in the past. Clicking the button on the card will link to the specified page [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentTrip) */
export type ComponentTripTabName2Args = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for the section of Trips with two tabs. The first tab being the Current "upcoming" Trip which is the focus. There images of what will be seen on the trip along with a link to that page will exist. The second tab is the Previous tab. Previous tab includes (Cards) tied to trips in the past. Clicking the button on the card will link to the specified page [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/componentTrip) */
export type ComponentTripTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentTripCollection = {
  __typename?: 'ComponentTripCollection';
  items: Array<Maybe<ComponentTrip>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentTripFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentTripFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentTripFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  currentTripHeadline?: InputMaybe<Scalars['String']>;
  currentTripHeadline_contains?: InputMaybe<Scalars['String']>;
  currentTripHeadline_exists?: InputMaybe<Scalars['Boolean']>;
  currentTripHeadline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  currentTripHeadline_not?: InputMaybe<Scalars['String']>;
  currentTripHeadline_not_contains?: InputMaybe<Scalars['String']>;
  currentTripHeadline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_contains?: InputMaybe<Scalars['String']>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  link_not_contains?: InputMaybe<Scalars['String']>;
  listofCardsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  listofImagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  tabName1?: InputMaybe<Scalars['String']>;
  tabName1_contains?: InputMaybe<Scalars['String']>;
  tabName1_exists?: InputMaybe<Scalars['Boolean']>;
  tabName1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tabName1_not?: InputMaybe<Scalars['String']>;
  tabName1_not_contains?: InputMaybe<Scalars['String']>;
  tabName1_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tabName2?: InputMaybe<Scalars['String']>;
  tabName2_contains?: InputMaybe<Scalars['String']>;
  tabName2_exists?: InputMaybe<Scalars['Boolean']>;
  tabName2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tabName2_not?: InputMaybe<Scalars['String']>;
  tabName2_not_contains?: InputMaybe<Scalars['String']>;
  tabName2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentTripLink = {
  __typename?: 'ComponentTripLink';
  json: Scalars['JSON'];
  links: ComponentTripLinkLinks;
};

export type ComponentTripLinkAssets = {
  __typename?: 'ComponentTripLinkAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentTripLinkEntries = {
  __typename?: 'ComponentTripLinkEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentTripLinkLinks = {
  __typename?: 'ComponentTripLinkLinks';
  assets: ComponentTripLinkAssets;
  entries: ComponentTripLinkEntries;
};

export type ComponentTripLinkingCollections = {
  __typename?: 'ComponentTripLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  tripPageCollection?: Maybe<TripPageCollection>;
};


export type ComponentTripLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentTripLinkingCollectionsTripPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentTripOrder {
  CurrentTripHeadlineAsc = 'currentTripHeadline_ASC',
  CurrentTripHeadlineDesc = 'currentTripHeadline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TabName1Asc = 'tabName1_ASC',
  TabName1Desc = 'tabName1_DESC',
  TabName2Asc = 'tabName2_ASC',
  TabName2Desc = 'tabName2_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** This is the content type for ANY text. Please include formatted text based on needs such as: bullet lists, spaced text, colored text etc. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/richText) */
export type ContentTypeRichText = Entry & {
  __typename?: 'ContentTypeRichText';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ContentTypeRichTextLinkingCollections>;
  richText?: Maybe<ContentTypeRichTextRichText>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** This is the content type for ANY text. Please include formatted text based on needs such as: bullet lists, spaced text, colored text etc. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/richText) */
export type ContentTypeRichTextLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is the content type for ANY text. Please include formatted text based on needs such as: bullet lists, spaced text, colored text etc. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/richText) */
export type ContentTypeRichTextRichTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for ANY text. Please include formatted text based on needs such as: bullet lists, spaced text, colored text etc. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/richText) */
export type ContentTypeRichTextTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentTypeRichTextCollection = {
  __typename?: 'ContentTypeRichTextCollection';
  items: Array<Maybe<ContentTypeRichText>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ContentTypeRichTextFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentTypeRichTextFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentTypeRichTextFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  richText_contains?: InputMaybe<Scalars['String']>;
  richText_exists?: InputMaybe<Scalars['Boolean']>;
  richText_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContentTypeRichTextLinkingCollections = {
  __typename?: 'ContentTypeRichTextLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homepageCollection?: Maybe<HomepageCollection>;
  tripsCollection?: Maybe<TripsCollection>;
};


export type ContentTypeRichTextLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentTypeRichTextLinkingCollectionsHomepageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentTypeRichTextLinkingCollectionsTripsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ContentTypeRichTextOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ContentTypeRichTextRichText = {
  __typename?: 'ContentTypeRichTextRichText';
  json: Scalars['JSON'];
  links: ContentTypeRichTextRichTextLinks;
};

export type ContentTypeRichTextRichTextAssets = {
  __typename?: 'ContentTypeRichTextRichTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ContentTypeRichTextRichTextEntries = {
  __typename?: 'ContentTypeRichTextRichTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ContentTypeRichTextRichTextLinks = {
  __typename?: 'ContentTypeRichTextRichTextLinks';
  assets: ContentTypeRichTextRichTextAssets;
  entries: ContentTypeRichTextRichTextEntries;
};

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** This is the content for Footer, only one entry may exist [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/footer) */
export type Footer = Entry & {
  __typename?: 'Footer';
  contentfulMetadata: ContentfulMetadata;
  emailAddress?: Maybe<Scalars['String']>;
  emailIcon?: Maybe<Asset>;
  linkedFrom?: Maybe<FooterLinkingCollections>;
  logo?: Maybe<Asset>;
  phoneIcon?: Maybe<Asset>;
  phoneNumber?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** This is the content for Footer, only one entry may exist [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/footer) */
export type FooterEmailAddressArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content for Footer, only one entry may exist [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/footer) */
export type FooterEmailIconArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** This is the content for Footer, only one entry may exist [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/footer) */
export type FooterLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is the content for Footer, only one entry may exist [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/footer) */
export type FooterLogoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** This is the content for Footer, only one entry may exist [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/footer) */
export type FooterPhoneIconArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** This is the content for Footer, only one entry may exist [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/footer) */
export type FooterPhoneNumberArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content for Footer, only one entry may exist [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/footer) */
export type FooterTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type FooterCollection = {
  __typename?: 'FooterCollection';
  items: Array<Maybe<Footer>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FooterFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  emailAddress?: InputMaybe<Scalars['String']>;
  emailAddress_contains?: InputMaybe<Scalars['String']>;
  emailAddress_exists?: InputMaybe<Scalars['Boolean']>;
  emailAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  emailAddress_not?: InputMaybe<Scalars['String']>;
  emailAddress_not_contains?: InputMaybe<Scalars['String']>;
  emailAddress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  emailIcon_exists?: InputMaybe<Scalars['Boolean']>;
  logo_exists?: InputMaybe<Scalars['Boolean']>;
  phoneIcon_exists?: InputMaybe<Scalars['Boolean']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumber_contains?: InputMaybe<Scalars['String']>;
  phoneNumber_exists?: InputMaybe<Scalars['Boolean']>;
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneNumber_not?: InputMaybe<Scalars['String']>;
  phoneNumber_not_contains?: InputMaybe<Scalars['String']>;
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FooterLinkingCollections = {
  __typename?: 'FooterLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homepageCollection?: Maybe<HomepageCollection>;
  tripPageCollection?: Maybe<TripPageCollection>;
  tripsCollection?: Maybe<TripsCollection>;
};


export type FooterLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type FooterLinkingCollectionsHomepageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type FooterLinkingCollectionsTripPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type FooterLinkingCollectionsTripsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum FooterOrder {
  EmailAddressAsc = 'emailAddress_ASC',
  EmailAddressDesc = 'emailAddress_DESC',
  PhoneNumberAsc = 'phoneNumber_ASC',
  PhoneNumberDesc = 'phoneNumber_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** This is the content for Header, there may exist only one entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/header) */
export type Header = Entry & {
  __typename?: 'Header';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<HeaderLinkingCollections>;
  links?: Maybe<Array<Maybe<Scalars['String']>>>;
  logo?: Maybe<Asset>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** This is the content for Header, there may exist only one entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/header) */
export type HeaderLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is the content for Header, there may exist only one entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/header) */
export type HeaderLinksArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content for Header, there may exist only one entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/header) */
export type HeaderLogoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** This is the content for Header, there may exist only one entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/header) */
export type HeaderTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type HeaderCollection = {
  __typename?: 'HeaderCollection';
  items: Array<Maybe<Header>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type HeaderFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeaderFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeaderFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  links_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  links_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  links_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  links_exists?: InputMaybe<Scalars['Boolean']>;
  logo_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HeaderLinkingCollections = {
  __typename?: 'HeaderLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homepageCollection?: Maybe<HomepageCollection>;
  tripPageCollection?: Maybe<TripPageCollection>;
  tripsCollection?: Maybe<TripsCollection>;
};


export type HeaderLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type HeaderLinkingCollectionsHomepageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type HeaderLinkingCollectionsTripPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type HeaderLinkingCollectionsTripsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum HeaderOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** This is the content type for Headlines for sections [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/headline) */
export type Headline = Entry & {
  __typename?: 'Headline';
  contentfulMetadata: ContentfulMetadata;
  headline?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<HeadlineLinkingCollections>;
  subtitle?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** This is the content type for Headlines for sections [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/headline) */
export type HeadlineHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for Headlines for sections [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/headline) */
export type HeadlineLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is the content type for Headlines for sections [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/headline) */
export type HeadlineSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for Headlines for sections [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/headline) */
export type HeadlineTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type HeadlineCollection = {
  __typename?: 'HeadlineCollection';
  items: Array<Maybe<Headline>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type HeadlineFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeadlineFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeadlineFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headline?: InputMaybe<Scalars['String']>;
  headline_contains?: InputMaybe<Scalars['String']>;
  headline_exists?: InputMaybe<Scalars['Boolean']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headline_not?: InputMaybe<Scalars['String']>;
  headline_not_contains?: InputMaybe<Scalars['String']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  subtitle_contains?: InputMaybe<Scalars['String']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle_not?: InputMaybe<Scalars['String']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HeadlineLinkingCollections = {
  __typename?: 'HeadlineLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homepageCollection?: Maybe<HomepageCollection>;
  tripPageCollection?: Maybe<TripPageCollection>;
  tripsCollection?: Maybe<TripsCollection>;
};


export type HeadlineLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type HeadlineLinkingCollectionsHomepageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type HeadlineLinkingCollectionsTripPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type HeadlineLinkingCollectionsTripsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum HeadlineOrder {
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/**
 * This is the content type for the Layout of a Page, EXCLUDING TRIPS.
 * When adding an entry, upload a Title, Background, Header, Footer, all Headlines, all Text, all Media [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/homepage)
 */
export type Homepage = Entry & {
  __typename?: 'Homepage';
  background?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  footer?: Maybe<Footer>;
  header?: Maybe<Header>;
  headlinesCollection?: Maybe<HomepageHeadlinesCollection>;
  homepage?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<HomepageLinkingCollections>;
  mediaCollection?: Maybe<AssetCollection>;
  sidebar?: Maybe<ComponentSidebar>;
  sys: Sys;
  textCollection?: Maybe<HomepageTextCollection>;
};


/**
 * This is the content type for the Layout of a Page, EXCLUDING TRIPS.
 * When adding an entry, upload a Title, Background, Header, Footer, all Headlines, all Text, all Media [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/homepage)
 */
export type HomepageBackgroundArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/**
 * This is the content type for the Layout of a Page, EXCLUDING TRIPS.
 * When adding an entry, upload a Title, Background, Header, Footer, all Headlines, all Text, all Media [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/homepage)
 */
export type HomepageFooterArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/**
 * This is the content type for the Layout of a Page, EXCLUDING TRIPS.
 * When adding an entry, upload a Title, Background, Header, Footer, all Headlines, all Text, all Media [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/homepage)
 */
export type HomepageHeaderArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/**
 * This is the content type for the Layout of a Page, EXCLUDING TRIPS.
 * When adding an entry, upload a Title, Background, Header, Footer, all Headlines, all Text, all Media [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/homepage)
 */
export type HomepageHeadlinesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/**
 * This is the content type for the Layout of a Page, EXCLUDING TRIPS.
 * When adding an entry, upload a Title, Background, Header, Footer, all Headlines, all Text, all Media [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/homepage)
 */
export type HomepageHomepageArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/**
 * This is the content type for the Layout of a Page, EXCLUDING TRIPS.
 * When adding an entry, upload a Title, Background, Header, Footer, all Headlines, all Text, all Media [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/homepage)
 */
export type HomepageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/**
 * This is the content type for the Layout of a Page, EXCLUDING TRIPS.
 * When adding an entry, upload a Title, Background, Header, Footer, all Headlines, all Text, all Media [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/homepage)
 */
export type HomepageMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/**
 * This is the content type for the Layout of a Page, EXCLUDING TRIPS.
 * When adding an entry, upload a Title, Background, Header, Footer, all Headlines, all Text, all Media [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/homepage)
 */
export type HomepageSidebarArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/**
 * This is the content type for the Layout of a Page, EXCLUDING TRIPS.
 * When adding an entry, upload a Title, Background, Header, Footer, all Headlines, all Text, all Media [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/homepage)
 */
export type HomepageTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type HomepageCollection = {
  __typename?: 'HomepageCollection';
  items: Array<Maybe<Homepage>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type HomepageFilter = {
  AND?: InputMaybe<Array<InputMaybe<HomepageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HomepageFilter>>>;
  background_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  footer?: InputMaybe<CfFooterNestedFilter>;
  footer_exists?: InputMaybe<Scalars['Boolean']>;
  header?: InputMaybe<CfHeaderNestedFilter>;
  header_exists?: InputMaybe<Scalars['Boolean']>;
  headlinesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  homepage?: InputMaybe<Scalars['String']>;
  homepage_contains?: InputMaybe<Scalars['String']>;
  homepage_exists?: InputMaybe<Scalars['Boolean']>;
  homepage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  homepage_not?: InputMaybe<Scalars['String']>;
  homepage_not_contains?: InputMaybe<Scalars['String']>;
  homepage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mediaCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sidebar?: InputMaybe<CfComponentSidebarNestedFilter>;
  sidebar_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  textCollection_exists?: InputMaybe<Scalars['Boolean']>;
};

export type HomepageHeadlinesCollection = {
  __typename?: 'HomepageHeadlinesCollection';
  items: Array<Maybe<Headline>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type HomepageLinkingCollections = {
  __typename?: 'HomepageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type HomepageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum HomepageOrder {
  HomepageAsc = 'homepage_ASC',
  HomepageDesc = 'homepage_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type HomepageTextCollection = {
  __typename?: 'HomepageTextCollection';
  items: Array<Maybe<ContentTypeRichText>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  componentButton?: Maybe<ComponentButton>;
  componentButtonCollection?: Maybe<ComponentButtonCollection>;
  componentCard?: Maybe<ComponentCard>;
  componentCardCollection?: Maybe<ComponentCardCollection>;
  componentDropdown?: Maybe<ComponentDropdown>;
  componentDropdownCollection?: Maybe<ComponentDropdownCollection>;
  componentSidebar?: Maybe<ComponentSidebar>;
  componentSidebarCollection?: Maybe<ComponentSidebarCollection>;
  componentTable?: Maybe<ComponentTable>;
  componentTableCollection?: Maybe<ComponentTableCollection>;
  componentTrip?: Maybe<ComponentTrip>;
  componentTripCollection?: Maybe<ComponentTripCollection>;
  contentTypeRichText?: Maybe<ContentTypeRichText>;
  contentTypeRichTextCollection?: Maybe<ContentTypeRichTextCollection>;
  entryCollection?: Maybe<EntryCollection>;
  footer?: Maybe<Footer>;
  footerCollection?: Maybe<FooterCollection>;
  header?: Maybe<Header>;
  headerCollection?: Maybe<HeaderCollection>;
  headline?: Maybe<Headline>;
  headlineCollection?: Maybe<HeadlineCollection>;
  homepage?: Maybe<Homepage>;
  homepageCollection?: Maybe<HomepageCollection>;
  seoMetadata?: Maybe<SeoMetadata>;
  seoMetadataCollection?: Maybe<SeoMetadataCollection>;
  testimonials?: Maybe<Testimonials>;
  testimonialsCollection?: Maybe<TestimonialsCollection>;
  tripPage?: Maybe<TripPage>;
  tripPageCollection?: Maybe<TripPageCollection>;
  trips?: Maybe<Trips>;
  tripsCollection?: Maybe<TripsCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryComponentButtonArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentButtonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentButtonOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentButtonFilter>;
};


export type QueryComponentCardArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentCardOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentCardFilter>;
};


export type QueryComponentDropdownArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentDropdownCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentDropdownOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentDropdownFilter>;
};


export type QueryComponentSidebarArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentSidebarCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSidebarOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentSidebarFilter>;
};


export type QueryComponentTableArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentTableCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentTableOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentTableFilter>;
};


export type QueryComponentTripArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentTripCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentTripOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentTripFilter>;
};


export type QueryContentTypeRichTextArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryContentTypeRichTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ContentTypeRichTextOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentTypeRichTextFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryFooterArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FooterFilter>;
};


export type QueryHeaderArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<HeaderOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HeaderFilter>;
};


export type QueryHeadlineArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryHeadlineCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<HeadlineOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HeadlineFilter>;
};


export type QueryHomepageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryHomepageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<HomepageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HomepageFilter>;
};


export type QuerySeoMetadataArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySeoMetadataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SeoMetadataOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SeoMetadataFilter>;
};


export type QueryTestimonialsArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTestimonialsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TestimonialsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TestimonialsFilter>;
};


export type QueryTripPageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTripPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TripPageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TripPageFilter>;
};


export type QueryTripsArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTripsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TripsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TripsFilter>;
};

/** This is the content type for SEO Metadata, please only edit the entry and only one max entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/seoMetadata) */
export type SeoMetadata = Entry & {
  __typename?: 'SeoMetadata';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<SeoMetadataLinkingCollections>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  ogDescription?: Maybe<Scalars['String']>;
  ogImage?: Maybe<Asset>;
  ogTitle?: Maybe<Scalars['String']>;
  ogType?: Maybe<Scalars['String']>;
  ogUrl?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  twitterCard?: Maybe<Scalars['String']>;
  twitterDescription?: Maybe<Scalars['String']>;
  twitterImage?: Maybe<Asset>;
  twitterTitle?: Maybe<Scalars['String']>;
  twitterUrl?: Maybe<Scalars['String']>;
};


/** This is the content type for SEO Metadata, please only edit the entry and only one max entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/seoMetadata) */
export type SeoMetadataLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is the content type for SEO Metadata, please only edit the entry and only one max entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/seoMetadata) */
export type SeoMetadataMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for SEO Metadata, please only edit the entry and only one max entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/seoMetadata) */
export type SeoMetadataMetaTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for SEO Metadata, please only edit the entry and only one max entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/seoMetadata) */
export type SeoMetadataOgDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for SEO Metadata, please only edit the entry and only one max entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/seoMetadata) */
export type SeoMetadataOgImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** This is the content type for SEO Metadata, please only edit the entry and only one max entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/seoMetadata) */
export type SeoMetadataOgTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for SEO Metadata, please only edit the entry and only one max entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/seoMetadata) */
export type SeoMetadataOgTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for SEO Metadata, please only edit the entry and only one max entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/seoMetadata) */
export type SeoMetadataOgUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for SEO Metadata, please only edit the entry and only one max entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/seoMetadata) */
export type SeoMetadataTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for SEO Metadata, please only edit the entry and only one max entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/seoMetadata) */
export type SeoMetadataTwitterCardArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for SEO Metadata, please only edit the entry and only one max entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/seoMetadata) */
export type SeoMetadataTwitterDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for SEO Metadata, please only edit the entry and only one max entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/seoMetadata) */
export type SeoMetadataTwitterImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** This is the content type for SEO Metadata, please only edit the entry and only one max entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/seoMetadata) */
export type SeoMetadataTwitterTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the content type for SEO Metadata, please only edit the entry and only one max entry. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/seoMetadata) */
export type SeoMetadataTwitterUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SeoMetadataCollection = {
  __typename?: 'SeoMetadataCollection';
  items: Array<Maybe<SeoMetadata>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SeoMetadataFilter = {
  AND?: InputMaybe<Array<InputMaybe<SeoMetadataFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SeoMetadataFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaDescription_contains?: InputMaybe<Scalars['String']>;
  metaDescription_exists?: InputMaybe<Scalars['Boolean']>;
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metaDescription_not?: InputMaybe<Scalars['String']>;
  metaDescription_not_contains?: InputMaybe<Scalars['String']>;
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metaTitle?: InputMaybe<Scalars['String']>;
  metaTitle_contains?: InputMaybe<Scalars['String']>;
  metaTitle_exists?: InputMaybe<Scalars['Boolean']>;
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metaTitle_not?: InputMaybe<Scalars['String']>;
  metaTitle_not_contains?: InputMaybe<Scalars['String']>;
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ogDescription?: InputMaybe<Scalars['String']>;
  ogDescription_contains?: InputMaybe<Scalars['String']>;
  ogDescription_exists?: InputMaybe<Scalars['Boolean']>;
  ogDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ogDescription_not?: InputMaybe<Scalars['String']>;
  ogDescription_not_contains?: InputMaybe<Scalars['String']>;
  ogDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ogImage_exists?: InputMaybe<Scalars['Boolean']>;
  ogTitle?: InputMaybe<Scalars['String']>;
  ogTitle_contains?: InputMaybe<Scalars['String']>;
  ogTitle_exists?: InputMaybe<Scalars['Boolean']>;
  ogTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ogTitle_not?: InputMaybe<Scalars['String']>;
  ogTitle_not_contains?: InputMaybe<Scalars['String']>;
  ogTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ogType?: InputMaybe<Scalars['String']>;
  ogType_contains?: InputMaybe<Scalars['String']>;
  ogType_exists?: InputMaybe<Scalars['Boolean']>;
  ogType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ogType_not?: InputMaybe<Scalars['String']>;
  ogType_not_contains?: InputMaybe<Scalars['String']>;
  ogType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ogUrl?: InputMaybe<Scalars['String']>;
  ogUrl_contains?: InputMaybe<Scalars['String']>;
  ogUrl_exists?: InputMaybe<Scalars['Boolean']>;
  ogUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ogUrl_not?: InputMaybe<Scalars['String']>;
  ogUrl_not_contains?: InputMaybe<Scalars['String']>;
  ogUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitterCard?: InputMaybe<Scalars['String']>;
  twitterCard_contains?: InputMaybe<Scalars['String']>;
  twitterCard_exists?: InputMaybe<Scalars['Boolean']>;
  twitterCard_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitterCard_not?: InputMaybe<Scalars['String']>;
  twitterCard_not_contains?: InputMaybe<Scalars['String']>;
  twitterCard_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitterDescription?: InputMaybe<Scalars['String']>;
  twitterDescription_contains?: InputMaybe<Scalars['String']>;
  twitterDescription_exists?: InputMaybe<Scalars['Boolean']>;
  twitterDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitterDescription_not?: InputMaybe<Scalars['String']>;
  twitterDescription_not_contains?: InputMaybe<Scalars['String']>;
  twitterDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitterImage_exists?: InputMaybe<Scalars['Boolean']>;
  twitterTitle?: InputMaybe<Scalars['String']>;
  twitterTitle_contains?: InputMaybe<Scalars['String']>;
  twitterTitle_exists?: InputMaybe<Scalars['Boolean']>;
  twitterTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitterTitle_not?: InputMaybe<Scalars['String']>;
  twitterTitle_not_contains?: InputMaybe<Scalars['String']>;
  twitterTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitterUrl?: InputMaybe<Scalars['String']>;
  twitterUrl_contains?: InputMaybe<Scalars['String']>;
  twitterUrl_exists?: InputMaybe<Scalars['Boolean']>;
  twitterUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitterUrl_not?: InputMaybe<Scalars['String']>;
  twitterUrl_not_contains?: InputMaybe<Scalars['String']>;
  twitterUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SeoMetadataLinkingCollections = {
  __typename?: 'SeoMetadataLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type SeoMetadataLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SeoMetadataOrder {
  MetaDescriptionAsc = 'metaDescription_ASC',
  MetaDescriptionDesc = 'metaDescription_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  OgDescriptionAsc = 'ogDescription_ASC',
  OgDescriptionDesc = 'ogDescription_DESC',
  OgTitleAsc = 'ogTitle_ASC',
  OgTitleDesc = 'ogTitle_DESC',
  OgTypeAsc = 'ogType_ASC',
  OgTypeDesc = 'ogType_DESC',
  OgUrlAsc = 'ogUrl_ASC',
  OgUrlDesc = 'ogUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TwitterCardAsc = 'twitterCard_ASC',
  TwitterCardDesc = 'twitterCard_DESC',
  TwitterDescriptionAsc = 'twitterDescription_ASC',
  TwitterDescriptionDesc = 'twitterDescription_DESC',
  TwitterTitleAsc = 'twitterTitle_ASC',
  TwitterTitleDesc = 'twitterTitle_DESC',
  TwitterUrlAsc = 'twitterUrl_ASC',
  TwitterUrlDesc = 'twitterUrl_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** content type for testimonials, one entry = one testimonials [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/testimonials) */
export type Testimonials = Entry & {
  __typename?: 'Testimonials';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<TestimonialsDescription>;
  linkedFrom?: Maybe<TestimonialsLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** content type for testimonials, one entry = one testimonials [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/testimonials) */
export type TestimonialsDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** content type for testimonials, one entry = one testimonials [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/testimonials) */
export type TestimonialsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** content type for testimonials, one entry = one testimonials [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/testimonials) */
export type TestimonialsNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TestimonialsCollection = {
  __typename?: 'TestimonialsCollection';
  items: Array<Maybe<Testimonials>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TestimonialsDescription = {
  __typename?: 'TestimonialsDescription';
  json: Scalars['JSON'];
  links: TestimonialsDescriptionLinks;
};

export type TestimonialsDescriptionAssets = {
  __typename?: 'TestimonialsDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TestimonialsDescriptionEntries = {
  __typename?: 'TestimonialsDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TestimonialsDescriptionLinks = {
  __typename?: 'TestimonialsDescriptionLinks';
  assets: TestimonialsDescriptionAssets;
  entries: TestimonialsDescriptionEntries;
};

export type TestimonialsFilter = {
  AND?: InputMaybe<Array<InputMaybe<TestimonialsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TestimonialsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type TestimonialsLinkingCollections = {
  __typename?: 'TestimonialsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type TestimonialsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TestimonialsOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Specifically for Trip Page Collection! There may only be one entry! [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/tripPage) */
export type TripPage = Entry & {
  __typename?: 'TripPage';
  contentfulMetadata: ContentfulMetadata;
  footer?: Maybe<Footer>;
  header?: Maybe<Header>;
  headline?: Maybe<Headline>;
  linkedFrom?: Maybe<TripPageLinkingCollections>;
  sys: Sys;
  tabSection?: Maybe<ComponentTrip>;
  title?: Maybe<Scalars['String']>;
};


/** Specifically for Trip Page Collection! There may only be one entry! [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/tripPage) */
export type TripPageFooterArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Specifically for Trip Page Collection! There may only be one entry! [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/tripPage) */
export type TripPageHeaderArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Specifically for Trip Page Collection! There may only be one entry! [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/tripPage) */
export type TripPageHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Specifically for Trip Page Collection! There may only be one entry! [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/tripPage) */
export type TripPageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Specifically for Trip Page Collection! There may only be one entry! [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/tripPage) */
export type TripPageTabSectionArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Specifically for Trip Page Collection! There may only be one entry! [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/tripPage) */
export type TripPageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TripPageCollection = {
  __typename?: 'TripPageCollection';
  items: Array<Maybe<TripPage>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TripPageFilter = {
  AND?: InputMaybe<Array<InputMaybe<TripPageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TripPageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  footer?: InputMaybe<CfFooterNestedFilter>;
  footer_exists?: InputMaybe<Scalars['Boolean']>;
  header?: InputMaybe<CfHeaderNestedFilter>;
  header_exists?: InputMaybe<Scalars['Boolean']>;
  headline?: InputMaybe<CfHeadlineNestedFilter>;
  headline_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  tabSection?: InputMaybe<CfComponentTripNestedFilter>;
  tabSection_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TripPageLinkingCollections = {
  __typename?: 'TripPageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type TripPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TripPageOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/**
 * This is the content type for the INDIVIDUAL TRIP PAGES such as Costa Rica, Panema etc.
 * For Slug, please enter the preferred name in the format of: costa-rica-2023 or panema-2024. All lowercase with hyphen between words. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/trips)
 */
export type Trips = Entry & {
  __typename?: 'Trips';
  background?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  footer?: Maybe<Footer>;
  header?: Maybe<Header>;
  headline?: Maybe<Headline>;
  imagesGalleryCollection?: Maybe<AssetCollection>;
  imagesMidCollection?: Maybe<AssetCollection>;
  linkedFrom?: Maybe<TripsLinkingCollections>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  textCollection?: Maybe<TripsTextCollection>;
  title?: Maybe<Scalars['String']>;
};


/**
 * This is the content type for the INDIVIDUAL TRIP PAGES such as Costa Rica, Panema etc.
 * For Slug, please enter the preferred name in the format of: costa-rica-2023 or panema-2024. All lowercase with hyphen between words. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/trips)
 */
export type TripsBackgroundArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/**
 * This is the content type for the INDIVIDUAL TRIP PAGES such as Costa Rica, Panema etc.
 * For Slug, please enter the preferred name in the format of: costa-rica-2023 or panema-2024. All lowercase with hyphen between words. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/trips)
 */
export type TripsFooterArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/**
 * This is the content type for the INDIVIDUAL TRIP PAGES such as Costa Rica, Panema etc.
 * For Slug, please enter the preferred name in the format of: costa-rica-2023 or panema-2024. All lowercase with hyphen between words. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/trips)
 */
export type TripsHeaderArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/**
 * This is the content type for the INDIVIDUAL TRIP PAGES such as Costa Rica, Panema etc.
 * For Slug, please enter the preferred name in the format of: costa-rica-2023 or panema-2024. All lowercase with hyphen between words. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/trips)
 */
export type TripsHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/**
 * This is the content type for the INDIVIDUAL TRIP PAGES such as Costa Rica, Panema etc.
 * For Slug, please enter the preferred name in the format of: costa-rica-2023 or panema-2024. All lowercase with hyphen between words. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/trips)
 */
export type TripsImagesGalleryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/**
 * This is the content type for the INDIVIDUAL TRIP PAGES such as Costa Rica, Panema etc.
 * For Slug, please enter the preferred name in the format of: costa-rica-2023 or panema-2024. All lowercase with hyphen between words. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/trips)
 */
export type TripsImagesMidCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/**
 * This is the content type for the INDIVIDUAL TRIP PAGES such as Costa Rica, Panema etc.
 * For Slug, please enter the preferred name in the format of: costa-rica-2023 or panema-2024. All lowercase with hyphen between words. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/trips)
 */
export type TripsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/**
 * This is the content type for the INDIVIDUAL TRIP PAGES such as Costa Rica, Panema etc.
 * For Slug, please enter the preferred name in the format of: costa-rica-2023 or panema-2024. All lowercase with hyphen between words. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/trips)
 */
export type TripsSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/**
 * This is the content type for the INDIVIDUAL TRIP PAGES such as Costa Rica, Panema etc.
 * For Slug, please enter the preferred name in the format of: costa-rica-2023 or panema-2024. All lowercase with hyphen between words. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/trips)
 */
export type TripsTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/**
 * This is the content type for the INDIVIDUAL TRIP PAGES such as Costa Rica, Panema etc.
 * For Slug, please enter the preferred name in the format of: costa-rica-2023 or panema-2024. All lowercase with hyphen between words. [See type definition](https://app.contentful.com/spaces/0lv316w4dqls/content_types/trips)
 */
export type TripsTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TripsCollection = {
  __typename?: 'TripsCollection';
  items: Array<Maybe<Trips>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TripsFilter = {
  AND?: InputMaybe<Array<InputMaybe<TripsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TripsFilter>>>;
  background_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  footer?: InputMaybe<CfFooterNestedFilter>;
  footer_exists?: InputMaybe<Scalars['Boolean']>;
  header?: InputMaybe<CfHeaderNestedFilter>;
  header_exists?: InputMaybe<Scalars['Boolean']>;
  headline?: InputMaybe<CfHeadlineNestedFilter>;
  headline_exists?: InputMaybe<Scalars['Boolean']>;
  imagesGalleryCollection_exists?: InputMaybe<Scalars['Boolean']>;
  imagesMidCollection_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  textCollection_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TripsLinkingCollections = {
  __typename?: 'TripsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type TripsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TripsOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type TripsTextCollection = {
  __typename?: 'TripsTextCollection';
  items: Array<Maybe<ContentTypeRichText>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CfComponentSidebarNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentSidebarNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentSidebarNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  guarantee_exists?: InputMaybe<Scalars['Boolean']>;
  links_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  links_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  links_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  links_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfComponentTripNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentTripNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentTripNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  currentTripHeadline?: InputMaybe<Scalars['String']>;
  currentTripHeadline_contains?: InputMaybe<Scalars['String']>;
  currentTripHeadline_exists?: InputMaybe<Scalars['Boolean']>;
  currentTripHeadline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  currentTripHeadline_not?: InputMaybe<Scalars['String']>;
  currentTripHeadline_not_contains?: InputMaybe<Scalars['String']>;
  currentTripHeadline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_contains?: InputMaybe<Scalars['String']>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  link_not_contains?: InputMaybe<Scalars['String']>;
  listofCardsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  listofImagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  tabName1?: InputMaybe<Scalars['String']>;
  tabName1_contains?: InputMaybe<Scalars['String']>;
  tabName1_exists?: InputMaybe<Scalars['Boolean']>;
  tabName1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tabName1_not?: InputMaybe<Scalars['String']>;
  tabName1_not_contains?: InputMaybe<Scalars['String']>;
  tabName1_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tabName2?: InputMaybe<Scalars['String']>;
  tabName2_contains?: InputMaybe<Scalars['String']>;
  tabName2_exists?: InputMaybe<Scalars['Boolean']>;
  tabName2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tabName2_not?: InputMaybe<Scalars['String']>;
  tabName2_not_contains?: InputMaybe<Scalars['String']>;
  tabName2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfFooterNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfFooterNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfFooterNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  emailAddress?: InputMaybe<Scalars['String']>;
  emailAddress_contains?: InputMaybe<Scalars['String']>;
  emailAddress_exists?: InputMaybe<Scalars['Boolean']>;
  emailAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  emailAddress_not?: InputMaybe<Scalars['String']>;
  emailAddress_not_contains?: InputMaybe<Scalars['String']>;
  emailAddress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  emailIcon_exists?: InputMaybe<Scalars['Boolean']>;
  logo_exists?: InputMaybe<Scalars['Boolean']>;
  phoneIcon_exists?: InputMaybe<Scalars['Boolean']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumber_contains?: InputMaybe<Scalars['String']>;
  phoneNumber_exists?: InputMaybe<Scalars['Boolean']>;
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneNumber_not?: InputMaybe<Scalars['String']>;
  phoneNumber_not_contains?: InputMaybe<Scalars['String']>;
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfHeaderNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfHeaderNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfHeaderNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  links_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  links_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  links_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  links_exists?: InputMaybe<Scalars['Boolean']>;
  logo_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfHeadlineNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfHeadlineNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfHeadlineNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headline?: InputMaybe<Scalars['String']>;
  headline_contains?: InputMaybe<Scalars['String']>;
  headline_exists?: InputMaybe<Scalars['Boolean']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headline_not?: InputMaybe<Scalars['String']>;
  headline_not_contains?: InputMaybe<Scalars['String']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  subtitle_contains?: InputMaybe<Scalars['String']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle_not?: InputMaybe<Scalars['String']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};
