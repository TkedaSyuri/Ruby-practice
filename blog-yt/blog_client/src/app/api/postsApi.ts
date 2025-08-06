import { Posts } from "../Types";


export const getPosts = async ():Promise<Posts[]> => {
    const res = await fetch("http://localhost:3000/api/v1/posts", {
      cache: "no-store",
    });
    const data =  res.json()
    return data;
  };

  export const getDetailPost = async (id:string) => {
    const res = await fetch(`http://localhost:3000/api/v1/posts/${id}`);
    const post= await res.json();
  return post;
  };
  

  export const createPost = async (title: string,content: string) => {
    const response = await fetch(`http://localhost:3000/api/v1/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({title: title, content: content})
    });
    if(response.ok){
        alert("postに成功")
    };
  };

  export const createPut = async (title: string,content: string) => {
    const response = await fetch(`http://localhost:3000/api/v1/posts`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({title: title, content: content})
    });
    if(response.ok){
        alert("編集に成功")
    };
  };
