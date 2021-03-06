/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createDeck
// ====================================================

export interface createDeck_createDeck_uploadFields {
  key: string;
  value: string;
}

export interface createDeck_createDeck_deck_tenant {
  slug: string;
}

export interface createDeck_createDeck_deck_templates_edges_node {
  slug: string;
  /**
   * JSON Schema Draft 6 definition for variables
   */
  schema6: any | null;
}

export interface createDeck_createDeck_deck_templates_edges {
  node: createDeck_createDeck_deck_templates_edges_node;
}

export interface createDeck_createDeck_deck_templates {
  edges: createDeck_createDeck_deck_templates_edges[];
}

export interface createDeck_createDeck_deck {
  slug: string;
  /**
   * It is a sortable timestamp
   */
  version: number;
  engine: string | null;
  tenant: createDeck_createDeck_deck_tenant;
  templates: createDeck_createDeck_deck_templates;
}

export interface createDeck_createDeck {
  uploadUrl: string;
  uploadFields: createDeck_createDeck_uploadFields[];
  deck: createDeck_createDeck_deck;
}

export interface createDeck {
  createDeck: createDeck_createDeck;
}

export interface createDeckVariables {
  input: APICreateDeckInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createDeckConfirm
// ====================================================

export interface createDeckConfirm_createDeckConfirm {
  urls: string[];
  deployedURL: string | null;
}

export interface createDeckConfirm {
  createDeckConfirm: createDeckConfirm_createDeckConfirm;
}

export interface createDeckConfirmVariables {
  input: APICreateDeckConfirmInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum DeckSizes {
  BANNER = "BANNER",
  FREE = "FREE",
  SQUARE = "SQUARE",
  STORY = "STORY",
  THUMBNAIL = "THUMBNAIL",
  VERTICAL = "VERTICAL",
}

export interface APICreateDeckConfirmInput {
  slug: string;
  version: number;
}

export interface APICreateDeckInput {
  slug: string;
  engine?: string | null;
  cli?: string | null;
  homepage?: string | null;
  license?: string | null;
  keywords?: string[] | null;
  sizes?: DeckSizes[] | null;
  repositoryURL?: string | null;
  name?: string | null;
  marketplace?: boolean | null;
  private?: boolean | null;
  description?: string | null;
  templates: APICreateDeckInputTemplate[];
}

export interface APICreateDeckInputTemplate {
  slug: string;
  schema6?: any | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
