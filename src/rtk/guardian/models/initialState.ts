export interface ArticleResulsts {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
}

export interface ArticleInterfacePayload{
  status: string;
  userTier: string;
  total: number;
  startIndex: number
  pageSize: number
  currentPage: number
  pages: number
  orderBy: string;
  results: ArticleResulsts[]
}

export interface ArticleResulstsResponse {
  response: ArticleInterfacePayload;
}

export interface GuardianInitialInterface {
  isLoading: boolean;
  article: ArticleResulstsResponse | null;
  details: ArticleResulstsResponse | null;
  error: string;
}

export const GuardianInitialState: GuardianInitialInterface = {
  isLoading: false,
  article: null,
  details: null,
  error: '',
};