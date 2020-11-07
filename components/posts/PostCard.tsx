import React, { useState } from 'react';
import Link from 'next/link';
import ArrowRightSvg from '../icons/ArrowRightSvg';

interface Prop {
  post: IPost
}

const PostCard: React.FC<Prop> = ({ post }) => {
  const { data } = post;
  return (
    <Link href={`/blog/${post.uid}`}>
      <a>
        <div className="bg-light-bg rounded-xl" style={{ maxWidth: 420 }}>
          <div className="rounded-xl">
            <img src="/imgs/placeholder.png" className="rounded-xl" />
          </div>
          <div className="p-4">
            <h5
              className="text-white text-xl mb-4 font-bold"
              style={{ textShadow: '0px 10px 50px rgba(255, 255, 255, 0.45)' }}
            >{data.title[0].text}</h5>
            <p className="text-white text-sm mb-4">
              {data.description[0].text}
            </p>
            <div className="flex justify-end">
              <div className="bg-secondary w-10 h-10 flex items-center justify-center rounded-full">
                <ArrowRightSvg className="stroke-current text-white w-12 h-12" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}


export default PostCard;
