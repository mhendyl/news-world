export interface MulitmediaInterface{
  rank: number;
  subtype: string;
  caption: null | string;
  credit: null | string;
  type: string;
  url: string;
  height: number;
  width: number;
  legacy: {
    xlarge: string;
    xlargewidth: number;
    xlargeheight: number;
  },
  subType: string;
  crop_name: string;
}

export interface HeadlineInterface{
  main: string;
  kicker: null | string;
  content_kicker: null | string;
  print_headline: null | string;
  name: null | string;
  seo: null | string;
  sub: null | string;
}

export interface KeywordInterface{
  name: string;
  value: string;
  rank: number;
  major: string;
}

export interface PersonByLine {
  firstname: string;
  middlename: null | string;
  lastname: string;
  qualifier: null | string;
  title: null | string;
  role: string;
  organization: null | string;
  rank: number
}

export interface ArticleInterfacePayload{
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  source: string;
  multimdedia: MulitmediaInterface[];
  headline: HeadlineInterface;
  keywords: KeywordInterface[];
  pub_date: string;
  document_type: string;
  news_desk: string;
  section_name: string;
  subsection_name: string;
  byline: {
    original: string;
    person: PersonByLine[];
    organization: null | string;
  },
  type_of_material: string;
  _id: string;
  word_count: number,
  uri: string;
}

export interface ArticleNewsResulstsResponse {
  status: string;
  response: {
    docs: ArticleInterfacePayload[];
  }
}

export interface NewsInitialInterface {
  isLoading: boolean;
  article: ArticleNewsResulstsResponse | null;
  articleFeed: ArticleNewsResulstsResponse | null;
  error: string;
}

export const NewYorkInitialState: NewsInitialInterface = {
  isLoading: false,
  article: null,
  articleFeed: null,
  error: '',
};