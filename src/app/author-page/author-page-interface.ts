export interface SocialMedia {
  twitter: string;
  linkedIn: string;
  instagram: string;
}

export interface Post {
  title: string;
  date: string;
  category: string;
  content: {
    html: string;
  };
  slug: string;
  coverImage: {
    url: string;
  };
}

export interface Author {
  name: string;
  slug: string;
  title: string;
  description?: string;
  socialMedia: SocialMedia;
  posts?: Post[];
  question: string;
  answer: string;
  picture: {
    url: string;
  };
  question1: {
    question: string;
    answer: string;
  };
  question2: {
    question: string;
    answer: string;
  };
  question3: {
    question: string;
    answer: string;
  };
  question4: {
    question: string;
    answer: string;
  };
}

export interface Props {
  data?: {
    authors: Author[];
  };
}
