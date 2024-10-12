import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  }, []);

  if (loading) {
    return <div className="text-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>;
  }

  return (
    <div className="blog-posts blog-post">
      {posts.map(post => (
        <div key={post.id} className="card mb-4">
          <div className="card-body">
            <h3 className="card-title h5">{post.title}</h3>
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