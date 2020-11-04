import React, { useState } from 'react';
import ArrowRightSvg from '../icons/ArrowRightSvg';

interface Prop {
  post: any
}

const PostCard: React.FC<Prop> = ({ post }) => {
  return (
    <div className="bg-light-bg rounded-xl" style={{ maxWidth: 420 }}>
      <div className="rounded-xl">
        <img src="/imgs/placeholder.png" className="rounded-xl" />
      </div>
      <div className="p-4">
        <h5
          className="text-white text-xl mb-4 font-bold"
          style={{ textShadow: '0px 10px 50px rgba(255, 255, 255, 0.45)' }}
        >¿El futuro es hoy, estamos preparados?</h5>
        <p className="text-white text-sm mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt netus tortor fringilla urna mollis amet sit sit. Pellentesque dolor purus.
        </p>
        <div className="flex justify-end">
          <div className="bg-secondary w-10 h-10 flex items-center justify-center rounded-full">
            <ArrowRightSvg className="stroke-current text-white w-12 h-12" />
          </div>
        </div>
      </div>
    </div>
  )
}


export default PostCard;