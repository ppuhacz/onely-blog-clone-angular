export interface Post {
  id: string;
  title: string;
  date: string;
  category: string;
  content: {
    html: string;
  };
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

interface SocialMedia {
  twitter: string;
  linkedIn: string;
  instagram: string;
}

export interface Author {
  name: string;
  title: string;
  description?: string;
  posts?: Post[];
  slug: string;
  question: string;
  answer: string;
  question1: Question;
  question2: Question;
  question3: Question;
  question4: Question;
  picture: {
    url: string;
  };
  socialMedia: SocialMedia;
}

export interface Data {
  categories: Category[];
  posts: Post[];
  authors: Author[];
}
