import { api, post as upload } from './session';

export interface Post {
    id?: number;
    content: string;
    date: Date;
    summary_Id: number;
    user_Id: number;
}

export async function getAll() : Promise<Post[]>{
    return api("posts")
}

export async function getOne(id: number): Promise<Post>{
    return api(`posts/${id}`)
}

export async function getPostByUser(id:number): Promise<Post[]> {
    return api(`posts/search/${id}?`)
}

export async function postPost(post:Post) {
  ("Trying to post new post")
  return upload('posts', post)
}
