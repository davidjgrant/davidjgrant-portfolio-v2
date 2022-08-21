import { Asset, Entry, RichTextData } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IHomepageFields {
  jobTitles: [];
  introPost: RichTextData;
  introFuture: RichTextData;
  portfolioTitle: string;
  blogTitle: string;
  profilePic: Asset;
  location: object;
}

export interface IProjectFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** Description */
  shortDescription: string;

  /** Featured Image */
  image: Object

  /** Author */
  author: Object

  /** Publish date */
  published: string

  /** Tags list */
  tags: string[]

  /** Feature Image */
  featureImage: Object

  /** Feature Image */
  bodyRichText: IProject
}

export interface IProject extends Entry<IProjectFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "project";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}
