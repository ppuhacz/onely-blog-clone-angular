export interface Post {
  id: string;
  title: string;
  date: string;
  category: string;
  content: string;
  recommendedPost: boolean;
  slug: string;
  coverImage: {
    url: string;
  };
  excerpt: string;
  author: {
    name: string;
  };
}
