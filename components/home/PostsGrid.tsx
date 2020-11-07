import React, { useState } from 'react'
import PostCard from '../posts/PostCard';


const PostsGrid: React.FC<{ posts: IPost[] }> = ({ posts }) => {
  return (
    <div>
      <h3 className="text-white text-4xl mb-4">Los más recientes</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {posts.map((post, index: number) => {
          return <PostCard post={post} key={index} />
        })}
      </div>
    </div>
  )
}


export default PostsGrid;