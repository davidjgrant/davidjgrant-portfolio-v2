import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IProjectFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** Description */
  description: string;

  /** Publish date */
  publishDate: string;

  /** Content */
  content: Document;
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
