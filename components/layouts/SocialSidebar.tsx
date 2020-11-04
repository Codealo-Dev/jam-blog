import React, { useState } from 'react'
import FacebookSvg from '../icons/FacebookSvg';
import InstagramSvg from '../icons/InstagramSvg';
import TwitterSvg from '../icons/TwitterSvg';


const SocialSidebar: React.FC = (props) => {
  return (
    <div className="hidden lg:flex lg:flex-col justify-start mt-20 ml-4 mr-16">

      <div className="space-y-6">
        <div>
          <a href="https://www.facebook.com/codealo" target="_blank" className="cursor-pointer">
            <FacebookSvg className="w-6 h-6" />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/codealodev" target="_blank" className="cursor-pointer">
            <TwitterSvg className="w-6 h-6 fill-current text-white" />
          </a>
        </div>
        <div>
          <a href="https://instagram.com/codealo" target="_blank" className="cursor-pointer">
            <InstagramSvg className="w-6 h-6 fill-current text-white" />
          </a>
        </div>
      </div>
      <div className="h-32" />
      <div className="space-y-6 flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-white" />
        <div className="w-3 h-3 rounded-full bg-white" />
        <div className="w-2 h-2 rounded-full bg-white" />
        <div className="w-1 h-1 rounded-full bg-white" />
      </div>
    </div>
  )
}


export default SocialSidebar;