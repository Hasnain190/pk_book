export type TPost = {
  id: number;
  photo: string;
  likes: number;
  uploadedAt?: string | Date;
  comments?: TComment[];
};

export type TComment = {
  id: number;
  content: string;
  postId: number;
};
