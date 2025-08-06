
import React from "react";




const Post = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`http://localhost:3000/api/v1/posts/${params.id}`);
  const post = await res.json();


  return (
    <div>
      <div>{post.title}</div>
      <div>{post.content}</div>
      <div>{post.created_at}</div>
    </div>
  );
};

export default Post;
