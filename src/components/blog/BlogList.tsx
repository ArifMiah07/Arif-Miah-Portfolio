import React from 'react'
import { BlogPost } from '@/lib/types'
import BlogCard from './BlogCard'

interface BlogListProps {
  posts: BlogPost[]
}

const BlogList = ({ posts }: BlogListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {posts.map((post, index) => (
        <BlogCard key={post.id} post={post} index={index} />
      ))}
    </div>
  )
}

export default BlogList