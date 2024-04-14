export interface SourceArticleInterface{
  id: string | null;
  name: string | null;
}

export interface ArticleInterfacePayload{
  source: SourceArticleInterface;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: null | string;
  publishedAt: string;
  content: string;
}

export interface ArticleNewsResulstsResponse {
  articles: ArticleInterfacePayload[];
  status: string;
}

export interface NewsInitialInterface {
  isLoading: boolean;
  article: ArticleNewsResulstsResponse | null;
  feed: ArticleNewsResulstsResponse | null;
  getAuthor: ArticleNewsResulstsResponse | null;
  error: string;
}

export const NewsInitialState: NewsInitialInterface = {
  isLoading: false,
  article: null,
  feed: null,
  getAuthor: null,
  error: '',
};