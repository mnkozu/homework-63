export interface Post {
  id: string;
  title: string;
  description: string;
  date: string | null;
}

export type PostApi = Omit<Post, 'id'>;

export interface PostList {
  [id: string]: Post;
}

export interface AboutType {
  title: string;
  text: string;
  text1: string;
  id: string;
}

export interface AboutApi {
  [id: string]: AboutType;
}