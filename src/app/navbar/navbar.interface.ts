interface Post {
  date: string;
}

export interface Navbar {
  categoryName: string;
  slug: string;
  posts: Post[];
}
