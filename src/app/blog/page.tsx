'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BlogPost } from '@/lib/types'
import BlogList from '@/components/blog/BlogList'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { getAllBlogPosts } from '@/utils/blog-post'

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const posts = await getAllBlogPosts()
      setBlogPosts(posts)
      setFilteredPosts(posts)
      setIsLoading(false)
    }
    
    fetchBlogPosts()
  }, [])

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredPosts(blogPosts)
    } else {
      const filtered = blogPosts.filter(
        post => 
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
      setFilteredPosts(filtered)
    }
  }, [searchTerm, blogPosts])

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">My Blog</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Thoughts, ideas, and insights about web development, design, and technology.
        </p>
      </motion.div>

      {/* Search Bar */}
      <div className="relative max-w-md mx-auto mb-12">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search blog posts..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <>
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-xl font-medium mb-2">No blog posts found</h2>
              <p className="text-muted-foreground">
                Try searching with different keywords or check back later for new posts.
              </p>
            </div>
          ) : (
            <BlogList posts={filteredPosts} />
          )}
        </>
      )}
    </div>
  )
}

export default BlogPage