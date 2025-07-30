import React, { useState, useEffect } from 'react';
import './BlogPost.css'; // Import your CSS styles for the blog post page
import Navbar from '../../components/navbar/Navbar';
// You can add this CSS to your existing stylesheet.


// ==============================================================================
// BLOG PAGE COMPONENT
// This component will fetch and display all blog posts.
// ==============================================================================
const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch all posts from your backend server when the component loads.
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Make sure your backend server is running!
        const response = await fetch('http://localhost:5001/api/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError('Failed to fetch blog posts. Please try again later.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []); // The empty array ensures this effect runs only once on mount.

  // Function to handle clicking on a post in the list
  const handlePostSelect = (post) => {
    setSelectedPost(post);
  };

  // Function to go back to the blog list from a single post view
  const handleGoBack = () => {
    setSelectedPost(null);
  };

  // Display a loading message while fetching data
  if (isLoading) {
    return <div className="loading-text">Loading posts...</div>;
  }

  // Display an error message if fetching fails
  if (error) {
    return <div className="error-text">{error}</div>;
  }

  // ============================================================================
  // RENDER LOGIC
  // ============================================================================
  return (
    <div className="blog-container">
      {/* If a post is selected, show the single post view. Otherwise, show the list. */}
      {selectedPost ? (
        // --- SINGLE POST VIEW ---
        <div className="single-post-view">
          <button onClick={handleGoBack} className="back-button">
            &larr; Back to Blog
          </button>
          <h1>{selectedPost.title}</h1>
          <div className="post-meta">
            By {selectedPost.author} on {new Date(selectedPost.publishDate).toLocaleDateString()}
          </div>
          <div className="post-content">{selectedPost.content}</div>
        </div>
      ) : (
        // --- BLOG LIST VIEW ---
        <>
          <div className="blog-header">
            <h1>Our Blog</h1>
          </div>
          <div className="blog-post-list">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div
                  key={post.id}
                  className="blog-post-list-item"
                  onClick={() => handlePostSelect(post)}
                >
                  <h2>{post.title}</h2>
                  <div className="post-meta">
                    By {post.author} on {new Date(post.publishDate).toLocaleDateString()}
                  </div>
                  <p>
                    {/* Shows a short preview of the content */}
                    {post.content.substring(0, 150)}...
                  </p>
                </div>
              ))
            ) : (
              <p>There are no blog posts to display yet.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

// ==============================================================================
// MAIN EXPORT
// ==============================================================================
export default function BlogPost() {
  // This is a wrapper to demonstrate how the BlogPage component works.
  // You will integrate the <BlogPage /> component into your own routing.
  return (
    <>
      {/* <style>{styles}</style> */}
      <Navbar/>
      <BlogPage />
    </>
  );
}
