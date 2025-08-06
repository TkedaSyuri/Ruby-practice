"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { createPost } from "../api/postsApi";
import { useRouter } from "next/navigation";




const CreatePost = () => {
    const router = useRouter()

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(content, title);
    try{
     createPost(title,content)
        router.push("/")
    }catch(err){
        console.log(err)
    }
   };
  return (
    <div>
      <h1 className="text-lg font-bold">ブログ新規登録</h1>
      <form onSubmit={handleSubmit}>
        <label>タイトル</label>
        <input
          className="outline"
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        ></input>
        <label>本文</label>
        <textarea
          className="outline"
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setContent(e.target.value)
          }
        />
        <button type="submit" className="bg-yellow-500">
          投稿
        </button>
      </form>
    </div>
  );
};
export default CreatePost;
