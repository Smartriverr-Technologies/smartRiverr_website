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
        const response = await fetch('https://smartriverr-backend.onrender.com/api/posts');
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
            By {selectedPost.author} on {new Date(selectedPost.publishDate._seconds * 1000).toLocaleDateString()}
          </div>
          {/* <div className="post-content">{selectedPost.content}</div> */}
          <div 
  className="post-content" 
  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
></div>
        </div>
      ) : (
        // --- BLOG LIST VIEW ---
        <>
          <div className="blog-header">
            <h1>Our Blogs</h1>
            <p>A space for deeper thinking and new perspectives</p>
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
                    By {post.author} on {new Date(post.publishDate._seconds * 1000).toLocaleDateString()}
                  </div>
                  <p className="post-excerpt">
  {
    // This creates a plain text preview
    post.content.replace(/<[^>]*>?/gm, ' ').split(' ').slice(0, 20).join(' ')
  }
  {/* Add ellipsis if the original content was longer */}
  {post.content.replace(/<[^>]*>?/gm, ' ').split(' ').length > 20 ? '...' : ''}
</p>
                  {/* This splits the text into words, takes the first 20, and joins them back */}
  {/* {post.content.split(' ').slice(0, 20).join(' ')} */}

  {/* This adds "..." only if the original text was longer than 20 words */}
  {/* {post.content.split(' ').length > 20 ? '...' : ''} */}
                  {/* <span><a className='read-more-btn classic'>Read more..</a></span> */}
                   <a onClick={(e) => { e.stopPropagation(); handlePostSelect(post); }} className='read-more-btn classic'>Read more..</a>
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
