import React from 'react';
import BlogCard from '../components/BlogCard';
import Layout from '../layouts/Layout';

const Blog = () => {
  return (
    <Layout header='blog'>
      <div className='row'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </Layout>
  );
};

export default Blog;
