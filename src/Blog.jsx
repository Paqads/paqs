import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This is a placeholder for fetching blog posts
    // In a real application, you would fetch from an API
    const fetchPosts = async () => {
      // Simulating API call with setTimeout
      setTimeout(() => {
        const dummyPosts = [
          { id: 1, title: "Understanding Cybersecurity Basics", content: "In this post, we explore the fundamental concepts of cybersecurity...", date: "2023-06-01" },
          { id: 2, title: "Best Practices for Cloud Security", content: "Cloud security is crucial in today's digital landscape...", date: "2023-06-15" },
          { id: 3, title: "The Future of AI in Cybersecurity", content: "Artificial Intelligence is reshaping the cybersecurity landscape...", date: "2023-07-01" },
        ];
        setPosts(dummyPosts);
        setLoading(false);
      }, 1000);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="text-center">Loading posts...</div>;
  }

  return (
    <div className="blog-posts">
      <h2 className="mb-4">Latest Blog Posts</h2>
      {posts.map(post => (
        <div key={post.id} className="card mb-4">
          <div className="card-body">
            <h3 className="card-title">{post.title}</h3>
            <p className="card-text">{post.content}</p>
            <p className="card-text"><small className="text-muted">Published on {post.date}</small></p>
            <a href="#" className="btn btn-primary">Read More</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;