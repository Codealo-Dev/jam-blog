import { GetStaticProps } from 'next';
import React, { useState } from 'react'
import PostsGrid from '../../components/home/PostsGrid';
import { Client } from '../../config/prismic-configuration';
import DefaultLayout from '../../layouts/DefaultLayout';
import Prismic from 'prismic-javascript';

interface Props {
  posts: IPost[]
}

const Index: React.FC<Props> = ({ posts }) => {
  return (<DefaultLayout >
    <section>
      <div className="px-4 lg:px-8">
        <PostsGrid posts={posts} />
      </div>
    </section>
  </DefaultLayout>)
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const response = await Client().query(
      Prismic.Predicates.at('document.type', 'blog_posts'),
      { orderings: '[my.blog_post.date desc]' }
    )
    return {
      props: {
        posts: response.results
      }
    }
  } catch (err) {
    console.log(err);
    return {
      props: {
        posts: []
      }
    }
  }
}


export default Index;