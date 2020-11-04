import Head from 'next/head';
import React, { useState } from 'react'
import Navigator from '../components/layouts/Navigator';
import SocialSidebar from '../components/layouts/SocialSidebar';


const DefaultLayout: React.FC = (props) => {
  return (
    <div className="h-full bg-black-bg pb-12">
      <Head>
        <title>Blog de Codealo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigator />
      <main className="flex py-8 px-4 lg:px-0">
        <SocialSidebar />
        {props.children}
      </main>
    </div>
  )
}


export default DefaultLayout;