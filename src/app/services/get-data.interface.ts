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
  slug: string;
  posts: Post[];
}

interface Question {
  question: string;
  answer: string;
}

export interface Author {
  name: string;
  title: string;
  description?: string;
  posts?: Post[];
  question1: Question;
  question2: Question;
  question3: Question;
}

export interface Data {
  categories: Category[];
  posts: Post[];
  authors: Author[];
}
