"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createPut } from "@/app/api/postsApi";
import { Posts } from "@/app/Types";

const EditPost = ({post}: {post: Posts}) => {
  const router = useRouter();
  const [title, setTitle] = useState<string>(post.title);
  const [content, setContent] = useState(post.content);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(content, title);
    try {
      createPut(title, content);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1 className="text-lg font-bold">ブログ編集</h1>
      <form onSubmit={handleSubmit}>
        <label>タイトル</label>
        <div>{title}</div>

        <input
          className="outline"
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        >
        </input>
        <label>本文</label>
        <div>{content}</div>
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
export default EditPost;
