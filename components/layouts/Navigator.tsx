import React, { useState } from 'react'
import CodealoSvg from '../icons/CodealoSvg'
import CodeSvg from '../icons/CodeSvg'
import HamburgerSvg from '../icons/HamburgerSvg'
import Link from 'next/link';
import { useRouter } from 'next/router';


const Navigator: React.FC = (props) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const toggleNav = (e) => {
    e.preventDefault();
    setOpen(!open);
  }

  const { asPath } = router;

  return (
    <nav className="relative" >
      <div className="flex w-full bg-black-bg justify-center items-center">
        <div className="flex-1 flex md:space-x-4 md:items-center">
          <div className="bg-secondary p-4 md:mr-8">
            <CodeSvg className="w-8 h-8" />
          </div>
          <div className="hidden md:block text-white">
            <Link href="/"><a><div
              className=" px-4 py-2"
              style={{ borderBottom: asPath === '/' ? 'solid 2px #E58112' : '' }}
            >Home</div></a></Link>
          </div>
          <div className="hidden md:block text-white px-4 py-2">
            <Link href="/blog"><a>
              <div className="px-4 py-2"
                style={{ borderBottom: asPath.includes('/blog') ? 'solid 2px #E58112' : '' }}
              >Blog</div></a></Link>
          </div>
        </div>
        <div className="flex-1 text-primary text-center flex justify-center">
          <CodealoSvg className="h-6" />
        </div>
        <div className="flex-1 flex justify-end md:items-center">
          <div className="p-4 md:hidden">
            <button className="" onClick={toggleNav}>
              <HamburgerSvg className="h-6 stroke-current text-white" />
            </button>
          </div>
          {/* <div className="text-white pr-8 hidden md:block">Perla Pipol</div>
          <div className="hidden md:block pr-4">
            <img src="/imgs/avatar.png" className="w-10 h-10 rounded-full"></img>
          </div> */}
        </div>
      </div>
      <div className="absolute z-20 bg-black-bg w-full" style={{ display: open ? 'block' : 'none' }}>
        <div className="flex flex-col text-lg p-4 text-white divide-y">
          <Link href="/"><a className="py-2">Home</a></Link>
          <Link href="/blog"><a className="py-2">Blog</a></Link>
        </div>
      </div>
    </nav>
  )
}


export default Navigator;