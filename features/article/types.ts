export interface ArticleIntro {
  title: string;
  introText: string;
  author?: string;
  authorLink: string | null;
  postId: string;
  timestamp: number;
  imgSrc?: string;
  url: string;
}
