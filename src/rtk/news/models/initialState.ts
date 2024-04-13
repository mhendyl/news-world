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
  response: ArticleInterfacePayload[];
}

export interface NewsInitialInterface {
  isLoading: boolean;
  article: ArticleNewsResulstsResponse | null;
  error: string;
}

export const NewsInitialState: NewsInitialInterface = {
  isLoading: false,
  article: null,
  error: '',
};