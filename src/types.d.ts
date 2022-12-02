export interface Post {
  id: string;
  title: string;
  description: string;
}

export type PostApi = Omit<Post, 'id'>;

export interface PostList {
  [id: string]: Post;
}