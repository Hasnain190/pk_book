export type TPost ={
    id: number;
    photo: string;
    likes: number;
    comments?: TComment[];
}

export type TComment = {
    id: number;
    content: string;
    postId:number;
}
