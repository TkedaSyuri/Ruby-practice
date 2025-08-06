import React from 'react'
import EditPost from './editPost'
import { getDetailPost } from '@/app/api/postsApi'


const page =async ({ params }: { params: { id: string } }) => {
    const post = await getDetailPost(params.id)
  return (
    <div><EditPost post = {post}/></div>
  )
}

export default page