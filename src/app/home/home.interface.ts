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

export interface Category {
  categoryName: string;
  posts: Post[];
}

export interface Props {
  data?: {
    categories: Category[];
    posts: Post[];
  };
}
